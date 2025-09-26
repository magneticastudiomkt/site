export default function Home() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-32 w-48 h-48 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-lg animate-float-slow"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        
        {/* Logo/Brand */}
        <div className="mb-8 relative">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
            MAGNÉTICA
          </h1>
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl animate-pulse"></div>
        </div>

        {/* Subtitle */}
        <div className="mb-12 text-center">
          <h2 className="text-xl md:text-2xl text-gray-300 font-light tracking-widest mb-2">
            MARKETING
          </h2>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
        </div>

        {/* Main Message */}
        <div className="text-center mb-12 max-w-2xl">
          <p className="text-2xl md:text-3xl text-white font-light mb-6 leading-relaxed">
            Página em <span className="text-cyan-400 font-semibold">construção</span>
          </p>
          <p className="text-lg md:text-xl text-gray-400 font-light">
            Se prepare para uma experiência
            <span className="block text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text font-semibold mt-2">
              completamente inovadora
            </span>
          </p>
        </div>

        {/* Loading Animation */}
        <div className="mb-12">
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-md mb-8">
          <div className="relative">
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-loading-bar"></div>
            </div>
            <div className="absolute -top-6 right-0 text-cyan-400 text-sm font-mono">
              Loading...
            </div>
          </div>
        </div>

        {/* Coming Soon Text */}
        <div className="text-center">
          <p className="text-gray-500 text-sm tracking-wider">
            ALGO INCRÍVEL ESTÁ CHEGANDO
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-500/10 to-transparent"></div>
    </div>
  );
}