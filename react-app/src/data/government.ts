export interface Executive {
  title: string
  name: string
  email: string
  phone: string
  hours: string
}

export interface Councilor {
  name: string
  badge: string
  committees: string
}

export interface Department {
  id: string
  title: string
  icon: string
  description: string
  phone: string
  email: string | null
  link: string | null
}

export interface Barangay {
  name: string
  captain: string
  phone: string
}

export const executiveData: Executive[] = [
  {
    title: 'Municipal Mayor',
    name: 'Hon. Roseller G. Caratihan',
    email: 'mayoroselcaratihan@gmail.com',
    phone: '(049) 568-0012',
    hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
  },
  {
    title: 'Municipal Vice Mayor',
    name: 'Hon. Allan Jun v. Sanchez',
    email: 'vicemayor@calauanlaguna.gov.ph',
    phone: 'TBD',
    hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
  },
]

export const councilorsData: Councilor[] = [
  {
    "name": "Hon. Allan Antonio V. Sanchez II",
    "badge": "Councilor",
    "committees": "Health, Nutrition and Sanitation; Games and Amusements"
  },
  {
    "name": "Hon. Joewel M. Gonzales",
    "badge": "Councilor",
    "committees": "Public Works and Public Utilities and Facilities; Agriculture, Fisheries, Aquatic Resources and Environmental Protection"
  },
  {
    "name": "Hon. June Joseph F. Brion",
    "badge": "Councilor",
    "committees": "Zoning, Housing, Land Utilization and Urban Development; Market, Slaughterhouse, Trade, Commerce and Industry; Rules, Laws, Ethics and Privileges"
  },
  {
    "name": "Hon. Dante C. Escarez",
    "badge": "Councilor",
    "committees": "Finance, Budget, Appropriation and Ways and Means"
  },
  {
    "name": "Hon. Homer Jeffrille E. Hilario",
    "badge": "Councilor",
    "committees": "Women, Family and Social Welfare; Cooperative and Livelihood and Accreditation"
  },
  {
    "name": "Hon. Joselito M. Manalo",
    "badge": "Councilor",
    "committees": "Education; Information Technology Advancement"
  },
  {
    "name": "Hon. Kenneth B. Kraft",
    "badge": "Councilor",
    "committees": "Transportation; Energy, and Water Resources Development"
  },
  {
    "name": "Hon. Mac Jefferson T. Roxas",
    "badge": "Councilor",
    "committees": "Peace and Order, Public Safety and Communications; Calamity and Disaster Management"
  },
  {
    "name": "Hon. Joan Pamela M. Babatid",
    "badge": "Liga ng mga Barangay President",
    "committees": "Human Resource Management, Development and Appointments; Barangay Affairs"
  },
  {
    "name": "Hon. Olympio S. Amante",
    "badge": "SK Federation President",
    "committees": "Tourism, Social Affairs & Cultural Heritage; Youth Development"
  }
]

