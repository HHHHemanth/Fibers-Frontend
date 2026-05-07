"use client";

import React from "react";
import Link from "next/link";
import { AuroraText } from "../../components/aurora-text";
import { Highlighter } from "../../components/highlighter";
import { Tooltip } from "../../components/tooltip-card";
const ReferencePreviewCard = ({
    image,
    title,
    source,
    description
}) => {
    return (
        <div className="w-[320px] overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-200">
            <img
                src={image}
                alt={title}
                className="h-44 w-full object-cover"
            />

            <div className="p-5">
                <div className="mb-3">
                    <span className="bg-[#5e8a86] text-white text-[10px] px-2 py-1 rounded-full">
                        Research Reference
                    </span>
                </div>

                <h4 className="text-lg font-bold text-slate-900 leading-snug">
                    {title}
                </h4>

                <p className="text-sm text-slate-500 mt-1">
                    {source}
                </p>

                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};
export default function ReferencesPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans">



            {/* Main Content */}
            <div className="relative z-40">

                {/* Header */}
                <header className="bg-black border-b-2 border-[#5e8a86] px-6 py-4 md:px-12 flex justify-between items-center">
                    <div className="flex items-center justify-between w-full">

                        {/* LEFT LOGO */}
                        <Link href="/" className="cursor-pointer">
                            <img
                                src="/cmtilogo.png"
                                alt="CMTI Logo"
                                className="h-8 sm:h-10 md:h-12 bg-white/10 p-1 rounded-lg"
                            />
                        </Link>

                        {/* RIGHT LOGO */}
                        <Link href="/" className="cursor-pointer">
                            <img
                                src="/fiberLogo.png"
                                alt="MHI Logo"
                                className="h-8 sm:h-10 md:h-12 bg-white/10 p-1 rounded-lg"
                            />
                        </Link>

                    </div>
                </header>
                {/* Hero Section */}
                <section className="pt-30 pb-15 px-6">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            <AuroraText>Research</AuroraText> & References
                        </h1>

                        <p className="text-lg text-slate-800 max-w-7xl mx-auto">
                            SEM image analysis pipeline integrating morphology-based
                            particle characterization, fiber segmentation, Feret
                            diameter analysis, convexity analysis, and ridge-based
                            enhancement techniques inspired by published scientific
                            literature and ISO-aligned methodologies.
                        </p>
                    </div>
                </section>

                {/* ISO Standards */}
                <section className="py-16 px-6 pb-40">
                    <div className="max-w-7xl mx-auto">

                        <div className="mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                ISO Standards
                            </h2>

                            <p className="text-slate-800">
                                Standards and particle characterization methodologies
                                referenced in the developed image-analysis pipeline.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* ISO 13322 */}
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl">
                                <h3 className="text-2xl font-bold mb-4 text-[#5e8a86]">
                                    ISO 13322
                                </h3>

                                <p className="text-slate-800 leading-relaxed mb-4">
                                    Particle Size Analysis — Image Analysis Methods
                                </p>

                                <div className="text-sm text-slate-600 leading-relaxed">
                                    Used for image-based particle characterization,
                                    contour extraction, morphology analysis, and
                                    particle measurement workflows.
                                </div>
                            </div>

                            {/* ISO 9276 */}
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl">
                                <h3 className="text-2xl font-bold mb-4 text-[#5e8a86]">
                                    ISO 9276
                                </h3>

                                <p className="text-slate-800 leading-relaxed mb-4">
                                    Representation of Results of Particle Size Analysis
                                </p>

                                <div className="text-sm text-slate-600 leading-relaxed">
                                    Referenced for Feret diameter, aspect ratio,
                                    circularity, solidity, convexity, and morphology
                                    descriptor interpretation.
                                </div>
                            </div>

                            {/* ISO 24597 */}
                            <div className="md:col-span-2 flex justify-center">
                                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl md:w-[48%]">
                                    <h3 className="text-2xl font-bold mb-4 text-[#5e8a86]">
                                        ISO/TS 24597
                                    </h3>

                                    <p className="text-slate-800 leading-relaxed mb-4">
                                        Scanning Electron Microscopy — Methods of Evaluating Image Sharpness
                                    </p>

                                    <div className="text-sm text-slate-600 leading-relaxed">
                                        Referenced for SEM image acquisition guidance, calibrated pixel-size handling,
                                        contrast-to-noise considerations, and SEM image preprocessing practices aligned
                                        with standardized SEM image evaluation methodologies.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Primary References */}
                <section className="py-26 px-6text-slate-900 bg-slate-50 border-t border-slate-200">

                    <div className="max-w-6xl mx-auto  mt-15">

                        <div className="mb-14 text-center">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                <AuroraText>Primary</AuroraText> References
                            </h2>

                            <p className="text-gray-600">
                                Core literature used for morphology analysis and
                                particle/fiber characterization.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8">

                            {/* Paper 1 */}
                            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-300">

                                <div className="flex flex-col gap-4">

                                    <div>
                                        <span className="bg-[#5e8a86] text-white text-xs px-3 py-1 rounded-full">
                                            Morphology Analysis
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold">
                                        Particle Shape Factors and Their Use in Image Analysis
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed">
                                        Used for morphology descriptor interpretation
                                        including aspect ratio, circularity, solidity,
                                        convexity, and Feret diameter analysis.
                                    </p>

                                    <Tooltip
                                        content={
                                            <ReferencePreviewCard
                                                image="/ref1.png"
                                                title="Particle Shape Factors and Their Use in Image Analysis"
                                                source="Particle Technology Labs"
                                                description="Reference used for circularity, solidity, aspect ratio, convexity, and Feret morphology descriptors."
                                            />
                                        }
                                    >
                                        <a
                                            href="https://particletechlabs.com/ptl-press/particle-shape-factors-and-their-use-in-image-analysis-part-1-theory/"
                                            target="_blank"
                                            className="text-[#5e8a86] font-semibold hover:underline cursor-pointer"
                                        >
                                            View Reference →
                                        </a>
                                    </Tooltip>
                                </div>
                            </div>

                            {/* Paper 2 */}
                            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-300">

                                <div className="flex flex-col gap-4">

                                    <div>
                                        <span className="bg-[#5e8a86] text-white text-xs px-3 py-1 rounded-full">
                                            Fiber & Particle Segmentation
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold">
                                        Morphological Characterization and Image Analysis
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed">
                                        Referenced for particle morphology analysis,
                                        segmentation methodology, and SEM-based
                                        fiber/particle differentiation techniques.
                                    </p>

                                    <Tooltip
                                        content={
                                            <ReferencePreviewCard
                                                image="/ref2.png"
                                                title="Morphological Characterization and Image Analysis"
                                                source="ScienceDirect"
                                                description="Referenced for SEM morphology analysis, particle segmentation, and fiber differentiation techniques."
                                            />
                                        }
                                    >
                                        <a
                                            href="https://www.sciencedirect.com/science/article/abs/pii/S1309104221000878"
                                            target="_blank"
                                            className="text-[#5e8a86] font-semibold hover:underline cursor-pointer"
                                        >
                                            View Reference →
                                        </a>
                                    </Tooltip>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Algorithms */}
                <section className="py-20 px-6  border-t bg-white border-t border-slate-200">

                    <div className="max-w-6xl mx-auto">

                        <div className="text-center mb-16  mt-15 ">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                <AuroraText>Algorithms</AuroraText> & Methodologies
                            </h2>

                            <p className="text-slate-600 max-w-3xl mx-auto">
                                Classical image-processing and morphology-analysis
                                techniques integrated into the SEM analysis pipeline.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                            {[
                                {
                                    title: "Frangi Filter",
                                    desc: "Multiscale ridge enhancement for fiber extraction and curvilinear structure detection."
                                },
                                {
                                    title: "Sato Filter",
                                    desc: "Curvilinear feature enhancement for elongated fiber structures."
                                },
                                {
                                    title: "Skeletonization",
                                    desc: "Centerline extraction for elongation and length analysis."
                                },
                                {
                                    title: "Distance Transform",
                                    desc: "Local thickness and average width estimation."
                                },
                                {
                                    title: "Feret Diameter Analysis",
                                    desc: "Particle morphology characterization using Feret max/min descriptors."
                                },
                                {
                                    title: "Convex Hull Analysis",
                                    desc: "Solidity and convexity estimation for particle classification."
                                }
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
                                >
                                    <h3 className="text-xl font-bold mb-3 text-[#5e8a86]">
                                        {item.title}
                                    </h3>

                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>
                </section>

                {/* Closing */}
                <section className="pb-24 px-6 mt-30">
                    <div className="max-w-4xl mx-auto text-center">

                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">

                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                <AuroraText>Research-Oriented</AuroraText> SEM Analysis
                            </h2>

                            <p className="text-slate-600 leading-relaxed text-sm">
                                The developed pipeline combines ISO-aligned morphology
                                descriptors, ridge-enhancement filters, convexity
                                analysis, Feret-based characterization, and
                                skeleton-based measurements for robust fiber and
                                particle analysis in SEM imagery.
                            </p>

                        </div>
                    </div>
                </section>
                <footer className="bg-black text-slate-300 mt-20 py-20 px-6">
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