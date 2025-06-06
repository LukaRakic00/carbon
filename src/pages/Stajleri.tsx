import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    name: 'Carbon Multifunkcionalni stajler 8 u 1',
    model: 'M8',
    images: [
      '/uploads/lepota i nega/163334.jpg',
      '/uploads/lepota i nega/163335.jpg',
    ],
    specs: [
      'Napon/Frekvencija: 220~240V AC 50Hz',
      'Snaga: 1400W',
      'Generator negativnih jona: Ulaz: 100-250V AC, 50-60Hz, 1W, Izlaz: -3,0KV DC +/-1KV DC, do 200 miliona/cm³',
      'Specifikacije motora: DC310V, 110000 obrtaja/min',
      'Kabl za napajanje: Ravan završetak sa rotacijom od 360°, Dužina kabla 2 metra, maksimalna snaga 115W',
      'Luksuzno pakovanje',
      '8 nastavaka, rukavica za zaštitu od toplote',
    ],
  },
];

const badges = [
  '8 nastavaka za stilizovanje',
  'Neguje i štiti kosu',
  'Brzo i lako oblikovanje',
  'Luksuzna oprema',
];

const shortText = 'Jedan uređaj za sve frizure! Uživajte u profesionalnom stilizovanju, zaštiti i nezi vaše kose svakog dana.';

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
        alt="Stajler za kosu"
        className="object-contain h-full w-full transition-all duration-700"
        style={{ borderRadius: '1rem' }}
      />
    </div>
  );
};

const Stajleri = () => {
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
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-blue-900">Carbon lepota i nega</h1>
        <div id="multifunkcionalni-stajler" className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, idx) => (
            <div key={idx} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-6 sm:p-8 relative min-h-[420px]">
              <ImageCarousel images={product.images} onImageClick={() => { openModal(idx); }} />
              <div className="text-center mb-6 mt-4">
                <div className="font-bold text-lg sm:text-2xl text-gray-900 leading-tight mb-1">{product.name}</div>
              </div>
              <button
                className="mt-auto w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow transition-all text-lg sm:text-xl"
                onClick={() => openModal(idx)}
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
                  <div className="flex flex-col items-center w-full max-w-[95vw] max-h-[80vh] mx-auto px-2">
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

export default Stajleri; 