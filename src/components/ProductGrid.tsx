import React, { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Plus, MapPin } from 'lucide-react';

const newProducts = [
  {
    id: 1,
    name: 'Carbon webOS TV 65QLED4KSW',
    category: 'QLED Televizor',
    images: ['/uploads/frizider/DE2-34CRNW1/s1.jpg', '/uploads/frizider/DE2-34CRNW1/s2.jpg'],
    isNew: true,
    features: ['8K rezolucija', 'HDR10+', 'Smart TV', 'Gaming Mode']
  },
  {
    id: 2,
    name: 'Carbon ProWash X1',
    category: 'Veš mašina',
    images: ['/uploads/frizider/DF2-28NCRNW1/s1.jpg', '/uploads/frizider/DF2-28NCRNW1/s2.jpg'],
    isNew: true,
    features: ['12kg kapacitet', 'Inverter motor', 'Steam funkcija', 'WiFi']
  },
  {
    id: 3,
    name: 'Carbon AirPure Max',
    category: 'Usisivač',
    images: ['/uploads/frizider/SBS FF2-55NCRNX1/s1.jpg', '/uploads/frizider/SBS FF2-55NCRNX1/s2.jpg'],
    isNew: true,
    features: ['Bežični', 'HEPA filter', '60min rada', 'LED svetla']
  }
];

const featuredProducts = [
  {
    id: 4,
    name: 'RC3800FMB',
    category: 'Kombinovani frižideri',
    image: '/uploads/frizider/DE2-34CRNW1/s1.jpg',
    netZapremina: '378',
    tehnologija: 'R600a',
    kapacitet: '8,5/24',
    features: [
      'No Frost tehnologija – bez nakupljanja leda',
      'Inverter motor – tiši rad i manja potrošnja energije',
      '540L zapremina – dovoljno prostora za celu porodicu',
      'Antibakterijski filter – svežina i higijena na najvišem nivou',
    ],
  },
  // Dodaj još proizvoda po potrebi
];

// Dodajem slike za carousel svih frižidera i zamrzivača
const fridgeAndFreezerImages = [
  '/uploads/frizider/SBS FF2-55NCRNX1/s1.jpg', // SBS frižider
  '/uploads/frizider/DE2-34CRNW1/s1.jpg',    // Kombinovani frižider
  '/uploads/frizider/DF2-28NCRNW1/s1.jpg',   // Double door frižider
  '/uploads/zamrzivac/s1.jpg',               // Zamrzivač
];

// Slike za carousel malih aparata (air fryeri i aparati za kafu)
const smallAppliancesImages = [
  '/uploads/carbon air fryer 2,5l/160062.jpg', // Air Fryer 2,5l
  '/uploads/carbon air fryer 6l/1.jpg',       // Air Fryer 6l
  '/uploads/carbon aparat za kafu 3 u 1 EM-CA308B/163324.jpg', // Aparat za kafu 3u1
  '/uploads/carbon aparat za kafu EM-CA201CB/163327.jpg',      // Aparat za kafu
];

// Slike za carousel televizora (prva slika iz svakog foldera)
const tvImages = [
  '/uploads/wetransfer_televizori_2025-06-04_0745/carbonTV32HDAITGC/113941.webp',
  '/uploads/wetransfer_televizori_2025-06-04_0745/carbonAndroidTV50FHDSITGC/113931.webp',
  '/uploads/wetransfer_televizori_2025-06-04_0745/carbonwebOSTV43FHDSW/169877.png',
  '/uploads/wetransfer_televizori_2025-06-04_0745/CarbonSmartTV504KUHDSW/169878.png',
  '/uploads/wetransfer_televizori_2025-06-04_0745/CarbonSmartTV65QLED4KSW/169881.png',
];

// Slike za carousel lepota i nega (stajler)
const beautyCareImages = [
  '/uploads/lepota i nega/163334.jpg',
  '/uploads/lepota i nega/163335.jpg',
];

// Carousel komponenta za slike
const FridgeCarousel = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % fridgeAndFreezerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-56 bg-white flex items-center justify-center overflow-hidden w-full mb-2 rounded-xl">
      <img
        src={fridgeAndFreezerImages[current]}
        alt="Frižider ili zamrzivač"
        className="object-contain max-h-full max-w-full transition-all duration-700"
        style={{ borderRadius: '0.75rem' }}
      />
    </div>
  );
};