export const departmentsData: Department[] = [
  {
    id: 'municipal-civil-registrar',
    title: 'Municipal Civil Registrar',
    icon: 'bi-file-earmark-text-fill',
    description: 'Birth, death, marriage certificates, CENOMAR',
    phone: 'TBD',
    email: null,
    link: '/service-details/municipal-civil-registrar',
  },
  {
    id: 'municipal-treasurer',
    title: "Municipal Treasurer's Office",
    icon: 'bi-cash-coin',
    description: 'Tax payments, real property tax, revenue collection',
    phone: 'TBD',
    email: null,
    link: '/service-details/municipal-treasurer',
  },
  {
    id: 'municipal-engineering',
    title: 'Municipal Engineering Office',
    icon: 'bi-building-fill-gear',
    description: 'Building permits, construction permits, infrastructure',
    phone: 'TBD',
    email: null,
    link: '/service-details/municipal-engineering',
  },
  {
    id: 'mswdo-services',
    title: 'MSWDO',
    icon: 'bi-people-fill',
    description: 'Social services, PWD & senior citizen IDs, financial assistance',
    phone: 'TBD',
    email: null,
    link: '/service-details/mswdo-services',
  },
  {
    id: 'municipal-agriculture',
    title: 'Municipal Agriculture Office',
    icon: 'bi-tree-fill',
    description: 'Agricultural loans, crop insurance, fertilizer assistance',
    phone: 'TBD',
    email: null,
    link: '/service-details/municipal-agriculture',
  },
  {
    id: 'municipal-planning',
    title: 'Municipal Planning & Development',
    icon: 'bi-clipboard-data-fill',
    description: 'Development planning, project monitoring, zoning',
    phone: 'TBD',
    email: null,
    link: '/service-details/municipal-planning',
  },
  {
    id: 'municipal-assessor',
    title: "Municipal Assessor's Office",
    icon: 'bi-house-door-fill',
    description: 'Property assessment, tax declarations, land records',
    phone: 'TBD',
    email: null,
    link: '/service-details/municipal-assessor',
  },
  {
    id: 'municipal-accounting',
    title: 'Municipal Accounting Office',
    icon: 'bi-calculator-fill',
    description: 'Financial records, disbursements, accounting services',
    phone: 'TBD',
    email: null,
    link: '/service-details/municipal-accounting',
  },
  {
    id: 'municipal-budget',
    title: 'Municipal Budget Office',
    icon: 'bi-piggy-bank-fill',
    description: 'Budget preparation, appropriations, fiscal management',
    phone: 'TBD',
    email: null,
    link: '/service-details/municipal-budget',
  },
  {
    id: 'municipal-general-services',
    title: 'Municipal General Services Office',
    icon: 'bi-gear-fill',
    description: 'Property management, procurement, administration',
    phone: 'TBD',
    email: null,
    link: '/service-details/municipal-general-services',
  },
  {
    id: 'municipal-health',
    title: 'Municipal Health Office',
    icon: 'bi-heart-pulse-fill',
    description: 'Vaccination, health certificates, medical assistance',
    phone: 'TBD',
    email: null,
    link: '/services/health',
  },
  {
    id: 'business-permits-licensing',
    title: 'Business Permits & Licensing',
    icon: 'bi-shop',
    description: "Business permits, Mayor's clearance, licensing",
    phone: 'TBD',
    email: null,
    link: '/service-details/business-permits-licensing',
  },
  {
    id: 'human-resource-management',
    title: 'Human Resource Management',
    icon: 'bi-person-badge-fill',
    description: 'Personnel services, recruitment, employee records',
    phone: 'TBD',
    email: null,
    link: '/service-details/human-resource-management',
  },
  {
    id: 'mdrrmo',
    title: 'MDRRMO',
    icon: 'bi-exclamation-triangle-fill',
    description: 'Disaster preparedness, emergency response, risk reduction',
    phone: 'TBD',
    email: null,
    link: '/services/public-safety',
  },
  {
    id: 'seedo-public-market',
    title: 'SEEDO – Public Market',
    icon: 'bi-shop-window',
    description: 'Market clearance, entrance fees, vendor services, CTC',
    phone: 'TBD',
    email: null,
    link: '/service-details/seedo-public-market',
  },
  {
    id: 'seedo-slaughterhouse',
    title: 'SEEDO – Slaughterhouse',
    icon: 'bi-box-seam',
    description: 'Hog, cattle, goat, carabao slaughter with meat inspection',
    phone: 'TBD',
    email: null,
    link: '/service-details/seedo-slaughterhouse',
  },
  {
    id: 'peso',
    title: 'PESO',
    icon: 'bi-briefcase-fill',
    description: 'Job placement, employment assistance, career guidance',
    phone: 'TBD',
    email: null,
    link: null,
  },
]

export const barangaysData: Barangay[] = [
  { name: 'Balayhangin', captain: 'Kap. Lazaro Halili', phone: '(049) 566-0460 / 0909-311-1429' },
  { name: 'Bangyas', captain: 'Kap. Rex Dungo', phone: 'TBD' },
  { name: 'Dayap', captain: 'Kap. Fermin Agonia', phone: '0948-199-8814' },
  { name: 'Hanggan', captain: 'Kap. Joan Pamela Babatid', phone: '0949-337-3788' },
  { name: 'Imok', captain: 'Kap. Ruel Panergayo', phone: '0946-034-3790' },
  { name: 'Lamot 1', captain: 'Kap. Nestor Ocampo', phone: '0998-394-7999' },
  { name: 'Lamot 2', captain: 'Kap. Felicito Ulat', phone: 'TBD' },
  { name: 'Limao', captain: 'Kap. Romeo Alvarez', phone: '0929-845-4973' },
  { name: 'Mabacan', captain: 'Kap. Darwin Guevarra', phone: '0939-938-7328' },
  { name: 'Masiit', captain: 'Kap. Ernesto Carpio', phone: '0950-118-6147' },
  { name: 'Paliparan', captain: 'Kap. Ricardo Cueto', phone: '0919-254-6140' },
  { name: 'Perez', captain: 'Kap. Francisco Averion', phone: '0927-983-4261' },
  { name: 'Pob. Kanluran', captain: 'Kap. Kenneth Kraft', phone: '(049) 566-0343 / 0918-449-5866' },
  { name: 'Pob. Silangan', captain: 'Kap. Eleonora Velecina', phone: '0928-200-2651' },
  { name: 'Prinza', captain: 'Kap. Kassel Cassandra Kraft', phone: '0999-816-0528' },
  { name: 'San Isidro', captain: 'Kap. Virgilio Nasayaw', phone: '0975-215-8409' },
  { name: 'Santo Tomas', captain: 'Kap. Rommel Belano', phone: '(049) 536-4748 / 0929-159-5904' },
];