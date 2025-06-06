import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.style.transition = 'none';
      el.style.opacity = '0.2';
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        el.style.transition = 'opacity 0.7s';
        el.style.opacity = '1';
      }, 300);
      setTimeout(() => {
        el.style.transition = '';
      }, 1200);
    }
  };

  return (
    <section
      className="w-full flex items-center justify-center"
      style={{
        minHeight: '500px',
        background: 'linear-gradient(90deg, #18181b 0%, #1e293b 60%, #22c55e 100%)'
      }}
    >
      {/* Desktop verzija (md i više) - tačno kao što si poslao */}
      <div className="hidden md:flex max-w-7xl w-full flex-row items-center justify-between px-4 py-10 md:py-0">
        {/* Left Side: Text */}
        <div className="flex-1 flex flex-col items-start justify-center text-left w-full md:w-auto">
          <h1
            className="mb-6 font-bold"
            style={{
              color: '#6aad2f',
              fontSize: '2.1em',
              lineHeight: 1.1,
              fontWeight: 700,
            }}
          >
            Gde svežina traje duže
          </h1>
          <p
            className="text-white max-w-xl mb-8"
            style={{
              fontSize: '1.15em',
              fontWeight: 400,
            }}
          >
            CARBON 6 godina garancije na frižidere i zamrzivače. Registrujte se i ostvarite 2+4 godine garancije na bilo koji Carbon frižider i zamrzivač <span style={{ fontWeight: 700 }}>kupljen do 31.12.2025.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => scrollToSection('featured-products')}
              className="px-8 py-2 border-2 border-white text-white rounded-full bg-transparent text-lg font-medium hover:bg-white hover:text-[#5e7e9b] transition-colors w-full sm:w-auto text-center"
            >
              Pogledaj proizvode
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('warranty')}
              className="px-8 py-2 border-2 border-white text-white rounded-full bg-transparent text-lg font-medium hover:bg-white hover:text-[#5e7e9b] transition-colors w-full sm:w-auto text-center"
            >
              Registruj garanciju
            </button>
          </div>
        </div>
        {/* Right Side: Image */}
        <div className="flex-1 flex items-center justify-center md:justify-end mt-10 md:mt-0 w-full md:w-auto">
          <img
            src="/uploads/Carbon_bt_hero_985x985.png"
            alt="Carbon Hero"
            className="object-contain drop-shadow-xl"
            style={{
              width: '100%',
              maxWidth: '500px',
              height: 'auto',
              maxHeight: '500px',
              minHeight: '220px',
            }}
          />
        </div>
      </div>
      {/* Mobilna verzija (manje od md) */}
      <div className="flex md:hidden max-w-7xl w-full flex-col items-center justify-center px-2 py-6 gap-4">
        <h1
          className="mb-2 font-bold text-2xl sm:text-3xl leading-tight text-center"
          style={{ color: '#6aad2f', fontWeight: 700 }}
        >
          Gde svežina traje duže
        </h1>
        <div className="w-full flex items-center justify-center mb-2">
          <img
            src="/uploads/Carbon_bt_hero_985x985.png"
            alt="Carbon Hero"
            className="object-contain drop-shadow-xl w-56 h-56 sm:w-72 sm:h-72"
            style={{ minHeight: '100px' }}
          />
        </div>
        <p
          className="text-white max-w-md mb-4 text-base sm:text-lg text-center"
          style={{ fontWeight: 400 }}
        >
          CARBON 6 godina garancije na frižidere i zamrzivače. Registrujte se i ostvarite 2+4 godine garancije na bilo koji Carbon frižider i zamrzivač <span style={{ fontWeight: 700 }}>kupljen do 31.12.2025.</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={() => scrollToSection('featured-products')}
            className="px-8 py-2 border-2 border-white text-white rounded-full bg-transparent text-base font-medium hover:bg-white hover:text-[#5e7e9b] transition-colors w-full sm:w-auto text-center"
          >
            Pogledaj proizvode
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('warranty')}
            className="px-8 py-2 border-2 border-white text-white rounded-full bg-transparent text-base font-medium hover:bg-white hover:text-[#5e7e9b] transition-colors w-full sm:w-auto text-center"
          >
            Registruj garanciju
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
