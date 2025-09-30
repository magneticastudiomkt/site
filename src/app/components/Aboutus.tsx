"use client"

import { useEffect, useRef, useState } from 'react'

export default function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative bg-black py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Subtle grid */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(217,179,90,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(217,179,90,1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
        
        {/* Glow mais sutil */}
        <div 
          className="absolute top-1/2 right-1/4 w-[600px] h-[600px] opacity-[0.04] blur-[120px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #d9b35a 0%, transparent 70%)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-start">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8 lg:pr-8">
            
            {/* Small eyebrow */}
            <div 
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="inline-block text-[#d9b35a] text-xs font-semibold uppercase tracking-[0.25em]">
                Sobre nós
              </span>
              <div className="mt-2 w-12 h-[1px] bg-gradient-to-r from-[#d9b35a] to-transparent" />
            </div>

            {/* Text blocks */}
            <div className="space-y-6 max-w-xl">
              <p 
                className={`text-lg lg:text-xl text-gray-300 leading-relaxed transition-all duration-700 delay-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                A Magnética Marketing nasceu da fusão entre a Icon Marketing e a Magnética Studio, 
                unindo décadas de experiência em consultoria estratégica com criatividade e inovação digital.
              </p>

              <p 
                className={`text-lg lg:text-xl text-gray-300 leading-relaxed transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Somos uma agência que conecta estratégia, tecnologia e criatividade para desenvolver 
                planos de marketing que geram resultados reais e sustentáveis.
              </p>

              <p 
                className={`text-lg lg:text-xl text-gray-300 leading-relaxed transition-all duration-700 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Nosso propósito é fortalecer marcas e negócios, oferecendo soluções completas que vão 
                do planejamento estratégico à execução criativa, sempre apoiados por inteligência de 
                mercado e inteligência artificial para tomada de decisão.
              </p>
            </div>
          </div>

          {/* Right Column - Tech Stats Card */}
          <div 
            className={`lg:sticky lg:top-24 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative group">
              
              {/* Outer tech border effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-[#d9b35a]/20 via-transparent to-[#d9b35a]/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-700" />
              
              {/* Card Content */}
              <div className="relative bg-gradient-to-br from-[#0a0a0a] to-black border border-[#d9b35a]/10 rounded-2xl p-8 lg:p-10 overflow-hidden group-hover:border-[#d9b35a]/30 transition-all duration-700">
                
                {/* Tech grid overlay */}
                <div 
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(217,179,90,1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(217,179,90,1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }}
                />

                {/* Animated corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#d9b35a]/20 rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#d9b35a]/20 rounded-br-2xl" />

                {/* Glowing dot */}
                <div className="absolute top-4 right-4">
                  <div className="relative">
                    <div className="w-2 h-2 bg-[#d9b35a] rounded-full animate-pulse" />
                    <div className="absolute inset-0 w-2 h-2 bg-[#d9b35a] rounded-full animate-ping" />
                  </div>
                </div>

                <div className="relative space-y-8">
                  
                  {/* Stat 1 */}
                  <div className="space-y-2 group/item">
                    <p className="text-[#d9b35a]/70 text-[10px] font-bold uppercase tracking-[0.3em]">
                      Experiência
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                      40+ anos de experiência em marketing e negócios
                    </h3>
                  </div>

                  <div className="h-[1px] bg-gradient-to-r from-[#d9b35a]/20 via-[#d9b35a]/5 to-transparent" />

                  {/* Stat 2 */}
                  <div className="space-y-2 group/item">
                    <p className="text-[#d9b35a]/70 text-[10px] font-bold uppercase tracking-[0.3em]">
                      Portfólio
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                      +100 projetos realizados
                    </h3>
                  </div>

                  <div className="h-[1px] bg-gradient-to-r from-[#d9b35a]/20 via-[#d9b35a]/5 to-transparent" />

                  {/* Stat 3 */}
                  <div className="space-y-2 group/item">
                    <p className="text-[#d9b35a]/70 text-[10px] font-bold uppercase tracking-[0.3em]">
                      Clientes
                    </p>
                    <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
                      Empresas atendidas: Shell, GVT, Rogga, Arroz Campeiro, entre outras
                    </p>
                  </div>

                  {/* Tech arrow button */}
                  <div className="pt-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#d9b35a]/5 border border-[#d9b35a]/20 group-hover:bg-[#d9b35a]/10 group-hover:border-[#d9b35a]/40 transition-all duration-500">
                      <svg 
                        className="w-5 h-5 text-[#d9b35a] group-hover:translate-x-1 transition-transform duration-500" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ambient tech glow */}
              <div 
                className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 blur-[40px] transition-opacity duration-700"
                style={{
                  background: 'radial-gradient(circle at 70% 30%, rgba(217,179,90,0.15) 0%, transparent 60%)'
                }}
              />
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
      `}</style>
    </section>
  )
}