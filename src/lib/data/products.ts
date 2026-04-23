export interface Product {
  slug: string
  name: string
  tagline: string
  description: string
  longDescription: string
  category: 'room' | 'dog' | 'bundle'
  useCases: string[]
  keyStats: { value: string; label: string }[]
  benefits: { title: string; description: string }[]
  howItWorks: { step: string; description: string }[]
  certifications: string[]
  amazonUrl: string
  color: string
  accentColor: string
  emoji: string
  image: string
  price?: string
  originalPrice?: string
}

export const AMAZON_STORE = 'https://www.amazon.co.uk/stores/Sanigone/page/B5052E80-FC20-4D57-ADAD-3E8AE135CA27'

// Room Sanitisers
export const products: Product[] = [
  {
    slug: 'total-release',
    name: 'Total Release Room Sanitiser',
    tagline: 'One can. Complete room protection.',
    description: 'A single-use fogging device that fills every corner of a room with antiviral, antibacterial mist — killing 99.99% of pathogens in minutes.',
    longDescription: 'The Sanigone Total Release Sanitiser is the most thorough room disinfection solution available. Simply activate the can, leave the room, and return to a fully sanitised space. The ultra-fine mist reaches every surface, crack, and crevice conventional sprays miss. Kills 99.99% of viruses and bacteria including coronaviruses, norovirus, MRSA, and mould.',
    category: 'room',
    useCases: ['Home', 'Office', 'Hotel Rooms', 'Cars', 'Caravans', 'Care Homes', 'Healthcare'],
    keyStats: [
      { value: '99.99%', label: 'Pathogens killed' },
      { value: '7 days', label: 'Protection lasts' },
      { value: '200ml', label: 'Can size' },
      { value: '10 min', label: 'Contact time' },
    ],
    benefits: [
      { title: 'No surfaces missed', description: 'Ultra-fine mist penetrates every corner, crack, and crevice.' },
      { title: 'Hospital-grade efficacy', description: 'Tested to EN 14476, EN 1276, and EN 1650 standards.' },
      { title: 'No residue', description: 'Leaves no sticky film — safe for all surfaces including electronics.' },
      { title: 'Odour elimination', description: 'Neutralises bad odours at the source, not just masks them.' },
    ],
    howItWorks: [
      { step: 'Place', description: 'Position the can in the centre of the room.' },
      { step: 'Activate', description: 'Press the trigger and leave the room immediately.' },
      { step: 'Wait', description: 'Allow 10 minutes for the mist to disperse and work.' },
      { step: 'Return', description: 'Ventilate briefly — the room is now fully sanitised.' },
    ],
    certifications: ['EN 14476', 'EN 1276', 'EN 1650', 'REACH'],
    amazonUrl: 'https://www.amazon.co.uk/dp/B08XXXXXX1',
    color: '#2D8C3F',
    accentColor: '#4CAF50',
    emoji: '💨',
    image: '/images/total-release.png',
    price: '£11.95',
  },
  {
    slug: 'total-blast',
    name: 'Total Blast Sanitiser',
    tagline: 'Targeted. Powerful. Instant.',
    description: 'A precision-spray sanitiser for targeted disinfection of surfaces, objects, and high-touch areas. Professional-grade results in seconds.',
    longDescription: 'The Sanigone Total Blast Sanitiser delivers targeted, high-powered disinfection exactly where you need it. Ideal for high-touch surfaces, shared equipment, and regular maintenance sanitisation. Kills 99.99% of viruses and bacteria on contact — dries quickly and leaves no residue.',
    category: 'room',
    useCases: ['Kitchen Surfaces', 'Door Handles', 'Shared Equipment', 'Gym Equipment', 'Retail', 'Hospitality'],
    keyStats: [
      { value: '99.99%', label: 'Kill rate' },
      { value: '30 sec', label: 'Contact time' },
      { value: '500ml', label: 'Can size' },
      { value: '0', label: 'Harmful chemicals' },
    ],
    benefits: [
      { title: 'Instant action', description: 'Works in 30 seconds — ideal for frequent sanitisation.' },
      { title: 'Safe for all surfaces', description: 'Non-corrosive formula safe on metals, plastics, and fabrics.' },
      { title: 'Child & pet safe', description: 'Non-toxic once dry — safe for use around family and animals.' },
      { title: 'Streak-free finish', description: 'Dries clear with no residue or smearing.' },
    ],
    howItWorks: [
      { step: 'Spray', description: 'Apply directly to the target surface from 20–30cm.' },
      { step: 'Wait', description: 'Allow 30 seconds contact time.' },
      { step: 'Wipe or leave', description: 'Wipe away or allow to air-dry.' },
    ],
    certifications: ['EN 14476', 'EN 1276', 'EN 1650'],
    amazonUrl: 'https://www.amazon.co.uk/dp/B08XXXXXX2',
    color: '#2D8C3F',
    accentColor: '#4CAF50',
    emoji: '🧴',
    image: '/images/total-blast.png',
    price: '£9.95',
  },
  // Dog Products
  {
    slug: 'dog-wipes',
    name: 'Anti Viral Wipes for Dogs',
    tagline: 'Keep your dog clean between baths.',
    description: 'Specially formulated antiviral and antibacterial wipes for dogs. Safe for regular use — kills germs without drying or irritating skin.',
    longDescription: 'Sanigone Dog Antiviral Wipes are designed specifically for dogs. After every walk, give your dog a quick wipe-down to remove dirt, allergens, bacteria, and viruses. The gentle formula is alcohol-free and pH-balanced for canine skin, making it safe for daily use.',
    category: 'dog',
    useCases: ['After Walks', 'Muddy Paws', 'Ear Cleaning', 'Face Cleaning', 'Kennels', 'Vets'],
    keyStats: [
      { value: '99.99%', label: 'Bacteria killed' },
      { value: '0%', label: 'Alcohol content' },
      { value: 'pH', label: 'Balanced for dogs' },
      { value: 'Daily', label: 'Safe for use' },
    ],
    benefits: [
      { title: 'Alcohol-free & gentle', description: 'Safe for regular use — won\'t dry out your dog\'s skin or coat.' },
      { title: 'Antiviral protection', description: 'Kills 99.99% of viruses and bacteria on contact.' },
      { title: 'Large & thick wipes', description: 'Extra-large wipes designed for bigger surfaces and paws.' },
      { title: 'Fresh scent', description: 'Light, fresh fragrance leaves your dog smelling great.' },
    ],
    howItWorks: [
      { step: 'Pull a wipe', description: 'Remove one wipe from the resealable pack.' },
      { step: 'Wipe down', description: 'Clean paws, coat, ears, or face gently.' },
      { step: 'Done', description: 'No rinsing needed — safe to leave on.' },
    ],
    certifications: ['EN 1276', 'Veterinary Approved', 'pH Balanced'],
    amazonUrl: 'https://www.amazon.co.uk/dp/B08XXXXXX3',
    color: '#2D5016',
    accentColor: '#7CB518',
    emoji: '🐾',
    image: '/images/dog-wipes.png',
    price: '£14.25',
    originalPrice: '£14.99',
  },
  {
    slug: 'dog-quick-wash',
    name: 'No Rinse Quick Wash for Dogs',
    tagline: 'A full clean, no bath needed.',
    description: 'An antiviral no-rinse shampoo for dogs. Cleans, deodorises, and protects in one quick application — no water required.',
    longDescription: 'The Sanigone No-Rinse Quick Wash is a revolutionary waterless shampoo for dogs that cleans, deodorises, and sanitises in one step. Perfect for between baths, after walks, or when a full bath isn\'t practical. Simply apply, work through the coat, and towel dry.',
    category: 'dog',
    useCases: ['Between Baths', 'After Walks', 'Travel', 'Elderly/Anxious Dogs', 'Post-Vet Visits', 'Shows'],
    keyStats: [
      { value: '3-in-1', label: 'Clean, deodorise, protect' },
      { value: '0', label: 'Water needed' },
      { value: '99.99%', label: 'Bacteria killed' },
      { value: '500ml', label: 'Bottle size' },
    ],
    benefits: [
      { title: 'No water required', description: 'Full clean without the stress of a traditional bath.' },
      { title: 'Antiviral protection', description: 'Kills bacteria and viruses while cleaning the coat.' },
      { title: 'Conditions coat', description: 'Leaves the coat soft, shiny, and fresh-smelling.' },
      { title: 'Stress-free', description: 'Ideal for dogs that are anxious about baths.' },
    ],
    howItWorks: [
      { step: 'Apply', description: 'Work the formula into the coat against the grain.' },
      { step: 'Massage', description: 'Massage gently to lift dirt and distribute product.' },
      { step: 'Towel dry', description: 'Towel dry — no rinsing needed.' },
    ],
    certifications: ['EN 1276', 'Dermatologically Tested', 'pH Balanced'],
    amazonUrl: 'https://www.amazon.co.uk/dp/B08XXXXXX4',
    color: '#2D5016',
    accentColor: '#7CB518',
    emoji: '✨',
    image: '/images/dog-quick-wash.png',
    price: '£7.95',
    originalPrice: '£8.50',
  },
  // Bundles
  {
    slug: 'double-protection',
    name: 'Double Protection Bundle',
    tagline: 'Complete protection for your space.',
    description: 'The perfect combination of Total Release and Total Blast sanitisers for complete room and surface protection.',
    longDescription: 'The Sanigone Double Protection Bundle gives you both our flagship products at a special price. Use Total Release for complete room sanitisation and Total Blast for targeted surface disinfection. Perfect for homes, offices, and businesses that need comprehensive protection.',
    category: 'bundle',
    useCases: ['Home Protection', 'Office Sanitisation', 'Business Use', 'Regular Maintenance'],
    keyStats: [
      { value: '2', label: 'Products included' },
      { value: '21%', label: 'Savings' },
      { value: '99.99%', label: 'Protection' },
      { value: 'Complete', label: 'Coverage' },
    ],
    benefits: [
      { title: 'Better value', description: 'Save £11.50 compared to buying separately.' },
      { title: 'Complete protection', description: 'Room fogging + surface spray for total coverage.' },
      { title: 'Versatile use', description: 'Perfect for both deep cleaning and daily maintenance.' },
      { title: 'Prime eligible', description: 'Fast, free delivery with Amazon Prime.' },
    ],
    howItWorks: [
      { step: 'Deep clean', description: 'Use Total Release for thorough room sanitisation.' },
      { step: 'Maintain', description: 'Use Total Blast for daily surface disinfection.' },
      { step: 'Stay protected', description: 'Enjoy 7 days of continuous protection.' },
    ],
    certifications: ['EN 14476', 'EN 1276', 'EN 1650'],
    amazonUrl: 'https://www.amazon.co.uk/dp/B08XXXXXX5',
    color: '#4A0072',
    accentColor: '#C084FC',
    emoji: '🛡️',
    image: '/images/bundle-double.png',
    price: '£42.50',
    originalPrice: '£54.00',
  },
  {
    slug: 'protect-all-family',
    name: 'Protect All The Family Bundle',
    tagline: 'Protection for humans and pets alike.',
    description: 'Comprehensive bundle including room sanitisers and dog care products to keep your entire family safe.',
    longDescription: 'The ultimate protection bundle for families with pets. Includes Total Release room sanitiser, Total Blast surface spray, Dog Antiviral Wipes, and No Rinse Quick Wash. Everything you need to keep both your home and your furry friends protected from harmful pathogens.',
    category: 'bundle',
    useCases: ['Family Homes', 'Pet Owners', 'Complete Protection', 'Gift Set'],
    keyStats: [
      { value: '4', label: 'Products included' },
      { value: '14%', label: 'Savings' },
      { value: 'Full', label: 'Family coverage' },
      { value: 'Pets', label: 'Included' },
    ],
    benefits: [
      { title: 'Everything you need', description: 'Room, surface, and pet protection in one bundle.' },
      { title: 'Save money', description: '£8.35 savings compared to individual purchases.' },
      { title: 'Perfect for pet owners', description: 'Complete hygiene solution for homes with dogs.' },
      { title: 'Great gift idea', description: 'Thoughtful bundle for new pet owners or homeowners.' },
    ],
    howItWorks: [
      { step: 'Sanitise rooms', description: 'Use Total Release for complete room protection.' },
      { step: 'Clean surfaces', description: 'Use Total Blast for high-touch areas.' },
      { step: 'Care for pets', description: 'Use dog wipes and quick wash for pet hygiene.' },
    ],
    certifications: ['EN 14476', 'EN 1276', 'EN 1650', 'Veterinary Approved'],
    amazonUrl: 'https://www.amazon.co.uk/dp/B08XXXXXX6',
    color: '#4A0072',
    accentColor: '#C084FC',
    emoji: '👨‍👩‍👧‍👦',
    image: '/images/bundle-family.png',
    price: '£49.65',
    originalPrice: '£58.00',
  },
]
