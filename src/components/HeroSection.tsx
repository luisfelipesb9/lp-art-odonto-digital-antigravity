"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK =
    "https://wa.me/5538220015833?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação.";

export default function HeroSection() {
    return (
        <section className="hero-gradient min-h-screen relative overflow-hidden pt-20">
            {/* Content Container */}
            <div className="container mx-auto px-4 py-8 lg:py-16 flex flex-col lg:flex-row items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="flex-1 text-center lg:text-left z-10"
                >
                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                        Conquiste o
                        <br />
                        <span className="text-white">sorriso </span>
                        <span className="italic font-light text-cyan-400">que</span>
                        <br />
                        <span className="italic font-light text-cyan-400">sempre </span>
                        <span className="text-white">sonhou</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-slate-400 text-lg sm:text-xl mb-8 max-w-md mx-auto lg:mx-0">
                        Tecnologia digital e atendimento humanizado. A nova referência em
                        odontologia no Major Prates, Montes Claros.
                    </p>

                    {/* CTA Button */}
                    <motion.a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        id="btn-whatsapp-hero"
                        data-gtm="whatsapp-hero"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold px-8 py-4 rounded-full text-lg btn-pulse transition-colors"
                    >
                        <MessageCircle size={24} />
                        Agendar uma avaliação
                    </motion.a>
                </motion.div>

                {/* Right Content - Doctor Image */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex-1 relative mt-12 lg:mt-0"
                >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 glow-effect scale-150" />

                    {/* Doctor Image Container */}
                    <div className="relative z-10">
                        <Image
                            src="/dra-hanne.png"
                            alt="Dra. Hanne Fiuza - Art Odonto Digital"
                            width={500}
                            height={600}
                            className="mx-auto object-contain drop-shadow-2xl"
                            priority
                        />

                        {/* Floating Badges */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="absolute left-0 top-1/3 glass px-4 py-2 rounded-full"
                        >
                            <span className="text-xs sm:text-sm text-cyan-400 font-medium">
                                🦷 Implantes Dentários
                            </span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                            className="absolute right-0 top-1/4 glass px-4 py-2 rounded-full"
                        >
                            <span className="text-xs sm:text-sm text-cyan-400 font-medium">
                                ✨ Cirurgiã Dentista
                            </span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.4, duration: 0.5 }}
                            className="absolute right-4 bottom-1/4 glass px-4 py-2 rounded-full"
                        >
                            <span className="text-xs sm:text-sm text-cyan-400 font-medium">
                                💎 Harmonização Facial
                            </span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-slate-600 rounded-full flex items-start justify-center p-1"
                >
                    <div className="w-1.5 h-3 bg-cyan-500 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
