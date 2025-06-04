import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { X, ChevronLeft, ChevronRight, Maximize2, Plus, MapPin } from 'lucide-react';

const products = [
  {
    type: 'SBS',
    name: 'Carbon Frižider SBS FF2-55NCRNX1 inox',
    model: 'FF2-55NCRNX1',
    images: [
      '/uploads/frizider/SBS FF2-55NCRNX1/s1.jpg',
      '/uploads/frizider/SBS FF2-55NCRNX1/s2.jpg',
    ],
    specs: [
      'Neto zapremina ukupno (l): 439',
      'zapremina frižidera (l): 288',
      'zapremina zamrzivača (l): 148+3',
      'Kompresor: Hermetički/1',
      'Rashladno sredstvo: R600a',
      'Sistem odmrzavanja: No frost',
      'Energetska klasa: E',
      'Dimenzije proizvoda (mm): Š910*D590*V1770',
      'Dimenzije pakovanja (mm): Š972*D630*V1862',
    ],
    badge: 'SBS',
  },
  {
    type: 'KOMBINOVANI',
    name: 'Carbon Frižider kombinovani DE2-34CRNW1',
    model: 'DE2-34CRNW1',
    images: [
      '/uploads/frizider/DE2-34CRNW1/s1.jpg',
      '/uploads/frizider/DE2-34CRNW1/s2.jpg',
    ],
    specs: [
      'Neto zapremina ukupno (l): 262',
      'zapremina frižidera (l): 191',
      'zapremina zamrzivača (l): 71',
      'Kompresor: Hermetički/1',
      'Rashladno sredstvo: R600a',
      'Sistem odmrzavanja: Ručno',
      'Energetska klasa: E',
      'Dimenzije proizvoda (mm): Š550*D560*V1800',
      'Dimenzije pakovanja (mm): Š577*D595*V1859',
    ],
    badge: 'KOMBINOVANI',
  },
  {
    type: 'DOUBLE DOOR',
    name: 'Carbon Frižider double door DF2-28NCRNW1',
    model: 'DF2-28NCRNW1',
    images: [
      '/uploads/frizider/DF2-28NCRNW1/s1.jpg',
      '/uploads/frizider/DF2-28NCRNW1/s2.jpg',
    ],
    specs: [
      'Neto zapremina ukupno (l): 206',
      'zapremina frižidera (l): 169',
      'zapremina zamrzivača (l): 37',
      'Kompresor: Hermetički/1',
      'Rashladno sredstvo: R600a',
      'Sistem odmrzavanja: Defrost',
      'Energetska klasa: E',
      'Dimenzije proizvoda (mm): Š550*D560*V1430',
      'Dimenzije pakovanja (mm): Š575*D590*V1470',
    ],
    badge: 'DOUBLE DOOR',
  },
  {
    type: 'ZAMRZIVAČ',
    name: 'Carbon Zamrzivač BE1-200CRNW1',
    model: 'BE1-200CRNW1',
    images: [
      '/uploads/zamrzivac/s1.jpg',
      '/uploads/zamrzivac/s2.jpg',
    ],
    specs: [
      'Neto zapremina ukupno (l): 198',
      'Kompresor: Hermetički/1',
      'Rashladno sredstvo: R600a',
      'Nivo buke (db): 40',
      'Dimenzije proizvoda (mm): Š935*D545*V845',
      'Dimenzije pakovanja (mm): Š935*D575*V885',
    ],
    badge: 'ZAMRZIVAČ',
  },
];

// Custom CSS for popup panel (isti kao u ProductGrid)
const popupPanelStyles = `
.card-wrapper { position: relative; width: 100%; max-width: 350px; margin: 0 auto; }
.card-custom { border: 1px solid #d1d5db; border-radius: 1rem; background: #fff; transition: background 0.3s, transform 0.3s; z-index: 2; position: relative; box-shadow: none; }
.card-wrapper:hover .card-custom { background: #f3f4f6; transform: translateY(-8px); }
.card-popup-panel { display: none; position: relative; width: 100%; margin-top: -1px; border-radius: 1rem; background: linear-gradient(90deg, #aee2ff 0%, #90caf9 100%); box-shadow: 0 4px 24px 0 rgba(0,0,0,0.04); z-index: 1; transition: opacity 0.3s; }
.card-wrapper:hover .card-popup-panel, .card-popup-panel:hover { display: block; }
.card-popup-panel .row { display: flex; justify-content: space-between; padding: 1rem 0.5rem; }
.card-popup-panel .btn-link { display: flex; align-items: center; gap: 0.5rem; color: #111827; font-weight: 500; font-size: 1rem; text-decoration: none; transition: background 0.2s; border-radius: 0.5rem; padding: 0.5rem 1rem; }
.card-popup-panel .btn-link:hover { background: #bae6fd; }
`;

