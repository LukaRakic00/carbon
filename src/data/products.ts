interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  aliases: string[]; // Skraćenice i alternativni nazivi
}

const products: Product[] = [
  {
    id: '1',
    name: 'Philips Airfryer XXL',
    category: 'Mali kućni aparati',
    subcategory: 'Air fryeri',
    aliases: ['philips', 'xxl', 'air', 'fryer', 'frajer']
  },
  {
    id: '2',
    name: 'Tefal ActiFry Genius XL',
    category: 'Mali kućni aparati',
    subcategory: 'Air fryeri',
    aliases: ['tefal', 'actifry', 'genius', 'xl', 'air', 'fryer', 'frajer']
  },
  {
    id: '3',
    name: 'Samsung Smart TV 55"',
    category: 'Televizori',
    subcategory: 'Smart TV',
    aliases: ['samsung', 'smart', 'tv', '55', 'televizor']
  },
  {
    id: '4',
    name: 'LG Android TV 65"',
    category: 'Televizori',
    subcategory: 'Android TV',
    aliases: ['lg', 'android', 'tv', '65', 'televizor']
  },
  {
    id: '5',
    name: 'Gorenje frižider',
    category: 'Bela tehnika',
    subcategory: 'Frižideri',
    aliases: ['gorenje', 'frizider', 'friz', 'frižider']
  },
  {
    id: '6',
    name: 'Beko zamrzivač',
    category: 'Bela tehnika',
    subcategory: 'Zamrzivači',
    aliases: ['beko', 'zamrzivac', 'zamrzivač', 'zamrz']
  },
  {
    id: '7',
    name: 'DeLonghi aparat za kafu',
    category: 'Mali kućni aparati',
    subcategory: 'Aparati za kafu',
    aliases: ['delonghi', 'kafa', 'kafu', 'kafet', 'kafeterija']
  },
  {
    id: '8',
    name: 'Philips aparat za kafu',
    category: 'Mali kućni aparati',
    subcategory: 'Aparati za kafu',
    aliases: ['philips', 'kafa', 'kafu', 'kafet', 'kafeterija']
  },
  {
    id: '9',
    name: 'Braun multifunkcionalni stajler',
    category: 'Lepota i nega',
    subcategory: 'Multifunkcionalni stajler',
    aliases: ['braun', 'stajler', 'staj', 'brijac', 'brijač']
  }
];

export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase().trim();
  
  return products.filter(product => {
    // Pretraga po punom nazivu
    if (product.name.toLowerCase().includes(searchTerm)) return true;
    
    // Pretraga po kategoriji
    if (product.category.toLowerCase().includes(searchTerm)) return true;
    
    // Pretraga po podkategoriji
    if (product.subcategory.toLowerCase().includes(searchTerm)) return true;
    
    // Pretraga po aliasima (skraćenicama)
    if (product.aliases.some(alias => alias.toLowerCase().includes(searchTerm))) return true;
    
    return false;
  });
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => 
    product.category.toLowerCase() === category.toLowerCase() ||
    product.subcategory.toLowerCase() === category.toLowerCase()
  );
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export default products; 