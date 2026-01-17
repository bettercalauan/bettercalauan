import { ContactInfo, OfficeHoursItem, Hotline } from '@/types'

export const contactInfo: ContactInfo[] = [
  {
    href: 'mailto:calauanadm@gmail.com',
    icon: 'bi-envelope-fill',
    labelKey: 'contact-label-email',
    value: 'calauanadm@gmail.com',
    noteKey: 'contact-response-hours',
  },
  {
    href: 'tel:...',
    icon: 'bi-phone-fill',
    labelKey: 'contact-label-mobile',
    value: 'TBD',
    noteKey: 'contact-hours-monfri',
  },
  {
    href: 'tel:0495680012',
    icon: 'bi-telephone-fill',
    labelKey: 'contact-label-phone',
    value: '(049) 568-0012',
    noteKey: 'contact-hours-monfri',
  },  
]

export const officeHoursSchedule: OfficeHoursItem[] = [
  {
    day: 'Monday - Friday',
    time: '8:00 AM - 5:00 PM',
    status: 'open',
  },
]

export const emergencyHotlines: Hotline[] = [
  {
    name: 'BFP Calauan',
    number: '09519658289',
    icon: 'bi-fire',
  },
  {
    name: 'PNP Calauan',
    number: '09985985643',
    icon: 'bi-shield-fill',
  },
  {
    name: 'MDRRMO Calauan',
    number: '09103231784',
    icon: 'bi-exclamation-triangle-fill',
  },
  {
    name: 'MSWDO Calauan',
    number: 'TBD',
    icon: 'bi-heart-fill',
  },
  {
    name: "Mayor's Office",
    number: 'TBD',
    icon: 'bi-building-fill',
  },
  {
    name: 'DILG Calauan',
    number: '(049) 568-0012 loc 108',
    icon: 'bi-building',
  },
  {
    name: 'Calauan Public Market',
    number: 'TBD',
    icon: 'bi-shop',
  },
  {
    name: 'PDRRMO Laguna',
    number: '(049) 501-4672',
    icon: 'bi-cone-striped',
  },
]

export const medicalEmergencyHotlines: Hotline[] = [
  {
    name: 'RHU Calauan',
    number: 'TBD',
    icon: 'bi-hospital',
  },
  {
    name: 'Calauan Maternity Clinic',
    number: '09421999954',
    icon: 'bi-hospital',
  },
  {
    name: 'SPC Medical - San Pablo, Laguna',
    number: '09178441000',
    icon: 'bi-hospital',
  },
  {
    name: 'Provincial Hospital - Bay, Laguna',
    number: '(049) 536-8357',
    icon: 'bi-hospital',
  },
  {
    name: 'Global Care Medical - Bay, Laguna',
    number: '(049) 559-6145',
    icon: 'bi-hospital',
  },
  {
    name: 'Laguna Medical - Sta. Cruz, Laguna',
    number: '(049) 559-6145',
    icon: 'bi-hospital',
  },
]
