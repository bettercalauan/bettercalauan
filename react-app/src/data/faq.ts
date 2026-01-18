export interface FAQItem {
  question: string
  answer: string
}

export interface FAQCategory {
  id: string
  icon: string
  title: string
  titleKey: string
  items: FAQItem[]
}

export const faqData: FAQCategory[] = [
  {
    id: 'general',
    icon: 'bi-info-circle-fill',
    title: 'General Questions',
    titleKey: 'faq-general',
    items: [
      {
        question: 'What are the office hours of Municipal Hall?',
        answer: 'The Municipal Hall is open Monday to Friday, 8:00 AM to 5:00 PM, with a lunch break from 12:00 PM to 1:00 PM. We are closed on weekends and national/local holidays.'
      },
      {
        question: 'How can I contact a specific municipal office?',
        answer: 'Visit our Government Directory page to find contact information for all municipal offices and department heads.'
      },
      {
        question: 'Can I request services online?',
        answer: 'Currently, most services require in-person applications. However, we are working on implementing online services for select transactions. Check individual service pages for updates.'
      },
    ],
  },
  {
    id: 'certificates',
    icon: 'bi-file-earmark-text-fill',
    title: 'Certificates & Documents',
    titleKey: 'faq-certificates',
    items: [
      {
        question: 'How long does it take to get a birth certificate?',
        answer: 'For birth certificates registered in Calauan, it typically takes 15-30 minutes while you wait, provided record is readily available.'
      },
      {
        question: 'Can someone else request my certificate for me?',
        answer: 'Yes, but they must bring: An authorization letter signed by you, Valid ID of both you and representative, Photocopy of your valid ID'
      },
      {
        question: 'What is the difference between PSA and local civil registrar certificates?',
        answer: 'Both are certified true copies. PSA certificates are nationally-recognized version required for passport and visa applications. Local civil registrar certificates are accepted for most local transactions and are often processed faster.'
      },
    ],
  },
  {
    id: 'business',
    icon: 'bi-shop',
    title: 'Business & Permits',
    titleKey: 'faq-business',
    items: [
      {
        question: 'When should I renew my business permit?',
        answer: 'Business permits must be renewed annually, preferably in January. The deadline for penalty-free renewal is typically January 20th of each year.'
      },
      {
        question: 'What do I need to start a new business in Calauan?',
        answer: 'To start a new business, you will need: DTI Registration (for sole proprietorship) or SEC Registration (for corporation), Barangay Clearance, Community Tax Certificate (Cedula), Location Sketch/Map, Contract of Lease (if renting)'
      },
    ],
  },
  {
    id: 'payments',
    icon: 'bi-cash-coin',
    title: 'Payments & Fees',
    titleKey: 'faq-payments',
    items: [
      {
        question: 'What payment methods are accepted?',
        answer: 'Currently, we accept cash payments at the Municipal Treasurer\'s Office. We are working on implementing online payment options for taxes and fees.'
      },
      {
        question: 'How can I pay my real property tax?',
        answer: 'Visit Municipal Treasurer\'s Office at Municipal Hall with your Tax Declaration or latest Official Receipt. Payment is in cash. Property taxes are due quarterly, but you may pay annually to avail of discounts.'
      },
    ],
  },
  {
    id: 'social',
    icon: 'bi-people-fill',
    title: 'Social Services',
    titleKey: 'faq-social',
    items: [
      {
        question: 'How do I apply for a Senior Citizen ID?',
        answer: 'Go to the Municipal Social Welfare and Development Office (MSWDO) with: Birth Certificate or any valid ID showing your age (60 and above), 1x1 ID photo, Barangay Residence Certificate. The ID is issued for free.'
      },
      {
        question: 'What benefits do senior citizens receive?',
        answer: 'Senior citizens enjoy 20% discount and VAT exemption on purchases (with a minimum purchase amount per establishment), priority lanes, and access to special programs and medical assistance from the municipality.'
      },
    ],
  },
  {
    id: 'technical',
    icon: 'bi-gear-fill',
    title: 'Technical Questions',
    titleKey: 'faq-technical',
    items: [
      {
        question: 'I found a broken link or error on this website. How do I report it?',
        answer: 'Thank you for helping us improve! Please send us message at volunteer@bettercalauan.org and write "Website Issue" as subject. Describe problem and include page URL if possible.'
      },
      {
        question: 'Is this website mobile-friendly?',
        answer: 'Yes! Better Calauan is fully responsive and optimized for mobile phones, tablets, and desktop computers.'
      },
    ],
  },
  {
    id: 'developer',
    icon: 'bi-person-badge-fill',
    title: 'About Developer',
    titleKey: 'faq-developer',
    items: [
      {
        question: 'Who developed Better Calauan?',
        answer: 'Ramon Logan Jr. is the developer behind BetterCalauan.org. Based in the United Arab Emirates, he works in IT and practices full-stack development, helping build practical digital solutions in web development, design, cloud services, and cybersecurity. He also started HelloPinas.com, a small cloud-based solutions initiative. Ramon contributes to BetterGov.ph, a volunteer-driven civic-tech effort focused on improving access to local government information and services in the Philippines. He is also an individual participant of OpenJS Foundation, a nonprofit supporting open-source JavaScript communities worldwide. Ramon has made the Calauan Project open source under MIT | CC BY 4.0 to empower community-driven development, and contributions are warmly welcomed from everyone; whether you are a developer, data researcher, designer, content writer, translator, or a concerned citizen of Calauan, your participation helps shape the project for all.'
      },
    ],
  },
]
