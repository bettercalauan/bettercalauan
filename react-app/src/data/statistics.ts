export interface Metric {
  icon: string
  value: string
  label: string
  source: string
}

export interface PopulationStats {
  year2000: string
  year2024: string
  growth: string
}

export const keyMetrics: Metric[] = [
  {
    icon: 'bi-people-fill',
    value: '89,670',
    label: 'Population',
    source: '2024 Census',
  },
  {
    icon: 'bi-geo-alt-fill',
    value: '17',
    label: 'Barangays',
    source: 'Administrative Units',
  },
  {
    icon: 'bi-rulers',
    value: '65.40',
    label: 'Land Area (km²)',
    source: 'Total Municipal Area',
  },
  {
    icon: 'bi-award-fill',
    value: '1st',
    label: 'Income Class',
    source: 'Municipality Classification',
  },
]

export const populationStats: PopulationStats = {
  year2000: '43,284',
  year2024: '89,670',
  growth: '+107.20%',
}

export const financeMetrics = {
  annualIncome: '₱342.95M',
  annualIncomeFull: '₱342,946,370.28',
  iraShare: '₱267.86M',
  iraDependency: '78%',
  iraDependencyLabel: 'National Tax Share',
}

export const economyMetrics = [
  {
    icon: 'bi-shop',
    value: '____',
    label: 'Registered Businesses',
    trend: '_% from last year',
  },
  {
    icon: 'bi-tree-fill',
    value: '____ ha',
    label: 'Agricultural Land',
    trend: 'Rice & Corn Production',
  },
  {
    icon: 'bi-person-check-fill',
    value: '____',
    label: 'Employment Rate',
    trend: 'Labor Force Participation',
  },
]

export const povertyStats = {
  year2018: '__',
  year2018CI: '__',
  year2021: '__',
  year2021CI: '__',
  improvement: '__%',
  iraDependency: '78%',
  iraDependencyLabel: 'National Tax Share',
}

export const cmciOverview = [
  {
    key: 'economicDynamism',
    icon: 'bi-graph-up-arrow',
    label: 'Economic Dynamism',
    score: '3.69',
    trend: '+5.47%',
  },
  {
    key: 'governmentEfficiency',
    icon: 'bi-building-check',
    label: 'Government Efficiency',
    score: '8.01',
    trend: '-1.32%',
  },
  {
    key: 'infrastructure',
    icon: 'bi-building-gear',
    label: 'Infrastructure',
    score: '2.39',
    trend: '-7.48%',
  },
  {
    key: 'resiliency',
    icon: 'bi-shield-check',
    label: 'Resiliency',
    score: '11.29',
    trend: 'Stable',
  },
  {
    key: 'innovation',
    icon: 'bi-lightbulb',
    label: 'Innovation',
    score: '7.42',
    trend: '+24.31%',
  },
]

export const economicSectors = [
  { name: 'Agriculture', pct: '__%' },
  { name: 'Trade & Commerce', pct: '__%' },
  { name: 'Services', pct: '__%' },
  { name: 'Industry', pct: '__%' },
]

export const barangaysPopulation = [
  { rank: 1, name: 'Dayap', pop: '22,240', width: '100%' },
  { rank: 2, name: 'Santo Tomas', pop: '15,338', width: '69%' },
  { rank: 3, name: 'Lamot 2', pop: '7,323', width: '33%' },
  { rank: 4, name: 'Masiit', pop: '5,907', width: '27%' },
  { rank: 5, name: 'Balayhangin', pop: '5,552', width: '25%' },
  { rank: 6, name: 'Mabacan', pop: '5,244', width: '24%' },
  { rank: 7, name: 'Limao', pop: '4,263', width: '19%' },
  { rank: 8, name: 'Lamot 1', pop: '3,303', width: '15%' },
  { rank: 9, name: 'Perez', pop: '3,322', width: '15%' },
  { rank: 10, name: 'Bangyas', pop: '3,012', width: '14%' },
  { rank: 11, name: 'San Isidro', pop: '2,840', width: '13%' },
  { rank: 12, name: 'Prinza', pop: '2,679', width: '12%' },
  { rank: 13, name: 'Imok', pop: '2,555', width: '11%' },
  { rank: 14, name: 'Hanggan', pop: '1,872', width: '8%' },
  { rank: 15, name: 'Silangan', pop: '1,791', width: '8%' },
  { rank: 16, name: 'Paliparan', pop: '1,227', width: '6%' },
  { rank: 17, name: 'Kanluran', pop: '1,202', width: '5%' },
]
