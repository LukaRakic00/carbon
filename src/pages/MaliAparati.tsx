import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    name: 'Carbon Air Fryer 2,5l FR-CA1701B',
    model: 'FR-CA1701B',
    images: [
      '/uploads/carbon air fryer 2,5l/160062.jpg',
      '/uploads/carbon air fryer 2,5l/160063.jpg',
      '/uploads/carbon air fryer 2,5l/160064.jpg',
      '/uploads/carbon air fryer 2,5l/160065.jpg',
      '/uploads/carbon air fryer 2,5l/160066.jpg',
    ],
    specs: [
      'Napon: 220-240V~50/60Hz',
      'Snaga: 1200W',
      'Kapacitet: 2,5 l',
      'Temperatura: 80-200C',
      'Tajmer: do 30 minuta',
      'Tip: mehanički, dva dugmeta',
      'Dužina kabla: 80cm',
      'Šifra: 8606112415361',
    ],
  },
  {
    name: 'Carbon Air Fryer 6l KAF-60BE',
    model: 'KAF-60BE',
    images: [
      '/uploads/carbon air fryer 6l/1.jpg',
      '/uploads/carbon air fryer 6l/2.jpg',
      '/uploads/carbon air fryer 6l/3.jpg',
      '/uploads/carbon air fryer 6l/4.jpg',
      '/uploads/carbon air fryer 6l/5.jpg',
      '/uploads/carbon air fryer 6l/6.png',
    ],
    specs: [
      'Napon: 220-240V~50/60Hz',
      'Snaga: 1750W',
      'Kapacitet: 6L',
      'Ekran osetljiv na dodir',
      'Tajmer: 60 minuta',
      'Temperatura: do 200C',
      'Digitalna temperatura: 80-200C',
      '8 podešavanja funkcija kuvanja',
      'Nelepljiva podloga za prženje i posuda',
      'Vidljiv prozor',
      'Težina: N.W./G.W. 10.8/12kg',
      'Dimenzije kartona: 654x402x375mm',
      'Šifra: 8606112415323',
    ],
  },
  {
    name: 'Carbon aparat za kafu 3 u 1 EM-CA308B',
    model: 'EM-CA308B',
    images: [
      '/uploads/carbon aparat za kafu 3 u 1 EM-CA308B/163324.jpg',
      '/uploads/carbon aparat za kafu 3 u 1 EM-CA308B/163325.jpg',
      '/uploads/carbon aparat za kafu 3 u 1 EM-CA308B/163326.jpg',
    ],
    specs: [
      '220-240V/110-120V 50/60Hz',
      'Snaga: 1400W',
      'Pritisak pumpe: 20 bar',
      'Kapacitet rezervoara za vodu: 1l',
      'Automatska isključivanja sa ekranom na dodir',
      'ON/OFF prekidač',
      '3 u 1 sistem kompatibilan za Dolce Gusto/Nespresso/Mlevenu kafu',
      'Automatsko prepoznavanje tipa kapsule i podešavanje temperature programa',
      'Klizni ekran za odabir aparmene napitka od 7 veličina',
      'Podesiva visina za velike šolje (150 mm)',
      'Funkcija uštede energije - isključivanje nakon 9 min i automatsko gašenje nakon 1 sata',
      'Protivklizne silikonske nogice',
      'Šifra: 8606112415651',
    ],
  },
  {
    name: 'Carbon aparat za kafu EM-CA201CB',
    model: 'EM-CA201CB',
    images: [
      '/uploads/carbon aparat za kafu EM-CA201CB/163327.jpg',
      '/uploads/carbon aparat za kafu EM-CA201CB/163328.jpg',
      '/uploads/carbon aparat za kafu EM-CA201CB/163329.jpg',
      '/uploads/carbon aparat za kafu EM-CA201CB/163330.jpg',
    ],
    specs: [
      '220-240V/110-120V 50/60Hz',
      'Snaga: 1400W',
      'Pritisak pumpe: 20 bar',
      'Kapacitet rezervoara za vodu: 700ml',
      'Kompatibilan za Nespresso kapsule',
      'ON/OFF prekidač',
      'Automatsko zaustavljanje za male i velike šolje',
      'Dve različite visine postavke za šolje svih veličina',
      'Kapacitet kontejnera za kapsule: 14 komada',
      'Neklizajuće silikonske nogice',
      'Šifra: 8606112415668',
    ],
  },
];

