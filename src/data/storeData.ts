export interface StoreInfo {
  name: string;
  tagline: string;
  category: string;
  fullAddress: string;
  plaza: string;
  chowk: string;
  postalCode: string;
  city: string;
  country: string;
  phone: string;
  phoneDisplay: string;
  phoneTel: string;
  googleMapsCode: string;
  currentStatus: string;
  listedClosingTime: string;
  listedServices: string[];
  directionsUrl: string;
}

export const STORE_INFO: StoreInfo = {
  name: "Shami Mobile",
  tagline: "Your Next Smartphone Starts Here.",
  category: "Cell phone store",
  fullAddress: "Shop #1, opposite Delhi Sweet, Venus Chowk, Al Aziz Plaza, Block B, Okara, 56300, Pakistan",
  plaza: "Al Aziz Plaza, Block B",
  chowk: "Venus Chowk",
  postalCode: "56300",
  city: "Okara",
  country: "Pakistan",
  phone: "+92 333 8358009",
  phoneDisplay: "+92 333 8358009",
  phoneTel: "tel:+923338358009",
  googleMapsCode: "RC4V+JR, Okara, Pakistan",
  currentStatus: "Open",
  listedClosingTime: "10:00 PM",
  listedServices: [
    "In-store shopping",
    "In-store pickup",
    "Delivery"
  ],
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=Shami+Mobile+Shop+1+opposite+Delhi+Sweet+Venus+Chowk+Al+Aziz+Plaza+Block+B+Okara+56300+Pakistan"
};

export interface ProductItem {
  id: string;
  name: string;
  brand: string;
  model: string;
  category: 'iphones' | 'android' | 'accessories';
  storageOrVariant: string;
  colorOptions: string;
  availabilityNote: string;
  priceNote: string;
  description: string;
  image: string;
  highlights: string[];
}

