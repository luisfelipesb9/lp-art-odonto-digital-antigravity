"use client";

import { motion } from "framer-motion";
import { Cpu, Heart, Sparkles, Award } from "lucide-react";

const features = [
    {
        icon: Cpu,
        title: "Tecnologia Digital",
        description: "Equipamentos de última geração para diagnósticos precisos.",
    },
    {
        icon: Heart,
        title: "Atendimento Humanizado",
        description: "Cuidado personalizado em cada etapa do tratamento.",
    },
    {
        icon: Sparkles,
        title: "Estética Avançada",
        description: "Resultados naturais que valorizam seu sorriso.",
    },
    {
        icon: Award,
        title: "Especialistas",
        description: "Equipe altamente qualificada e em constante atualização.",
    },
];

export default function ClinicSection() {
    return (
        <section className="py-20 bg-slate-950">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                        Sobre nossa <span className="text-cyan-400 text-shadow-glow">clínica</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Unimos tecnologia digital de ponta, atendimento humanizado, estética
                        avançada e especialistas altamente qualificados para transformar seu
                        sorriso com excelência.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl card-gradient p-8 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 shadow-lg shadow-cyan-900/5 hover:shadow-cyan-500/10"
                        >
                            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                            <div className="relative z-10 flex flex-col items-start h-full">
                                <div className="mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon size={42} strokeWidth={1.5} />
                                </div>

                                <span className="text-xs font-medium tracking-widest text-slate-500 mb-2 uppercase">
                                    Diferencial
                                </span>

                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