// Carousel za male aparate
const SmallAppliancesCarousel = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % smallAppliancesImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-56 bg-white flex items-center justify-center overflow-hidden w-full mb-2 rounded-xl">
      <img
        src={smallAppliancesImages[current]}
        alt="Mali aparat"
        className="object-contain max-h-full max-w-full transition-all duration-700"
        style={{ borderRadius: '0.75rem' }}
      />
    </div>
  );
};

// Custom CSS for popup panel
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

const ProductCard = ({ product }: { product: any }) => (
  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg max-w-md mx-auto">
    <div className="relative">
      {product.name === 'Carbon CoolMaster Pro' ? (
        <>
          <FridgeCarousel />
          <div className="text-center pt-2 pb-2">
            <h4 className="text-lg font-bold text-blue-900">Carbon bela tehnika</h4>
          </div>
        </>
      ) : (
        <div className="h-64 bg-gray-100 flex items-center justify-center overflow-hidden" />
      )}
    </div>
    <div className="p-4">
      {product.name === 'Carbon CoolMaster Pro' && (
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {[
            'No Frost tehnologija – bez nakupljanja leda',
            'Inverter motor – tiši rad i manja potrošnja energije',
            '540L zapremina – dovoljno prostora za celu porodicu',
            'Antibakterijski filter – svežina i higijena na najvišem nivou',
          ].map((feature, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold">
              {feature}
            </span>
          ))}
        </div>
      )}
      <div className="flex items-center justify-center">
        <Link to="/frizideri">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Detalji
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

const FeaturedProductCard = ({ product }: { product: any }) => {
  const badges = [
    'Inovativna tehnologija',
    'Energetska efikasnost',
    'Moderan dizajn',
    'Dugotrajna pouzdanost',
  ];
  const shortText = 'Inovacija, dizajn i pouzdanost za vaš dom. Uživajte u efikasnosti i dugotrajnom kvalitetu.';
  return (
    <div className="card-wrapper">
      <style>{popupPanelStyles}</style>
      <Link to="/frizideri" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
        <div className="card-custom flex flex-col justify-between items-center p-8 w-full h-[600px] cursor-pointer">
          <div className="text-xl md:text-2xl font-bold text-center mb-2 mt-2">Carbon bela tehnika</div>
          <div className="relative w-full flex items-center justify-center">
            <FridgeCarousel />
          </div>
          <div className="w-full flex flex-wrap justify-center gap-2 my-2">
            {badges.map((badge, i) => (
              <span key={i} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap">
                {badge}
              </span>
            ))}
          </div>
          <div className="w-full flex justify-center my-2">
            <div className="border-t border-dotted border-gray-400 w-3/4" />
          </div>
          <div className="text-base text-center text-gray-700 mb-2">Frižideri i zamrzivači</div>
          <div className="text-gray-600 text-sm mt-2 text-center">{shortText}</div>
        </div>
      </Link>
      <div className="card-popup-panel">
        <div className="row">
          <a href="/frizideri" className="btn-link">
            <Plus className="w-5 h-5 mr-1" /> Saznaj više
          </a>
          <a href="https://www.laptopcentar.rs/tip/carbon-bt" target="_blank" rel="noopener noreferrer" className="btn-link">
            <MapPin className="w-5 h-5 mr-1" /> Gde kupiti
          </a>
        </div>
      </div>
    </div>
  );
};

const SmallAppliancesCard = () => {
  const badges = [
    'Pametne funkcije',
    'Brza priprema',
    'Jednostavno održavanje',
    'Kompaktan dizajn',
  ];
  const shortText = 'Praktičnost, inovacija i moderan dizajn za vašu kuhinju. Uživajte u lakoj pripremi hrane i napitaka.';
  return (
    <div className="card-wrapper">
      <Link to="/mali-aparati" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
        <div className="card-custom flex flex-col justify-between items-center p-8 w-full h-[600px] cursor-pointer">
          <div className="text-xl md:text-2xl font-bold text-center mb-2 mt-2">Carbon mali kućni aparati</div>
          <div className="relative w-full flex items-center justify-center">
            <SmallAppliancesCarousel />
          </div>
          <div className="w-full flex flex-wrap justify-center gap-2 my-2">
            {badges.map((badge, i) => (
              <span key={i} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap">
                {badge}
              </span>
            ))}
          </div>
          <div className="w-full flex justify-center my-2">
            <div className="border-t border-dotted border-gray-400 w-3/4" />
          </div>
          <div className="text-base text-center text-gray-700 mb-2">Air fryeri i aparati za kafu</div>
          <div className="text-gray-600 text-sm mt-2 text-center">{shortText}</div>
        </div>
      </Link>
      <div className="card-popup-panel">
        <div className="row">
          <a href="/mali-aparati" className="btn-link">
            <Plus className="w-5 h-5 mr-1" /> Saznaj više
          </a>
          <a href="https://www.laptopcentar.rs/tip/carbon-mka" target="_blank" rel="noopener noreferrer" className="btn-link">
            <MapPin className="w-5 h-5 mr-1" /> Gde kupiti
          </a>
        </div>
      </div>
    </div>
  );
};

const TVCarousel = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % tvImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-56 bg-white flex items-center justify-center overflow-hidden w-full mb-2 rounded-xl">
      <img
        src={tvImages[current]}
        alt="Carbon TV"
        className="object-contain max-h-full max-w-full transition-all duration-700"
        style={{ borderRadius: '0.75rem' }}
      />
    </div>
  );
};

