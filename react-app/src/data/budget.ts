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
      totalIncome: '₱TBD M',
      totalExpense: '₱TBD M',
      netIncome: '₱TBD M',
      fundBalance: '₱TBD M',
      income: {
        local: { amount: '₱0.02 M', pct: '50.00%', value: 0.50 },
        external: { amount: '₱0.02 M', pct: '50.00%', value: 0.50 }
      },
      expenditure: {
        gps: { amount: '₱0.01 M', pct: '25%', value: 0.25  },
        social: { amount: '₱0.01 M', pct: '25%', value: 0.25  },
        economic: { amount: '₱0.01 M', pct: '25%', value: 0.25  },
        debt: { amount: '₱0.01 M', pct: '25%', value: 0.25 }
      },
      totalIncomeValue: 0.04,
      totalExpenseValue: 0.04
    },
  q2: {
      totalIncome: '₱TBD M',
      totalExpense: '₱TBD M',
      netIncome: '₱TBD M',
      fundBalance: '₱TBD M',
      income: {
        local: { amount: '₱0.02 M', pct: '50.00%', value: 0.50 },
        external: { amount: '₱0.02 M', pct: '50.00%', value: 0.50 }
      },
      expenditure: {
        gps: { amount: '₱0.01 M', pct: '25%', value: 0.25  },
        social: { amount: '₱0.01 M', pct: '25%', value: 0.25  },
        economic: { amount: '₱0.01 M', pct: '25%', value: 0.25  },
        debt: { amount: '₱0.01 M', pct: '25%', value: 0.25 }
      },
      totalIncomeValue: 0.04,
      totalExpenseValue: 0.04
    },
  q3: {
      totalIncome: '₱TBD M',
      totalExpense: '₱TBD M',
      netIncome: '₱TBD M',
      fundBalance: '₱TBD M',
      income: {
        local: { amount: '₱0.02 M', pct: '50.00%', value: 0.50 },
        external: { amount: '₱0.02 M', pct: '50.00%', value: 0.50 }
      },
      expenditure: {
        gps: { amount: '₱0.01 M', pct: '25%', value: 0.25  },
        social: { amount: '₱0.01 M', pct: '25%', value: 0.25  },
        economic: { amount: '₱0.01 M', pct: '25%', value: 0.25  },
        debt: { amount: '₱0.01 M', pct: '25%', value: 0.25 }
      },
      totalIncomeValue: 0.04,
      totalExpenseValue: 0.04
    },
  q4: {
      totalIncome: '₱TBD M',
      totalExpense: '₱TBD M',
      netIncome: '₱TBD M',
      fundBalance: '₱TBD M',
      income: {
        local: { amount: '₱0.02 M', pct: '50.00%', value: 0.50 },
        external: { amount: '₱0.02 M', pct: '50.00%', value: 0.50 }
      },
      expenditure: {
        gps: { amount: '₱0.01 M', pct: '25%', value: 0.25  },
        social: { amount: '₱0.01 M', pct: '25%', value: 0.25  },
        economic: { amount: '₱0.01 M', pct: '25%', value: 0.25  },
        debt: { amount: '₱0.01 M', pct: '25%', value: 0.25 }
      },
      totalIncomeValue: 0.04,
      totalExpenseValue: 0.04
    },
}

export const infrastructureProjects: InfrastructureProject[] = [
  {
    year: '2023',
    category: 'Flood Control',
    categoryIcon: 'bi-water',
    title: 'Construction of Flood Control Structure along Guacat River',
    location: 'Brgy. Dayap, Calauan, Laguna',
    typeOfWork: 'Construction of Flood Mitigation Structure',
    contractor: 'ST. MATTHEW GEN. CONTRACTOR & DEVELOPMENT CORP.',
    contractCost: '₱91,656,824.01',
    source: 'Sumbong sa Pangulo and DPWH Transparency Portal',
    mapLink: 'https://transparency.dpwh.gov.ph/?project=23DP0071',
  },
  {
    year: '2025',
    category: 'Roads',
    categoryIcon: 'bi-sign-turn-right',
    title: 'Rehabilitation of Road',
    location: 'Brgy. Limao, Calauan, Laguna',
    typeOfWork: 'Construction of Roads',
    contractor: 'READYCON TRADING & CONSTRUCTION CORP.',
    contractCost: '₱70,369,422.61',
    source: 'Sumbong sa Pangulo and DPWH Transparency Portal',
    mapLink: 'https://transparency.dpwh.gov.ph/?project=25DP0026',
  },
  {
    year: '2025',
    category: 'Flood Control',
    categoryIcon: 'bi-water',
    title: 'Construction of River Control Structure along Mabacan River',
    location: 'Brgy. Mabacan, Calauan, Laguna',
    typeOfWork: 'Construction of Flood Mitigation Structure',
    contractor: 'REVERE CONSTRUCTION & SUPPLY CORPORATION',
    contractCost: '₱38,220,000.00',
    source: 'Sumbong sa Pangulo and DPWH Transparency Portal',
    mapLink: 'https://transparency.dpwh.gov.ph/?project=25DP0036',
  },
]
