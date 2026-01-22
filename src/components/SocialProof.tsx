"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Maria Silva",
        text: "Atendimento impecável! A Dra. Hanne é super atenciosa e explicou cada etapa do meu tratamento. Recomendo demais!",
        rating: 5,
        highlight: "Atendimento Excepcional",
    },
    {
        name: "Carlos Mendes",
        text: "Sempre tive medo de dentista, mas na Art Odonto foi diferente. Procedimento sem dor e ambiente super acolhedor.",
        rating: 5,
        highlight: "Sem Dor",
    },
    {
        name: "Ana Paula Costa",
        text: "Meu sorriso ficou lindo! As lentes de contato dental superaram todas as minhas expectativas. Estou muito feliz!",
        rating: 5,
        highlight: "Resultado Estético",
    },
];

const beforeAfterItems = [
    { id: 1, label: "Lentes de Contato" },
    { id: 2, label: "Clareamento" },
    { id: 3, label: "Implantes" },
];

export default function SocialProof() {
    return (
        <section className="py-20 bg-slate-900">
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
                        Sorrisos <span className="text-cyan-400">Transformados</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Veja os resultados reais dos nossos pacientes e o que eles têm a
                        dizer sobre a experiência na Art Odonto Digital.
                    </p>
                </motion.div>

                {/* Before/After Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
                    {beforeAfterItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative glass rounded-2xl overflow-hidden aspect-[4/3]"
                        >
                            {/* Placeholder */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-500/10 flex items-center justify-center">
                                        <span className="text-2xl">🦷</span>
                                    </div>
                                    <p className="text-slate-400 text-sm">Antes & Depois</p>
                                    <p className="text-white font-medium">{item.label}</p>
                                </div>
                            </div>

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    ))}
                </div>

                {/* Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="glass rounded-2xl p-6"
                        >
                            {/* Quote Icon */}
                            <Quote className="text-cyan-500/30 mb-4" size={32} />

                            {/* Highlight Badge */}
                            <div className="inline-block bg-cyan-500/10 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full mb-4">
                                {testimonial.highlight}
                            </div>

                            {/* Text */}
                            <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                                &ldquo;{testimonial.text}&rdquo;
                            </p>

                            {/* Rating */}
                            <div className="flex items-center gap-1 mb-3">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        className="fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>

                            {/* Name */}
                            <p className="font-medium text-white">{testimonial.name}</p>
                            <p className="text-slate-500 text-sm">Paciente</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
