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
}

export const AMAZON_STORE = 'https://www.amazon.co.uk/stores/Sanigone/page/B5052E80-FC20-4D57-ADAD-3E8AE135CA27'

export const products: Product[] = [
  {
    slug: 'total-release',
    name: 'Total Release Sanitiser',
    tagline: 'One can. Complete room protection.',
    description: 'A single-use fogging device that fills every corner of a room with antiviral, antibacterial mist — killing 99.99% of pathogens in minutes.',
    longDescription: 'The Sanigone Total Release Sanitiser is the most thorough room disinfection solution available. Simply activate the can, leave the room, and return to a fully sanitised space. The ultra-fine mist reaches every surface, crack, and crevice conventional sprays miss. Kills 99.99% of viruses and bacteria including coronaviruses, norovirus, MRSA, and mould.',
    category: 'room',
    useCases: ['Home', 'Office', 'Hotel Rooms', 'Cars', 'Caravans', 'Care Homes', 'Healthcare'],
    keyStats: [
      { value: '99.99%', label: 'Pathogens killed' },
      { value: '7 days', label: 'Protection lasts' },
      { value: '25m²', label: 'Coverage per can' },
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
    amazonUrl: AMAZON_STORE,
    color: '#0A2540',
    accentColor: '#00C4CC',
    emoji: '💨',
    image: '/images/total-release.jpg',
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
      { value: '500ml', label: 'Bottle size' },
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
    amazonUrl: AMAZON_STORE,
    color: '#1a3a5c',
    accentColor: '#00C4CC',
    emoji: '🧴',
    image: '/images/total-blast.jpg',
  },
  {
    slug: 'dog-wipes',
    name: 'Dog Antiviral Wipes',
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
    amazonUrl: AMAZON_STORE,
    color: '#2D5016',
    accentColor: '#7CB518',
    emoji: '🐾',
    image: '/images/hero-product.png',
  },
  {
    slug: 'dog-disinfectant',
    name: 'Dog Disinfectant Spray',
    tagline: 'Professional hygiene for pet spaces.',
    description: 'A powerful disinfectant spray for kennels, bedding, and dog areas. Eliminates odours and kills bacteria to create a hygienic environment for your pet.',
    longDescription: 'Sanigone Dog Disinfectant Spray is formulated specifically for use in environments where dogs live and play. Safe to use on bedding, kennels, cages, leads, collars, and all dog equipment. Eliminates pet odours at the source and creates a hygienically clean environment.',
    category: 'dog',
    useCases: ['Kennels', 'Dog Beds', 'Collars & Leads', 'Car Boots', 'Dog Crates', 'Vets'],
    keyStats: [
      { value: '99.99%', label: 'Bacteria killed' },
      { value: '500ml', label: 'Bottle size' },
      { value: '100%', label: 'Pet safe' },
      { value: '24h', label: 'Odour control' },
    ],
    benefits: [
      { title: 'Pet-safe formula', description: 'Fully safe for use around dogs once dry — no harmful chemicals.' },
      { title: 'Odour neutralisation', description: 'Eliminates pet odours at the source, not just masks them.' },
      { title: 'Antiviral & antibacterial', description: 'Kills 99.99% of pathogens including parvovirus and kennel cough.' },
      { title: 'No rinsing required', description: 'Simply spray, leave to dry, and the surface is ready to use.' },
    ],
    howItWorks: [
      { step: 'Spray', description: 'Apply evenly to the surface or area.' },
      { step: 'Leave', description: 'Allow to air-dry completely.' },
      { step: 'Safe to use', description: 'Once dry, safe for your pet to return.' },
    ],
    certifications: ['EN 1276', 'EN 13697', 'Pet Safe Certified'],
    amazonUrl: AMAZON_STORE,
    color: '#2D5016',
    accentColor: '#7CB518',
    emoji: '🏠',
    image: '/images/hero-product.png',
  },
  {
    slug: 'quick-wash',
    name: 'No-Rinse Quick Wash',
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
    amazonUrl: AMAZON_STORE,
    color: '#2D5016',
    accentColor: '#7CB518',
    emoji: '✨',
    image: '/images/hero-product.png',
  },
  {
    slug: 'bundles',
    name: 'Sanigone Bundles',
    tagline: 'Everything you need. Better value.',
    description: 'Specially curated product bundles for homes, businesses, and pet owners. Get complete protection at the best price.',
    longDescription: 'Sanigone bundles are designed to give you complete protection for every scenario. Choose from Home Protection, Pet Care, or Business bundles — each carefully curated to cover all your sanitisation needs at a significantly better price than buying separately.',
    category: 'bundle',
    useCases: ['Home Starter Pack', 'Pet Owner Bundle', 'Business Bundle', 'Gift Sets'],
    keyStats: [
      { value: '3+', label: 'Products per bundle' },
      { value: '20%', label: 'Average saving' },
      { value: '100%', label: 'Sanigone quality' },
      { value: 'Free', label: 'UK delivery on Amazon' },
    ],
    benefits: [
      { title: 'Better value', description: 'Save up to 20% compared to buying products individually.' },
      { title: 'Curated for your needs', description: 'Home, pet, and business bundles to suit every lifestyle.' },
      { title: 'Perfect gifts', description: 'Thoughtfully packaged — ideal for gifting.' },
      { title: 'Complete protection', description: 'Every bundle covers multiple use cases and environments.' },
    ],
    howItWorks: [
      { step: 'Choose', description: 'Select the bundle that suits your needs.' },
      { step: 'Order', description: 'Buy directly on Amazon with fast UK delivery.' },
      { step: 'Protect', description: 'Complete, comprehensive protection from day one.' },
    ],
    certifications: ['EN 14476', 'EN 1276', 'EN 1650'],
    amazonUrl: AMAZON_STORE,
    color: '#4A0072',
    accentColor: '#C084FC',
    emoji: '📦',
    image: '/images/total-release.jpg',
  },
]
