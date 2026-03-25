import Image from "next/image";
import Link from "next/link";

const pillars = [
  { title: "Invest", desc: "Passive access to high-end real estate development" },
  { title: "Design", desc: "Architecture, engineering, interiors, and visualization" },
  { title: "Build", desc: "Precision construction with full execution control" },
  { title: "Remodel", desc: "Luxury transformations, built for value" },
  { title: "Sourcing — Supply Chain", desc: "Global sourcing engineered for quality and efficiency" },
  { title: "Staging", desc: "Designed to maximize perception and final sale price" },
];

const processSteps = [
  { num: "01", title: "Acquire", desc: "Strategic property selection" },
  { num: "02", title: "Design", desc: "Vision to blueprint" },
  { num: "03", title: "Source", desc: "Premium materials" },
  { num: "04", title: "Build", desc: "Precision execution" },
  { num: "05", title: "Stage", desc: "Curated presentation" },
  { num: "06", title: "Sell", desc: "Maximum value realization" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f7]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf9f7]/80 backdrop-blur-md">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-between h-32">
            <Link href="/" className="relative w-80 h-28 group">
              <Image src="/bxp-logo.png" alt="BXP" fill className="object-contain opacity-0" priority />
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700" style={{maskImage: 'url(/bxp-logo.png)', WebkitMaskImage: 'url(/bxp-logo.png)', maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center'}} />
            </Link>
            <div className="hidden md:flex items-center space-x-12">
              {["About", "Properties", "Process", "Contact"].map((item) => (
                <Link 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[13px] uppercase tracking-[0.2em] text-gray-500 hover:text-gray-800 transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section — Full Width with Miami Pool Home */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image — Miami Luxury Pool Home - NO GRADIENT */}
        <div className="absolute inset-0 bg-[#0a0a0a]">
          <Image
            src="/hero-facade.jpg"
            sizes="100vw"
            alt="Miami luxury pool home"
            fill
            className="object-cover w-full h-full scale-110"
            style={{ objectPosition: 'center center' }}
            quality={100}
            priority
            unoptimized
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-8">
          <div className="text-center w-full max-w-5xl mx-auto">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-gray-800 leading-[1.1] tracking-tight">
              Timeless by Design.
              <span className="block font-light mt-2">Exceptional by Execution.</span>
            </h1>
            
            <p className="mt-8 text-sm md:text-base font-medium tracking-[0.2em] max-w-xl mx-auto leading-relaxed">
              <span className="bg-[#faf9f7]/90 px-4 py-2 text-gray-700">MIAMI LUXURY DEVELOPMENT</span>
            </p>

            {/* CTA - Main Actions - BLUE fixed, BROWN hover */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="#about"
                className="inline-block px-12 py-4 text-[11px] uppercase tracking-[0.3em] bg-[#4A5568] text-white border border-[#4A5568] hover:bg-[#7D6B58] hover:border-[#7D6B58] transition-all duration-500 min-w-[180px] text-center"
              >
                Invest
              </Link>
              <Link 
                href="#about"
                className="inline-block px-12 py-4 text-[11px] uppercase tracking-[0.3em] bg-[#4A5568] text-white border border-[#4A5568] hover:bg-[#7D6B58] hover:border-[#7D6B58] transition-all duration-500 min-w-[180px] text-center"
              >
                Build
              </Link>
              <Link 
                href="#about"
                className="inline-block px-12 py-4 text-[11px] uppercase tracking-[0.3em] bg-[#4A5568] text-white border border-[#4A5568] hover:bg-[#7D6B58] hover:border-[#7D6B58] transition-all duration-500 min-w-[180px] text-center"
              >
                Remodel
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-3">
            <span className="text-[9px] uppercase tracking-[0.4em] text-gray-600">Scroll</span>
            <div className="w-px h-16 bg-gray-500" />
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
          <div className="mb-20">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Services</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extralight text-gray-800">
              Full-Spectrum Development
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {pillars.map((pillar, i) => (
              <div 
                key={pillar.title}
                className="group bg-white p-12 lg:p-16 hover:bg-[#faf9f7] transition-colors duration-500 cursor-pointer"
              >
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-6 text-2xl font-light text-gray-700 group-hover:text-gray-900 transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm text-gray-400 font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline — Horizontal Visual Strip */}
      <section className="py-32 bg-[#faf9f7] overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
          <div className="mb-20">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Process</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extralight text-gray-800">
              From Vision to Reality
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent hidden lg:block" />
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {processSteps.map((step) => (
                <div key={step.title} className="relative text-center group">
                  <div className="w-16 h-16 mx-auto rounded-full bg-white border border-gray-200 flex items-center justify-center mb-6 group-hover:border-gray-400 transition-colors duration-300">
                    <span className="text-[10px] text-gray-400 tracking-wider">{step.num}</span>
                  </div>
                  <h4 className="text-lg font-light text-gray-700 mb-2">{step.title}</h4>
                  <p className="text-xs text-gray-400 font-light">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Preview — Miami Pool Homes */}
      <section id="properties" className="py-32 bg-white">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Portfolio</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-extralight text-gray-800">
                Featured Developments
              </h2>
            </div>
            <Link 
              href="#"
              className="hidden md:block text-[11px] uppercase tracking-[0.2em] text-gray-500 hover:text-gray-800 transition-colors border-b border-gray-300 pb-1"
            >
              View All
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {[
              { name: "Modern Pool Villa", loc: "Miami Beach", status: "Complete", img: "/property-1.jpg" },
              { name: "Contemporary Estate", loc: "Coconut Grove", status: "In Development", img: "/property-2.jpg" },
              { name: "Luxury Residence", loc: "Brickell", status: "Coming Soon", img: "/property-3.jpg" },
            ].map((prop) => (
              <div key={prop.name} className="group cursor-pointer">
                <div className="mb-6 aspect-[16/10] overflow-hidden relative">
                  <Image
                    src={prop.img}
                    alt={prop.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="text-lg font-light text-gray-800 group-hover:text-gray-600 transition-colors">
                  {prop.name}
                </h3>
                <p className="text-xs text-gray-400 uppercase tracking-[0.15em] mt-1">{prop.loc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-32 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Contact</span>
          <h2 className="mt-6 text-4xl md:text-5xl font-extralight text-gray-800 leading-tight">
            Start Your Project
          </h2>
          <p className="mt-6 text-gray-500 font-light max-w-xl mx-auto">
            Let us bring your vision to life with precision, luxury, and timeless design.
          </p>
          <div className="mt-12">
            <Link 
              href="mailto:info@bxpdevelopers.com"
              className="inline-block px-12 py-5 text-[11px] uppercase tracking-[0.3em] bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Map Section - Full Width with Real Google Maps */}
      <section className="w-full bg-[#f5f3f0]">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-16 py-20">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Location</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extralight text-gray-800">
              Boynton Beach, Florida
            </h2>
          </div>
        </div>
        <div className="w-full h-[500px] relative overflow-hidden grayscale">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.5830417244787!2d-80.12345678901234!3d26.560123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9250000000000%3A0x0000000000000000!2s2900%20High%20Ridge%20Rd%2C%20Boynton%20Beach%2C%20FL%2033426!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          />
          {/* Champagne overlay for brand consistency */}
          <div className="absolute inset-0 bg-[#faf9f7]/10 pointer-events-none" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Logo & Copyright */}
            <div className="space-y-6">
              <div className="relative w-48 h-16">
                <Image src="/bxp-logo.png" alt="BXP" fill className="object-contain opacity-70" />
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-300">
                © 2026 BXP Developers. All rights reserved.
              </p>
            </div>

            {/* Address */}
            <div className="space-y-4">
              <h4 className="text-[11px] uppercase tracking-[0.25em] text-gray-400">Address</h4>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                2900 High Ridge Road<br />
                Boynton Beach, Florida 33426
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-[11px] uppercase tracking-[0.25em] text-gray-400">Contact</h4>
              <a 
                href="mailto:info@bxpdevelopers.com" 
                className="block text-sm text-gray-500 font-light hover:text-gray-700 transition-colors"
              >
                info@bxpdevelopers.com
              </a>
              <a 
                href="https://instagram.com/developersbxp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-500 font-light hover:text-gray-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @developersbxp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

