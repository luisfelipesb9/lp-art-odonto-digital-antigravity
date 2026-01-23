"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

const WHATSAPP_LINK =
    "https://wa.me/5538220015833?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação.";

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
    { id: 1, image: "/transformation-1.png" },
    { id: 2, image: "/transformation-2.jpg" },
    { id: 3, image: "/transformation-3.jpg" },
];

export default function SocialProof() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % beforeAfterItems.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + beforeAfterItems.length) % beforeAfterItems.length);
    };

    return (
        <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                        Sorrisos <span className="text-cyan-400 text-shadow-glow">Transformados</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Veja os resultados reais dos nossos pacientes e o que eles têm a
                        dizer sobre a experiência na Art Odonto Digital.
                    </p>
                </motion.div>

                {/* Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-8"
                >
                    <div className="flex items-center justify-center gap-4 sm:gap-6">
                        {/* Left Arrow */}
                        <button
                            onClick={prevSlide}
                            className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-cyan-500 text-cyan-500 flex items-center justify-center hover:bg-cyan-500 hover:text-slate-900 transition-colors"
                            aria-label="Anterior"
                        >
                            <ChevronLeft size={28} />
                        </button>

                        {/* Images Container - One image at a time */}
                        <div className="flex justify-center">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/50 shadow-lg shadow-cyan-900/20"
                            >
                                <Image
                                    src={beforeAfterItems[currentIndex].image}
                                    alt={`Transformação ${beforeAfterItems[currentIndex].id}`}
                                    width={320}
                                    height={570}
                                    className="object-cover w-[200px] h-[355px] sm:w-[320px] sm:h-[570px]"
                                />
                            </motion.div>
                        </div>

                        {/* Right Arrow */}
                        <button
                            onClick={nextSlide}
                            className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-cyan-500 text-cyan-500 flex items-center justify-center hover:bg-cyan-500 hover:text-slate-900 transition-colors"
                            aria-label="Próximo"
                        >
                            <ChevronRight size={28} />
                        </button>
                    </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center mb-16"
                >
                    <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        id="btn-whatsapp-carousel"
                        data-gtm="whatsapp-carousel"
                        className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold px-8 py-4 rounded-full text-lg btn-pulse transition-colors"
                    >
                        <MessageCircle size={24} />
                        Agendar uma avaliação
                    </a>
                </motion.div>

                {/* Testimonials */}
                <div className="container mx-auto px-4">
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
            </div>
        </section>
    );
}
