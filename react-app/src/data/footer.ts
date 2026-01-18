export const footerData = {
  brand: {
    logo: "/assets/images/logo/better-calauan-logo-white.svg",
    logoAlt: "Better Calauan logo",
    tagline: "Empowering the people of Calauan with transparent access to the services, programs, and public funds of LGU Calauan.",
  },
  social: [
    { href: "https://www.facebook.com/bettercalauan.org", icon: "bi-facebook", label: "Facebook" },
    { href: "https://www.facebook.com/groups/bettercalauan.org/", icon: "bi-people-fill", label: "FB Group" },
    { href: "https://discord.bettercalauan.org/", icon: "bi-discord", label: "Discord" },
  ],
  quickLinks: {
    title: "Quick Links",
    links: [
      { href: "/sitemap-page", label: "Sitemap" },
      { href: "https://calauanlaguna.gov.ph/site-map/", label: "Citizen's Charter", external: true },
      { href: "/terms", label: "Terms of Use" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/accessibility", label: "Accessibility" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { href: "https://data.gov.ph", label: "Open Data Philippines", external: true },
      { href: "https://www.foi.gov.ph/", label: "Freedom of Information", external: true },
      { href: "https://calauanlaguna.gov.ph/", label: "Official LGU Calauan Portal", external: true },
      { href: "https://calauansb.online/", label: "Sangguniang Bayan", external: true },
      { href: "https://www.facebook.com/calauansb", label: "LGU Calauan Facebook", external: true },
      { href: "https://blgf.gov.ph/", label: "BLGF Portal", external: true },
      { href: "https://cmci.dti.gov.ph/", label: "CMCI DTI Portal", external: true },
    ],
  },
  contribute: {
    costLabel: "Cost to the People of Calauan",
    costValue: "₱0",
    actions: [
      { href: "mailto:volunteer@bettercalauan.org", icon: "bi-envelope-heart", label: "Volunteer with us", external: false },
      { href: "https://github.com/bettercalauan/bettercalauan/tree/react-typescript", icon: "bi-github", label: "Contribute code with us", external: true },
    ],
  },
  copyright: {
    org: "Better Calauan",
    license: "MIT | CC BY 4.0",
    disclaimer: "All public information sourced from official government portals.",
    version: "1.1.12",
  },
};

export type FooterLink = {
  href: string;
  label: string;
  external?: boolean;
};

export type SocialLink = {
  href: string;
  icon: string;
  label: string;
};