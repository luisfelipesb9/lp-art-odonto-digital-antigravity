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
            className="absolute top-0 left-0 w-full z-50 pt-6 px-6 flex justify-center"
        >
            <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 overflow-hidden rounded-lg shadow-lg">
                    <Image
                        src="/logo.jpg"
                        alt="Art Odonto Digital"
                        fill
                        className="object-cover scale-150"
                        unoptimized
                    />
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-lg font-montserrat font-bold text-white tracking-wide leading-none">
                        Art Odonto
                    </span>
                    <span className="text-lg font-light text-cyan-400 tracking-widest uppercase">
                        Digital
                    </span>
                </div>
            </div>
        </motion.header>
    );
}
