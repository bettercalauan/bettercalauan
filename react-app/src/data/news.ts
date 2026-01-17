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
    title: 'zxczxcBusiness Permit Renewal 2025',
    date: 'Nov 28, 2025',
    badge: 'Announcement',
    badgeClass: 'home-news-badge--info',
    description: 'Deadline for business permit renewal is set for January 20, 2025. Early renewal is encouraged to avoid long queues and delays. The Municipal Business Permits and Licensing Office (BPLO) will be open from 8:00 AM to 5:00 PM on weekdays.',
  },
  {
    id: 2,
    title: 'New Public Market Wing Opens',
    date: 'Nov 15, 2025',
    badge: 'Project',
    badgeClass: 'home-news-badge--success',
    description: 'The renovated wing of Solano Public Market is now open to vendors and public. The new wing features improved ventilation, modern stalls, and better sanitation facilities.',
  },
  {
    id: 3,
    title: 'Scheduled Power Interruption',
    date: 'Nov 10, 2025',
    badge: 'Advisory',
    badgeClass: 'home-news-badge--warning',
    description: 'Maintenance scheduled for Barangay Osmeña on Dec 1, 8:00 AM - 5:00 PM. Affected areas include the main road and surrounding residential areas. Please prepare accordingly.',
  },
  {
    id: 4,
    title: 'Free Medical Mission',
    date: 'Nov 5, 2025',
    badge: 'Event',
    badgeClass: 'home-news-badge--info',
    description: 'The Municipal Health Office in partnership with the Department of Health will conduct a free medical mission at Municipal Gymnasium on November 15, 2025.',
  },
  {
    id: 5,
    title: 'Road Improvement Project Completed',
    date: 'Oct 28, 2025',
    badge: 'Project',
    badgeClass: 'home-news-badge--success',
    description: 'The road improvement project along the national highway has been completed. The project includes road widening, drainage improvement, and installation of street lights.',
  },
]
