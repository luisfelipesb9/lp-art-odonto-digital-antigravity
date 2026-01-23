"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK =
    "https://wa.me/5538999406524?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação.&v=1";

export default function HeroSection() {
    return (
        <section className="hero-gradient min-h-screen relative overflow-hidden pt-16">
            {/* Content Container */}
            <div className="container mx-auto px-4 pt-0 pb-4 lg:py-16 flex flex-col lg:flex-row items-center h-full sm:h-auto justify-center lg:justify-start">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="w-full lg:flex-1 text-center lg:text-left z-30 flex flex-col items-center lg:items-start"
                >
                    {/* Headline */}
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-3 sm:mb-6 mt-2 lg:mt-0">
                        Conquiste o
                        <br />
                        <span className="text-white">sorriso </span>
                        <span className="italic font-light text-cyan-400">que</span>
                        <br className="hidden sm:block" />
                        <span className="italic font-light text-cyan-400 ml-1 sm:ml-0">sempre </span>
                        <span className="text-white">sonhou</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-slate-400 text-sm sm:text-xl mb-4 sm:mb-8 max-w-md mx-auto lg:mx-0 px-2 sm:px-0">
                        Tecnologia digital e atendimento humanizado. Referência em
                        odontologia em Montes Claros.
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
                        className="inline-flex items-center gap-2 sm:gap-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg btn-pulse transition-colors mb-2 lg:mb-0"
                    >
                        <MessageCircle size={20} className="sm:w-6 sm:h-6" />
                        Agendar uma avaliação
                    </motion.a>
                </motion.div>

                {/* Right Content - Doctor Image */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-full lg:flex-1 relative -mt-14 lg:mt-0 flex justify-center"
                >
                    {/* Glow Effect / Shadow Integration */}
                    <div className="absolute inset-0 doctor-shadow scale-125 lg:scale-150 transform translate-y-10" />

                    {/* Bottom Fade Integration */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--color-background)] to-transparent z-20" />

                    {/* Doctor Image Container */}
                    <div className="relative z-10 w-[80%] sm:w-auto max-w-[320px] lg:max-w-none">
                        <Image
                            src="/dra-hanne.jpg"
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
                            className="absolute -left-4 sm:left-0 top-1/2 glass px-3 py-1.5 sm:px-4 sm:py-2 rounded-full"
                        >
                            <span className="text-[10px] sm:text-sm text-cyan-400 font-medium whitespace-nowrap">
                                🦷 Reabilitação Oral
                            </span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                            className="absolute -right-4 sm:right-0 top-[28%] glass px-3 py-1.5 sm:px-4 sm:py-2 rounded-full"
                        >
                            <span className="text-[10px] sm:text-sm text-cyan-400 font-medium whitespace-nowrap">
                                ✨ Cirurgiã-Dentista
                            </span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.4, duration: 0.5 }}
                            className="absolute right-0 sm:right-4 bottom-12 sm:bottom-1/4 glass px-3 py-1.5 sm:px-4 sm:py-2 rounded-full"
                        >
                            <span className="text-[10px] sm:text-sm text-cyan-400 font-medium whitespace-nowrap">
                                💎 Odontologia Estética
                            </span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.6, duration: 0.5 }}
                            className="absolute -right-4 sm:-right-12 bottom-36 sm:bottom-[50%] glass px-3 py-1.5 sm:px-4 sm:py-2 rounded-full"
                        >
                            <span className="text-[10px] sm:text-sm text-cyan-400 font-medium whitespace-nowrap">
                                ✨ Harmonização Orofacial
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