const TVCard = () => {
  const badges = [
    'Smart funkcije',
    'Ultra HD',
    'QLED/LED',
    'Vrhunski zvuk',
  ];
  const shortText = 'Kristalno jasna slika, žive boje i vrhunski zvuk. Različite veličine ekrana i pametne funkcije za maksimalno uživanje u omiljenim sadržajima.';
  return (
    <div className="card-wrapper">
      <Link to="/televizori" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
        <div className="card-custom flex flex-col justify-between items-center p-8 w-full h-[600px] cursor-pointer">
          <div className="text-xl md:text-2xl font-bold text-center mb-2 mt-2">Carbon televizori</div>
          <div className="relative w-full flex items-center justify-center">
            <TVCarousel />
          </div>
          <div className="w-full flex flex-wrap justify-center gap-2 my-2">
            {badges.map((badge, i) => (
              <span key={i} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap">
                {badge}
              </span>
            ))}
          </div>
          <div className="w-full flex justify-center my-2">
            <div className="border-t border-dotted border-gray-400 w-3/4" />
          </div>
          <div className="text-base text-center text-gray-700 mb-2">Smart i LED TV</div>
          <div className="text-gray-600 text-sm mt-2 text-center">{shortText}</div>
        </div>
      </Link>
      <div className="card-popup-panel">
        <div className="row">
          <a href="/televizori" className="btn-link">
            <Plus className="w-5 h-5 mr-1" /> Saznaj više
          </a>
          <a href="https://www.laptopcentar.rs/tip/carbon-tv1" target="_blank" rel="noopener noreferrer" className="btn-link">
            <MapPin className="w-5 h-5 mr-1" /> Gde kupiti
          </a>
        </div>
      </div>
    </div>
  );
};

const BeautyCareCarousel = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % beautyCareImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-56 bg-white flex items-center justify-center overflow-hidden w-full mb-2 rounded-xl">
      <img
        src={beautyCareImages[current]}
        alt="Stajler za kosu"
        className="object-contain max-h-full max-w-full transition-all duration-700"
        style={{ borderRadius: '0.75rem' }}
      />
    </div>
  );
};

const BeautyCareCard = () => {
  const badges = [
    'Višenamenski dizajn',
    'Neguje i štiti kosu',
    'Brzo stilizovanje',
    'Luksuzna oprema',
  ];
  const shortText = 'Stilizujte kosu kao profesionalac! 8 u 1 stajler za savršene frizure, negu i zaštitu vaše kose svakog dana.';
  return (
    <div className="card-wrapper">
      <Link to="/stajleri" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
        <div className="card-custom flex flex-col justify-between items-center p-8 w-full h-[600px] cursor-pointer">
          <div className="text-xl md:text-2xl font-bold text-center mb-2 mt-2">Carbon lepota i nega</div>
          <div className="relative w-full flex items-center justify-center">
            <BeautyCareCarousel />
          </div>
          <div className="w-full flex flex-wrap justify-center gap-2 my-2">
            {badges.map((badge, i) => (
              <span key={i} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap">
                {badge}
              </span>
            ))}
          </div>
          <div className="w-full flex justify-center my-2">
            <div className="border-t border-dotted border-gray-400 w-3/4" />
          </div>
          <div className="text-base text-center text-gray-700 mb-2">Multifunkcionalni stajler 8 u 1</div>
          <div className="text-gray-600 text-sm mt-2 text-center">{shortText}</div>
        </div>
      </Link>
      <div className="card-popup-panel">
        <div className="row">
          <a href="/stajleri" className="btn-link">
            <Plus className="w-5 h-5 mr-1" /> Saznaj više
          </a>
          <a href="https://www.laptopcentar.rs/artikal/carbon-8-u-1-multifunkcionalni-stajler-za-kosu-m8" target="_blank" rel="noopener noreferrer" className="btn-link">
            <MapPin className="w-5 h-5 mr-1" /> Gde kupiti
          </a>
        </div>
      </div>
    </div>
  );
};

