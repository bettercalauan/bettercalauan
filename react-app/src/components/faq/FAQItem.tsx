'use client'

interface FAQItemProps {
  question: string
  answer: string
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <details className="faq-accordion">
      <summary>{question}</summary>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </details>
  )
}
