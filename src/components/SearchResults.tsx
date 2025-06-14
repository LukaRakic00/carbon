import React, { useState } from 'react';
import { SearchProduct } from '../data/productSearch';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import products from '../pages/MaliAparatiProducts'; // novi fajl za deljeni niz proizvoda

interface SearchResultsProps {
  results: SearchProduct[];
  onClose: () => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, onClose }) => {
  const [modalIdx, setModalIdx] = useState<number | null>(null);
  const [modalImgIdx, setModalImgIdx] = useState(0);

  const openModal = (idx: number) => {
    setModalIdx(idx);
    setModalImgIdx(0);
  };
  const closeModal = () => setModalIdx(null);
  const prevModal = () => setModalIdx(modalIdx !== null ? (modalIdx + products.length - 1) % products.length : 0);
  const nextModal = () => setModalIdx(modalIdx !== null ? (modalIdx + 1) % products.length : 0);

  if (results.length === 0) return null;

  // Pronađi prave proizvode po modelu
  const foundProducts = results.map(res => products.find(p => p.model === res.model)).filter(Boolean);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl mx-4 max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Rezultati pretrage</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foundProducts.map((product: any, idx: number) => (
              <div key={product.model} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-6 sm:p-8 relative min-h-[420px]">
                <img src={product.images[0]} alt={product.name} className="object-contain h-44 w-full rounded-2xl mb-4 bg-gray-50" />
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
              <div className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full h-auto mx-2 p-3 flex flex-col items-center animate-fadeIn overflow-y-auto max-h-[90vh]">
                {/* X dugme */}
                <button className="absolute top-2 right-2 text-gray-500 hover:text-black" onClick={closeModal} aria-label="Zatvori"><X size={24} /></button>
                {/* Strelice za sledeći/prethodni proizvod */}
                <button className="absolute top-2 left-2 text-gray-500 hover:text-black" onClick={prevModal} aria-label="Prethodni"><ChevronLeft size={24} /></button>
                <button className="absolute top-2 right-10 text-gray-500 hover:text-black" onClick={nextModal} aria-label="Sledeći"><ChevronRight size={24} /></button>
                <div className="flex flex-col items-center w-full">
                  {/* Glavna slika */}
                  <div className="w-full flex items-center justify-center">
                    <img src={products[modalIdx].images[modalImgIdx]} alt={products[modalIdx].name} className="rounded-xl object-contain max-h-40 w-auto mx-auto mb-3 bg-gray-50" />
                  </div>
                  {/* Thumbnailovi */}
                  <div className="flex gap-2 mb-3 overflow-x-auto">
                    {products[modalIdx].images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt="thumb"
                        className={`h-8 w-8 object-contain rounded-lg border-2 cursor-pointer transition-all ${modalImgIdx === i ? 'border-blue-500 bg-white shadow-lg' : 'border-gray-200 bg-gray-100'}`}
                        onClick={() => setModalImgIdx(i)}
                      />
                    ))}
                  </div>
                  {/* Naziv i model */}
                  <div className="font-bold text-lg text-gray-900 mb-1 text-center">{products[modalIdx].name}</div>
                  <div className="text-gray-600 mb-2 text-center text-sm">Model: {products[modalIdx].model}</div>
                  {/* Specifikacije */}
                  <ul className="text-gray-700 text-left mb-2 max-w-xs mx-auto list-disc pl-5 text-sm">
                    {products[modalIdx].specs.map((spec: string, i: number) => (
                      <li key={i}>{spec}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults; 