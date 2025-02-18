import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";

const RegistrationForm = () => {
    // Form state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        CollegeName: "",
        icCode: "",           // New field
        termsAccepted: false, // New checkbox state
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    // Validation
    const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;

        setFormData({ ...formData, [name]: newValue });

        setErrors((prevErrors) => {
            const newErrors = { ...prevErrors };
            // Existing validations
            if (name === "name" && newValue.trim() === "") {
                newErrors.name = "Name is required";
            } else {
                delete newErrors.name;
            }

            if (name === "email" && !validateEmail(newValue)) {
                newErrors.email = "Invalid email address";
            } else {
                delete newErrors.email;
            }

            if (name === "CollegeName" && newValue.trim() === "") {
                newErrors.CollegeName = "College Name cannot be empty";
            } else {
                delete newErrors.CollegeName;
            }

            return newErrors;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit only if no errors and required fields are filled
        if (
            Object.keys(errors).length === 0 &&
            formData.name &&
            formData.email &&
            formData.CollegeName
        ) {
            setSubmitted(true);
            console.log("Form submitted:", formData);
            setFormData({
                name: "",
                email: "",
                CollegeName: "",
                icCode: "",
                termsAccepted: false,
            });
        }
    };

    // Three.js Globe Setup (unchanged)
    const globeRef = useRef(null);
    const rendererRef = useRef(null);
    const sphereRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: "high-performance",
        });

        const updateRendererSize = () => {
            const container = globeRef.current;
            if (container) {
                const isMobile = window.innerWidth < 1024;
                const width = container.clientWidth;
                const height = isMobile ? width * 0.8 : container.clientHeight;

                renderer.setSize(width, height);
                camera.aspect = width / height;
                camera.position.z = isMobile ? 6 : 5;
                camera.updateProjectionMatrix();

                if (sphereRef.current) {
                    sphereRef.current.scale.setScalar(isMobile ? 0.8 : 1);
                }
            }
        };

        rendererRef.current = renderer;
        globeRef.current.appendChild(renderer.domElement);
        updateRendererSize();

        const sphereGeometry = new THREE.SphereGeometry(2, 32, 32);
        const sphereMaterial = new THREE.MeshPhongMaterial({
            color: 0x006666,
            transparent: true,
            opacity: 0.3,
            wireframe: true,
        });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphereRef.current = sphere;
        scene.add(sphere);

        scene.add(new THREE.AmbientLight(0xffffff, 0.5));
        const pointLight = new THREE.PointLight(0x00ffff, 1);
        pointLight.position.set(10, 10, 10);
        scene.add(pointLight);

        const animate = () => {
            requestAnimationFrame(animate);
            sphere.rotation.y += 0.001;
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            updateRendererSize();
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            if (globeRef.current) {
                globeRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return (
        <div className="h-screen w-screen bg-[#ADD8E6] flex flex-col lg:flex-row overflow-hidden">
            {/* Globe Section */}
            <div className="flex-shrink-0 lg:flex-1 lg:w-3/5 p-2 lg:p-4">
                <div ref={globeRef} className="w-full h-[50vh] lg:h-full" />
            </div>

            {/* Registration Form Section */}
            <div className="flex-1 w-full lg:w-2/5 p-4 lg:p-8 flex items-center justify-center min-h-[50vh]">
                <div className="w-full max-w-[90%] lg:max-w-[400px] space-y-4 lg:space-y-6 pb-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg lg:text-xl font-medium text-cyan-400">REGISTER</h2>
                        <button
                            onClick={() => navigate("/")}
                            className="bg-black text-cyan-400 px-3 py-1 rounded-md text-xs lg:text-sm hover:bg-gray-800"
                        >
                            LOGIN
                        </button>
                    </div>

                    {submitted && (
                        <p className="text-green-500 text-center">Form submitted successfully!</p>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-cyan-400 text-sm">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:border-cyan-400"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>

                        <div>
                            <label className="block text-cyan-400 text-sm">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:border-cyan-400"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="block text-cyan-400 text-sm">College Name</label>
                            <textarea
                                name="CollegeName"
                                value={formData.CollegeName}
                                onChange={handleChange}
                                className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:border-cyan-400"
                                rows="3"
                            />
                            {errors.CollegeName && (
                                <p className="text-red-500 text-sm">{errors.CollegeName}</p>
                            )}
                        </div>

                        {/* NEW: IC Code field */}
                        <div>
                            <label className="block text-cyan-400 text-sm">IC Code</label>
                            <input
                                type="text"
                                name="icCode"
                                value={formData.icCode}
                                onChange={handleChange}
                                className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:border-cyan-400"
                            />
                        </div>

                        {/* NEW: Terms & Conditions checkbox */}
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="termsAccepted"
                                checked={formData.termsAccepted}
                                onChange={handleChange}
                                className="h-4 w-4 text-cyan-400 focus:outline-none focus:ring-0"
                            />
                            <label className="text-cyan-400 text-sm">
                                I accept all{" "}
                                <span className="underline">terms and conditions</span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-black text-cyan-400 py-2 rounded-md hover:bg-gray-800"
                        >
                            REGISTER
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;
