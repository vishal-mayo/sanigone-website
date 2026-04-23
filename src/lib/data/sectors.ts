export interface Sector {
  slug: string
  title: string
  headline: string
  description: string
  problem: string
  solution: string
  benefits: string[]
  products: string[]
  stats: { value: string; label: string }[]
  image: string
  icon: string
  ctaText: string
}

export const sectors: Sector[] = [
  {
    slug: 'hospitals-care-homes',
    title: 'Hospitals & Care Homes',
    headline: 'Hospital-grade protection for vulnerable patients and residents.',
    description: 'Healthcare environments face the highest risk of infection spread. Sanigone delivers the hospital-grade efficacy required in clinical and care environments, protecting vulnerable patients and residents from harmful pathogens.',
    problem: 'Healthcare-associated infections (HAIs) are a major concern in hospitals and care homes. Standard cleaning protocols often miss critical areas, and vulnerable patients are at higher risk of severe complications from infections.',
    solution: 'Sanigone\'s EN-certified products provide thorough room sanitisation and surface disinfection that meets clinical standards. Total Release fogging ensures no corner is missed, while Total Blast offers rapid surface disinfection between patients.',
    benefits: [
      'EN 14476, EN 1276, and EN 1650 certified',
      'Kills 99.99% of viruses, bacteria, and fungi',
      'Reduces healthcare-associated infections',
      'Safe for use around vulnerable patients',
      'No residue or harmful chemicals',
      'Up to 7 days of residual protection'
    ],
    products: ['total-release', 'total-blast'],
    stats: [
      { value: '99.99%', label: 'Pathogen kill rate' },
      { value: '3', label: 'British Standards' },
      { value: '7 days', label: 'Protection duration' }
    ],
    image: '/images/sector-healthcare.jpg',
    icon: 'Building2',
    ctaText: 'Protect Your Facility'
  },
  {
    slug: 'hairdressers-salons',
    title: 'Hairdressers, Barbers & Beauty Salons',
    headline: 'Keep your clients safe and your salon spotless.',
    description: 'In close-contact service industries, maintaining impeccable hygiene is essential for client confidence and safety. Sanigone provides fast, effective sanitisation that keeps your salon running smoothly.',
    problem: 'Salons and barbershops involve close physical contact, shared tools, and high-touch surfaces. Traditional cleaning between clients is time-consuming and may not eliminate all pathogens, putting both staff and clients at risk.',
    solution: 'Sanigone Total Blast disinfects chairs, tools, and surfaces in just 30 seconds — perfect for quick turnaround between clients. Total Release provides end-of-day deep cleaning for complete peace of mind.',
    benefits: [
      '30-second contact time for rapid turnaround',
      'Disinfects tools, chairs, and stations quickly',
      'Builds client confidence with visible hygiene standards',
      'No sticky residue on surfaces or tools',
      'Pleasant pine scent freshens the salon',
      'Helps meet industry hygiene regulations'
    ],
    products: ['total-blast', 'total-release'],
    stats: [
      { value: '30 sec', label: 'Contact time' },
      { value: '99.99%', label: 'Kill rate' },
      { value: '500+', label: 'Sprays per can' }
    ],
    image: '/images/sector-salon.jpg',
    icon: 'Scissors',
    ctaText: 'Sanitise Your Salon'
  },
  {
    slug: 'gyms-sports',
    title: 'Gyms & Sports Facilities',
    headline: 'Equipment your members can trust is clean.',
    description: 'High-traffic fitness environments require constant sanitisation to prevent the spread of sweat-borne bacteria and viruses. Sanigone makes it easy to maintain impeccable hygiene standards.',
    problem: 'Gyms are high-risk environments for pathogen transmission. Shared equipment, sweaty surfaces, and crowded spaces create ideal conditions for bacteria and viruses to spread among members.',
    solution: 'Sanigone Total Blast provides rapid equipment disinfection that members can use before and after workouts. Total Release ensures changing rooms, studios, and communal areas are thoroughly sanitised daily.',
    benefits: [
      'Members can sanitise equipment in seconds',
      'Eliminates sweat-borne bacteria and viruses',
      'No corrosive chemicals damage equipment',
      'Reduces member-to-member transmission',
      'Demonstrates commitment to member safety',
      'Suitable for all gym surfaces and materials'
    ],
    products: ['total-blast', 'total-release'],
    stats: [
      { value: '99.99%', label: 'Bacteria killed' },
      { value: '30 sec', label: 'Drying time' },
      { value: '7 days', label: 'Protection' }
    ],
    image: '/images/sector-gym.jpg',
    icon: 'Dumbbell',
    ctaText: 'Equip Your Gym'
  },
  {
    slug: 'education',
    title: 'Education Establishments',
    headline: 'Classrooms where children can learn, not get sick.',
    description: 'Schools and nurseries are breeding grounds for infection. Sanigone helps reduce absenteeism by keeping classrooms, play areas, and facilities hygienically clean and safe for children.',
    problem: 'Educational settings see rapid spread of colds, flu, and stomach bugs. High student density, shared resources, and close contact make infection control challenging, leading to disrupted learning and staff shortages.',
    solution: 'Sanigone provides fast-acting, child-safe sanitisation once dry. Total Blast quickly disinfects desks and shared items between classes, while Total Release thoroughly treats classrooms and play areas overnight.',
    benefits: [
      'Child-safe once product is dry',
      'Reduces student and staff absenteeism',
      'Quick application between lessons',
      'No harmful fumes or residues',
      'Effective against common school illnesses',
      'Helps meet OFSTED hygiene requirements'
    ],
    products: ['total-blast', 'total-release'],
    stats: [
      { value: '99.99%', label: 'Germ elimination' },
      { value: 'Safe', label: 'For children' },
      { value: '10 min', label: 'Room treatment' }
    ],
    image: '/images/sector-education.jpg',
    icon: 'GraduationCap',
    ctaText: 'Protect Your School'
  },
  {
    slug: 'hotels-airbnb',
    title: 'Hotels & Airbnbs',
    headline: 'Give your guests confidence in their stay.',
    description: 'In the hospitality industry, cleanliness is everything. Sanigone helps hotels, B&Bs, and Airbnb hosts deliver hotel-grade sanitisation that guests can see and trust.',
    problem: 'Guest expectations for cleanliness have never been higher. Traditional cleaning may miss hidden germs, and visible hygiene measures are now essential for guest confidence and positive reviews.',
    solution: 'Sanigone Total Release provides thorough room fogging between guests, ensuring every surface is sanitised. Display our certification stickers to show guests you take their safety seriously.',
    benefits: [
      'Complete room sanitisation between guests',
      'Builds guest confidence and trust',
      'Helps earn positive cleanliness reviews',
      'Eliminates odours as well as germs',
      'Fast treatment allows quick room turnaround',
      'Professional-grade results at low cost'
    ],
    products: ['total-release', 'total-blast'],
    stats: [
      { value: '25m²', label: 'Coverage per can' },
      { value: '10 min', label: 'Treatment time' },
      { value: '99.99%', label: 'Pathogen elimination' }
    ],
    image: '/images/sector-hospitality.jpg',
    icon: 'Hotel',
    ctaText: 'Elevate Your Standards'
  },
  {
    slug: 'taxis-transport',
    title: 'Black Cabs & Taxis',
    headline: 'Keep every journey safe for drivers and passengers.',
    description: 'Enclosed vehicle spaces with high passenger turnover require constant sanitisation. Sanigone provides quick, effective protection for taxi drivers and their passengers.',
    problem: 'Taxis and private hire vehicles see dozens of passengers daily. Enclosed spaces, shared air, and high-touch surfaces create significant infection risk for both drivers and passengers.',
    solution: 'Sanigone Total Blast quickly disinfects seats, handles, and payment terminals between fares. Total Release provides end-of-shift deep cleaning, ensuring the vehicle is thoroughly sanitised for the next day.',
    benefits: [
      'Quick spray between passengers',
      'Protects driver and passenger health',
      'Eliminates odours from previous fares',
      'No residue on seats or surfaces',
      'Demonstrates duty of care to passengers',
      'Cost-effective for high-frequency use'
    ],
    products: ['total-blast', 'total-release'],
    stats: [
      { value: '30 sec', label: 'Quick spray time' },
      { value: '99.99%', label: 'Virus kill rate' },
      { value: '500+', label: 'Uses per can' }
    ],
    image: '/images/sector-transport.jpg',
    icon: 'Car',
    ctaText: 'Protect Your Vehicle'
  },
  {
    slug: 'theatres-venues',
    title: 'Theatres & Indoor Venues',
    headline: 'Safe audiences. Confident performers. Protected staff.',
    description: 'Large indoor venues with seated audiences require comprehensive sanitisation strategies. Sanigone helps theatres, cinemas, and event spaces protect everyone who walks through their doors.',
    problem: 'Theatres and venues host hundreds of people in enclosed spaces. Seats, armrests, and facilities see constant use, while backstage areas require protection for performers and crew.',
    solution: 'Sanigone Total Release efficiently treats large audience areas, dressing rooms, and backstage spaces. Total Blast provides quick touch-up sanitisation of high-touch areas between performances.',
    benefits: [
      'Efficient treatment of large audience areas',
      'Protects performers, staff, and audiences',
      'Helps venues meet safety guidelines',
      'Builds audience confidence to return',
      'Suitable for delicate theatre equipment',
      'Fast application between shows'
    ],
    products: ['total-release', 'total-blast'],
    stats: [
      { value: '25m²', label: 'Per can coverage' },
      { value: '99.99%', label: 'Pathogen kill' },
      { value: '7 days', label: 'Residual protection' }
    ],
    image: '/images/sector-venue.jpg',
    icon: 'Drama',
    ctaText: 'Secure Your Venue'
  }
]
