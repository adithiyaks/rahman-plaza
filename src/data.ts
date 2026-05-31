/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Branch, Floor, JewelryCollection, FootwearItem } from './types';

export const BRANCHES: Branch[] = [
  {
    id: 'plaza',
    name: 'Rahman Plaza',
    tagline: 'The Ultimate 5-Floor Grand retail Landmark',
    description: 'A legendary multi-facility luxury experience in Triplicane. Celebrating over 50 years of retail legacy, Rahman Plaza blends architectural grandeur with premium shopping across five state-of-the-art floors dedicated to travel, high couture, and family heritage.',
    image: '/plaza.png',
    themeColor: 'emerald',
    primaryAccent: '#064e3b', // deep emerald
    secondaryAccent: '#fbbf24', // golden accent
  },
  {
    id: 'palladium',
    name: 'Rahman Palladium',
    tagline: 'The Temple of Fine Jewelry & Curated Luxury',
    description: 'An elite sanctuary dedicated to high-end jewelry and custom craftsmanship. Styled with soft ivory limestone, radiant champagne gold columns, and deep obsidian, the Palladium presents a bespoke haven for timeless ornaments and generational masterpieces.',
    image: '/palladium.png',
    themeColor: 'gold',
    primaryAccent: '#171717', // charcoal black
    secondaryAccent: '#d97706', // warm amber gold
  },
  {
    id: 'khalifa',
    name: 'Rahman Khalifa',
    tagline: 'Modern Streetwear & High-Performance Footwear',
    description: 'The futuristic hub for avant-garde fashion and urban sneaker culture. Combining industrial design, bold typography, and sleek monochromatic structures, Rahman Khalifa connects streetwear collectors with the latest technical footwear releases.',
    image: '/shoe.png',
    themeColor: 'dark',
    primaryAccent: '#0a0a0a', // pitch black
    secondaryAccent: '#ffffff', // pure light accent
  }
];

