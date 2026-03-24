import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#1a1a1a]">
      <div className="text-center px-8">
        {/* BXP Logo - Centered */}
        <div className="relative w-80 h-48 mx-auto mb-8">
          <Image
            src="/bxp-logo.jpg"
            alt="BXP Developers"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Under Construction - Matching DEVELOPERS typography */}
        <div className="space-y-4">
          <h1 className="text-sm md:text-base font-normal text-gray-400 tracking-[0.35em] uppercase">
            Under Construction
          </h1>
          
          {/* Animated Ellipsis */}
          <div className="h-6 flex items-center justify-center">
            <span className="text-gray-500 text-lg tracking-widest animate-pulse" style={{ animationDuration: '2.5s' }}>
              .
            </span>
            <span className="text-gray-500 text-lg tracking-widest animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
              .
            </span>
            <span className="text-gray-500 text-lg tracking-widest animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '1s' }}>
              .
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
