import React from 'react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const productCategories = [
    { name: 'Televizori', path: '/televizori' },
    { name: 'Bela tehnika', path: '/frizideri' },
    { name: 'Mali kućni aparati', path: '/mali-aparati' },
    { name: 'Lepota i nega', path: '/stajleri' },
  ];

  const customerService = [
    { name: 'Kontakt', path: 'mailto:servis@smarttehnologysolution.co.rs' },
    { name: 'Garancija', path: '/#warranty' },
    { name: 'Servis', path: '/#service' },
    { name: 'Politika privatnosti', path: '/politika-privatnosti' },
  ];

  const company = [
    { name: 'O nama', action: () => window.location.reload() },
    { name: 'Novosti', url: 'https://www.instagram.com/carbon.srb/?igsh=MXFhM3NoYzk2cTR6dw%3D%3D#' },
  ];

  const navigate = useNavigate();

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
                <a href="https://www.google.com/maps/place/Maglajska+11,+Beograd" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">Maglajska 11, Beograd</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <a href="tel:0116351220" className="text-gray-300 hover:underline">011/635-12-20</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <a href="tel:0116351212" className="text-gray-300 hover:underline">011/635-12-12</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <a href="mailto:servis@smarttehnologysolution.co.rs" className="text-gray-300 hover:underline">servis@smarttehnologysolution.co.rs</a>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="https://www.instagram.com/carbon.srb/?igsh=MXFhM3NoYzk2cTR6dw%3D%3D#" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Proizvodi</h3>
            <ul className="space-y-3">
              {productCategories.map((category) => (
                <li key={category.name}>
                  <Link to={category.path} className="text-gray-300 hover:text-white transition-colors">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Korisnička podrška</h3>
            <ul className="space-y-3">
              {customerService.map((service) => (
                <li key={service.name}>
                  {service.path.startsWith('mailto:') ? (
                    <a href={service.path} className="text-gray-300 hover:text-white transition-colors">{service.name}</a>
                  ) : (
                    <Link to={service.path} className="text-gray-300 hover:text-white transition-colors">{service.name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Kompanija</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  {item.action ? (
                    <button onClick={item.action} className="text-gray-300 hover:text-white transition-colors bg-transparent border-none p-0 m-0 cursor-pointer">{item.name}</button>
                  ) : (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">{item.name}</a>
                  )}
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
              <Link to="/politika-privatnosti" className="text-gray-400 hover:text-white text-sm transition-colors">
                Politika privatnosti
              </Link>
              <Link to="/politika-kolacica" className="text-gray-400 hover:text-white text-sm transition-colors">
                Kolačići
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
