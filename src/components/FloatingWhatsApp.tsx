"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { trackWhatsAppConversion } from "@/lib/gtag";

const WHATSAPP_LINK =
    "https://wa.me/553822001583?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação.&v=1";

export default function FloatingWhatsApp() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past the hero section
            setIsVisible(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="btn-whatsapp-float"
                    data-gtm="whatsapp-float"
                    onClick={trackWhatsAppConversion}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-lg shadow-green-500/30 float-animation"
                >
                    <MessageCircle size={28} />
                </motion.a>
            )}
        </AnimatePresence>
    );
}
