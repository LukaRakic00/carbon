import React, { useState, useEffect } from 'react';
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

  // Kombinacije slike i pozadine
  const heroCombos = [
    {
      img: '/uploads/Carbon_bt_hero.png',
      bg: 'linear-gradient(90deg, #18181b 0%, #1e293b 60%, #22c55e 100%)',
      textBg: 'transparent',
      imgBg: 'transparent',
      title: 'Gde svežina traje duže',
      desc: 'CARBON 6 godina garancije na frižidere i zamrzivače. Registrujte se i ostvarite 2+4 godine garancije na bilo koji Carbon frižider i zamrzivač <span style="font-weight:700">kupljen do 31.12.2025.</span>',
    },
    {
      img: '/uploads/carbon_tv_hero.png',
      bg: 'linear-gradient(90deg, #18181b 0%, #18181b 40%, #1e293b 60%, #19BAFF 100%)',
      textBg: 'linear-gradient(90deg, rgba(25,186,255,0.10) 0%, rgba(25,186,255,0.18) 100%)',
      imgBg: 'radial-gradient(circle at 70% 60%, rgba(25,186,255,0.25) 0%, rgba(25,186,255,0.10) 40%, transparent 80%)',
      title: 'Pametan izbor za savršenu sliku',
      desc: 'CARBON garancija na televizore. Registrujte se i ostvarite <b>2+1 godinu garancije</b> za Android TV i <b>3+2 godine garancije</b> za WebOS TV <span style="font-weight:700">kupljene do 31.12.2025.</span>',
    },
  ];
  const [heroIdx, setHeroIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIdx((prev) => (prev + 1) % heroCombos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);
  // Sinkronizovan fade za tekst i sliku zajedno (i scale efekt)
  const [fade, setFade] = useState(true);
  useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => setFade(true), 500);
    return () => clearTimeout(timeout);
  }, [heroIdx]);

  return (
    <section
      className="w-full flex items-center justify-center transition-colors duration-700"
      style={{
        minHeight: '500px',
        background: heroCombos[heroIdx].bg,
        transition: 'background 1s cubic-bezier(0.4,0,0.2,1)'
      }}
    >
      {/* Desktop verzija (md i više) - tačno kao što si poslao */}
      <div className="hidden md:flex max-w-7xl w-full flex-row items-center justify-between px-4 py-10 md:py-0">
        {/* Left Side: Text sa pozadinom */}
        <div className="flex-1 flex flex-col items-start justify-center text-left w-full md:w-auto transition-all duration-700">
          <h1
            className={`mb-6 font-bold transition-all duration-700 ${fade ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{
              color: '#6aad2f',
              fontSize: '2.1em',
              lineHeight: 1.1,
              fontWeight: 700,
              transition: 'color 1s',
            }}
            dangerouslySetInnerHTML={{ __html: heroCombos[heroIdx].title }}
          />
          <p
            className={`text-white max-w-xl mb-8 transition-all duration-700 ${fade ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{
              fontSize: '1.15em',
              fontWeight: 400,
              transition: 'color 1s',
            }}
            dangerouslySetInnerHTML={{ __html: heroCombos[heroIdx].desc }}
          />
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
        {/* Slika je sada direktno u glavnom flex containeru, bez posebnog wrappera */}
        <img
          src={heroCombos[heroIdx].img}
          alt="Carbon Hero"
          className={`object-contain transition-all duration-700 ${fade ? 'opacity-100 scale-100' : 'opacity-0 scale-105'} ml-auto`}
          style={{
            width: '100%',
            maxWidth: '500px',
            height: 'auto',
            maxHeight: '500px',
            minHeight: '220px',
            border: 'none',
            boxShadow: 'none',
            borderRadius: 0,
            margin: 0,
            background: 'transparent',
            transition: 'opacity 0.7s, transform 0.7s cubic-bezier(0.4,0,0.2,1)'
          }}
        />
      </div>
      {/* Mobilna verzija (manje od md) */}
      <div className="flex md:hidden max-w-7xl w-full flex-col items-center justify-center px-2 py-6 gap-4">
        <h1
          className="mb-2 font-bold text-2xl sm:text-3xl leading-tight text-center"
          style={{ color: '#6aad2f', fontWeight: 700 }}
        >
          {heroCombos[heroIdx].title}
        </h1>
        <div className="w-full flex items-center justify-center mb-2">
          <img
            src={heroCombos[heroIdx].img}
            alt="Carbon Hero"
            className="object-contain w-56 h-56 sm:w-72 sm:h-72 transition-all duration-700"
            style={{ minHeight: '100px', border: 'none', boxShadow: 'none', borderRadius: 0, margin: 0, background: 'transparent' }}
          />
        </div>
        <p
          className="text-white max-w-md mb-4 text-base sm:text-lg text-center"
          style={{ fontWeight: 400 }}
        >
          <span dangerouslySetInnerHTML={{ __html: heroCombos[heroIdx].desc }} />
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
