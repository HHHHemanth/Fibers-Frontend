"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BlurText from "../components/BlurText";
import ColorBends from "../components/ColorBends";
import GradientText from "../components/GradientText";
import { AuroraText } from "../components/aurora-text";
import { Highlighter } from "@/components/highlighter";
import CardsSection from "@/components/CardsSection";
import {
    Users,
    Server,
    Activity,
    Cloud,
    Clock,
    FileText,
    ScanSearch,
    Ruler,
    CircleDot,

} from "lucide-react";
const cmtiLogos = [
    {
        src: "/cmtiRunningLogo.png",
        alt: "CMTI Running Logo",
        href: "/"
    }
];
function LandingPage() {
    const router = useRouter();

    return (
        <div className="relative min-h-screen overflow-x-hidden text-white font-sans bg-slate-900">
            {/* Background Image Setup similar to LoginPage */}
            <div className="fixed inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/background.jpg')" }}
                />
                <div className="absolute inset-0 z-10">
                    <ColorBends
                        colors={["#ffffff", "#5e8a86"]}
                        rotation={230}
                        speed={0.2}
                        scale={1}
                        frequency={1}
                        warpStrength={1}
                        mouseInfluence={1}
                        parallax={0.5}
                        noise={0.1}
                        transparent
                        autoRotate={0}
                        color="#ffffff"
                    />
                </div>
                <div
                    className="absolute inset-0 bg-cover bg-center z-20 pointer-events-none"
                    style={{ backgroundImage: "url('/background2.png')" }}
                />
                {/* Dark overlay to make content readable while keeping background visible */}
                <div className="absolute inset-0  z-30 pointer-events-none " />
            </div>

            {/* Main Content Area */}
            <div className="relative z-40 pointer-events-auro">

                {/* Header/Nav (Logos) */}
                <header className="px-4 py-3 md:px-12 md:py-6 flex justify-between items-center h-auto">

                    <Link href="/">
                        <img
                            src="/cmtilogo.png"
                            alt="CMTI Logo"
                            className="h-8 sm:h-10 md:h-14 lg:h-16 object-contain cursor-pointer drop-shadow-lg"
                        />
                    </Link>

                    <img
                        src="/fiberLogo.png"
                        alt="Fiber Logo"
                        className="h-8 sm:h-10 md:h-14 lg:h-16 object-contain"
                    />

                </header>

                <section className="min-h-[85vh] flex items-center justify-center px-6 text-center pt-4 pb-20">
                    <div
                        className="relative bg-white/5 backdrop-blur-xl border border-white/5 rounded-2xl shadow-2xl p-12 text-center max-w-xl w-full z-40"
                    >
                        <div className="flex flex-col items-center justify-center text-center z-40 w-full">

                            <BlurText
                                text="WELCOME TO"
                                delay={500}
                                animateBy="words"
                                direction="top"
                                className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-10 mb-6 text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
                            />

                        </div>
                        <GradientText
                            colors={["#ffffff", "#5e8a86", "#ffffff"]}
                            animationSpeed={4}
                            showBorder={false}
                            className="text-3xl md:text-3xl mb-1 drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
                        >
                            FIBER & PARTICLE ANALYSIS SYSTEM
                        </GradientText>
                        <p className="text-sm sm:text-base md:text-md text-gray-200 mb-8 md:mb-10 px-4 sm:px-0 max-w-2xl mx-auto">
                            Advanced vision-based system for detecting, tracing, and measuring fibers and particles with high precision.
                        </p>
                        <button
                            type="button"
                            onClick={() => router.push("/fiber")}
                            className="w-full py-2 bg-[#5e8a86] text-white font-semibold rounded-lg hover:bg-white hover:text-[#5e8a86] transition duration-300 cursor-pointer"
                        >
                            Fiber Analyzer
                        </button>
                    </div>
                </section>

                {/* 2. Roles Section */}
                <section className=" py-24 px-6 bg-white text-gray-900 border-t-4 border-[#5e8a86]">
                    <div className="max-w-6xl mx-auto z-10 relative">
                        <div className="text-center mb-16">

                            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"><AuroraText>System</AuroraText> Features </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Intelligent detection and measurement of fibers and particles using <br /><Highlighter action="underline" color="#5e8a86">
                                <span className="text-lg text-gray-600 max-w-2xl mx-auto">
                                    advance image processing and AI techniques
                                </span>
                            </Highlighter></p>

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Admin Role */}
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                                <div className="w-16 h-16 bg-white text-black rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-300 shadow-inner">
                                    <ScanSearch size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#5e8a86] transition-colors">Fiber Detection</h3>
                                <ul className="space-y-4 text-gray-600">
                                    <li>• Manual point-based fiber tracing</li>
                                    <li>• Automatic path detection using A* </li>
                                    <li>• Real-time visualization of traced fibers</li>
                                    <li>• Multi-fiber tracking with unique IDs</li>
                                </ul>
                            </div>

                            {/* Staff Role */}
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                                <div className="w-16 h-16 bg-white text-black rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-300 shadow-inner">
                                    <Ruler size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#5e8a86] transition-colors">Fiber Measurements</h3>
                                <ul className="space-y-4 text-gray-600">
                                    <li>• Length calculation (µm)</li>
                                    <li>• Minimum & maximum width</li>
                                    <li>• Straightness estimation</li>
                                    <li>• Real-time measurement table</li>
                                </ul>
                            </div>

                            {/* Project Associate Role */}
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                                <div className="w-16 h-16 bg-white text-black rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-300 shadow-inner">
                                    <CircleDot size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#5e8a86] transition-colors">Particle Analysis</h3>
                                <ul className="space-y-4 text-gray-600">
                                    <li>• Particle detection using segmentation</li>
                                    <li>• Inner & outer diameter calculation</li>
                                    <li>• Shape & sphericity analysis</li>
                                    <li>• Polygon & circular visualization</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="-mb-10 py-24 px-6 bg-slate-50 border-t border-slate-200 text-gray-900">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"><AuroraText>Analysis</AuroraText> Outputs</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Real-time visual outputs from Fiber tracing and Particle <Highlighter action="underline" color="#5e8a86">
                                <span className="text-lg text-gray-600 max-w-2xl mx-auto">
                                    Analysis pipeline...
                                </span>
                            </Highlighter></p>

                        </div>

 <CardsSection />
                    </div>
                </section>
                {/* 3. Features Section */}
                <section className="-mb-10 py-24 px-6 bg-white border-t border-slate-200 text-gray-900">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"><AuroraText>Analysis</AuroraText> Capabilities</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Built with modern technologies ensuring security, reliability, and <Highlighter action="underline" color="#5e8a86">
                                <span className="text-lg text-gray-600 max-w-2xl mx-auto">
                                    Performance...
                                </span>
                            </Highlighter></p>

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Activity />,
                                    title: "Fiber Detection",
                                    desc: "Robust detection of fiber structures using Frangi & Sato filters.",
                                    color: "bg-black text-white"
                                },
                                {
                                    icon: <Server />,
                                    title: "Path Tracing",
                                    desc: "Accurate fiber tracing using A* pathfinding algorithm.",
                                    color: "bg-black text-white"
                                },
                                {
                                    icon: <Cloud />,
                                    title: "Real-time Interaction",
                                    desc: "User-guided fiber tracing with instant visual feedback.",
                                    color: "bg-black text-white"
                                },
                                {
                                    icon: <Clock />,
                                    title: "Measurement Engine",
                                    desc: "Precise calculation of fiber length, width, and straightness.",
                                    color: "bg-black text-white"
                                },
                                {
                                    icon: <FileText />,
                                    title: "Automated Reports",
                                    desc: "Generate PDF reports with annotated images and data tables.",
                                    color: "bg-black text-white"
                                },
                                {
                                    icon: <Users />,
                                    title: "Particle Analysis",
                                    desc: "Advanced particle detection with Feret diameter and circularity metrics.",
                                    color: "bg-black text-white"
                                }
                            ].map((feature, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex items-start gap-4">
                                    <div className={`p-3 rounded-lg flex-shrink-0 ${feature.color}`}>
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">{feature.title}</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Footer Section */}
      <footer className="bg-black text-slate-300 -mt-7 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-800">

            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src="/cmtilogo.png" alt="CMTI Logo" className="h-10 bg-white/10 p-1.5 rounded-lg" />
                <img src="/fiberLogo.png" alt="MHI Logo" className="h-10 bg-white/10 p-1.5 rounded-lg" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fiber & Particle Analysis System</h3>
              <p className="text-sm text-slate-400 max-w-sm mb-4">
                High-precision system for fiber tracing, particle detection, and automated measurement reporting.
              </p>
            </div>



            <div>
              <h4 className="text-white font-semibold mb-4">Research & References</h4>
              <ul className="space-y-2 text-sm z-50 relative pointer-events-auto">
                <li className="flex items-center gap-2 px-1">
                  ISO 13322 Image Analysis Standards
                </li>
                <li className="flex items-center gap-2 px-1">
                  Particle Morphology References
                </li>
                <li className="flex items-center gap-2 px-1">
                  Fiber Segmentation Methodology
                </li>
<li className="mt-4">
  <Link
    href="/references"
    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all duration-300"
  >
    View Full References →
  </Link>
</li>              
              </ul>
            </div>

          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Central Manufacturing Technology Institute. All rights reserved.</p>
            <p className="mt-2 md:mt-0 font-mono">v1.0.0</p>
          </div>
        </div>
      </footer>

            </div>
        </div>
    );
}

export default LandingPage;
