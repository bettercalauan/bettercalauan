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
    phone: '...',
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
    phone: '(049) 326-5011',
    email: 'civilreg@calauanlaguna.gov.ph',
    link: '/service-details/municipal-civil-registrar',
  },
  {
    id: 'municipal-treasurer',
    title: 'Municipal Treasurer\'s Office',
    icon: 'bi-cash-coin',
    description: 'Tax payments, real property tax, revenue collection',
    phone: '(049) 326-5012',
    email: 'treasurer@calauanlaguna.gov.ph',
    link: '/service-details/municipal-treasurer',
  },
  {
    id: 'municipal-engineering',
    title: 'Municipal Engineering Office',
    icon: 'bi-building-fill-gear',
    description: 'Building permits, construction permits, infrastructure',
    phone: '(049) 326-5013',
    email: 'engineer@calauanlaguna.gov.ph',
    link: '/service-details/municipal-engineering',
  },
  {
    id: 'mswdo-services',
    title: 'MSWDO',
    icon: 'bi-people-fill',
    description: 'Social services, PWD & senior citizen IDs, financial assistance',
    phone: '(049) 326-5014',
    email: 'mswdo@calauanlaguna.gov.ph',
    link: '/service-details/mswdo-services',
  },
  {
    id: 'municipal-agriculture',
    title: 'Municipal Agriculture Office',
    icon: 'bi-tree-fill',
    description: 'Agricultural loans, crop insurance, fertilizer assistance',
    phone: '(049) 326-5015',
    email: 'agri@calauanlaguna.gov.ph',
    link: '/service-details/municipal-agriculture',
  },
  {
    id: 'municipal-planning',
    title: 'Municipal Planning & Development',
    icon: 'bi-clipboard-data-fill',
    description: 'Development planning, project monitoring, zoning',
    phone: '(049) 326-5016',
    email: 'mpdo@calauanlaguna.gov.ph',
    link: '/service-details/municipal-planning',
  },
  {
    id: 'municipal-assessor',
    title: 'Municipal Assessor\'s Office',
    icon: 'bi-house-door-fill',
    description: 'Property assessment, tax declarations, land records',
    phone: '(049) 326-5017',
    email: 'assessor@calauanlaguna.gov.ph',
    link: '/service-details/municipal-assessor',
  },
  {
    id: 'municipal-accounting',
    title: 'Municipal Accounting Office',
    icon: 'bi-calculator-fill',
    description: 'Financial records, disbursements, accounting services',
    phone: '(049) 326-5001',
    email: 'accounting@calauanlaguna.gov.ph',
    link: '/service-details/municipal-accounting',
  },
  {
    id: 'municipal-budget',
    title: 'Municipal Budget Office',
    icon: 'bi-piggy-bank-fill',
    description: 'Budget preparation, appropriations, fiscal management',
    phone: '(049) 326-5001',
    email: 'budget@calauanlaguna.gov.ph',
    link: '/service-details/municipal-budget',
  },
  {
    id: 'municipal-general-services',
    title: 'Municipal General Services Office',
    icon: 'bi-gear-fill',
    description: 'Property management, procurement, administration',
    phone: '(049) 326-5001',
    email: 'gso@calauanlaguna.gov.ph',
    link: '/service-details/municipal-general-services',
  },
  {
    id: 'municipal-health',
    title: 'Municipal Health Office',
    icon: 'bi-heart-pulse-fill',
    description: 'Vaccination, health certificates, medical assistance',
    phone: '(049) 326-5010',
    email: 'mho@calauanlaguna.gov.ph',
    link: '/services/health',
  },
  {
    id: 'business-permits-licensing',
    title: 'Business Permits & Licensing',
    icon: 'bi-shop',
    description: 'Business permits, Mayor\'s clearance, licensing',
    phone: '(049) 326-5002',
    email: 'bpls@calauanlaguna.gov.ph',
    link: '/service-details/business-permits-licensing',
  },
  {
    id: 'human-resource-management',
    title: 'Human Resource Management',
    icon: 'bi-person-badge-fill',
    description: 'Personnel services, recruitment, employee records',
    phone: '(049) 326-5002',
    email: 'hrmo@calauanlaguna.gov.ph',
    link: '/service-details/human-resource-management',
  },
  {
    id: 'mdrrmo',
    title: 'MDRRMO',
    icon: 'bi-exclamation-triangle-fill',
    description: 'Disaster preparedness, emergency response, risk reduction',
    phone: '0926 383 3744',
    email: 'mdrrmo@calauanlaguna.gov.ph',
    link: '/services/public-safety',
  },
  {
    id: 'seedo-public-market',
    title: 'SEEDO – Public Market',
    icon: 'bi-shop-window',
    description: 'Market clearance, entrance fees, vendor services, CTC',
    phone: '(049) 326-5001',
    email: null,
    link: '/service-details/seedo-public-market',
  },
  {
    id: 'seedo-slaughterhouse',
    title: 'SEEDO – Slaughterhouse',
    icon: 'bi-box-seam',
    description: 'Hog, cattle, goat, carabao slaughter with meat inspection',
    phone: '(049) 326-5001',
    email: null,
    link: '/service-details/seedo-slaughterhouse',
  },
  {
    id: 'peso',
    title: 'PESO',
    icon: 'bi-briefcase-fill',
    description: 'Job placement, employment assistance, career guidance',
    phone: '0917 155 1043',
    email: null,
    link: null,
  },
]

