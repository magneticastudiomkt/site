"use client"

import { useEffect, useRef } from 'react'

const clients = [
  { name: "Nonna Desnuda", logo: "/logos/nonna.png" },
  { name: "Quanta", logo: "/logos/quanta.png" },
  { name: "Shell", logo: "/logos/shell.png" },
  { name: "Rogga", logo: "/logos/rogga.png" },
  { name: "Fredy Pneus", logo: "/logos/fredy.png" },
  { name: "Caribor", logo: "/logos/caribor.png" },
  { name: "Honda", logo: "/logos/honda.png" },
  { name: "GVT", logo: "/logos/gvt.png" },
  { name: "ActionUP", logo: "/logos/actionup.png" },
  { name: "CDL", logo: "/logos/cdl.png" },
  { name: "SENAI", logo: "/logos/senai.png" },
]

export default function ClientsShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0

    const scroll = () => {
      scrollPosition += 0.5 // Velocidade do scroll
      
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      
      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="relative bg-black py-20 lg:py-24 overflow-hidden">
      {/* Background */}
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
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="relative">
              <div className="w-2 h-2 bg-[#d9b35a] rounded-full animate-pulse" />
              <div className="absolute inset-0 w-2 h-2 bg-[#d9b35a] rounded-full animate-ping" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#d9b35a]/70">
              Portfólio
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Clientes e Cases
          </h2>
          <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
            Ao longo de nossa trajetória, já desenvolvemos projetos para empresas de diferentes segmentos, 
            sempre com foco em estratégia, inovação e resultados concretos.
          </p>
        </div>

        {/* Infinite Scroll Logos */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling Container */}
          <div 
            ref={scrollRef}
            className="overflow-hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-12 lg:gap-16" style={{ width: 'fit-content' }}>
              {/* Duplicate array twice for seamless loop */}
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center h-20 lg:h-24 w-32 lg:w-40 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-500"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Cases Preview */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Case 1 */}
          <div className="group relative h-[400px] rounded-xl overflow-hidden border border-white/[0.08] hover:border-[#d9b35a]/30 transition-all duration-500">
            <img 
              src="/cases/case1.jpg" 
              alt="Case 1"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-[#d9b35a]/20 text-[#d9b35a] rounded-full mb-3">
                Imobiliário
              </span>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                CP Incorporações
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Tapumes de obra e painel de feira imobiliária
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[#d9b35a] text-sm font-semibold group/link">
                <span>Ver case completo</span>
                <svg 
                  className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Case 2 */}
          <div className="group relative h-[400px] rounded-xl overflow-hidden border border-white/[0.08] hover:border-[#d9b35a]/30 transition-all duration-500">
            <img 
              src="/cases/case2.jpg" 
              alt="Case 2"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-[#d9b35a]/20 text-[#d9b35a] rounded-full mb-3">
                Branding
              </span>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                Conceito Criativo
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Marca como expressão criativa e elegante da essência da empresa
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[#d9b35a] text-sm font-semibold group/link">
                <span>Ver case completo</span>
                <svg 
                  className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Case 3 - Featured */}
          <div className="group relative h-[400px] md:col-span-2 lg:col-span-1 rounded-xl overflow-hidden border border-[#d9b35a]/20 hover:border-[#d9b35a]/40 transition-all duration-500">
            <img 
              src="/cases/case3.jpg" 
              alt="Case 3"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="absolute top-4 right-4">
              <div className="w-2 h-2 bg-[#d9b35a] rounded-full shadow-[0_0_10px_rgba(217,179,90,0.8)]" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-[#d9b35a] text-black rounded-full mb-3">
                Destaque
              </span>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                Água Marinha Residencial
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Criação de site institucional e lançamento digital com resultados expressivos
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[#d9b35a] text-sm font-semibold group/link">
                <span>Ver case completo</span>
                <svg 
                  className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
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
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}