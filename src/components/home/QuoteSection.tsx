"use client";

import React, { useState } from "react";
import { Send, Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck, CheckCircle2 } from "lucide-react";
import { COMPANY } from "@/data/company";

export function QuoteSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    solution: "Pontes Rolantes e Talhas Elétricas",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*Solicitação de Cotação - Invertronic Site*%0A%0A` +
      `*Nome:* ${encodeURIComponent(formData.name)}%0A` +
      `*Empresa:* ${encodeURIComponent(formData.company || "Não informada")}%0A` +
      `*WhatsApp:* ${encodeURIComponent(formData.phone)}%0A` +
      `*E-mail:* ${encodeURIComponent(formData.email)}%0A` +
      `*Interesse:* ${encodeURIComponent(formData.solution)}%0A` +
      `*Detalhes:* ${encodeURIComponent(formData.details || "Sem detalhes adicionais")}`;

    window.open(`https://wa.me/${COMPANY.contact.whatsapp}?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Atendimento Comercial & Engenharia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Solicite um Diagnóstico ou{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">
              Orçamento Técnico
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Nossos engenheiros de aplicação estão prontos para analisar o seu projeto e dimensionar a melhor solução custo-benefício.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Card */}
          <div id="orcamento" className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Solicitação Encaminhada!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Sua mensagem foi direcionada ao nosso canal prioritário de atendimento no WhatsApp. Um de nossos especialistas responderá em breve.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white shadow-sm"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-blue-600 focus:outline-none text-slate-900 text-sm shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Empresa / Cidade *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Usina São Paulo / Sertãozinho"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-blue-600 focus:outline-none text-slate-900 text-sm shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      WhatsApp / Telefone com DDD *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(16) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-blue-600 focus:outline-none text-slate-900 text-sm shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      E-mail Corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="carlos@empresa.com.br"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-blue-600 focus:outline-none text-slate-900 text-sm shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Solução de Interesse *
                  </label>
                  <select
                    value={formData.solution}
                    onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-blue-600 focus:outline-none text-slate-900 text-sm shadow-sm"
                  >
                    <option value="Pontes Rolantes e Talhas Elétricas">Pontes Rolantes e Talhas Elétricas (Fabricação / Reforma)</option>
                    <option value="Inversores de Frequência e Soft-Starters">Inversores de Frequência & Soft-Starters (Venda / Manutenção)</option>
                    <option value="Automação, CLP e Indústria 4.0">Automação com CLP, IHM & Indústria 4.0 (SCADA / Telemetria)</option>
                    <option value="Painéis Elétricos e CCM Inteligente">Painéis Elétricos, CCMs e QGBTs</option>
                    <option value="Retrofit e Adequação NR-10/NR-11/NR-12">Retrofit de Máquinas & Laudos NR-10/11/12 com ART</option>
                    <option value="Plantão de Emergência / Outros">Atendimento Emergencial / Outras Demandas</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Detalhes do Equipamento ou Processo
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Descreva a capacidade de carga, potência do motor, marca do inversor ou problema a ser solucionado..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-blue-600 focus:outline-none text-slate-900 text-sm resize-none shadow-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl font-black text-sm uppercase tracking-wider text-[#012a40] bg-[#fbd708] hover:bg-[#e5c300] shadow-md shadow-[#fbd708]/30 transition-all duration-300 hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4 text-[#012a40]" />
                  <span>Enviar Solicitação via WhatsApp Direto</span>
                </button>
                <p className="text-[11px] text-center text-slate-500">
                  Respeitamos sua privacidade. Seus dados serão utilizados exclusivamente pela engenharia da Invertronic.
                </p>
              </form>
            )}
          </div>

          {/* Contact Details & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 pb-4 border-b border-slate-200">
                Canais de Atendimento Direto
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-200 text-blue-700 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 font-semibold">Telefone Fixo Comercial:</span>
                    <a href={`tel:${COMPANY.contact.phone.replace(/\D/g, "")}`} className="font-bold text-slate-900 hover:text-blue-600">
                      {COMPANY.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 font-semibold">WhatsApp Oficial de Vendas & Suporte:</span>
                    <a
                      href={`https://wa.me/${COMPANY.contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 hover:underline"
                    >
                      {COMPANY.contact.whatsappFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 font-semibold">E-mail Comercial:</span>
                    <a href={`mailto:${COMPANY.contact.email}`} className="font-semibold text-slate-900 hover:text-blue-600">
                      {COMPANY.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-200 text-amber-700 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 font-semibold">Endereço da Unidade:</span>
                    <p className="font-bold text-slate-800">
                      {COMPANY.address.street} - {COMPANY.address.district}
                    </p>
                    <p className="text-slate-600 text-xs">
                      {COMPANY.address.city} - {COMPANY.address.state} | CEP: {COMPANY.address.zipCode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200 text-purple-700 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 font-semibold">Horário de Operação:</span>
                    <p className="font-bold text-slate-800">Segunda a Sexta: 07h30 às 17h30</p>
                    <p className="text-amber-700 font-bold text-xs mt-0.5">Plantão Técnico 24h para Linhas Críticas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CREA & Technical Guarantee Box */}
            <div className="p-5 rounded-3xl bg-blue-50 border border-blue-200 flex items-center gap-4 shadow-sm">
              <ShieldCheck className="w-10 h-10 text-blue-700 flex-shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-slate-900 block">Engenharia Registrada CREA-SP</span>
                <span className="text-slate-600">Todos os projetos elétricos, mecânicos e de adequação normativa acompanham ART oficial.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
