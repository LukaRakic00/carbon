import React, { useState } from 'react';
import { ChevronDown, Menu, X, Search, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      title: 'Televizori',
      items: ['LED TV', 'QLED TV', 'Smart TV', 'Android TV', '4K TV', '8K TV']
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
                <button className="flex items-center space-x-1 hover:text-gray-600 transition-colors">
                  <span>{item.title}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {activeDropdown === item.title && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
                    <div className="py-2">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <a href="#warranty" className="hover:text-gray-600 transition-colors">Garancija</a>
            <a href="#service" className="hover:text-gray-600 transition-colors">Servis</a>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 cursor-pointer hover:text-gray-600" />
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-gray-50 rounded-lg">
            <div className="py-4 px-4 space-y-4">
              {menuItems.map((item) => (
                <div key={item.title}>
                  <button className="w-full text-left font-semibold py-2 border-b border-gray-200">
                    {item.title}
                  </button>
                  <div className="pl-4 mt-2 space-y-2">
                    {item.items.map((subItem) => (
                      <a key={subItem} href="#" className="block py-1 text-gray-600 hover:text-black">
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <a href="#warranty" className="block py-2 hover:text-gray-600">Garancija</a>
              <a href="#service" className="block py-2 hover:text-gray-600">Servis</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
