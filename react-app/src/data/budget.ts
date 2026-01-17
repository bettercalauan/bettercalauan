interface BudgetQuarter {
  totalIncome: string
  totalExpense: string
  netIncome: string
  fundBalance: string
  income: {
    local: { amount: string; pct: string; value: number }
    external: { amount: string; pct: string; value: number }
  }
  expenditure: {
    gps: { amount: string; pct: string; value: number }
    social: { amount: string; pct: string; value: number }
    economic: { amount: string; pct: string; value: number }
    debt: { amount: string; pct: string; value: number }
  }
  totalIncomeValue: number
  totalExpenseValue: number
}

interface InfrastructureProject {
  year: string
  category: string
  categoryIcon: string
  title: string
  location: string
  typeOfWork: string
  contractor: string
  contractCost: string
  source: string
  mapLink: string
}

export const budgetData: Record<string, BudgetQuarter> = {
  q1: {
    totalIncome: '₱158.47 M',
    totalExpense: '₱67.51 M',
    netIncome: '₱90.96 M',
    fundBalance: '₱283.29 M',
    income: {
      local: { amount: '₱88.85 M', pct: '56.1%', value: 88.85 },
      external: { amount: '₱69.62 M', pct: '43.9%', value: 69.62 }
    },
    expenditure: {
      gps: { amount: '₱42.76 M', pct: '63.3%', value: 42.76 },
      social: { amount: '₱13.33 M', pct: '19.7%', value: 13.33 },
      economic: { amount: '₱11.07 M', pct: '16.4%', value: 11.07 },
      debt: { amount: '₱0.35 M', pct: '0.5%', value: 0.35 }
    },
    totalIncomeValue: 158.47,
    totalExpenseValue: 67.51
  },
  q2: {
    totalIncome: '₱172.34 M',
    totalExpense: '₱78.92 M',
    netIncome: '₱93.42 M',
    fundBalance: '₱376.71 M',
    income: {
      local: { amount: '₱95.28 M', pct: '55.3%', value: 95.28 },
      external: { amount: '₱77.06 M', pct: '44.7%', value: 77.06 }
    },
    expenditure: {
      gps: { amount: '₱48.15 M', pct: '61.0%', value: 48.15 },
      social: { amount: '₱16.82 M', pct: '21.3%', value: 16.82 },
      economic: { amount: '₱13.16 M', pct: '16.7%', value: 13.16 },
      debt: { amount: '₱0.79 M', pct: '1.0%', value: 0.79 }
    },
    totalIncomeValue: 172.34,
    totalExpenseValue: 78.92
  }
}

export const infrastructureProjects: InfrastructureProject[] = [
  {
    year: '2024',
    category: 'Flood Control',
    categoryIcon: 'bi-water',
    title: 'FCDS Package 5 - Magat River Flood Control',
    location: 'Magat River, Bagahabag Section, Solano, Nueva Vizcaya',
    typeOfWork: 'Construction of Flood Mitigation Structure',
    contractor: 'EGB Construction Corporation',
    contractCost: '₱144,750,000',
    source: 'Sumbong sa Pangulo',
    mapLink: 'https://sumbongsapangulo.ph/flood-control-map/',
  },
  {
    year: '2021',
    category: 'Flood Control',
    categoryIcon: 'bi-water',
    title: 'Repair/Rehabilitation of Flood Control and Drainage Structure - Section 1',
    location: 'Magat River, Bangar Section 1, Brgy. Bangar, Solano, Nueva Vizcaya',
    typeOfWork: 'Rehabilitation / Major Repair of Flood Control Structure',
    contractor: 'Shanley Construction',
    contractCost: '₱29,700,000',
    source: 'Sumbong sa Pangulo',
    mapLink: 'https://sumbongsapangulo.ph/flood-control-map/',
  },
  {
    year: '2021',
    category: 'Flood Control',
    categoryIcon: 'bi-water',
    title: 'Repair/Rehabilitation of Flood Control and Drainage Structure - Section 2',
    location: 'Magat River, Bangar Section 2, Brgy. Bangar, Solano, Nueva Vizcaya',
    typeOfWork: 'Rehabilitation / Major Repair of Flood Control Structure',
    contractor: 'Shanley Construction',
    contractCost: '₱29,700,000',
    source: 'Sumbong sa Pangulo',
    mapLink: 'https://sumbongsapangulo.ph/flood-control-map/',
  },
]