export const PLAZA_FLOORS: Floor[] = [
  {
    id: 1,
    level: 'Floor 01',
    name: 'The Grand Atrium',
    tagline: 'TRAVEL LUGGAGE & LIFESTYLE ACCESSORIES',
    description: 'Explore our signature collection of premium travel luggage, backpacks, handbags, fine accessories, and daily utility essentials.',
    image: '/floor1.png',
    categories: ['Travel Luggage', 'Backpacks & Bags', 'Women\'s Handbags', 'Daily Utilities'],
    brands: ['Samsonite', 'American Tourister', 'Delsey Paris', 'Wildcraft', 'VIP'],
    materials: ['Polycarbonate', 'Full-Grain Leather', 'Ballistic Nylon', 'Stainless Steel'],
    highlights: ['International lifetime warranty on luggage', 'Custom leather monogram embossing', 'Waterproofing testing zones'],
    details: [
      {
        name: 'Premium Hard Shell Cabin Trolley 20"',
        category: 'Travel Luggage',
        brands: ['Samsonite'],
        materials: ['Polycarbonate'],
        description: 'Ultra-durable, lightweight cabin trolley featuring TSA-approved locks, 360-degree double spinner wheels, and compression divider.'
      }
    ]
  },
  {
    id: 2,
    level: 'Floor 02',
    name: 'Heritage Weaves',
    tagline: 'TRADITIONAL & BRIDAL WEAR',
    description: 'Step into Chennai\'s finest bridal sanctuary featuring authentic handloom silks, custom gold embroidery, and royal weaves.',
    image: '/floor2.png',
    categories: ['Handloom Kancheepuram Silks', 'Bespoke Bridal Lehengas', 'Designer Anarkalis', 'Regal Sarees'],
    brands: ['Kancheepuram Weaver Guilds', 'Rahman Traditions', 'Designer Exclusive Series'],
    materials: ['Pure Mulberry Silk', '24k Liquid Gold Zari', 'Premium Georgette'],
    highlights: ['Authentic Silk Mark certified weaves', 'Exclusive private bridal consultation lounges', 'Custom zardozi and thread embroidery options'],
    details: [
      {
        name: 'The Subarna Royal Kancheepuram Saree',
        category: 'Kancheepuram Silk Saree',
        brands: ['Kancheepuram Weaver Guilds'],
        materials: ['Pure double-warp Mulberry silk', 'Pure gold zari weave'],
        description: 'Handwoven over 3 months, showcasing classical temple borders, rich heavy pallu with fine golden thread patterns, and authentic certification.'
      },
      {
        name: 'Mayur Pankh Zardozi Lehenga',
        category: 'Bespoke Bridal Lehengas',
        brands: ['Rahman Traditions'],
        materials: ['Heavy velvet backing', 'Genuine silver and gold wire embroidery'],
        description: 'An exquisite handconcieved bridal lehenga with mesmerizing peacock motifs, encrusted with tiny semi-precious beads and detailed dabka work.'
      }
    ]
  },
  {
    id: 3,
    level: 'Floor 03',
    name: 'Modern Elegance',
    tagline: 'CONTEMPORARY MENSWEAR & FORMAL',
    description: 'Bespoke tailoring meets high-end contemporary menswear. Discover luxurious fabrics, custom suits, and formal aesthetics.',
    image: '/floor3.png',
    categories: ['Bespoke Custom Suits', 'Corporate Formal Wear', 'Fine Italian Textiles'],
    brands: ['Raymond Premium Select', 'Siyaram\'s Royal Silk', 'Rahman Tailoring Lab', 'Reid & Taylor'],
    materials: ['Super 150s Merino Wool', 'Egyptian Giza Cotton', 'Pure Irish Linen'],
    highlights: ['On-site master tailors for perfect adjustments', 'Measurement profile saved digitally', 'Bespoke fabric curations directly from Milan'],
    details: [
      {
        name: 'The Grand Windsor Blazer',
        category: 'Bespoke Custom Suits',
        brands: ['Rahman Tailoring Lab'],
        materials: ['100% Italian Super 150s Wool', 'Real horn buttons'],
        description: 'A masterpiece blazer tailored individually to your shoulder slope, posture, and measurements. Half-canvased for natural movement and elegant drape.'
      },
      {
        name: 'Giza Imperial Formal Shirt',
        category: 'Corporate Formal Wear',
        brands: ['Raymond Premium Select'],
        materials: ['Egyptian Giza 92 Cotton', 'Mother-of-pearl buttons'],
        description: 'High thread-count premium white shirt with clean french cuffs, offering silk-like touch, incredible durability, and high breathability.'
      }
    ]
  },
  {
    id: 4,
    level: 'Floor 04',
    name: 'The Artisans\' Enclave',
    tagline: 'HANDCRAFTED LEATHER & ACCESSORIES',
    description: 'A curated arena featuring ultra-durable luxury luggage, travel gear, and handconcieved top-grain leather bags.',
    image: '/floor4.png',
    categories: ['Smart Polycarbonate Suitcases', 'Executive Leather Briefcases', 'Premium Travel Rucksacks'],
    brands: ['Samsonite Black Label', 'American Tourister', 'Delsey Paris', 'Rahman Signature', 'Victorinox'],
    materials: ['Shatterproof Polycarbonate', 'Ballistic Kevlar Nylon', 'Full-Grain Tuscan Leather'],
    highlights: ['Bespoke monogram engraving available', 'International lifetime warranty products', 'Intelligent built-in GPS weight tracking'],
    details: [
      {
        name: 'The Sovereign Leather Weekender',
        category: 'Travel Luggage',
        brands: ['Rahman Signature'],
        materials: ['Vegetable-tanned full-grain leather', 'Solid copper hardware'],
        description: 'An iconic, spacious travel companion hand-stitched by multi-generational artisans. Features a separate ventilated shoe compartment and water-resistant nylon lining.'
      },
      {
        name: 'Aero-Lite Titanium Carry-On',
        category: 'Polycarbonate Suitcases',
        brands: ['Delsey Paris', 'Samsonite'],
        materials: ['Aerospace-grade polycarbonate', 'Aircraft aluminum frame'],
        description: 'Ultra-lightweight suitcase featuring multi-directional dual-caster silent wheels, integrated TSA lock, and dual compression straps.'
      },
      {
        name: 'Urban Vanguard Tech Rucksack',
        category: 'Executive Backpacks',
        brands: ['Rahman Signature', 'Victorinox'],
        materials: ['1050D Ballistic nylon', 'Microfiber leather details'],
        description: 'Sleek professional backpack with dedicated padded impact-resistant compartment for 16" laptops, hidden security pockets, and USB-C pass-through.'
      }
    ]
  },
  {
    id: 5,
    level: 'Floor 05',
    name: 'Platinum Lounge',
    tagline: 'BESPOKE TAILORING & VIP CONCIERGE',
    description: 'Our private penthouse salon offering custom tailoring, VIP concierge booking, and elite lifestyle collections.',
    image: '/floor5.png',
    categories: ['Fine Collector Timepieces', 'Bespoke Fine Stationery', 'Luxury Crystal & Pottery'],
    brands: ['Swarovski Boutique', 'Montblanc Elite', 'Amouage Paris', 'Rahman Living', 'Rado Chronographs'],
    materials: ['Bohemian Hand-Cut Crystal', 'Macassar Ebony Wood', 'Sterling Silver'],
    highlights: ['Custom private fragrance testing room', 'VIP Lounge offering fine South Indian Kaapi', 'Watch engraving and leather strap customizations'],
    details: [
      {
        name: 'Grand Horizon Crystal Decanter',
        category: 'Luxury Crystal & Pottery',
        brands: ['Swarovski Boutique', 'Rahman Living'],
        materials: ['24% Lead crystal', 'Hand-cut geometric engravings'],
        description: 'A breathtaking tabletop decanter of extraordinary clarity, catching light with fine hand-cut facets that provide a royal visual presence.'
      }
    ]
  }
];