export const CATALOGUE_ITEMS: ProductItem[] = [
  {
    id: "iphone-16-pro",
    name: "Apple iPhone 16 Pro & Pro Max",
    brand: "Apple",
    model: "iPhone 16 Pro Series",
    category: "iphones",
    storageOrVariant: "128GB / 256GB / 512GB / 1TB (Inquire for in-stock capacity)",
    colorOptions: "Desert Titanium, Natural, White, Black Titanium",
    availabilityNote: "Contact store for today's in-stock units",
    priceNote: "Daily market rate upon direct inquiry",
    description: "Flagship iPhone inquiry for Shami Mobile customers in Okara. Inquire directly for current in-stock storage variants, physical SIM/eSIM configurations, and PTA registration status.",
    image: "/src/assets/images/category_iphone_showcase_1791732952203.jpg",
    highlights: ["OLED Super Retina XDR", "Pro Camera System", "Available for In-Store Pickup"]
  },
  {
    id: "iphone-15-series",
    name: "Apple iPhone 15 & 15 Pro",
    brand: "Apple",
    model: "iPhone 15 Series",
    category: "iphones",
    storageOrVariant: "128GB / 256GB (Inquire for available variants)",
    colorOptions: "Black, Blue, Green, Yellow, Pink",
    availabilityNote: "Available to check via phone or in-store",
    priceNote: "Current market rate upon direct inquiry",
    description: "Browse availability for iPhone 15 lineup at Venus Chowk, Okara. Connect with our store team to confirm current models on display and in-store pickup options.",
    image: "/src/assets/images/hero_smartphone_showcase_1791732940395.jpg",
    highlights: ["USB-C Architecture", "Dynamic Island Display", "In-Store Inspection"]
  },
  {
    id: "iphone-13-14",
    name: "Apple iPhone 13 & 14 Series",
    brand: "Apple",
    model: "iPhone 13 / 14 Series",
    category: "iphones",
    storageOrVariant: "128GB / 256GB",
    colorOptions: "Midnight, Starlight, Blue, Product(RED)",
    availabilityNote: "Contact store for daily stock availability",
    priceNote: "Competitive daily rate upon direct inquiry",
    description: "Inquire about popular iPhone 13 and 14 options at Shami Mobile. Popular choice among Okara smartphone buyers seeking dependable performance.",
    image: "/src/assets/images/category_iphone_showcase_1791732952203.jpg",
    highlights: ["A-Series Bionic", "Dual-Camera Setup", "Available for Pickup"]
  },
  {
    id: "samsung-galaxy-s24",
    name: "Samsung Galaxy S24 Ultra & S24+",
    brand: "Samsung",
    model: "Galaxy S24 Series",
    category: "android",
    storageOrVariant: "256GB / 512GB (Inquire for available configurations)",
    colorOptions: "Titanium Gray, Titanium Black, Titanium Violet",
    availabilityNote: "Contact store to confirm current stock",
    priceNote: "Daily market rate upon direct inquiry",
    description: "Premium Android flagship smartphone inquiry at Shami Mobile, Okara. Dynamic AMOLED 2X display and versatile quad-camera array.",
    image: "/src/assets/images/category_android_showcase_1791732965682.jpg",
    highlights: ["Dynamic AMOLED 2X", "S Pen Support", "In-Store Pickup Available"]
  },
  {
    id: "samsung-galaxy-a-series",
    name: "Samsung Galaxy A Series",
    brand: "Samsung",
    model: "Galaxy A55 / A35 / A15",
    category: "android",
    storageOrVariant: "128GB / 256GB",
    colorOptions: "Awesome Iceblue, Awesome Navy, Awesome Lilac",
    availabilityNote: "Regularly stocked series – Call to confirm today's stock",
    priceNote: "Official market pricing upon direct inquiry",
    description: "Dependable mid-range Android options from Samsung. Inquire with Shami Mobile staff for current variant availability and in-store pickup.",
    image: "/src/assets/images/category_android_showcase_1791732965682.jpg",
    highlights: ["Super AMOLED 120Hz", "Long-lasting 5000mAh Battery", "In-Store Shopping"]
  },
  {
    id: "xiaomi-redmi-note",
    name: "Xiaomi & Redmi Note Series",
    brand: "Xiaomi",
    model: "Redmi Note 13 / 13 Pro Series",
    category: "android",
    storageOrVariant: "8GB/128GB, 8GB/256GB",
    colorOptions: "Midnight Black, Ocean Teal, Arctic White",
    availabilityNote: "Contact store for in-stock models",
    priceNote: "Daily price upon direct inquiry",
    description: "High-value Android smartphones with fast charging and crisp AMOLED panels. Check availability with Shami Mobile in Okara.",
    image: "/src/assets/images/hero_smartphone_showcase_1791732940395.jpg",
    highlights: ["Fast HyperCharge", "CrystalRes AMOLED", "In-Store Pickup Available"]
  },
  {
    id: "fast-chargers-adapters",
    name: "Fast Charging Adapters (20W / 33W / 65W)",
    brand: "Mobile Accessories",
    model: "USB-C PD Fast Charging Units",
    category: "accessories",
    storageOrVariant: "Standard Type-C Power Delivery",
    colorOptions: "White, Graphite Black",
    availabilityNote: "Available in-store – Inquire for specific wattage",
    priceNote: "Inquire for current retail pricing",
    description: "High-speed charging bricks suitable for iPhones and modern Android devices. Available for in-store pickup at Venus Chowk, Okara.",
    image: "/src/assets/images/category_accessories_showcase_1791732977396.jpg",
    highlights: ["Power Delivery (PD)", "Overheat Protection", "In-Store Inspection"]
  },
  {
    id: "braided-cables",
    name: "Durable Braided USB-C & Lightning Cables",
    brand: "Mobile Accessories",
    model: "High-Speed Data & Fast Charging Cable",
    category: "accessories",
    storageOrVariant: "1 Meter / 2 Meter Lengths",
    colorOptions: "Braided Charcoal, Space Grey, Silver",
    availabilityNote: "Available in-store at Venus Chowk",
    priceNote: "Inquire for current retail pricing",
    description: "Reinforced braided cables engineered for durable daily charging and fast data transfer across all smartphones.",
    image: "/src/assets/images/category_accessories_showcase_1791732977396.jpg",
    highlights: ["Tangle-Resistant Weave", "Fast Current Support", "Available for Pickup"]
  },
  {
    id: "audio-earbuds",
    name: "Wireless Earbuds & Audio Solutions",
    brand: "Mobile Accessories",
    model: "Bluetooth TWS Wireless Earbuds",
    category: "accessories",
    storageOrVariant: "Compact Charging Case Edition",
    colorOptions: "Gloss White, Matte Black",
    availabilityNote: "Contact store to inquire for current models",
    priceNote: "Inquire for current retail pricing",
    description: "Crisp portable audio with compact recharging case for smartphone users on the go. Inquire at Shami Mobile, Okara.",
    image: "/src/assets/images/category_accessories_showcase_1791732977396.jpg",
    highlights: ["Touch Controls", "Type-C Charging Case", "In-Store Pickup Available"]
  },
  {
    id: "screen-protectors-cases",
    name: "Tempered Glass & Premium Protective Cases",
    brand: "Mobile Accessories",
    model: "Full Coverage Screen Protectors & Covers",
    category: "accessories",
    storageOrVariant: "Model-Specific Cutouts",
    colorOptions: "Clear, Matte Smoke, Black",
    availabilityNote: "In-store application and pickup available",
    priceNote: "Inquire for current retail pricing",
    description: "High-grade 9H tempered glass screen protectors and drop-resistant shockproof cases for iPhones and Android devices.",
    image: "/src/assets/images/category_accessories_showcase_1791732977396.jpg",
    highlights: ["9H Hardness Glass", "Precision Cutouts", "In-Store Application"]
  }
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const STORE_FAQS: FaqItem[] = [
  {
    id: "faq-location",
    question: "Where is Shami Mobile located?",
    answer: "Shami Mobile is located at Shop #1, opposite Delhi Sweet, Venus Chowk, Al Aziz Plaza, Block B, Okara, Punjab 56300, Pakistan. Our Google Maps location code is RC4V+JR, Okara, Pakistan."
  },
  {
    id: "faq-phone",
    question: "What is Shami Mobile's phone number?",
    answer: "You can reach Shami Mobile directly at +92 333 8358009. Feel free to call us for stock inquiries, pricing, in-store pickup coordination, and directions."
  },
  {
    id: "faq-hours",
    question: "What closing time is listed for the store?",
    answer: "The listed closing time from the business listing is 10:00 PM. A complete daily opening timetable has not been officially published, so we recommend calling +92 333 8358009 before visiting to confirm today's opening hours."
  },
  {
    id: "faq-in-store",
    question: "Can customers shop in-store at Shami Mobile?",
    answer: "Yes, in-store shopping is one of our verified listed services. Customers are welcome to visit our shop at Venus Chowk, Okara to inspect smartphones, check accessories, and speak directly with our team."
  },
  {
    id: "faq-pickup",
    question: "Is in-store pickup available?",
    answer: "Yes, in-store pickup is a listed service. You can call +92 333 8358009 to inquire about a smartphone or accessory, confirm its availability, and collect it directly from Shop #1 at Al Aziz Plaza, Venus Chowk, Okara."
  },
  {
    id: "faq-delivery",
    question: "Is delivery listed as available?",
    answer: "Delivery is listed as a service in the business profile. Specific delivery coverage zones, delivery schedules, and applicable policies are confirmed directly with the store by calling +92 333 8358009."
  },
  {
    id: "faq-availability",
    question: "How can customers check current phone availability and prices?",
    answer: "Because smartphone inventory and daily market rates in Pakistan change frequently, the most reliable way to check live stock, color/storage variants, and today's price is to call Shami Mobile directly at +92 333 8358009 or visit the store at Venus Chowk."
  },
  {
    id: "faq-directions",
    question: "How can customers get directions to Shami Mobile?",
    answer: "You can use the 'Get Directions' button on this website, which opens Google Maps directed to Shami Mobile at Venus Chowk, Al Aziz Plaza, Okara, or navigate using the Google Maps Plus Code: RC4V+JR, Okara."
  }
];
