import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#C0C0C0] via-[#808080] to-[#000000]">
      <div className="text-center px-4 max-w-2xl mx-auto">
        {/* BXP Logo */}
        <div className="mb-12 relative w-72 h-40 mx-auto drop-shadow-2xl">
          <Image
            src="/bxp-logo.jpg"
            alt="BXP Developers Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Under Construction Message */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight drop-shadow-lg">
            Under Construction
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-60"></div>
          
          <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed max-w-lg mx-auto">
            We&apos;re crafting something extraordinary for BXP developers.
          </p>
          
          <p className="text-lg text-gray-300 font-medium">
            Check back soon.
          </p>
        </div>

        {/* Animated Construction Icon */}
        <div className="flex justify-center my-12">
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse"></div>
            <svg
              className="w-20 h-20 text-white relative z-10 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ animationDuration: '2s' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400 font-medium">
            BXP Developers
          </p>
          <p className="text-xs text-gray-500 mt-2 tracking-wider">
            Coming Soon
          </p>
        </div>
      </div>
    </main>
  );
}
