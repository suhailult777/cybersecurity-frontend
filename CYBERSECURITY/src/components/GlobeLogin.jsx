import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";

const GlobeLogin = () => {
    const globeRef = useRef(null);
    const rendererRef = useRef(null);
    const sphereRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        // Create renderer
        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: "high-performance",
        });

        // Responsive renderer setup
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

        // Create globe geometry
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

        // Lights
        scene.add(new THREE.AmbientLight(0xffffff, 0.5));
        const pointLight = new THREE.PointLight(0x00ffff, 1);
        pointLight.position.set(10, 10, 10);
        scene.add(pointLight);

        // Animation
        const animate = () => {
            requestAnimationFrame(animate);
            sphere.rotation.y += 0.001;
            renderer.render(scene, camera);
        };
        animate();

        // Handle window resize
        const handleResize = () => {
            updateRendererSize();
        };
        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
            if (globeRef.current) {
                globeRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/dashboard");
    };

    const handleRegister = () => {
        // Navigate to the registration route
        navigate("/register");
    };

    return (
        <div className="h-screen w-screen bg-[#ADD8E6] flex flex-col lg:flex-row overflow-hidden">
            {/* Globe Section */}
            <div className="flex-shrink-0 lg:flex-1 lg:w-3/5 p-2 lg:p-4">
                <div ref={globeRef} className="w-full h-[50vh] lg:h-full" />
            </div>

            {/* Form Section */}
            <div className="flex-1 w-full lg:w-2/5 p-4 lg:p-8 flex items-center justify-center min-h-[50vh]">
                <div className="w-full max-w-[90%] lg:max-w-[400px] space-y-4 lg:space-y-6 pb-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg lg:text-xl font-medium text-cyan-400">
                            LOGIN
                        </h2>
                        <button
                            onClick={handleRegister}
                            className="text-cyan-400 text-xs lg:text-sm hover:text-cyan-300"
                        >
                            REGISTER
                        </button>
                    </div>

                    <form className="space-y-4 lg:space-y-6">
                        <div className="space-y-1 lg:space-y-2">
                            <label className="block text-xs lg:text-sm text-cyan-400">
                                Email
                            </label>
                            <input
                                type="email"
                                className="w-full text-sm lg:text-base bg-gray-800/50 border border-gray-700 rounded-sm p-2 lg:p-2.5 text-gray-100 focus:outline-none focus:border-cyan-400"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="space-y-1 lg:space-y-2">
                            <label className="block text-xs lg:text-sm text-cyan-400">
                                Password
                            </label>
                            <input
                                type="password"
                                className="w-full text-sm lg:text-base bg-gray-800/50 border border-gray-700 rounded-sm p-2 lg:p-2.5 text-gray-100 focus:outline-none focus:border-cyan-400"
                                placeholder="Enter your password"
                            />
                            {/* Forgot password and LOGIN side by side */}
                            <div className="flex items-center justify-between">
                                <button
                                    type="button"
                                    className="text-cyan-400 text-[10px] lg:text-xs hover:text-cyan-300"
                                >
                                    FORGOT PASSWORD?
                                </button>
                                <button
                                    type="submit"
                                    onClick={handleLogin}
                                    className="text-sm lg:text-base bg-cyan-500/20 text-cyan-400 p-2 lg:p-2.5 rounded-sm hover:bg-cyan-500/30 transition-colors"
                                >
                                    LOGIN
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GlobeLogin;
