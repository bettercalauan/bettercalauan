'use client'

import { newsData } from '@/data/news'
import NewsCard from './NewsCard'

export default function NewsList() {
  return (
    <div className="news-list">
      {newsData.map((item) => (
        <NewsCard
          key={item.id}
          id={item.id}
          title={item.title}
          date={item.date}
          badge={item.badge}
          badgeClass={item.badgeClass}
          description={item.description}
        />
      ))}
    </div>
  )
}