// Carousel za slike bez bullet indikatora
const ImageCarousel = ({ images, onImageClick }: { images: string[]; onImageClick?: (idx: number) => void }) => {
  const [current, setCurrent] = useState(0);
  React.useEffect(() => {
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
        alt="Frižider"
        className="object-contain h-full w-full transition-all duration-700"
        style={{ borderRadius: '1rem' }}
      />
    </div>
  );
};

// Nova kartica sa popup panelom
const FridgeCard = ({ product }: { product: typeof products[0] }) => (
  <div className="card-wrapper mb-6">
    <style>{popupPanelStyles}</style>
    <div className="card-custom flex flex-col items-center p-6 w-full h-full cursor-pointer">
      <div className="w-full flex items-center justify-center mb-4">
        <div className="bg-white rounded-2xl w-full flex items-center justify-center" style={{ minHeight: 120 }}>
          <ImageCarousel images={product.images} />
        </div>
      </div>
      <div className="text-center mb-2">
        <div className="font-bold text-base sm:text-lg text-gray-900 leading-tight">{product.name}</div>
        <div className="text-blue-700 font-medium text-xs sm:text-sm">Model: {product.model}</div>
      </div>
      <div className="bg-gray-50 rounded-xl p-2 sm:p-4 text-gray-800 text-xs sm:text-sm font-medium w-full max-w-md mx-auto mt-2 mb-2">
        {product.specs.slice(0, 3).map((spec, i) => (
          <div key={i}>{spec}</div>
        ))}
      </div>
      <div className="mt-auto w-full flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow transition-all text-base"
          tabIndex={-1}
        >
          Detalji
        </button>
      </div>
    </div>
    <div className="card-popup-panel">
      <div className="row">
        <a href="#" className="btn-link">
          <Plus className="w-5 h-5 mr-1" /> Saznaj više
        </a>
        <a href="https://www.laptopcentar.rs/tip/carbon-bt" target="_blank" rel="noopener noreferrer" className="btn-link">
          <MapPin className="w-5 h-5 mr-1" /> Gde kupiti
        </a>
      </div>
    </div>
  </div>
);

const Frizideri = () => {
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

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-2 sm:px-4 py-6 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-blue-900">Carbon bela tehnika</h1>
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, idx) => (
            <div key={idx} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-6 sm:p-8 relative min-h-[420px]">
              <ImageCarousel images={product.images} onImageClick={() => { openModal(idx); }} />
              <div className="text-center mb-6 mt-4">
                <div className="font-bold text-lg sm:text-2xl text-gray-900 leading-tight mb-1">{product.name}</div>
                <div className="text-blue-700 font-medium text-sm sm:text-base">Model: {product.model}</div>
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
            <div className="relative bg-white rounded-3xl shadow-2xl max-w-[98vw] max-h-[98vh] w-full h-auto mx-2 sm:mx-4 p-2 sm:p-6 flex flex-col items-center animate-fadeIn overflow-auto">
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
                  <img src={products[modalIdx].images[modalImgIdx]} alt={products[modalIdx].name} className="rounded-2xl object-contain max-h-[40vh] w-auto mx-auto mb-4 bg-white" />
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
                <div className="text-center mb-2">
                  <div className="font-bold text-base sm:text-lg text-gray-900 leading-tight">{products[modalIdx].name}</div>
                  <div className="text-blue-700 font-medium text-xs sm:text-sm">Model: <span className="underline cursor-pointer">{products[modalIdx].model}</span></div>
                </div>
                {/* Specifikacije */}
                <div className="bg-gray-50 rounded-xl p-2 sm:p-4 text-gray-800 text-xs sm:text-sm font-medium w-full max-w-[95vw] mx-auto mt-2">
                  {products[modalIdx].specs.map((spec, i) => (
                    <div key={i}>{spec}</div>
                  ))}
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

export default Frizideri; 