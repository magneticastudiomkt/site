"use client"

import { useEffect, useRef, useState } from 'react'

const services = [
  {
    id: 1,
    title: "Estratégia e Planejamento",
    items: [
      "Diagnóstico de mercado e posicionamento",
      "Planejamento estratégico de marketing",
      "Criação de campanhas integradas"
    ]
  },
  {
    id: 2,
    title: "Gestão de Mídias Digitais",
    items: [
      "Social media (planejamento, criação e gestão)",
      "Campanhas pagas (Google Ads, Meta Ads, LinkedIn Ads)",
      "Produção de conteúdo relevante para engajamento"
    ]
  },
  {
    id: 3,
    title: "Inteligência de Mercado e Dados",
    items: [
      "Pesquisas e análises de mercado",
      "Monitoramento de concorrência",
      "Relatórios de performance e análise preditiva com IA"
    ]
  },
  {
    id: 4,
    title: "Comunicação e Endomarketing",
    items: [
      "Campanhas de engajamento interno",
      "Treinamento de equipes de vendas",
      "Desenvolvimento de identidade e branding"
    ]
  },
  {
    id: 5,
    title: "Marketing Outsoucing",
    description: "Somos o braço estratégico de marketing da sua empresa, oferecendo a inteligência e estrutura de um departamento completo, sem os custos de manter uma equipe interna.",
    featured: true
  }
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative bg-black py-20 lg:py-24 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(217,179,90,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(217,179,90,1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div 
          className={`mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="relative">
              <div className="w-2 h-2 bg-[#d9b35a] rounded-full animate-pulse" />
              <div className="absolute inset-0 w-2 h-2 bg-[#d9b35a] rounded-full animate-ping" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#d9b35a]/70">
              Soluções
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            O que fazemos
          </h2>
        </div>

        {/* Services Grid - All in one row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-full group min-h-[320px]">
                
                {/* Card glow effect */}
                <div 
                  className={`absolute -inset-[1px] rounded-xl transition-opacity duration-500 ${
                    hoveredCard === service.id ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    background: service.featured 
                      ? 'linear-gradient(135deg, rgba(217,179,90,0.4) 0%, rgba(217,179,90,0.1) 100%)'
                      : 'linear-gradient(135deg, rgba(217,179,90,0.2) 0%, rgba(217,179,90,0.05) 100%)',
                    filter: 'blur(8px)'
                  }}
                />

                {/* Card */}
                <div className={`relative h-full rounded-xl border overflow-hidden transition-all duration-500 ${
                  service.featured 
                    ? 'bg-gradient-to-br from-[#d9b35a]/12 to-[#d9b35a]/5 border-[#d9b35a]/30'
                    : 'bg-gradient-to-br from-white/[0.03] to-white/[0.01] border-white/[0.1] hover:border-[#d9b35a]/25 hover:bg-white/[0.04]'
                }`}>
                  
                  {/* Tech grid overlay */}
                  <div 
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(217,179,90,1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(217,179,90,1) 1px, transparent 1px)
                      `,
                      backgroundSize: '30px 30px'
                    }}
                  />

                  {/* Corner accent */}
                  <div className={`absolute top-0 left-0 w-8 h-8 border-t border-l rounded-tl-xl transition-colors duration-500 ${
                    service.featured ? 'border-[#d9b35a]/40' : 'border-[#d9b35a]/20 group-hover:border-[#d9b35a]/30'
                  }`} />

                  {/* LED indicator */}
                  <div className="absolute top-4 right-4">
                    <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                      service.featured ? 'bg-[#d9b35a] shadow-[0_0_10px_rgba(217,179,90,0.8)]' : 'bg-[#d9b35a]/40 group-hover:bg-[#d9b35a]/60'
                    }`} />
                  </div>

                  {/* Content */}
                  <div className="relative p-6 lg:p-7 h-full flex flex-col">
                    
                    {/* Title */}
                    <h3 className={`mb-4 font-bold leading-tight transition-colors duration-500 ${
                      service.featured 
                        ? 'text-xl lg:text-2xl text-[#d9b35a]' 
                        : 'text-lg lg:text-xl text-white group-hover:text-[#d9b35a]/90'
                    }`}>
                      {service.title}
                    </h3>

                    {/* Content */}
                    {service.description ? (
                      <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                        {service.description}
                      </p>
                    ) : (
                      <ul className="space-y-2.5 flex-1">
                        {service.items?.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2.5 text-gray-400 text-sm group/item">
                            <div className="mt-2 w-1 h-1 rounded-full bg-[#d9b35a]/50 flex-shrink-0 group-hover/item:bg-[#d9b35a] transition-colors duration-300" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  )
}