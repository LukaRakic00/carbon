
import React from 'react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const productCategories = [
    'Televizori',
    'Bela tehnika',
    'Mali kućni aparati',
    'Lepota i nega'
  ];

  const customerService = [
    'Kontakt',
    'Garancija',
    'Servis',
    'Politika privatnosti'
  ];

  const company = [
    'O nama',
    'Novosti',
    'Blog',
    'Partneri'
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">CARBON</h2>
            <p className="text-gray-300 mb-6 max-w-md">
              Vodećih brend premium kućnih aparata i televizora. 
              Inovacija, kvalitet i dizajn u svakom proizvodu koji kreiramo.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">Maglajska 11, Beograd</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">011/635-12-20</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">servis@smarttehnologysolution.co.rs</span>
              </div>
            </div>

            <div className="flex space-x-4">
          
              <a href="#" className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Proizvodi</h3>
            <ul className="space-y-3">
              {productCategories.map((category) => (
                <li key={category}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Korisnička podrška</h3>
            <ul className="space-y-3">
              {customerService.map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Kompanija</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Carbon Electronics. Sva prava zadržana.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Uslovi korišćenja
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Politika privatnosti
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Kolačići
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
