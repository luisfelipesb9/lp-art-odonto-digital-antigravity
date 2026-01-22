"use client";

import Image from "next/image";
import { Instagram, Facebook, Phone } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Image
                                src="/logo.jpg"
                                alt="Art Odonto Digital"
                                width={48}
                                height={48}
                                className="rounded-lg"
                                unoptimized
                            />
                            <div>
                                <p className="font-semibold text-white">Art Odonto Digital</p>
                                <p className="text-sm text-slate-400">Clínicas Odontológicas</p>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm">
                            Transformando sorrisos com tecnologia digital e atendimento
                            humanizado em Montes Claros.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold mb-4">Contato</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2 text-slate-400">
                                <Phone size={16} className="text-cyan-400" />
                                (38) 2200-1583
                            </li>
                            <li className="text-slate-400">
                                Av. Francisco Gaetani, 1339
                                <br />
                                Maj. Prates, Montes Claros - MG
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-semibold mb-4">Redes Sociais</h3>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-cyan-500/20 flex items-center justify-center transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} className="text-slate-400" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-cyan-500/20 flex items-center justify-center transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook size={20} className="text-slate-400" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-slate-800 pt-8 text-center">
                    <p className="text-slate-500 text-sm">
                        © {currentYear} Art Odonto Digital. Todos os direitos reservados.
                    </p>
                    <p className="text-slate-600 text-xs mt-2">
                        Responsável Técnica: Dra. Hanne Fiuza - CRO-MG XXXXX
                    </p>
                </div>
            </div>
        </footer>
    );
}
