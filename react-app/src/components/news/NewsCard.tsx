'use client'

import Link from 'next/link'

interface NewsCardProps {
  id: number
  title: string
  date: string
  badge: string
  badgeClass: string
  description: string
}

export default function NewsCard({ id, title, date, badge, badgeClass, description }: NewsCardProps) {
  return (
    <article className="news-card">
      <div className="news-card-meta">
        <span className={`home-news-badge ${badgeClass}`}>{badge}</span>
        <span className="news-card-date"><i className="bi bi-calendar3"></i> {date}</span>
      </div>
      <h2 className="news-card-title">{title}</h2>
      <p className="news-card-desc">{description}</p>
      <Link href={`/news/${id}`} className="news-card-link">
        Read More <i className="bi bi-arrow-right"></i>
      </Link>
    </article>
  )
}
