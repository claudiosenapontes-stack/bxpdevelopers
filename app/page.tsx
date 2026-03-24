import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="text-center px-4">
        {/* BXP Logo */}
        <div className="mb-8 relative w-64 h-32 mx-auto">
          <Image
            src="/bxp-logo.jpg"
            alt="BXP Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Under Construction Message */}
        <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
          Under Construction
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-md mx-auto">
          We&apos;re building something amazing for BXP developers. 
          Check back soon!
        </p>

        {/* Construction Icon */}
        <div className="flex justify-center mb-8">
          <svg
            className="w-16 h-16 text-amber-500 animate-pulse"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >n            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
        </div>

        {/* Contact Info */}
        <div className="text-sm text-slate-500">
          <p>BXP Developers</p>
          <p className="mt-1">Coming Soon</p>
        </div>
      </div>
    </main>
  );
}
