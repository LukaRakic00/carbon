import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const products = [
  {
    name: 'Carbon TV 32HDAITGC',
    model: '32HDAITGC',
    images: [
      '/uploads/wetransfer_televizori_2025-06-04_0745/carbonTV32HDAITGC/113941.webp',
      '/uploads/wetransfer_televizori_2025-06-04_0745/carbonTV32HDAITGC/113942.webp',
      '/uploads/wetransfer_televizori_2025-06-04_0745/carbonTV32HDAITGC/113943.webp',
      '/uploads/wetransfer_televizori_2025-06-04_0745/carbonTV32HDAITGC/129949.png',
      '/uploads/wetransfer_televizori_2025-06-04_0745/carbonTV32HDAITGC/142528.jpg',
    ],
    specs: [
      'HD',
      'Dijagonala ekrana: 32"',
      'Rezolucija: 1366 x 768',
      'Odnos širina/visina: 16:9',
      'Ugao gledanja: 178°',
      'Brzina osvežavanja ekrana: 60 Hz',
      'Tip pozadinskog osvetljenja: Direct LED',
    ],
  },
  {
    name: 'Carbon Android TV 50FHDSITGC',
    model: '50FHDSITGC',
    images: [
      '/uploads/wetransfer_televizori_2025-06-04_0745/carbonAndroidTV50FHDSITGC/113931.webp',
      '/uploads/wetransfer_televizori_2025-06-04_0745/carbonAndroidTV50FHDSITGC/113932.webp',
      '/uploads/wetransfer_televizori_2025-06-04_0745/carbonAndroidTV50FHDSITGC/113934.webp',
      '/uploads/wetransfer_televizori_2025-06-04_0745/carbonAndroidTV50FHDSITGC/140531.png',
      '/uploads/wetransfer_televizori_2025-06-04_0745/carbonAndroidTV50FHDSITGC/142530.jpg',
    ],
    specs: [
      'Full HD',
      'Dijagonala ekrana: 50"',
      'Rezolucija: 1920 x 1080',
      'Odnos širina/visina: 16:9',
      'Ugao gledanja: 178°',
      'Brzina osvežavanja ekrana: 60 Hz',
      'Tip pozadinskog osvetljenja: Direct LED',
      'Operativni sistem: Android 11',
      'CPU: ARM Cortex-A55, 1.5GHz, Quad-core',
      'GPU: Mali 450, 550 MHz, Dual-core',
    ],
  },
  {
    name: 'Carbon webOS TV 43FHDSW FULL HD',
    model: '43FHDSW',
    images: [
      '/uploads/wetransfer_televizori_2025-06-04_0745/carbonwebOSTV43FHDSW/169877.png',
      '/uploads/wetransfer_televizori_2025-06-04_0745/carbonwebOSTV43FHDSW/169884.jpg',
      '/uploads/wetransfer_televizori_2025-06-04_0745/carbonwebOSTV43FHDSW/169885.png',
      '/uploads/wetransfer_televizori_2025-06-04_0745/carbonwebOSTV43FHDSW/s2.png'
    ],
    specs: [
      'Tip ekrana: LED',
      'Full HD',
      'Veličina: 43"',
      'Osvetljenost: 240 cd/m²',
      'Maksimalna rezolucija: 1920 x 1080',
      'Ugao gledanja: 178°',
      'Procesor: CPU: ARM Quad Core CA75 (2x) 1.0GHz, CA55 1.0GHz (2x), GPU: IMG BXE4 (700MHz)',
      'Operativni sistem: webOS 22',
      'Standardni daljinski',
      'Dimenzije ambalaže (ŠxDxV): 107*15,5*67 cm',
      'Dimenzije TV-a sa postoljem: 97*21*61 cm',
      'Dimenzije TV-a bez postolja: 97*8,5*56,5 cm',
      'Težina TV-a sa postoljem: 6,75 kg',
      'Težina kutije sa TV-om i priborom: 9,25 kg',
    ],
  },
  {
    name: 'Carbon Smart TV 504KUHDSW 4K ULTRA HD',
    model: '504KUHDSW',
    images: [
      '/uploads/wetransfer_televizori_2025-06-04_0745/CarbonSmartTV504KUHDSW/169878.png',
      '/uploads/wetransfer_televizori_2025-06-04_0745/CarbonSmartTV504KUHDSW/169879.png',
      '/uploads/wetransfer_televizori_2025-06-04_0745/CarbonSmartTV504KUHDSW/169880.png',
      '/uploads/wetransfer_televizori_2025-06-04_0745/CarbonSmartTV504KUHDSW/169886.png',
      '/uploads/wetransfer_televizori_2025-06-04_0745/CarbonSmartTV65QLED4KSW/daljinski.png',
    ],
    specs: [
      'Tip ekrana: LED Ultra HD 4K',
      'Veličina: 50"',
      'Osvetljenost: 300 cd/m²',
      'Maksimalna rezolucija: 3840 x 2160',
      'Ugao gledanja: 178°',
      'Procesor: CPU: ARM Quad Core CA75 (2x) 1.0GHz, CA55 1.0GHz (2x), GPU: IMG BXE4 (700MHz)',
      'Operativni sistem: webOS 22',
      'Magic remote - magični daljinski',
      'Dimenzije ambalaže (ŠxDxV): 120*14,5*72,22 cm',
      'Dimenzije TV-a sa postoljem: 111*21*69,5 cm',
      'Dimenzije TV-a bez postolja: 111*8*63,5 cm',
      'Težina TV-a sa postoljem: 9,8 kg',
      'Težina kutije sa TV-om i priborom: 12,25 kg',
    ],
  },
  {
    name: 'Carbon webOS TV 65QLED4KSW 4K QLED ULTRA HD',
    model: '65QLED4KSW',
    images: [
      '/uploads/wetransfer_televizori_2025-06-04_0745/CarbonSmartTV65QLED4KSW/169881.png',
      '/uploads/wetransfer_televizori_2025-06-04_0745/CarbonSmartTV65QLED4KSW/169882.png',
      '/uploads/wetransfer_televizori_2025-06-04_0745/CarbonSmartTV65QLED4KSW/169883.png',
      '/uploads/wetransfer_televizori_2025-06-04_0745/CarbonSmartTV65QLED4KSW/169887.png',
      '/uploads/wetransfer_televizori_2025-06-04_0745/CarbonSmartTV65QLED4KSW/daljinski.png',
    ],
    specs: [
      'Ultra HD 4K, QLED',
      'Veličina: 65"',
      'Osvetljenost: 270 cd/m²',
      'Maksimalna rezolucija: 3840 x 2160',
      'Ugao gledanja: 178°',
      'Procesor: CPU: ARM Quad Core CA75 (2x) 1.0GHz, CA55 1.0GHz (2x), GPU: IMG BXE4 (700MHz)',
      'Operativni sistem: webOS 22',
      'Magic remote - magični daljinski',
      'Dimenzije ambalaže (ŠxDxV): 160*18*93 cm',
      'Dimenzije TV-a sa postoljem: 144,5*26*89 cm',
      'Dimenzije TV-a bez postolja: 144,5*8*82,5 cm',
      'Težina TV-a sa postoljem: 17,9 kg',
      'Težina kutije sa TV-om i priborom: 23,65 kg',
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

const Televizori = () => {
  const [modalIdx, setModalIdx] = useState<number|null>(null);
  const [modalImgIdx, setModalImgIdx] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [fullscreenImgIdx, setFullscreenImgIdx] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    resolution: [] as string[],
    diagonal: [] as string[],
    type: [] as string[],
    backlight: [] as string[]
  });

  // Filter options
  const resolutionOptions = ['HD', 'Full HD', '4K'];
  const diagonalOptions = ['32"', '43"', '50"', '65"'];
  const typeOptions = ['Smart TV', 'Android TV'];
  const backlightOptions = ['Direct LED'];

  // Filter products based on selected filters
  const filteredProducts = products.filter(product => {
    const specs = product.specs.join(' ').toLowerCase();
    
    if (filters.resolution.length > 0 && !filters.resolution.some(r => specs.includes(r.toLowerCase()))) return false;
    if (filters.diagonal.length > 0 && !filters.diagonal.some(d => specs.includes(d.toLowerCase()))) return false;
    if (filters.type.length > 0) {
      if (
        filters.type.includes('Android TV') && !specs.includes('android')
      ) return false;
      if (
        filters.type.includes('Smart TV') && (specs.includes('android') || !specs.includes('webos'))
      ) return false;
    }
    if (filters.backlight.length > 0 && !filters.backlight.some(b => specs.includes(b.toLowerCase()))) return false;
    
    return true;
  });

  const toggleFilter = (category: keyof typeof filters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(v => v !== value)
        : [...prev[category], value]
    }));
  };

  const clearFilters = () => {
    setFilters({
      resolution: [],
      diagonal: [],
      type: [],
      backlight: []
    });
  };

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
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900">Carbon televizori</h1>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <Filter size={20} />
            <span>Filteri</span>
          </button>
        </div>

        {/* Filteri */}
        {showFilters && (
          <div className="bg-white p-6 rounded-xl shadow-lg mb-8 relative">
            <button
              onClick={() => setShowFilters(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Zatvori filtere"
            >
              <X size={24} />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Rezolucija */}
              <div>
                <h3 className="font-semibold mb-2">Rezolucija</h3>
                <div className="space-y-2">
                  {resolutionOptions.map(option => (
                    <label key={option} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={filters.resolution.includes(option)}
                        onChange={() => toggleFilter('resolution', option)}
                        className="w-4 h-4"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Dijagonala */}
              <div>
                <h3 className="font-semibold mb-2">Dijagonala</h3>
                <div className="space-y-2">
                  {diagonalOptions.map(option => (
                    <label key={option} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={filters.diagonal.includes(option)}
                        onChange={() => toggleFilter('diagonal', option)}
                        className="w-4 h-4"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Tip */}
              <div>
                <h3 className="font-semibold mb-2">Tip</h3>
                <div className="space-y-2">
                  {typeOptions.map(option => (
                    <label key={option} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={filters.type.includes(option)}
                        onChange={() => toggleFilter('type', option)}
                        className="w-4 h-4"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Pozadinsko osvetljenje */}
              <div>
                <h3 className="font-semibold mb-2">Pozadinsko osvetljenje</h3>
                <div className="space-y-2">
                  {backlightOptions.map(option => (
                    <label key={option} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={filters.backlight.includes(option)}
                        onChange={() => toggleFilter('backlight', option)}
                        className="w-4 h-4"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Dugme za brisanje filtera */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Obriši filtere
              </button>
            </div>
          </div>
        )}

        {/* Smart TV podnaslov i proizvodi */}
        <div id="smart-tv" className="mb-8 mt-8">
          <h2 className="text-xl md:text-2xl font-semibold text-black tracking-tight text-left">Smart TV</h2>
          <div className="w-16 h-1 bg-gray-200 rounded-full mt-2 mb-2"></div>
        </div>
        <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12">
          {filteredProducts.filter(p => !p.specs.some(s => s.toLowerCase().includes('android'))).map((product, idx) => (
            <div key={product.model} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-6 sm:p-8 relative min-h-[420px]">
              <ImageCarousel images={product.images} onImageClick={() => { openModal(idx); openFullscreen(0); }} />
              <div className="text-center mb-6 mt-4">
                <div className="font-bold text-lg sm:text-2xl text-gray-900 leading-tight mb-1">{product.name}</div>
              </div>
              <button
                className="mt-auto w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow transition-all text-lg sm:text-xl"
                onClick={() => openModal(products.findIndex(p => p.model === product.model))}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h3m-7 4v2m0 0a4 4 0 01-4-4V7a4 4 0 014-4h6a4 4 0 014 4v6a4 4 0 01-4 4m-6 0h6" /></svg>
                Detalji
              </button>
            </div>
          ))}
        </div>
        {/* Android TV podnaslov i proizvodi */}
        <div id="android-tv" className="mb-8 mt-8">
          <h2 className="text-xl md:text-2xl font-semibold text-black tracking-tight text-left">Android TV</h2>
          <div className="w-16 h-1 bg-gray-200 rounded-full mt-2 mb-2"></div>
        </div>
        <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.filter(p => p.specs.some(s => s.toLowerCase().includes('android'))).map((product, idx) => (
            <div key={product.model} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-6 sm:p-8 relative min-h-[420px]">
              <ImageCarousel images={product.images} onImageClick={() => { openModal(products.findIndex(p => p.model === product.model)); openFullscreen(0); }} />
              <div className="text-center mb-6 mt-4">
                <div className="font-bold text-lg sm:text-2xl text-gray-900 leading-tight mb-1">{product.name}</div>
              </div>
              <button
                className="mt-auto w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow transition-all text-lg sm:text-xl"
                onClick={() => openModal(products.findIndex(p => p.model === product.model))}
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
            <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full h-auto mx-2 p-2 sm:p-3 flex flex-col items-center animate-fadeIn overflow-auto max-h-[90vh]">
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
                {/* Dugme za PDF specifikaciju */}
                {(() => {
                  const pdfMap: Record<string, string> = {
                    '43FHDSW': '/uploads/TV_spec_pdf/CARBON_TV43.pdf',
                    '504KUHDSW': '/uploads/TV_spec_pdf/CARBON_TV50.pdf',
                    '65QLED4KSW': '/uploads/TV_spec_pdf/CARBON_TV65.pdf'
                  };
                  const pdfUrl = pdfMap[products[modalIdx].model];
                  if (pdfUrl) {
                    return (
                      <a
                        href={pdfUrl}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-7 py-3 mb-6 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-200 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-blue-200"
                      >
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 transition-transform duration-200 group-hover:translate-y-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-8m0 8l-4-4m4 4l4-4" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20 16.5V19a2 2 0 01-2 2H6a2 2 0 01-2-2v-2.5" />
                          </svg>
                        </span>
                        Preuzmi PDF specifikaciju
                      </a>
                    );
                  }
                  return null;
                })()}
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

export default Televizori; 