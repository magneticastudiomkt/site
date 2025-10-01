"use client"

import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email:', email)
    setEmail('')
  }

  return (
    <footer className="relative bg-black border-t border-white/[0.05] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(217,179,90,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(217,179,90,1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] opacity-[0.02] blur-[150px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #d9b35a 0%, transparent 70%)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <div className="lg:col-span-5 space-y-8">
            <div>
              <img 
                src="/logo.png" 
                alt="Magnética Marketing" 
                className="h-12 w-auto opacity-90"
              />
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Transformamos marcas através de estratégia, tecnologia e criatividade, 
              gerando resultados reais e sustentáveis.
            </p>

            <div className="max-w-md">
              <h3 className="text-white font-semibold mb-4">
                Receba nossos insights
              </h3>
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full px-5 py-3 bg-white/[0.03] border border-white/[0.1] rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#d9b35a]/50 transition-colors duration-300"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2 bg-[#d9b35a] text-black text-sm font-semibold rounded-md hover:bg-[#e0bb66] transition-colors duration-300"
                >
                  Enviar
                </button>
              </form>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Siga-nos</h3>
              <div className="flex items-center gap-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group relative">
                  <div className="absolute inset-0 bg-[#d9b35a]/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative w-11 h-11 flex items-center justify-center bg-white/[0.03] border border-white/[0.1] rounded-lg group-hover:border-[#d9b35a]/50 group-hover:bg-white/[0.05] transition-all duration-300">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-[#d9b35a] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </a>

                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group relative">
                  <div className="absolute inset-0 bg-[#d9b35a]/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative w-11 h-11 flex items-center justify-center bg-white/[0.03] border border-white/[0.1] rounded-lg group-hover:border-[#d9b35a]/50 group-hover:bg-white/[0.05] transition-all duration-300">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-[#d9b35a] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                </a>

                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="group relative">
                  <div className="absolute inset-0 bg-[#d9b35a]/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative w-11 h-11 flex items-center justify-center bg-white/[0.03] border border-white/[0.1] rounded-lg group-hover:border-[#d9b35a]/50 group-hover:bg-white/[0.05] transition-all duration-300">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-[#d9b35a] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                </a>

                <a   href="https://wa.me/5547997336808?text=Oi%20vim%20pelo%20site%20da%20Magn%C3%A9tica"
                   target="_blank" rel="noopener noreferrer" className="group relative">
                  <div className="absolute inset-0 bg-[#d9b35a]/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative w-11 h-11 flex items-center justify-center bg-white/[0.03] border border-white/[0.1] rounded-lg group-hover:border-[#d9b35a]/50 group-hover:bg-white/[0.05] transition-all duration-300">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-[#d9b35a] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            <div>
              <h3 className="text-white font-semibold mb-4">Empresa</h3>
              <ul className="space-y-3">
                <li><a href="/sobre" className="text-gray-400 hover:text-[#d9b35a] transition-colors duration-300 text-sm">Sobre nós</a></li>
                <li><a href="/equipe" className="text-gray-400 hover:text-[#d9b35a] transition-colors duration-300 text-sm">Equipe</a></li>
                <li><a href="/cases" className="text-gray-400 hover:text-[#d9b35a] transition-colors duration-300 text-sm">Cases</a></li>
                <li><a href="/insights" className="text-gray-400 hover:text-[#d9b35a] transition-colors duration-300 text-sm">Insights</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Serviços</h3>
              <ul className="space-y-3">
                <li><a href="/estrategia" className="text-gray-400 hover:text-[#d9b35a] transition-colors duration-300 text-sm">Estratégia</a></li>
                <li><a href="/midias-digitais" className="text-gray-400 hover:text-[#d9b35a] transition-colors duration-300 text-sm">Mídias Digitais</a></li>
                <li><a href="/inteligencia" className="text-gray-400 hover:text-[#d9b35a] transition-colors duration-300 text-sm">Inteligência</a></li>
                <li><a href="/outsourcing" className="text-gray-400 hover:text-[#d9b35a] transition-colors duration-300 text-sm">Outsourcing</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contato</h3>
              <ul className="space-y-3">
                <li><a href="/contato" className="text-gray-400 hover:text-[#d9b35a] transition-colors duration-300 text-sm">Fale conosco</a></li>
                <li><a href="mailto:contato@magnetica.com" className="text-gray-400 hover:text-[#d9b35a] transition-colors duration-300 text-sm">contato@magnetica.com</a></li>
                <li><a href="tel:+5547999999999" className="text-gray-400 hover:text-[#d9b35a] transition-colors duration-300 text-sm">(47) 99293990</a></li>
                <li><p className="text-gray-400 text-sm">Joinville, SC</p></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-white/[0.05]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Magnética Marketing. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a href="/privacidade" className="text-gray-500 hover:text-[#d9b35a] transition-colors duration-300 text-sm">Privacidade</a>
              <a href="/termos" className="text-gray-500 hover:text-[#d9b35a] transition-colors duration-300 text-sm">Termos de uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}