// Novi CSS za suptilni glow pulsiranje
const pulseCardStyles = `
@keyframes pulse-glow {
  0% {
    box-shadow: 0 0 0 0 rgba(59,130,246,0.18), 0 1px 4px 0 rgba(0,0,0,0.04);
  }
  50% {
    box-shadow: 0 0 16px 8px rgba(59,130,246,0.22), 0 1px 8px 0 rgba(0,0,0,0.08);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(59,130,246,0.18), 0 1px 4px 0 rgba(0,0,0,0.04);
  }
}
.pulse-card {
  animation: pulse-glow 2.2s infinite;
  transition: transform 0.2s, box-shadow 0.2s;
}
.pulse-card:hover {
  transform: scale(1.04);
  box-shadow: 0 0 32px 8px rgba(59,130,246,0.25), 0 4px 24px 0 rgba(0,0,0,0.10);
}
`;

const pulseProducts = [
  {
    name: 'Carbon Air Fryer 6l',
    model: 'KAF-60BE',
    images: [
      '/uploads/carbon air fryer 6l/1.jpg',
      '/uploads/carbon air fryer 6l/2.jpg',
      '/uploads/carbon air fryer 6l/3.jpg',
    ],
    link: '/mali-aparati',
  },
  {
    name: 'Carbon aparat za kafu EM-CA201CB',
    model: 'EM-CA201CB',
    images: [
      '/uploads/carbon aparat za kafu EM-CA201CB/163327.jpg',
      '/uploads/carbon aparat za kafu EM-CA201CB/163328.jpg',
    ],
    link: '/mali-aparati',
  },
  {
    name: 'Carbon Frižider SBS FF2-55NCRNX1 inox',
    model: 'FF2-55NCRNX1',
    images: [
      '/uploads/frizider/SBS FF2-55NCRNX1/s1.jpg',
      '/uploads/frizider/SBS FF2-55NCRNX1/s2.jpg',
    ],
    link: '/frizideri',
  },
  {
    name: 'Carbon Multifunkcionalni stajler 8 u 1',
    model: 'M8',
    images: [
      '/uploads/lepota i nega/163334.jpg',
      '/uploads/lepota i nega/163335.jpg',
    ],
    link: '/stajleri',
  },
];

const pulseCardBg = [
  'from-[#e0f2fe] to-[#f1f5f9]', // plavo-cyan
  'from-[#ede9fe] to-[#f1f5f9]', // ljubičasto-siva
  'from-[#fef9c3] to-[#f1f5f9]', // žuto-siva
  'from-[#fce7f3] to-[#f1f5f9]', // pink-siva
];

const PulseProductCard = ({ product, bgIdx }: { product: typeof pulseProducts[0], bgIdx: number }) => {
  const [imgIdx, setImgIdx] = useState(0);
  useEffect(() => {
    if (!product.images || product.images.length < 2) return;
    const interval = setInterval(() => {
      setImgIdx((prev) => (prev + 1) % product.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [product.images]);
  const imageSrc = product.images && product.images.length > 0 ? product.images[imgIdx] : product.image;
  return (
    <Link to={product.link} className={
      `pulse-card rounded-2xl bg-white border border-gray-200 shadow-md flex flex-col items-center p-6 transition-all duration-300 min-h-[340px] max-w-xs mx-auto group hover:border-blue-500 hover:shadow-xl`
    }>
      <style>{pulseCardStyles}</style>
      <div className="w-full flex items-center justify-center mb-4">
        <div className="rounded-xl w-full flex items-center justify-center h-48 overflow-hidden p-2">
          <img src={imageSrc} alt={product.name} className="object-contain h-full w-full transition-all duration-500 group-hover:scale-105" />
        </div>
      </div>
      <div className="text-center mb-2">
        <div className="font-bold text-lg text-gray-900 leading-tight">{product.name}</div>
      </div>
    </Link>
  );
};

const ProductGrid = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* New Products */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">NOVI PROIZVODI</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pulseProducts.map((product, i) => (
              <PulseProductCard key={i} product={product} bgIdx={i} />
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div id="featured-products">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">IZDVOJENI PROIZVODI</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeaturedProductCard product={featuredProducts[0]} />
            <SmallAppliancesCard />
            <TVCard />
            <BeautyCareCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
