import { ContactInfo, OfficeHoursItem, Hotline } from '@/types'

export const contactInfo: ContactInfo[] = [
  {
    href: 'mailto:lgusolanonv@gmail.com',
    icon: 'bi-envelope-fill',
    labelKey: 'contact-label-email',
    value: 'lgusolanonv@gmail.com',
    noteKey: 'contact-response-hours',
  },
  {
    href: 'tel:09175951931',
    icon: 'bi-phone-fill',
    labelKey: 'contact-label-mobile',
    value: '0917-595-1931',
    noteKey: 'contact-hours-monfri',
  },
  {
    href: 'tel:0788053581',
    icon: 'bi-telephone-fill',
    labelKey: 'contact-label-phone',
    value: '(078) 805-3581',
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
    name: 'MDRRMO Solano',
    number: '0926 383 3744',
    icon: 'bi-exclamation-triangle-fill',
  },
  {
    name: 'PNP Solano',
    number: '0927 400 8033',
    icon: 'bi-shield-fill',
  },
  {
    name: 'MSWDO Solano',
    number: '0916 284 0885',
    icon: 'bi-heart-fill',
  },
  {
    name: 'KABALIKAT Civicom',
    number: '0905 447 1061',
    icon: 'bi-broadcast',
  },
  {
    name: 'NUVELCO Solano',
    number: '0935 812 1081',
    icon: 'bi-lightning-fill',
  },
  {
    name: "Mayor's Office",
    number: '0917 595 1931',
    icon: 'bi-building-fill',
  },
  {
    name: 'DILG Solano',
    number: '0906 188 0868',
    icon: 'bi-building',
  },
  {
    name: 'SEEDO Public Market',
    number: '0917 134 5511',
    icon: 'bi-shop',
  },
  {
    name: 'MAGRO Solano',
    number: '0916 174 4979',
    icon: 'bi-tree-fill',
  },
  {
    name: 'PDRRMO N. Vizcaya',
    number: '0917 122 7150',
    icon: 'bi-cone-striped',
  },
  {
    name: 'BFP Solano',
    number: '0936 062 0305',
    icon: 'bi-fire',
  },
]

export const medicalEmergencyHotlines: Hotline[] = [
  {
    name: 'RHU Solano',
    number: '0967 910 3054',
    icon: 'bi-hospital',
  },
  {
    name: 'R2TMC (Former VRH)',
    number: '0906 819 5569',
    icon: 'bi-truck',
  },
  {
    name: 'PLT Hospital',
    number: '0920 833 5766',
    icon: 'bi-hospital',
  },
  {
    name: 'MMG Hospital',
    number: '0947 498 1746',
    icon: 'bi-hospital',
  },
  {
    name: 'Salubris Hospital',
    number: '0917 108 0452',
    icon: 'bi-hospital',
  },
  {
    name: 'Red Cross',
    number: '0917 507 9950',
    icon: 'bi-plus-circle-fill',
  },
]
