import React, { useRef, useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Clock, MapPin, Wrench, Shield, Truck } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ServiceSection = () => {
  const services = [
    {
      icon: <Wrench className="w-8 h-8 text-blue-400" />,
      title: 'Tehnička podrška',
      description: 'Stručna pomoć za sve Carbon proizvode'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'Garantni servis',
      description: 'Besplatan servis u garantnom roku'
    },
    {
      icon: <Truck className="w-8 h-8 text-purple-400" />,
      title: 'Dostava i montaža',
      description: 'Profesionalna montaža na adresi'
    }
  ];

  // Partneri slider logika
  const brands = [
    { src: '/uploads/brendovi/lenovo.webp', alt: 'Lenovo' },
    { src: '/uploads/brendovi/cisco.png', alt: 'Cisco' },
    { src: '/uploads/brendovi/checkPoint.png', alt: 'Check Point' },
    { src: '/uploads/brendovi/IBM.png', alt: 'IBM' },
    { src: '/uploads/brendovi/oracle.png', alt: 'Oracle' },
    { src: '/uploads/brendovi/haier.png', alt: 'Haier' },
    { src: '/uploads/brendovi/bosch.png', alt: 'Bosch' },
    { src: '/uploads/brendovi/huawei.png', alt: 'Huawei' },
    { src: '/uploads/brendovi/connect.png', alt: 'Connect' },
    { src: '/uploads/brendovi/hause.png', alt: 'Hause' },
    { src: '/uploads/brendovi/sonic.png', alt: 'Sonic' }
  ];

  return (
    <>
      <section id="service" className="py-10 sm:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-2">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Servis i podrška</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full mx-auto mb-4"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Tu smo da vam pomognemo sa vašim Carbon proizvodima
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <div>
              <Card className="bg-white border-gray-200 h-full shadow-lg">
                <CardHeader>
                  <CardTitle className="text-black text-2xl sm:text-xl">Kontakt informacije</CardTitle>
                  <CardDescription className="text-gray-600">
                    Kontaktirajte naš servis za bilo kakvu pomoć
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-black font-semibold">Telefon</h3>
                      <p className="text-gray-600">
                        <a href="tel:0116351220" className="hover:underline hover:text-blue-700 transition-colors">011/635-12-20</a>
                        <span className="mx-1">|</span>
                        <a href="tel:0116351212" className="hover:underline hover:text-blue-700 transition-colors">011/635-12-12</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-green-600 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-black font-semibold">Email</h3>
                      <p className="text-gray-600 break-all">
                        <a href="mailto:servis@smarttehnologysolution.co.rs" className="hover:underline hover:text-blue-700 transition-colors">servis@smarttehnologysolution.co.rs</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-600 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-black font-semibold">Adresa</h3>
                      <p className="text-gray-600">
                        <a href="https://www.google.com/maps/place/Maglajska+11,+Beograd" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-purple-700 transition-colors">Maglajska 11, Beograd</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-600 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-black font-semibold">Radno vreme</h3>
                      <div className="text-gray-600">
                        <p>Ponedeljak - Petak: 09:00 - 17:00</p>
                        <p>Subota: 10:00 - 14:00</p>
                        <p>Nedelja: zatvoreno</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <a href="tel:0116351220" className="w-full block group focus:outline-none">
                      <button type="button" className="w-full flex items-center justify-center gap-3 py-4 px-0 rounded-2xl bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 shadow-xl text-white font-extrabold text-lg tracking-wide transition-all duration-300 hover:from-blue-700 hover:to-blue-500 hover:scale-105 focus:ring-4 focus:ring-blue-200">
                        <Phone className="w-7 h-7" />
                        <span className="text-lg font-bold tracking-wide">Pozovi servis</span>
                      </button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-xl font-bold text-black mb-6">Naše usluge</h3>
              {services.map((service, index) => (
                <Card key={index} className="bg-white border-gray-200 shadow-lg">
                  <CardContent className="p-6 sm:p-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="text-black font-semibold text-lg sm:text-base mb-2">
                          {service.title}
                        </h4>
                        <p className="text-gray-600 text-base sm:text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-gradient-to-r from-blue-100 to-purple-100 border-blue-200 shadow-lg">
                <CardContent className="p-6 sm:p-4">
                  <h4 className="text-black font-semibold text-lg sm:text-base mb-4">
                    Garantni uslovi
                  </h4>
                  <div className="space-y-2 text-gray-700 text-base sm:text-sm">
                    <p>• Bela tehnika: 6 godina (2+4 godine nakon registracije)</p>
                    <p>• Televizori: 3 godine (2+1 godina nakon registracije)</p>
                    <p>• Mali kućni aparati: 2 godine zakonska garancija</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    * Produžena garancija važi samo uz registraciju u roku od 30 dana, u toku promo &nbsp;&nbsp;&nbsp;perioda do 31.12.2025
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Partneri slider */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-black mb-4 tracking-wide">Partneri</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full mx-auto mb-4"></div>
        </div>
          <div className="relative flex items-center justify-center">
            {/* Strelica levo */}
            <div className="hidden md:flex items-center absolute left-[-80px] top-1/2 -translate-y-1/2 z-10">
              <div className="swiper-button-prev custom-swiper-nav bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center hover:bg-blue-100 transition border border-gray-200">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              loop={true}
              speed={600}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              slidesPerView={6}
              spaceBetween={60}
              pagination={{
                clickable: true,
                el: '.custom-swiper-pagination',
                renderBullet: (index, className) => {
                  return `<span class='${className}'></span>`;
                },
              }}
              navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
              breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 40 },
                480: { slidesPerView: 3, spaceBetween: 60 },
                640: { slidesPerView: 4, spaceBetween: 80 },
                992: { slidesPerView: 5, spaceBetween: 120 },
                1200: { slidesPerView: 6, spaceBetween: 120 },
              }}
              className="w-full"
            >
              {brands.map((brand, i) => (
                <SwiperSlide key={i} className="flex items-center justify-center">
                  <img
                    src={brand.src}
                    alt={brand.alt}
                    className="h-16 sm:h-20 w-auto object-contain mx-auto transition-transform duration-200 hover:custom-pulse"
                    style={{ maxWidth: 120 }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Strelica desno */}
            <div className="hidden md:flex items-center absolute right-[-80px] top-1/2 -translate-y-1/2 z-10">
              <div className="swiper-button-next custom-swiper-nav bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center hover:bg-blue-100 transition border border-gray-200">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </div>
          {/* Bullets paginacija ispod slidera */}
          <div className="custom-swiper-pagination flex justify-center mt-10" />
          <style>{`
            .custom-swiper-nav:after {
              content: '';
            }
            .swiper-button-prev.custom-swiper-nav {
              background: white;
              box-shadow: 0 2px 8px rgba(0,0,0,0.08);
              border-radius: 9999px;
              width: 48px;
              height: 48px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .swiper-button-next.custom-swiper-nav {
              background: white;
              box-shadow: 0 2px 8px rgba(0,0,0,0.08);
              border-radius: 9999px;
              width: 48px;
              height: 48px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .custom-swiper-pagination .swiper-pagination-bullet {
              background: #d1d5db;
              opacity: 1;
              width: 8px;
              height: 8px;
              margin: 0 10px;
              transition: background 0.3s;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              font-size: 0.9rem;
            }
            .custom-swiper-pagination .swiper-pagination-bullet-active {
              background: #2563eb;
              color: #fff;
            }
            @keyframes custom-pulse {
              0% { transform: scale(1); }
              50% { transform: scale(1.13); }
              100% { transform: scale(1); }
            }
            .hover\\:custom-pulse:hover {
              animation: custom-pulse 0.5s cubic-bezier(0.4,0,0.6,1);
            }
          `}</style>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
