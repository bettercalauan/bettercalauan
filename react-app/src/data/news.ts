export interface NewsItem {
  id: number
  title: string
  date: string
  badge: string
  badgeClass: string
  description: string
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: 'Renaming DNIHS to CNHS',
    date: 'September 02, 2025',
    badge: 'Announcement',
    badgeClass: 'home-news-badge--info',
    description: 'An Ordinance Renaming Dayap National Integrated High School to Calauan National High School and Separating It from Its Mother School, the Dayap National High School.',
  },
]
