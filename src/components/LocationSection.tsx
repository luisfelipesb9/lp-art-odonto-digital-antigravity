"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation, MessageCircle } from "lucide-react";

const WHATSAPP_LINK =
    "https://wa.me/5538220015833?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação.";

const MAPS_LINK =
    "https://www.google.com/maps/dir/?api=1&destination=Av.+Francisco+Gaetani,+1339+-+Maj.+Prates,+Montes+Claros+-+MG";

const contactInfo = {
    address: "Av. Francisco Gaetani, 1339 - Maj. Prates, Montes Claros - MG",
    phone: "(38) 2200-1583",
    hours: [
        { days: "Segunda a Sexta", time: "09h às 18h" },
        { days: "Sábado", time: "09h às 12h" },
    ],
};

export default function LocationSection() {
    return (
        <section className="py-20 bg-slate-950">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Localização e <span className="text-cyan-400">Contato</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Estamos no coração do Major Prates, prontos para transformar seu
                        sorriso. Venha nos conhecer!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Google Maps Embed */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.477687100947!2d-43.88251292484937!3d-16.752893384030102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab530059025f95%3A0x991a5a05d27d6741!2sART%20ODONTO%20DIGITAL%20CL%C3%8DNICAS%20ODONTOL%C3%93GICAS!5e0!3m2!1spt-BR!2sbr!4v1769128771449!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: "300px" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Localização Art Odonto Digital"
                            className="w-full h-full min-h-[300px]"
                        />
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center"
                    >
                        {/* Address */}
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
                                <MapPin className="text-cyan-400" size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Endereço</h3>
                                <p className="text-slate-400">{contactInfo.address}</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
                                <Phone className="text-cyan-400" size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Telefone / WhatsApp</h3>
                                <p className="text-slate-400">{contactInfo.phone}</p>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
                                <Clock className="text-cyan-400" size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Horário de Funcionamento</h3>
                                {contactInfo.hours.map((schedule) => (
                                    <p key={schedule.days} className="text-slate-400">
                                        <span className="text-slate-300">{schedule.days}:</span>{" "}
                                        {schedule.time}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={MAPS_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                id="btn-tracar-rota"
                                data-gtm="tracar-rota"
                                className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
                            >
                                <Navigation size={20} />
                                Traçar Rota
                            </a>
                            <a
                                href={WHATSAPP_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                id="btn-whatsapp-location"
                                data-gtm="whatsapp-location"
                                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-3 rounded-full transition-colors"
                            >
                                <MessageCircle size={20} />
                                Chamar no WhatsApp
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
