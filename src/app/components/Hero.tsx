"use client";

export default function Hero() {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden flex items-center">
      {/* Background subtil - apenas grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(217,179,90,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(217,179,90,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      
      {/* Glow sutil no canto */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px]"></div>

      {/* Container centralizado */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 py-20">

        {/* Logo */}
        <div className="mb-16">
          <img 
            src="/logo.png" 
            alt="Magnética Marketing" 
            className="h-16 w-auto"
          />
        </div>

        {/* Headline - clean e direto */}
        <div className="mb-8 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight">
            Estratégia, tecnologia<br />e criatividade{" "}
            <span className="text-[#c7ae6a]">
              para transformar<br />marcas
            </span>
          </h1>
        </div>

        {/* Subtítulo - mais espaçado */}
        <div className="mb-12 max-w-2xl">
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            Unimos consultoria estratégica, criatividade e inteligência artificial para gerar valor sustentável.
          </p>
        </div>

        {/* CTA limpo */}
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <a 
            href="/contato" 
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#c7ae6a] text-black font-semibold rounded-sm transition-all duration-300 hover:bg-[#d4b976]"
          >
            <span>Transforme sua marca</span>
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          
          <a 
            href="/cases" 
            className="inline-flex items-center gap-2 px-8 py-4 text-gray-300 font-semibold rounded-sm transition-all duration-300 hover:text-white"
          >
            <span>Ver cases</span>
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}