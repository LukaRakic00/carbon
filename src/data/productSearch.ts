import products from '../pages/MaliAparatiProducts';

export interface SearchProduct {
  name: string;
  category: string;
  model: string;
  aliases: string[]; // Skraćenice i alternativni nazivi
}

const searchProducts: SearchProduct[] = products.map((p) => ({
  name: p.name,
  category: p.category,
  model: p.model,
  aliases: [
    ...p.name.toLowerCase().split(/\s|,|\./).filter(Boolean),
    p.model.toLowerCase(),
    ...(p.category ? p.category.toLowerCase().split(/\s|,|\./).filter(Boolean) : []),
    ...(p.name.toLowerCase().includes('air') ? ['fryer', 'frajer', 'airfryer', 'air'] : []),
    ...(p.name.toLowerCase().includes('frižider') || p.name.toLowerCase().includes('frizider') ? ['frizider', 'frižider', 'friz', 'friž'] : []),
    ...(p.name.toLowerCase().includes('zamrzivač') || p.name.toLowerCase().includes('zamrzivac') ? ['zamrzivac', 'zamrzivač', 'zamrz'] : []),
    ...(p.name.toLowerCase().includes('stajler') ? ['stajler', 'staj', 'multifunkcionalni'] : []),
    ...(p.name.toLowerCase().includes('kafu') || p.name.toLowerCase().includes('kafa') ? ['kafa', 'kafu', 'kafet', 'kafeterija'] : []),
    ...(p.category && p.category.toLowerCase().includes('televizor') ? ['tv', 'televizor', 'televizori', 'android', 'smart', 'webos', 'qled', 'uhd', 'hd'] : []),
  ],
}));

export const searchProductByName = (query: string): SearchProduct[] => {
  const searchTerm = query.toLowerCase().trim();
  
  return searchProducts.filter(product => {
    // Pretraga po punom nazivu
    if (product.name.toLowerCase().includes(searchTerm)) return true;
    
    // Pretraga po modelu
    if (product.model.toLowerCase().includes(searchTerm)) return true;
    
    // Pretraga po kategoriji
    if (product.category.toLowerCase().includes(searchTerm)) return true;
    
    // Pretraga po aliasima (skraćenicama)
    if (product.aliases.some(alias => alias.toLowerCase().includes(searchTerm))) return true;
    
    return false;
  });
};

export const getProductsByCategory = (category: string): SearchProduct[] => {
  return searchProducts.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
};

export default searchProducts; 