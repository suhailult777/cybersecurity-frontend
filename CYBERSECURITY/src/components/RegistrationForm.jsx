import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import Footer from "./Footer";

const RegistrationForm = () => {
    // Form state
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        institution_id: "",
        termsAccepted: false,

    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    // Validation
    const validateEmail = (email) =>
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
        setErrors((prevErrors) => {
            const newErrors = { ...prevErrors };
            if (name === "fname" && value.trim() === "") {
                newErrors.fname = "First Name is required";
            } else {
                delete newErrors.fname;
            }

            if (name === "lname" && value.trim() === "") {
                newErrors.lname = "Last Name is required";
            } else {
                delete newErrors.lname;
            }

            if (name === "email") {
                if (value.trim() === "") {
                    newErrors.email = "Email is required";
                } else if (!validateEmail(value)) {
                    newErrors.email = "Invalid email address";
                } else {
                    delete newErrors.email;
                }
            }

            if (name === "institution_id" && value.trim() === "") {
                newErrors.institution_id = "IC Code cannot be empty";
            } else {
                delete newErrors.institution_id;
            }

            return newErrors;
        });
    };

    const handleRegister = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitted(true);
                setErrorMessage("");
                setFormData({
                    fname: "",
                    lname: "",
                    email: "",
                    institution_id: "",
                    termsAccepted: false,

                });
            } else {
                setErrorMessage(
                    data.detail || "Registration failed. Please try again."
                );
            }
        } catch (error) {
            setErrorMessage("Error connecting to the server. Please try again.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.fname.trim()) newErrors.fname = "First Name is required";
        if (!formData.lname.trim()) newErrors.lname = "Last Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Invalid email address";
        }
        if (!formData.institution_id.trim())
            newErrors.institution_id = "Institution ID cannot be empty";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            handleRegister();
        }
    };

    // Three.js Globe Setup
    const globeRef = useRef(null);
    const rendererRef = useRef(null);
    const sphereRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
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
                        <h2 className="text-lg lg:text-xl font-medium text-cyan-400">
                            REGISTER
                        </h2>
                        <button
                            onClick={() => navigate("/")}
                            className="bg-black text-cyan-400 px-3 py-1 rounded-md text-xs lg:text-sm hover:bg-gray-800"
                        >
                            LOGIN
                        </button>
                    </div>

                    {submitted && (
                        <p className="text-green-500 text-center">
                            Registration successful!
                        </p>
                    )}
                    {errorMessage && (
                        <p className="text-red-500 text-center">{errorMessage}</p>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-cyan-400 text-sm">First Name</label>
                            <input
                                type="text"
                                name="fname"
                                value={formData.fname}
                                onChange={handleChange}
                                className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:border-cyan-400"
                            />
                            {errors.fname && (
                                <p className="text-red-500 text-sm">{errors.fname}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-cyan-400 text-sm">Last Name</label>
                            <input
                                type="text"
                                name="lname"
                                value={formData.lname}
                                onChange={handleChange}
                                className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:border-cyan-400"
                            />
                            {errors.lname && (
                                <p className="text-red-500 text-sm">{errors.lname}</p>
                            )}
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
                            {errors.email && (
                                <p className="text-red-500 text-sm">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-cyan-400 text-sm">IC Code</label>
                            <input
                                type="text"
                                name="institution_id"
                                value={formData.institution_id}
                                onChange={handleChange}
                                className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:border-cyan-400"
                            />
                            {errors.institution_id && (
                                <p className="text-red-500 text-sm">{errors.institution_id}</p>
                            )}
                        </div>

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
            <Footer />
        </div>
    );
};

export default RegistrationForm;
