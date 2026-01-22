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
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        A <span className="text-cyan-400">Clínica</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        A Art Odonto Digital chega a Montes Claros com uma proposta
                        inovadora: unir o que há de mais moderno em tecnologia odontológica
                        com um atendimento verdadeiramente humanizado.
                    </p>
                </motion.div>

                {/* Dra. Hanne Highlight */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="glass rounded-2xl p-6 sm:p-8 mb-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full mb-4">
                        <Sparkles size={16} />
                        <span className="text-sm font-medium">Especialista em Estética</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Dra. Hanne Fiuza</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Cirurgiã-dentista apaixonada por transformar sorrisos. Especialista
                        em estética dental e harmonização facial, com formação nas melhores
                        instituições do país.
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
                            className="glass rounded-xl p-6 text-center hover:border-cyan-500/30 transition-colors"
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500/10 rounded-lg mb-4">
                                <feature.icon className="text-cyan-400" size={24} />
                            </div>
                            <h3 className="font-semibold mb-2">{feature.title}</h3>
                            <p className="text-slate-400 text-sm">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