export const barangaysData: Barangay[] = [
  { name: 'Aggub', captain: 'Kap. Felix Caramat Tolentino Sr.', phone: '0975 177 2529' },
  { name: 'Bagahabag', captain: 'Kap. Eduardo Abu Bangad Sr.', phone: '0936 655 1984' },
  { name: 'Bangaan', captain: 'Kap. Isidro Baliza Prado', phone: '0935 242 5023' },
  { name: 'Bangar', captain: 'Kap. Victor Tubay Adalin Jr.', phone: '0935 806 6847' },
  { name: 'Bascaran', captain: 'Kap. Federico Vienes Asuncion', phone: '0926 187 9385' },
  { name: 'Communal', captain: 'Kap. Renaldo Gin-Om Nabad-Aw', phone: '0905 841 1484' },
  { name: 'Concepcion', captain: 'Kap. Jenny Gomez Marquez', phone: '0927 464 6243' },
  { name: 'Curifang', captain: 'Kap. Elmer Zabala Lingayu', phone: '0936 360 7880' },
  { name: 'Dadap', captain: 'Kap. Rudy Eugenio Paranis', phone: '0905 341 2755' },
  { name: 'Lactawan', captain: 'Kap. Sherwin Elevazo Vicente', phone: '0916 995 8916' },
  { name: 'Osmeña', captain: 'Kap. Danilo Estacio Domingo', phone: '0906 384 3974' },
  { name: 'Pilar D. Galima', captain: 'Kap. Dexter Yaranon Ruiz', phone: '0965 551 6034' },
  { name: 'Poblacion North', captain: 'Kap. Angelito De Leon Tiongson', phone: '0917 147 5710' },
  { name: 'Poblacion South', captain: 'Kap. Melchor Esmedina Marzo', phone: '0906 268 5095' },
  { name: 'Quezon', captain: 'Kap. Luis Amangi Castillo', phone: '0920 945 4538' },
  { name: 'Quirino', captain: 'Kap. Walter Dalupang Savedra Sr.', phone: '0935 198 7103' },
  { name: 'Roxas', captain: 'Kap. Edwin Bungan Dacayo', phone: '0936 450 4413' },
  { name: 'San Juan', captain: 'Kap. Nardo Eustaquio Ramel', phone: '0965 348 0556' },
  { name: 'San Luis', captain: 'Kap. Ernesto Domingo Ramones Jr.', phone: '0936 368 0681' },
  { name: 'Tucal', captain: 'Kap. Roberto Ojastro Dizon', phone: '0966 176 9302' },
  { name: 'Uddiawan', captain: 'Kap. Jessie Concepcion Delos Reyes', phone: '0935 546 0625' },
  { name: 'Wacal', captain: 'Kap. Janette Quines Cristobal', phone: '0915 962 1403' },
]
