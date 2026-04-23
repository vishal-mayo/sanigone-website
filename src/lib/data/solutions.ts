export interface Solution {
  slug: string
  title: string
  headline: string
  problem: string
  solution: string
  products: string[]
  useCases: { title: string; description: string }[]
  stats: { value: string; label: string }[]
  color: string
  icon: string
}

export const solutions: Solution[] = [
  {
    slug: 'homes',
    title: 'Homes',
    headline: 'A safer home starts here.',
    problem: 'Viruses and bacteria spread quickly in the home — especially in kitchens, bathrooms, and shared spaces.',
    solution: 'Sanigone Total Blast and Total Release give your home professional-grade protection without the fuss.',
    products: ['total-blast', 'total-release'],
    useCases: [
      { title: 'Kitchen hygiene', description: 'Eliminate cross-contamination from food preparation surfaces.' },
      { title: 'Bathroom sanitisation', description: 'Kill 99.99% of bacteria and viruses in the most-used room.' },
      { title: 'Seasonal deep cleans', description: 'Total Release fills every corner — ideal for thorough seasonal cleans.' },
      { title: 'High-touch surfaces', description: 'Door handles, switches, and remotes — treated in seconds with Total Blast.' },
    ],
    stats: [
      { value: '99.99%', label: 'Pathogens killed' },
      { value: '7 days', label: 'Surface protection' },
      { value: '2 min', label: 'Average spray time' },
    ],
    color: '#0A2540',
    icon: '🏠',
  },
  {
    slug: 'businesses',
    title: 'Businesses',
    headline: 'Protect your people. Protect your reputation.',
    problem: 'In busy commercial spaces, infection spread can lead to staff absences, customer complaints, and reputational damage.',
    solution: 'Sanigone provides professional-grade sanitisation for offices, retail spaces, hospitality venues, and more.',
    products: ['total-blast', 'total-release'],
    useCases: [
      { title: 'Offices & workspaces', description: 'Regular surface disinfection keeps staff healthy and productive.' },
      { title: 'Retail environments', description: 'High-touch points treated quickly between customers.' },
      { title: 'Hospitality & hotels', description: 'Total Release thoroughly sanitises rooms between guests.' },
      { title: 'Gyms & fitness centres', description: 'Equipment disinfected quickly and effectively.' },
    ],
    stats: [
      { value: '99.99%', label: 'Kill rate' },
      { value: '30 sec', label: 'Surface contact time' },
      { value: '25m²', label: 'Total Release coverage' },
    ],
    color: '#1a3a5c',
    icon: '🏢',
  },
  {
    slug: 'pet-owners',
    title: 'Pet Owners',
    headline: 'Safe for your pets. Tough on germs.',
    problem: 'Dogs bring in dirt, bacteria, and viruses from every walk — putting your home and your family at risk.',
    solution: 'Our pet-specific range keeps dogs clean, protects your home from pet germs, and is 100% safe for animals.',
    products: ['dog-wipes', 'dog-disinfectant', 'quick-wash'],
    useCases: [
      { title: 'Post-walk clean up', description: 'Dog Wipes remove dirt and germs from paws and coat in seconds.' },
      { title: 'Kennel & bed hygiene', description: 'Dog Disinfectant creates a hygienic sleeping environment.' },
      { title: 'Between baths', description: 'Quick Wash cleans and deodorises without needing water.' },
      { title: 'Travel & shows', description: 'Compact and convenient for on-the-go hygiene.' },
    ],
    stats: [
      { value: '99.99%', label: 'Bacteria eliminated' },
      { value: '0%', label: 'Alcohol in dog wipes' },
      { value: '3-in-1', label: 'Quick Wash benefits' },
    ],
    color: '#2D5016',
    icon: '🐾',
  },
  {
    slug: 'education',
    title: 'Education',
    headline: 'Classrooms where kids can focus, not get sick.',
    problem: 'Schools and nurseries are breeding grounds for infection — frequent illness disrupts learning and puts staff under pressure.',
    solution: 'Fast-acting, safe sanitisation products keep classroom surfaces clean and help reduce absenteeism.',
    products: ['total-blast', 'total-release'],
    useCases: [
      { title: 'Classrooms', description: 'Desks, chairs, and shared resources disinfected between lessons.' },
      { title: 'Toilets & changing rooms', description: 'High-risk areas kept hygienically clean throughout the day.' },
      { title: 'Nurseries & childcare', description: 'Child-safe once dry — ideal for environments with young children.' },
      { title: 'School halls & canteens', description: 'Total Release provides rapid, thorough coverage of large spaces.' },
    ],
    stats: [
      { value: '99.99%', label: 'Kill rate' },
      { value: 'Safe', label: 'Once dry for children' },
      { value: '25m²', label: 'Per Total Release can' },
    ],
    color: '#7C3AED',
    icon: '🎓',
  },
  {
    slug: 'healthcare',
    title: 'Healthcare',
    headline: 'Hospital-grade hygiene. Proven standards.',
    problem: 'Healthcare environments face the highest risk of infection spread — where standard cleaning simply isn\'t enough.',
    solution: 'Sanigone\'s EN-certified products deliver the hospital-grade efficacy required in clinical and care environments.',
    products: ['total-release', 'total-blast'],
    useCases: [
      { title: 'GP surgeries & clinics', description: 'Rapid surface disinfection between patients.' },
      { title: 'Care homes', description: 'Total Release thoroughly sanitises rooms to protect vulnerable residents.' },
      { title: 'Dental & physio practices', description: 'High-touch equipment and surfaces disinfected to clinical standards.' },
      { title: 'Ambulances & transport', description: 'Fast-acting spray disinfection for vehicles between calls.' },
    ],
    stats: [
      { value: 'EN 14476', label: 'Antiviral standard' },
      { value: 'EN 1276', label: 'Antibacterial standard' },
      { value: 'EN 1650', label: 'Antifungal standard' },
    ],
    color: '#0A2540',
    icon: '🏥',
  },
]
