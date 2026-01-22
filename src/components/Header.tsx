"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const WHATSAPP_LINK =
    "https://wa.me/5538220015833?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação.";

export default function Header() {
    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 glass"
        >
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/logo.jpg"
                        alt="Art Odonto Digital"
                        width={40}
                        height={40}
                        className="rounded-lg"
                        unoptimized
                    />
                    <span className="text-sm font-medium text-slate-200 hidden sm:block">
                        Art Odonto Digital
                    </span>
                </div>

                {/* CTA Button */}
                <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="btn-header-cta"
                    data-gtm="header-cta"
                    className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-4 py-2 rounded-full text-sm transition-colors"
                >
                    <Phone size={16} />
                    <span>Agendar</span>
                </a>
            </div>
        </motion.header>
    );
}
