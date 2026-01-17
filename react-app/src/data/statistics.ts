export interface Metric {
  icon: string
  value: string
  label: string
  source: string
}

export interface PopulationStats {
  year1990: string
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
  year1990: '38,006',
  year2024: '69,296',
  growth: '+82.3%',
}

export const financeMetrics = {
  annualIncome: '₱371.33M',
  annualIncomeFull: '₱371,329,918.71',
  iraShare: '₱220.77M',
  iraDependency: '59.45%',
  iraDependencyLabel: 'National Tax Share',
}

export const economyMetrics = [
  {
    icon: 'bi-shop',
    value: '1,200',
    label: 'Registered Businesses',
    trend: '+8% from last year',
  },
  {
    icon: 'bi-tree-fill',
    value: '8,500 ha',
    label: 'Agricultural Land',
    trend: 'Rice & Corn Production',
  },
  {
    icon: 'bi-person-check-fill',
    value: '94.2%',
    label: 'Employment Rate',
    trend: 'Labor Force Participation',
  },
]

export const povertyStats = {
  year2018: '7.0',
  year2018CI: '90% CI: 4.7% - 9.2%',
  year2021: '6.4',
  year2021CI: '90% CI: 4.7% - 8.1%',
  improvement: '-0.6%',
  iraDependency: '59.45%',
  iraDependencyLabel: 'National Tax Share',
}

export const cmciOverview = {
  economicDynamism: { score: '0.23', trend: '+12%' },
  governmentEfficiency: { score: '1.17', trend: '-8%' },
  infrastructure: { score: '0.40', trend: '+5%' },
  resiliency: { score: '1.08', trend: 'Stable' },
  innovation: { score: '0.68', trend: '+25%' },
}

export const economicSectors = [
  { name: 'Agriculture', pct: '45%' },
  { name: 'Trade & Commerce', pct: '30%' },
  { name: 'Services', pct: '20%' },
  { name: 'Industry', pct: '5%' },
]

export const barangaysPopulation = [
  { rank: 1, name: 'Roxas', pop: '9,088', width: '100%' },
  { rank: 2, name: 'Quirino', pop: '6,572', width: '72%' },
  { rank: 3, name: 'Osmeña', pop: '6,403', width: '70%' },
  { rank: 4, name: 'Quezon', pop: '5,758', width: '63%' },
  { rank: 5, name: 'Curifang', pop: '4,885', width: '54%' },
  { rank: 6, name: 'Bagahabag', pop: '4,731', width: '52%' },
  { rank: 7, name: 'Uddiawan', pop: '4,217', width: '46%' },
  { rank: 8, name: 'Bascaran', pop: '3,845', width: '42%' },
  { rank: 9, name: 'Aggub', pop: '3,101', width: '34%' },
  { rank: 10, name: 'San Luis', pop: '2,668', width: '29%' },
  { rank: 11, name: 'Communal', pop: '2,586', width: '28%' },
  { rank: 12, name: 'Lactawan', pop: '2,109', width: '23%' },
  { rank: 13, name: 'San Juan', pop: '1,965', width: '22%' },
  { rank: 14, name: 'Concepcion', pop: '1,954', width: '21%' },
  { rank: 15, name: 'Dadap', pop: '1,409', width: '15%' },
  { rank: 16, name: 'Wacal', pop: '1,398', width: '15%' },
  { rank: 17, name: 'Bangaan', pop: '1,284', width: '14%' },
  { rank: 18, name: 'Tucal', pop: '1,244', width: '14%' },
  { rank: 19, name: 'Bangar', pop: '1,146', width: '13%' },
  { rank: 20, name: 'Pilar D. Galima', pop: '1,146', width: '13%' },
  { rank: 21, name: 'Poblacion North', pop: '970', width: '11%' },
  { rank: 22, name: 'Poblacion South', pop: '817', width: '9%' },
]
