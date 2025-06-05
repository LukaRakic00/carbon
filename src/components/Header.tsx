import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Search, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { searchProductByName, SearchProduct } from '../data/productSearch';
import SearchResults from './SearchResults';
import products from '../pages/MaliAparatiProducts';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchProduct[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [modalIdx, setModalIdx] = useState<number | null>(null);
  const [modalImgIdx, setModalImgIdx] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      title: 'Televizori',
      items: ['Smart TV', 'Android TV']
    },
    {
      title: 'Bela tehnika',
      items: ['Frižideri', 'Zamrzivači']
    },
    {
      title: 'Mali kućni aparati',
      items: ['Air fryeri', 'Aparati za kafu']
    },
    {
      title: 'Lepota i nega',
      items: ['Multifunkcionalni stajler']
    }
  ];

  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = searchProductByName(searchQuery);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      setShowResults(true);
    }
  };

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const [basePath, hash] = path.split('#');
    
    // Use React Router's navigate for client-side navigation
    navigate(basePath + (hash ? `#${hash}` : ''));
  };

  // Pronađi prave proizvode za predloge
  const foundProducts = searchResults.map(res => products.find(p => p.model === res.model)).filter(Boolean);

  return (
    <header className="bg-white text-black border-b border-gray-200">
      {/* Top bar */}
      <div className="bg-gray-100 py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <span></span>
          </div>
          <div className="flex items-center space-x-4">
            <span>servis@smarttehnologysolution.co.rs</span>
            <span>011/635-12-20 | 011/635-12-12 </span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/">
              <img 
                src="/uploads/6a7959a1-2e8e-44f9-a936-d24e3b93f043.png" 
                alt="Carbon Logo" 
                className="h-14"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 hover:text-gray-600 transition-colors text-sm font-bold uppercase">
                  <span>{item.title}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {activeDropdown === item.title && (
                  <div className="absolute top-full left-0 pt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
                    <div className="py-2">
                      {item.items.map((subItem) => {
                        const path = subItem === 'Smart TV' ? '/televizori#smart-tv' : 
                                   subItem === 'Android TV' ? '/televizori#android-tv' :
                                   subItem === 'Frižideri' ? '/frizideri#frizideri' :
                                   subItem === 'Zamrzivači' ? '/frizideri#zamrzivaci' :
                                   subItem === 'Air fryeri' ? '/mali-aparati#air-fryeri' :
                                   subItem === 'Aparati za kafu' ? '/mali-aparati#aparati-za-kafu' :
                                   subItem === 'Multifunkcionalni stajler' ? '/stajleri#multifunkcionalni-stajler' : '#';
                        
                        return (
                          <a
                            key={subItem}
                            href={path}
                            onClick={(e) => handleNavigation(e, path)}
                            className="block px-4 py-2 hover:bg-gray-100 transition-colors capitalize"
                          >
                            {subItem}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <a href="/#warranty" className="hover:text-gray-600 transition-colors text-sm font-bold uppercase">Garancija</a>
            <a href="/#service" className="hover:text-gray-600 transition-colors text-sm font-bold uppercase">Servis</a>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => {
                setIsSearchOpen(!isSearchOpen);
                if (!isSearchOpen) {
                  setShowResults(false);
                  setSearchQuery('');
                }
              }}
              className="hover:text-gray-600 transition-colors"
            >
              <Search className="w-5 h-5 font-bold" />
            </button>
            <User className="w-5 h-5 cursor-pointer hover:text-gray-600" />
            
            {/* Mobile menu button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="w-full mt-4 relative">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Pretražite proizvode..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <Search className="w-5 h-5 font-bold" />
                </button>
              </div>
              {/* Predlozi ispod inputa */}
              {searchQuery && foundProducts.length > 0 && (
                <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                  {foundProducts.map((product: any, idx: number) => (
                    <div
                      key={product.model}
                      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setModalIdx(products.findIndex(pr => pr.model === product.model));
                        setModalImgIdx(0);
                      }}
                    >
                      <img src={product.images[0]} alt={product.name} className="h-10 w-10 object-contain rounded-lg bg-gray-50" />
                      <div>
                        <div className="font-bold text-sm text-gray-900">{product.name}</div>
                        <div className="text-xs text-gray-600">{product.model}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </form>
            {/* MODAL ZA SPECIFIKACIJU IZ PREDLOGA */}
            {modalIdx !== null && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                <div className="relative bg-white rounded-3xl shadow-2xl max-w-xl sm:max-w-2xl lg:max-w-3xl w-full h-auto mx-2 sm:mx-4 p-2 sm:p-4 flex flex-col items-center animate-fadeIn overflow-auto">
                  <button className="absolute top-3 right-3 text-gray-500 hover:text-black" onClick={() => setModalIdx(null)} aria-label="Zatvori"><X size={28} /></button>
                  <div className="flex flex-col items-center w-full">
                    <div className="w-full flex items-center justify-center">
                      <img src={products[modalIdx].images[modalImgIdx]} alt={products[modalIdx].name} className="rounded-2xl object-contain max-h-[40vh] w-auto mx-auto mb-4 bg-gray-50" />
                    </div>
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
                    <div className="font-bold text-xl sm:text-2xl text-gray-900 mb-2 text-center">{products[modalIdx].name}</div>
                    <div className="text-gray-600 mb-4 text-center">Model: {products[modalIdx].model}</div>
                    <ul className="text-gray-700 text-left mb-4 max-w-xl mx-auto list-disc pl-5">
                      {products[modalIdx].specs.map((spec: string, i: number) => (
                        <li key={i}>{spec}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Search Results Modal */}
        {showResults && (
          <SearchResults
            results={searchResults}
            onClose={() => {
              setShowResults(false);
              setSearchQuery('');
              setIsSearchOpen(false);
            }}
          />
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-gray-50 rounded-lg">
            <div className="py-4 px-4 space-y-4">
              {menuItems.map((item) => (
                <div key={item.title}>
                  <button className="w-full text-left font-bold text-sm py-2 border-b border-gray-200 uppercase">
                    {item.title}
                  </button>
                  <div className="pl-4 mt-2 space-y-2">
                    {item.items.map((subItem) => {
                      const path = subItem === 'Smart TV' ? '/televizori#smart-tv' : 
                                 subItem === 'Android TV' ? '/televizori#android-tv' :
                                 subItem === 'Frižideri' ? '/frizideri#frizideri' :
                                 subItem === 'Zamrzivači' ? '/frizideri#zamrzivaci' :
                                 subItem === 'Air fryeri' ? '/mali-aparati#air-fryeri' :
                                 subItem === 'Aparati za kafu' ? '/mali-aparati#aparati-za-kafu' :
                                 subItem === 'Multifunkcionalni stajler' ? '/stajleri#multifunkcionalni-stajler' : '#';
                      
                      return (
                        <a
                          key={subItem}
                          href={path}
                          onClick={(e) => handleNavigation(e, path)}
                          className="block py-1 text-gray-600 hover:text-black text-sm font-bold capitalize"
                        >
                          {subItem}
                        </a>
                      );
                    })}
                  </div>
                </div>
              ))}
              <a href="/#warranty" className="block py-2 hover:text-gray-600 text-sm font-bold uppercase">Garancija</a>
              <a href="/#service" className="block py-2 hover:text-gray-600 text-sm font-bold uppercase">Servis</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