const ImageCarousel = ({ images, onImageClick }: { images: string[]; onImageClick?: (idx: number) => void }) => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="h-44 sm:h-56 bg-white flex items-center justify-center overflow-hidden relative w-full cursor-pointer rounded-2xl"
      onClick={onImageClick ? () => onImageClick(current) : undefined}
    >
      <img
        src={images[current]}
        alt="Proizvod"
        className="object-contain h-full w-full transition-all duration-700"
        style={{ borderRadius: '1rem' }}
      />
    </div>
  );
};

const MaliAparati = () => {
  const [modalIdx, setModalIdx] = useState<number|null>(null);
  const [modalImgIdx, setModalImgIdx] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [fullscreenImgIdx, setFullscreenImgIdx] = useState(0);

  const openModal = (idx: number) => {
    setModalIdx(idx);
    setModalImgIdx(0);
    setFullscreen(false);
  };
  const closeModal = () => setModalIdx(null);
  const prevModal = () => setModalIdx(modalIdx !== null ? (modalIdx + products.length - 1) % products.length : 0);
  const nextModal = () => setModalIdx(modalIdx !== null ? (modalIdx + 1) % products.length : 0);

  // Fullscreen image logic
  const openFullscreen = (imgIdx: number) => {
    setFullscreen(true);
    setFullscreenImgIdx(imgIdx);
  };
  const closeFullscreen = () => setFullscreen(false);
  const prevFullscreen = () => {
    if (modalIdx !== null) {
      setFullscreenImgIdx((prev) => (prev + products[modalIdx].images.length - 1) % products[modalIdx].images.length);
    }
  };
  const nextFullscreen = () => {
    if (modalIdx !== null) {
      setFullscreenImgIdx((prev) => (prev + 1) % products[modalIdx].images.length);
    }
  };

  // Swipe for mobile fullscreen
  let touchStartX = 0;
  let touchEndX = 0;
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.changedTouches[0].screenX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX - touchStartX > 50) prevFullscreen();
    if (touchStartX - touchEndX > 50) nextFullscreen();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-2 sm:px-4 py-6 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-blue-900">Carbon mali kućni aparati</h1>
        {/* Air fryeri podnaslov i proizvodi */}
        <div id="air-fryeri" className="mb-8 mt-8">
          <h2 className="text-xl md:text-2xl font-semibold text-black tracking-tight text-left">Air fryeri</h2>
          <div className="w-16 h-1 bg-gray-200 rounded-full mt-2 mb-2"></div>
        </div>
        <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12">
          {products.filter(p => p.name.toLowerCase().includes('air fryer')).map((product, idx) => (
            <div key={product.model} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-6 sm:p-8 relative min-h-[420px]">
              <ImageCarousel images={product.images} onImageClick={() => { openModal(products.findIndex(pr => pr.model === product.model)); openFullscreen(0); }} />
              <div className="text-center mb-6 mt-4">
                <div className="font-bold text-lg sm:text-2xl text-gray-900 leading-tight mb-1">{product.name}</div>
              </div>
              <button
                className="mt-auto w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow transition-all text-lg sm:text-xl"
                onClick={() => openModal(products.findIndex(pr => pr.model === product.model))}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h3m-7 4v2m0 0a4 4 0 01-4-4V7a4 4 0 014-4h6a4 4 0 014 4v6a4 4 0 01-4 4m-6 0h6" /></svg>
                Detalji
              </button>
            </div>
          ))}
        </div>
        {/* Aparati za kafu podnaslov i proizvodi */}
        <div id="aparati-za-kafu" className="mb-8 mt-8">
          <h2 className="text-xl md:text-2xl font-semibold text-black tracking-tight text-left">Aparati za kafu</h2>
          <div className="w-16 h-1 bg-gray-200 rounded-full mt-2 mb-2"></div>
        </div>
        <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12">
          {products.filter(p => p.name.toLowerCase().includes('aparat za kafu')).map((product, idx) => (
            <div key={product.model} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-6 sm:p-8 relative min-h-[420px]">
              <ImageCarousel images={product.images} onImageClick={() => { openModal(products.findIndex(pr => pr.model === product.model)); openFullscreen(0); }} />
              <div className="text-center mb-6 mt-4">
                <div className="font-bold text-lg sm:text-2xl text-gray-900 leading-tight mb-1">{product.name}</div>
              </div>
              <button
                className="mt-auto w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow transition-all text-lg sm:text-xl"
                onClick={() => openModal(products.findIndex(pr => pr.model === product.model))}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h3m-7 4v2m0 0a4 4 0 01-4-4V7a4 4 0 014-4h6a4 4 0 014 4v6a4 4 0 01-4 4m-6 0h6" /></svg>
                Detalji
              </button>
            </div>
          ))}
        </div>

        {/* MODAL ZA SPECIFIKACIJU */}
        {modalIdx !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="relative bg-white rounded-3xl shadow-2xl max-w-xl sm:max-w-2xl lg:max-w-3xl w-full h-auto mx-2 sm:mx-4 p-2 sm:p-4 flex flex-col items-center animate-fadeIn overflow-auto">
              {/* Fullscreen dugme */}
              <button className="absolute top-3 left-14 text-gray-500 hover:text-black" onClick={() => openFullscreen(modalImgIdx)} aria-label="Fullscreen">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V6a2 2 0 012-2h2m8 0h2a2 2 0 012 2v2m0 8v2a2 2 0 01-2 2h-2m-8 0H6a2 2 0 01-2-2v-2" /></svg>
              </button>
              {/* X dugme */}
              <button className="absolute top-3 right-3 text-gray-500 hover:text-black" onClick={closeModal} aria-label="Zatvori"><X size={28} /></button>
              {/* Strelice za sledeći/prethodni proizvod */}
              <button className="absolute top-3 left-3 text-gray-500 hover:text-black" onClick={prevModal} aria-label="Prethodni"><ChevronLeft size={32} /></button>
              <button className="absolute top-3 right-14 text-gray-500 hover:text-black" onClick={nextModal} aria-label="Sledeći"><ChevronRight size={32} /></button>
              <div className="flex flex-col items-center w-full">
                {/* Glavna slika */}
                <div className="w-full flex items-center justify-center cursor-pointer" onClick={() => openFullscreen(modalImgIdx)}>
                  <img src={products[modalIdx].images[modalImgIdx]} alt={products[modalIdx].name} className="rounded-2xl object-contain max-h-[40vh] w-auto mx-auto mb-4 bg-gray-50" />
                </div>
                {/* Thumbnailovi */}
                <div className="flex gap-2 sm:gap-4 mb-4 overflow-x-auto">
                  {products[modalIdx].images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="thumb"
                      className={`h-10 w-10 sm:h-14 sm:w-14 object-contain rounded-xl border-2 cursor-pointer transition-all ${modalImgIdx === i ? 'border-blue-500 bg-white shadow-lg' : 'border-gray-200 bg-gray-100'}`}
                      onClick={() => setModalImgIdx(i)}
                    />
                  ))}
                </div>
                {/* Naziv i model */}
                <div className="font-bold text-xl sm:text-2xl text-gray-900 mb-2 text-center">{products[modalIdx].name}</div>
                <div className="text-gray-600 mb-4 text-center">Model: {products[modalIdx].model}</div>
                {/* Specifikacije */}
                <div className="bg-gray-50 rounded-xl p-4 text-gray-800 text-sm font-medium w-full max-w-xl mx-auto mt-2 shadow">
                  <ul className="list-disc pl-5">
                  {products[modalIdx].specs.map((spec, i) => (
                      <li key={i}>{spec}</li>
                  ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* FULLSCREEN SLIKE */}
            {fullscreen && (
              <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/90" onClick={closeFullscreen}>
                <div className="relative w-full max-w-[98vw] max-h-[98vh] flex flex-col items-center justify-center">
                  <button className="absolute top-4 right-4 text-white hover:text-blue-200 z-70" onClick={(e) => { e.stopPropagation(); closeFullscreen(); }} aria-label="Zatvori"><X size={40} /></button>
                  <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-blue-200 z-70" onClick={(e) => { e.stopPropagation(); prevFullscreen(); }} aria-label="Prethodna"><ChevronLeft size={48} /></button>
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-blue-200 z-70" onClick={(e) => { e.stopPropagation(); nextFullscreen(); }} aria-label="Sledeća"><ChevronRight size={48} /></button>
                  <div className="flex flex-col items-center w-full max-w-[95vw] max-h-[80vh] mx-auto px-2" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                    <img src={products[modalIdx].images[fullscreenImgIdx]} alt="fullscreen" className="rounded-2xl object-contain w-full max-h-[80vh] bg-white" />
                    <div className="flex gap-2 mt-4 overflow-x-auto">
                      {products[modalIdx].images.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt="thumb"
                          className={`h-12 w-12 object-contain rounded-xl border-2 cursor-pointer transition-all ${fullscreenImgIdx === i ? 'border-blue-500 bg-white shadow-lg' : 'border-gray-200 bg-gray-100'}`}
                          onClick={(e) => { e.stopPropagation(); setFullscreenImgIdx(i); }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default MaliAparati; 