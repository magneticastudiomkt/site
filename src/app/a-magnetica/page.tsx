"use client"

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Page() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const router = useRouter()

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
    <>
      <Header />
      
      {/* Botão Voltar */}
      <div className="fixed top-24 left-6 z-50">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-2 px-4 py-3 bg-white/[0.03] border border-white/[0.1] rounded-lg hover:border-[#d9b35a]/50 hover:bg-white/[0.05] transition-all duration-300"
        >
          <svg 
            className="w-5 h-5 text-gray-400 group-hover:text-[#d9b35a] transition-colors duration-300" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-sm font-semibold text-gray-400 group-hover:text-[#d9b35a] transition-colors duration-300">
            Voltar
          </span>
        </button>
      </div>

      <div className="bg-black">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 opacity-[0.015]" style={{
            backgroundImage: `linear-gradient(rgba(217,179,90,1) 1px, transparent 1px), linear-gradient(90deg, rgba(217,179,90,1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
          
          <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] opacity-[0.04] blur-[150px] pointer-events-none" style={{
            background: 'radial-gradient(circle, #d9b35a 0%, transparent 70%)'
          }} />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32">
            <div className="max-w-4xl">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#d9b35a] border border-[#d9b35a]/30 rounded-full">
                  A Magnética
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
                Transformamos estratégia em{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9b35a] to-[#e0bb66]">
                  resultados reais
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-400 leading-relaxed">
                Nascemos da fusão entre experiência consolidada e inovação digital, 
                unindo décadas de expertise em consultoria estratégica com criatividade 
                e tecnologia de ponta.
              </p>
            </div>
          </div>
        </section>

        {/* Nossa História */}
        <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.01]" style={{
            backgroundImage: `linear-gradient(rgba(217,179,90,1) 1px, transparent 1px), linear-gradient(90deg, rgba(217,179,90,1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-2 h-2 bg-[#d9b35a] rounded-full animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#d9b35a]/70">
                    Nossa história
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white">
                  De duas forças, uma potência
                </h2>
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                  <p>
                    A Magnética Marketing nasceu da fusão estratégica entre a <strong className="text-white">Icon Marketing</strong> e 
                    a <strong className="text-white">Magnética Studio</strong>, unindo o melhor de dois mundos: consultoria estratégica 
                    de alto nível e criatividade digital inovadora.
                  </p>
                  <p>
                    Com mais de 40 anos de experiência acumulada, atendemos empresas de diversos segmentos, 
                    de pequenos negócios locais a grandes corporações nacionais. Cada projeto é uma oportunidade 
                    de aplicar nossa metodologia única que combina análise de mercado, estratégia criativa e 
                    tecnologia de ponta.
                  </p>
                  <p>
                    Hoje, somos referência em marketing estratégico que gera resultados mensuráveis e sustentáveis, 
                    sempre colocando a inteligência de dados e a inovação a serviço do crescimento dos nossos clientes.
                  </p>
                </div>
              </div>

              <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d9b35a]/20 to-transparent rounded-2xl blur-xl" />
                  <div className="relative bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] rounded-2xl p-10 space-y-8">
                    <div className="space-y-3">
                      <div className="text-5xl font-bold text-[#d9b35a]">40+</div>
                      <p className="text-gray-400">anos de experiência combinada em marketing e negócios</p>
                    </div>
                    <div className="h-px bg-gradient-to-r from-[#d9b35a]/20 to-transparent" />
                    <div className="space-y-3">
                      <div className="text-5xl font-bold text-[#d9b35a]">+100</div>
                      <p className="text-gray-400">projetos realizados com sucesso</p>
                    </div>
                    <div className="h-px bg-gradient-to-r from-[#d9b35a]/20 to-transparent" />
                    <div className="space-y-3">
                      <p className="text-sm uppercase tracking-wider text-[#d9b35a]/70 font-semibold">Principais clientes</p>
                      <p className="text-gray-300">Shell, GVT, Rogga, Arroz Campeiro, Honda, CDL, SENAI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Manifesto */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#d9b35a]/5 to-transparent" />
          
          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[#d9b35a] rounded-full animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#d9b35a]/70">
                  Nosso propósito
                </span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-8">
                Por que existimos
              </h2>
            </div>
            <p className="text-2xl lg:text-3xl text-gray-300 leading-relaxed font-light mb-8">
              Acreditamos que <strong className="text-white font-semibold">toda marca tem um potencial inexplorado</strong>. 
              Nosso propósito é desbloquear esse potencial através de estratégia inteligente, 
              criatividade impactante e tecnologia que transforma dados em decisões.
            </p>
            <p className="text-xl text-[#d9b35a] font-semibold">
              Não fazemos marketing. Construímos futuros.
            </p>
          </div>
        </section>

        {/* Missão, Visão, Valores */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.01]" style={{
            backgroundImage: `linear-gradient(rgba(217,179,90,1) 1px, transparent 1px), linear-gradient(90deg, rgba(217,179,90,1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#d9b35a]/10 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.08] rounded-xl p-8 h-full hover:border-[#d9b35a]/30 transition-all duration-500">
                  <div className="w-12 h-12 bg-[#d9b35a]/10 border border-[#d9b35a]/30 rounded-lg flex items-center justify-center mb-6">
                    <div className="w-3 h-3 bg-[#d9b35a] rounded-full" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Missão</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Fortalecer marcas e negócios através de soluções estratégicas integradas, 
                    combinando consultoria, criatividade e tecnologia para gerar resultados 
                    reais e sustentáveis.
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#d9b35a]/10 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.08] rounded-xl p-8 h-full hover:border-[#d9b35a]/30 transition-all duration-500">
                  <div className="w-12 h-12 bg-[#d9b35a]/10 border border-[#d9b35a]/30 rounded-lg flex items-center justify-center mb-6">
                    <div className="w-3 h-3 bg-[#d9b35a] rounded-full" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Visão</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Ser referência nacional em marketing estratégico que une dados, 
                    criatividade e tecnologia, reconhecida pela capacidade de transformar 
                    desafios complexos em oportunidades de crescimento.
                  </p>
                </div>
              </div>

              <div className="group relative md:col-span-3 lg:col-span-1">
                <div className="absolute inset-0 bg-gradient-to-br from-[#d9b35a]/10 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.08] rounded-xl p-8 h-full hover:border-[#d9b35a]/30 transition-all duration-500">
                  <div className="w-12 h-12 bg-[#d9b35a]/10 border border-[#d9b35a]/30 rounded-lg flex items-center justify-center mb-6">
                    <div className="w-3 h-3 bg-[#d9b35a] rounded-full" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Valores</h3>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#d9b35a] rounded-full mt-2 flex-shrink-0" />
                      <span><strong className="text-white">Inovação:</strong> Buscamos constantemente novas soluções</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#d9b35a] rounded-full mt-2 flex-shrink-0" />
                      <span><strong className="text-white">Resultado:</strong> Focamos em impacto mensurável</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#d9b35a] rounded-full mt-2 flex-shrink-0" />
                      <span><strong className="text-white">Ética:</strong> Transparência em todas as relações</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#d9b35a] rounded-full mt-2 flex-shrink-0" />
                      <span><strong className="text-white">Parceria:</strong> Sucesso compartilhado</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d9b35a]/5 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[#d9b35a] rounded-full animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#d9b35a]/70">
                  Diferenciais
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                O que nos torna únicos
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.08] rounded-xl p-8 hover:border-[#d9b35a]/30 transition-all duration-500">
                <h3 className="text-xl font-bold text-[#d9b35a] mb-3">Estratégia + Dados</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Decisões baseadas em inteligência de mercado e análise preditiva com IA
                </p>
              </div>

              <div className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.08] rounded-xl p-8 hover:border-[#d9b35a]/30 transition-all duration-500">
                <h3 className="text-xl font-bold text-[#d9b35a] mb-3">Criatividade Aplicada</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Soluções criativas que conectam emocionalmente e geram resultados
                </p>
              </div>

              <div className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.08] rounded-xl p-8 hover:border-[#d9b35a]/30 transition-all duration-500">
                <h3 className="text-xl font-bold text-[#d9b35a] mb-3">Tecnologia de Ponta</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Automação, IA e ferramentas digitais para máxima eficiência
                </p>
              </div>

              <div className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.08] rounded-xl p-8 hover:border-[#d9b35a]/30 transition-all duration-500">
                <h3 className="text-xl font-bold text-[#d9b35a] mb-3">Visão Consultiva</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Atendimento estratégico que vai além da execução
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(rgba(217,179,90,1) 1px, transparent 1px), linear-gradient(90deg, rgba(217,179,90,1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />

          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Pronto para transformar sua marca?
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Vamos conversar sobre como podemos ajudar seu negócio a crescer
            </p>
            <a 
              href="/contato" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#d9b35a] text-black text-lg font-semibold hover:bg-[#e0bb66] hover:scale-105 transition-all duration-300"
            >
              <span>Fale com a gente</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  )
}