export const PALLADIUM_COLLECTIONS: JewelryCollection[] = [
  {
    id: 'heritage',
    title: 'Aura of Golden Heritage',
    description: 'Masterpieces handconcieved by master gold-smiths using authentic antique yellow gold, detailed filigree, and genuine temple-grade rubies.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600', // high quality gold rings/necklaces
    tag: 'Bridal Heritage',
    materials: ['22k Gold', 'Burmese Rubies', 'Uncut Polki Diamonds']
  },
  {
    id: 'platinum',
    title: 'Monarch Platinum & Diamonds',
    description: 'Ultra-contemporary diamond chokers and minimalist engagement bands cast in high-purity rare white platinum.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600', // sparkling white jewelry
    tag: 'Haute Joaillerie',
    materials: ['Platinum 950', 'VVS1 Hearts & Arrows Diamonds']
  },
  {
    id: 'pearls',
    title: 'Contemporary Sea Whispers',
    description: 'Charming modern arrangements combining handpicked Akoya saltwater pearls with delicate 18k rose gold networks.',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600', // luxury pearl necklace
    tag: 'Minimal Artistry',
    materials: ['18k Rose Gold', 'Japanese Akoya Pearls', 'Natural Sapphires']
  }
];

export const KHALIFA_FOOTWEAR: FootwearItem[] = [
  {
    id: 'k1',
    name: 'Aero-Swift Knit S1',
    category: 'High-Performance Sneakers',
    price: '₹14,500',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600', // Red athletic shoe
    badge: 'Best Seller',
    description: 'Responsive aerated mesh with lightweight nitrogen-infused souls, combining high speed bounce with sleek modern contours.'
  },
  {
    id: 'k2',
    name: 'Vanguard Leather High-Tops',
    category: 'Urban High-Fashion',
    price: '₹19,800',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=600', // Urban sneaker
    badge: 'Limited Edition',
    description: 'Handstitched full-grain black calfskin leather panels, heavy rubberized outsoles, and signature metallic quick-buckles.'
  },
  {
    id: 'k3',
    name: 'Mono-Eclipse Sleek Slides',
    category: 'Premium Leisure',
    price: '₹6,400',
    image: '/khalifa_slides.png',
    description: 'Ergonomically contour-locked premium EVA slides in satin charcoal black, ensuring exceptional softness and structural durability.'
  },
  {
    id: 'k4',
    name: 'Retro-Lux Court Heritage',
    category: 'Daily Essential Luxury',
    price: '₹12,900',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600', // colourful retro sneaker
    badge: 'New Arrival',
    description: 'A masterly reimagination of classical 80s tennis models, with textured suede linings and ivory gum finishes.'
  }
];
