'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Translation data
const translations: Record<string, Record<string, string>> = {
  en: {
    // Navigation
    "nav-home": "Home",
    "nav-services": "Services",
    "nav-government": "Government",
    "nav-statistics": "Statistics",
    "nav-legislative": "Legislative",
    "nav-transparency": "Transparency",
    "nav-contact": "Contact",

    // Hero Section
    "hero-welcome": "Welcome to BetterCalauan.org",
    "hero-subtitle": "Access government services, information, and resources for the people of Calauan, Laguna.",
    "hero-find-service": "Find a Service",

    // Popular Services
    "section-popular": "Popular Services",
    "service-certificates": "Certificates",
    "service-certificates-desc": "Birth, marriage, death certificates",
    "service-business": "Business Permits",
    "service-business-desc": "New permits and renewals",
    "service-tax": "Tax Payments",
    "service-tax-desc": "Property and business taxes",
    "service-social": "Social Services",
    "service-social-desc": "Senior citizen & PWD services",
    "service-health": "Health Services",
    "service-health-desc": "Medical assistance & programs",
    "btn-view-all-services": "View All Services",

    // Latest Updates
    "section-updates": "Latest Updates",
    "btn-view-all": "View All",

    // Municipal Leadership
    "section-leadership": "Municipal Leadership",
    "title-mayor": "Municipal Mayor",
    "title-vice-mayor": "Municipal Vice Mayor",
    "btn-view-officials": "View All Officials",

    // Contact Section
    "section-contact": "Contact Information",
    "contact-phone": "Phone",
    "contact-email": "Email",
    "contact-address": "Address",
    "contact-hours": "Mon-Fri: 8:00 AM - 5:00 PM",
    "contact-response": "We'll respond within 24 hours",
    "contact-municipal-hall": "Municipal Hall",

    // Contact Page
    "contact-title": "Contact Us",
    "contact-description": "We're here to help. Reach out to us through any of these channels.",
    "contact-hours-title": "Office Hours",
    "contact-label-email": "Email",
    "contact-label-mobile": "Mobile",
    "contact-label-phone": "Phone",
    "contact-response-hours": "We'll respond within 24 hours",
    "contact-hours-monfri": "Mon-Fri: 8:00 AM - 5:00 PM",
    "contact-hours-lunch": "Lunch Break",
    "contact-hours-lunch-time": "12:00 PM - 1:00 PM",
    "contact-hours-closed": "Closed",
    "contact-hours-weekend": "Saturday & Sunday",
    "contact-hours-holidays": "National & Local Holidays",
    "contact-section-hotlines": "Emergency",
    "contact-section-hotlines-title": "Emergency Hotlines",
    "contact-section-hotlines-desc": "For emergencies and inquiries, contact these numbers anytime.",
    "contact-section-medical": "Medical",
    "contact-section-medical-title": "Medical Emergency Hotlines",
    "contact-section-medical-desc": "For medical emergencies and hospital inquiries.",

    // Services Page
    "services-title": "Municipal Services Directory",
    "services-subtitle": "Browse all services offered by the Municipality of Calauan",
    "life-events-title": "Browse by Life Event",
    "life-events-subtitle": "Find services based on what's happening in your life",
    "life-starting-business": "Starting a Business",
    "life-getting-married": "Getting Married",
    "life-having-baby": "Having a Baby",
    "life-financial-help": "Need Financial Help",
    "life-senior": "Senior Citizen Services",
    "life-pwd": "Person with Disability",
    "life-building": "Building/Home Improvement",
    "life-trouble": "Got in Trouble",

    // Service Categories
    "cat-certificates": "Certificates & Vital Records",
    "cat-certificates-desc": "Birth, death, marriage certificates, and other vital records.",
    "cat-business": "Business & Trade",
    "cat-business-desc": "Business permits, licenses, and trade registration services.",
    "cat-social": "Social Services",
    "cat-social-desc": "Welfare programs, senior citizen services, PWD benefits, and financial aid.",
    "cat-health": "Health & Wellness",
    "cat-health-desc": "Vaccination programs, health certificates, and medical assistance.",
    "cat-tax": "Taxation & Payments",
    "cat-tax-desc": "Property tax, business tax, payments, and tax clearance.",
    "cat-agriculture": "Agriculture",
    "cat-agriculture-desc": "Agricultural loans, crop insurance, fertilizer assistance, and training.",
    "cat-infrastructure": "Infrastructure",
    "cat-infrastructure-desc": "Construction permits, road maintenance requests, and public facilities.",
    "cat-education": "Education & Scholarship",
    "cat-education-desc": "Scholarship programs, student assistance, and educational grants.",
    "cat-safety": "Public Safety",
    "cat-safety-desc": "Emergency services, disaster preparedness, and community safety programs.",
    "cat-environment": "Environment",
    "cat-environment-desc": "Environmental permits, waste management, and conservation programs.",

    // FAQ Page
    "faq-title": "Frequently Asked Questions",
    "faq-subtitle": "Find answers to common questions about municipal services",
    "faq-general": "General Questions",
    "faq-certificates": "Certificates & Documents",
    "faq-business": "Business & Permits",
    "faq-payments": "Payments & Fees",
    "faq-social": "Social Services",
    "faq-technical": "Technical Questions",
    "faq-still-questions": "Still have questions?",
    "faq-contact-help": "If you didn't find the answer you were looking for, please don't hesitate to contact us.",

    // Government Page
    "government-title": "Government",
    "government-subtitle": "Government Officials & Structure",
    "government-description": "Meet the leadership and offices serving Calauan, Laguna",
    "executive-branch": "Executive Branch",
    "executive-branch-title": "Municipal Leadership",
    "executive-branch-desc": "The executive officials leading Calauan's governance",
    "legislative-branch": "Legislative Branch",
    "legislative-branch-title": "Sangguniang Bayan Members",
    "legislative-branch-desc": "Municipal Councilors serving the people of Calauan",
    "municipal-offices": "Municipal Offices",
    "municipal-offices-title": "Department Heads & Key Offices",
    "municipal-offices-desc": "Municipal offices providing services to citizens",
    "barangay-units": "Barangay Units",
    "barangay-units-title": "Barangays of Calauan",
    "barangay-units-desc": "17 Barangays serving our community",

    // Statistics Page
    "stats-title": "Statistics",
    "stats-subtitle": "Municipal Statistics",
    "stats-description": "Data and statistics about Calauan, Laguna",
    "stats-badge": "Municipal Data",
    "finance-section": "Finance",
    "finance-title": "Municipal Income",
    "finance-desc": "Financial standing for fiscal year 2024",
    "income-composition": "Income Composition",
    "income-ira": "Internal Revenue Allotment",
    "income-local": "Local Sources",
    "growth-section": "Growth",
    "growth-title": "Population Trends",
    "growth-desc": "Historical growth from 1990 to 2024",
    "distribution-section": "Distribution",
    "distribution-title": "Population by Barangay",
    "distribution-desc": "2024 Census of Population",
    "view-all-barangays": "View all 16 barangays",
    "economy-section": "Economy",
    "economy-title": "Economic Indicators",
    "economy-desc": "Key economic data and business statistics",
    "economic-sectors": "Economic Sectors",
    "poverty-section": "Poverty",
    "poverty-title": "Poverty Statistics",
    "poverty-desc": "2021 City and Municipal Level Poverty Estimates",
    "competitive-section": "Competitiveness",
    "competitive-title": "Calauan Competitive Index",
    "competitive-desc": "Cities and Municipalities Competitiveness Index (CMCI) Performance 2016-2024",
    "key-indicators-trend": "Key Indicators Trend (2016-2024)",
    "visual-section": "Visual",
    "visual-title": "Population Bar Chart",
    "visual-desc": "Comparative view of all 16 barangays",

    // Legislative Page
    "legislative-title": "Legislative",
    "legislative-subtitle": "Legislative Documents",
    "legislative-description": "Ordinances and resolutions of Sangguniang Bayan ng Calauan",
    "legislative-badge": "Sangguniang Bayan",
    "ordinance-framework": "Ordinance Framework",
    "ordinance-framework-desc": "Municipal ordinances enacted by Sangguniang Bayan — local laws that govern the municipality and its residents.",
    "browse-ordinances": "Browse Ordinances",
    "resolution-framework": "Resolution Framework",
    "resolution-framework-desc": "Resolutions passed by Sangguniang Bayan expressing the will or opinion of the legislative body on various matters.",
    "browse-resolutions": "Browse Resolutions",
    "process-flow": "Process Flow",
    "process-flow-title": "Flowchart for Legislative Proposal",
    "process-flow-desc": "Step-by-step process for enacting ordinances and resolutions",
    "for-ordinances": "For Ordinances",
    "ordinances-steps": "11 Steps",
    "for-resolutions": "For Resolutions",
    "resolutions-steps": "6 Steps",
    "about-section": "About",
    "about-title": "Understanding Local Legislation",
    "about-desc": "Learn about the legislative process of Sangguniang Bayan",
    "ordinances-info": "Ordinances",
    "ordinances-info-desc": "Local laws with permanent and general application that require compliance from residents and businesses within the municipality.",
    "resolutions-info": "Resolutions",
    "resolutions-info-desc": "Expressions of the legislative body's will or opinion on specific matters, often used for commendations, requests, or policy positions.",
    "public-participation": "Public Participation",
    "public-participation-desc": "Citizens can attend Sangguniang Bayan sessions and participate in public hearings for proposed ordinances.",
    "transparency-info": "Transparency",
    "transparency-info-desc": "All enacted ordinances and resolutions are made available to the public as part of our commitment to open governance.",
  },
  fil: {
    // Navigation - Filipino
    "nav-home": "Tahanan",
    "nav-services": "Mga Serbisyo",
    "nav-government": "Pamahalaan",
    "nav-statistics": "Estadistika",
    "nav-legislative": "Lehislatura",
    "nav-transparency": "Transparensiya",
    "nav-contact": "Makipag-ugnayan",

    // Hero Section
    "hero-welcome": "Maligayang Pagdating sa BetterCalauan.org",
    "hero-subtitle": "I-access ang mga serbisyo ng pamahalaan, impormasyon, at mga mapagkukunan para sa mga mamamayan ng Calauan, Laguna.",
    "hero-find-service": "Maghanap ng Serbisyo",

    // Popular Services
    "section-popular": "Mga Sikat na Serbisyo",
    "service-certificates": "Mga Sertipiko",
    "service-certificates-desc": "Sertipiko ng kapanganakan, kasal, at kamatayan",
    "service-business": "Mga Permit sa Negosyo",
    "service-business-desc": "Bagong permit at pag-renew",
    "service-tax": "Pagbabayad ng Buwis",
    "service-tax-desc": "Buwis sa ari-arian at negosyo",
    "service-social": "Serbisyong Panlipunan",
    "service-social-desc": "Serbisyo para sa senior citizen at PWD",
    "service-health": "Serbisyong Pangkalusugan",
    "service-health-desc": "Tulong medikal at mga programa",
    "btn-view-all-services": "Tingnan Lahat ng Serbisyo",

    // Latest Updates
    "section-updates": "Pinakabagong Balita",
    "btn-view-all": "Tingnan Lahat",

    // Municipal Leadership
    "section-leadership": "Pamunuan ng Munisipalidad",
    "title-mayor": "Punong Bayan",
    "title-vice-mayor": "Bise Punong Bayan",
    "btn-view-officials": "Tingnan Lahat ng Opisyal",

    // Contact Section
    "section-contact": "Impormasyon sa Pakikipag-ugnayan",
    "contact-phone": "Telepono",
    "contact-email": "Email",
    "contact-address": "Tirahan",
    "contact-hours": "Lunes-Biyernes: 8:00 AM - 5:00 PM",
    "contact-response": "Sasagutin kami sa loob ng 24 na oras",
    "contact-municipal-hall": "Munisipyo",

    // Contact Page
    "contact-title": "Makipag-ugnayan sa Amin",
    "contact-description": "Narito kami para tumulong. Makipag-ugnayan kami sa kahit alin sa mga channel na ito.",
    "contact-hours-title": "Oras ng Tanggapan",
    "contact-label-email": "Email",
    "contact-label-mobile": "Mobile",
    "contact-label-phone": "Telepono",
    "contact-response-hours": "Sasagutin kami sa loob ng 24 na oras",
    "contact-hours-monfri": "Lunes-Biyernes: 8:00 AM - 5:00 PM",
    "contact-hours-lunch": "Oras ng Tanghalian",
    "contact-hours-lunch-time": "12:00 PM - 1:00 PM",
    "contact-hours-closed": "Sarado",
    "contact-hours-weekend": "Sabado at Linggo",
    "contact-hours-holidays": "Pambansang at Lokal na Araw ng Pasko",
    "contact-section-hotlines": "Emergency",
    "contact-section-hotlines-title": "Mga Hotline ng Emergency",
    "contact-section-hotlines-desc": "Para sa mga emergency at mga tanong, makipag-ugnayan sa mga numerong ito anumman.",
    "contact-section-medical": "Medikal",
    "contact-section-medical-title": "Mga Hotline ng Medikal na Emergency",
    "contact-section-medical-desc": "Para sa mga medikal na emergency at mga tanong sa ospital.",

    // Services Page
    "services-title": "Direktoryo ng Serbisyong Munisipal",
    "services-subtitle": "Tingnan ang lahat ng serbisyong inaalok ng Munisipalidad ng Calauan",
    "life-events-title": "Maghanap Ayon sa Pangyayari sa Buhay",
    "life-events-subtitle": "Hanapin ang mga serbisyo batay sa nangyayari sa iyong buhay",
    "life-starting-business": "Magsimula ng Negosyo",
    "life-getting-married": "Magpakasal",
    "life-having-baby": "Magkaanak",
    "life-financial-help": "Kailangan ng Tulong Pinansyal",
    "life-senior": "Serbisyo para sa Senior Citizen",
    "life-pwd": "Taong may Kapansanan",
    "life-building": "Pagtatayo/Pagpapabuti ng Bahay",
    "life-trouble": "May Problema",

    // Service Categories
    "cat-certificates": "Mga Sertipiko at Vital Records",
    "cat-certificates-desc": "Sertipiko ng kapanganakan, kamatayan, kasal, at iba pang vital records.",
    "cat-business": "Negosyo at Kalakalan",
    "cat-business-desc": "Mga permit sa negosyo, lisensya, at serbisyo sa pagpaparehistro ng kalakalan.",
    "cat-social": "Serbisyong Panlipunan",
    "cat-social-desc": "Mga programa sa kapakanan, serbisyo para sa senior citizen, benepisyo ng PWD, at tulong pinansyal.",
    "cat-health": "Kalusugan at Kagalingan",
    "cat-health-desc": "Mga programa sa bakuna, health certificates, at tulong medikal.",
    "cat-tax": "Pagbubuwis at Pagbabayad",
    "cat-tax-desc": "Buwis sa ari-arian, buwis sa negosyo, pagbabayad, at tax clearance.",
    "cat-agriculture": "Agrikultura",
    "cat-agriculture-desc": "Mga pautang sa agrikultura, insurance sa pananim, tulong sa pataba, at pagsasanay.",
    "cat-infrastructure": "Imprastraktura",
    "cat-infrastructure-desc": "Mga permit sa konstruksyon, kahilingan sa pagpapanatili ng kalsada, at pampublikong pasilidad.",
    "cat-education": "Edukasyon at Iskolarship",
    "cat-education-desc": "Mga programa sa iskolarship, tulong sa estudyante, at mga grant sa edukasyon.",
    "cat-safety": "Kaligtasan ng Publiko",
    "cat-safety-desc": "Mga serbisyong pang-emergency, paghahanda sa sakuna, at mga programa sa kaligtasan ng komunidad.",
    "cat-environment": "Kapaligiran",
    "cat-environment-desc": "Mga permit sa kapaligiran, pamamahala ng basura, at mga programa sa konserbasyon.",

    // FAQ Page
    "faq-title": "Mga Madalas Itanong",
    "faq-subtitle": "Hanapin ang mga sagot sa mga karaniwang tanong tungkol sa mga serbisyong munisipal",
    "faq-general": "Mga Pangkalahatang Tanong",
    "faq-certificates": "Mga Sertipiko at Dokumento",
    "faq-business": "Negosyo at Permit",
    "faq-payments": "Pagbabayad at Bayarin",
    "faq-social": "Serbisyong Panlipunan",
    "faq-technical": "Mga Teknikal na Tanong",
    "faq-still-questions": "May tanong pa ba kayo?",
    "faq-contact-help": "Kung hindi ninyo nakita ang sagot na hinahanap, huwag mag-atubiling makipag-ugnayan sa amin.",

    // Government Page
    "government-title": "Pamahalaan",
    "government-subtitle": "Mga Opisyal ng Pamahalaan at Istruktura",
    "government-description": "Makilala ang mga pinuno at opisina na nagsisilbi sa Calauan, Laguna",
    "executive-branch": "Sangay Tagapagpaganap",
    "executive-branch-title": "Pamunuan ng Munisipalidad",
    "executive-branch-desc": "Mga opisyal tagapagpaganap na nangunguna sa pamumuno ng Calauan",
    "legislative-branch": "Sangay Lehislatibo",
    "legislative-branch-title": "Mga Miyembro ng Sangguniang Bayan",
    "legislative-branch-desc": "Mga Konsehal ng Munisipyo na nagsisilbi sa mga tao ng Calauan",
    "municipal-offices": "Mga Opisina ng Munisipyo",
    "municipal-offices-title": "Mga Hepe ng Departamento at Pangunahing Opisina",
    "municipal-offices-desc": "Mga opisina ng munisipyo na nagbibigay ng serbisyo sa mga mamamayan",
    "barangay-units": "Mga Yunit ng Barangay",
    "barangay-units-title": "Mga Barangay ng Calauan",
    "barangay-units-desc": "17 Barangay na nagsisilbi sa ating komunidad",

    // Statistics Page
    "stats-title": "Estadistika",
    "stats-subtitle": "Estadistika ng Munisipalidad",
    "stats-description": "Mga datos at estadistika tungkol sa Calauan, Laguna",
    "stats-badge": "Datos ng Munisipalidad",
    "finance-section": "Pinansyal",
    "finance-title": "Kita ng Munisipalidad",
    "finance-desc": "Sitwasyong pinansyal para sa taon 2024",
    "income-composition": "Komposisyon ng Kita",
    "income-ira": "Internal Revenue Allotment",
    "income-local": "Mga Lokal na Pinagkukunan",
    "growth-section": "Paglago",
    "growth-title": "Trend ng Populasyon",
    "growth-desc": "Kasaysayan ng paglago mula 1990 hanggang 2024",
    "distribution-section": "Distribusyon",
    "distribution-title": "Populasyon ayon sa Barangay",
    "distribution-desc": "Sensus ng Populasyon 2024",
    "view-all-barangays": "Tingnan ang lahat ng 16 barangay",
    "economy-section": "Ekonomiya",
    "economy-title": "Mga Indikador sa Ekonomiya",
    "economy-desc": "Mahahalagang datos sa ekonomiya at estadistika ng negosyo",
    "economic-sectors": "Mga Sektor ng Ekonomiya",
    "poverty-section": "Kahirapan",
    "poverty-title": "Estadistika ng Kahirapan",
    "poverty-desc": "2021 Pagtatantya ng Kahirapan sa Level ng Lungsod at Munisipalidad",
    "competitive-section": "Kakayahang Makipagkompetensya",
    "competitive-title": "Indeks ng Kakayahang Makipagkompetensya ng Calauan",
    "competitive-desc": "Pagganap ng Indeks ng Kakayahang Makipagkompetensya ng mga Lungsod at Munisipalidad (CMCI) 2016-2024",
    "key-indicators-trend": "Trend ng Pangunahing mga Indikador (2016-2024)",
    "visual-section": "Biswal",
    "visual-title": "Bar Chart ng Populasyon",
    "visual-desc": "Paghahambing ng lahat ng 16 barangay",

    // Legislative Page
    "legislative-title": "Lehislatibo",
    "legislative-subtitle": "Mga Dokumentong Lehislatibo",
    "legislative-description": "Mga ordinaryo at resolusyon ng Sangguniang Bayan ng Calauan",
    "legislative-badge": "Sangguniang Bayan",
    "ordinance-framework": "Balangkas ng Ordinansa",
    "ordinance-framework-desc": "Mga ordinansang munisipal na inenact ng Sangguniang Bayan — mga lokal na batas na namumuno sa munisipalidad at mga residente nito.",
    "browse-ordinances": "Mag-browse ng mga Ordinansa",
    "resolution-framework": "Balangkas ng Resolusyon",
    "resolution-framework-desc": "Mga resolusyong naipasa ng Sangguniang Bayan na nagpapahayag ng kalooban o opinyon ng katawang lehislatibo sa iba't ibang bagay.",
    "browse-resolutions": "Mag-browse ng mga Resolusyon",
    "process-flow": "Daloy ng Proseso",
    "process-flow-title": "Flowchart para sa Panukalang Lehislatibo",
    "process-flow-desc": "Hakbang-ba-hakbang na proseso sa pag-enact ng mga ordinansa at resolusyon",
    "for-ordinances": "Para sa mga Ordinansa",
    "ordinances-steps": "11 mga Hakbang",
    "for-resolutions": "Para sa mga Resolusyon",
    "resolutions-steps": "6 na Hakbang",
    "about-section": "Tungkol",
    "about-title": "Pag-unawa sa Lokal na Lehislatura",
    "about-desc": "Matuto tungkol sa proseso ng lehislatura ng Sangguniang Bayan",
    "ordinances-info": "Mga Ordinansa",
    "ordinances-info-desc": "Mga lokal na batas na may permanenteng at pangkalahatang aplikasyon na nangangailangan ng pagsunod mula sa mga residente at negosyo sa loob ng munisipalidad.",
    "resolutions-info": "Mga Resolusyon",
    "resolutions-info-desc": "Mga ekspresyon ng kalooban o opinyon ng katawang lehislatibo sa mga partikular na bagay, madalas na ginagamit para sa mga pagpupuri, hiling, o mga posisyon sa patakaran.",
    "public-participation": "Partisipasyon ng Publiko",
    "public-participation-desc": "Maaaring dumalo ang mga mamamayan sa mga sesyon ng Sangguniang Bayan at lumahok sa mga pampublikong pagdinig para sa mga panukalang ordinansa.",
    "transparency-info": "Transparensiya",
    "transparency-info-desc": "Lahat ng naitalagang mga ordinansa at resolusyon ay ginagawang available sa publiko bilang bahagi ng ating pangako sa bukas na pamumuno.",
  },
  ilo: {
    // Navigation - Ilocano
    "nav-home": "Pagtaengan",
    "nav-services": "Dagiti Serbisyo",
    "nav-government": "Gobierno",
    "nav-statistics": "Estadistika",
    "nav-legislative": "Lehislatura",
    "nav-transparency": "Transparensiya",
    "nav-contact": "Kontaken",

    // Hero Section
    "hero-welcome": "Naragsak nga Isasangbay iti BetterCalauan.org",
    "hero-subtitle": "Aksesen dagiti serbisyo ti gobierno, impormasyon, ken dagiti resources para kadagiti umili ti Calauan, Laguna.",
    "hero-find-service": "Agsapul ti Serbisyo",

    // Popular Services
    "section-popular": "Dagiti Popular a Serbisyo",
    "service-certificates": "Dagiti Sertipiko",
    "service-certificates-desc": "Sertipiko ti pannakayanak, kasar, ken patay",
    "service-business": "Permit ti Negosyo",
    "service-business-desc": "Baro a permit ken panagrenew",
    "service-tax": "Panagbayad ti Buwis",
    "service-tax-desc": "Buwis ti sanikua ken negosyo",
    "service-social": "Serbisyo Sosyal",
    "service-social-desc": "Serbisyo para kadagiti senior citizen ken PWD",
    "service-health": "Serbisyo ti Salun-at",
    "service-health-desc": "Tulong medikal ken dagiti programa",
    "btn-view-all-services": "Kitaen Amin a Serbisyo",

    // Latest Updates
    "section-updates": "Kabarbaro a Damag",
    "btn-view-all": "Kitaen Amin",

    // Municipal Leadership
    "section-leadership": "Panguluan ti Munisipalidad",
    "title-mayor": "Mayor ti Munisipalidad",
    "title-vice-mayor": "Bise Mayor ti Munisipalidad",
    "btn-view-officials": "Kitaen Amin nga Opisyal",

    // Contact Section
    "section-contact": "Impormasyon ti Panagkontak",
    "contact-phone": "Telepono",
    "contact-email": "Email",
    "contact-address": "Pagtaengan",
    "contact-hours": "Lunes-Biernes: 8:00 AM - 5:00 PM",
    "contact-response": "Sumungbat kami iti uneg ti 24 nga oras",
    "contact-municipal-hall": "Municipal Hall",

    // Contact Page
    "contact-title": "Kontaken tayo",
    "contact-description": "Adi tayo ket tumulong. Makontaken tayo manipud it anumman kadagitoy a channel.",
    "contact-hours-title": "Oras ti Panagtagako",
    "contact-label-email": "Email",
    "contact-label-mobile": "Mobile",
    "contact-label-phone": "Telepono",
    "contact-response-hours": "Sumungbat kami iti uneg ti 24 nga oras",
    "contact-hours-monfri": "Lunes-Biernes: 8:00 AM - 5:00 PM",
    "contact-hours-lunch": "Oras ti Panagkanen",
    "contact-hours-lunch-time": "12:00 PM - 1:00 PM",
    "contact-hours-closed": "Serrado",
    "contact-hours-weekend": "Sabado ken Domingo",
    "contact-hours-holidays": "Pambansang ken Lokal nga Aldaw iti Paskua",
    "contact-section-hotlines": "Emergency",
    "contact-section-hotlines-title": "Dagiti Hotline ti Emergency",
    "contact-section-hotlines-desc": "Para kadagiti emergency ken dagiti saludsod, makontaken tayo manipud it anumman kadagitoy a numero.",
    "contact-section-medical": "Medikal",
    "contact-section-medical-title": "Dagiti Hotline ti Medikal nga Emergency",
    "contact-section-medical-desc": "Para kadagiti medikal nga emergency ken dagiti saludsod idiay ospital.",

    // Services Page
    "services-title": "Direktorio ti Serbisyo ti Munisipalidad",
    "services-subtitle": "Kitaen amin a serbisyo nga idatag ti Munisipalidad ti Calauan",
    "life-events-title": "Agsapul Segun iti Pasamak iti Biag",
    "life-events-subtitle": "Biroken dagiti serbisyo segun iti mapasamak iti biagmo",
    "life-starting-business": "Mangrugi ti Negosyo",
    "life-getting-married": "Agkasar",
    "life-having-baby": "Addaan ti Ubing",
    "life-financial-help": "Kasapulan ti Tulong Pinansyal",
    "life-senior": "Serbisyo para kadagiti Senior Citizen",
    "life-pwd": "Tao nga Addaan Kapansanan",
    "life-building": "Panagbangon/Panagpasayaat ti Balay",
    "life-trouble": "Adda Problema",

    // Service Categories
    "cat-certificates": "Dagiti Sertipiko ken Vital Records",
    "cat-certificates-desc": "Sertipiko ti pannakayanak, patay, kasar, ken dadduma pay a vital records.",
    "cat-business": "Negosyo ken Kalakalan",
    "cat-business-desc": "Dagiti permit ti negosyo, lisensya, ken serbisyo ti panagparehistro ti kalakalan.",
    "cat-social": "Serbisyo Sosyal",
    "cat-social-desc": "Dagiti programa ti welfare, serbisyo para kadagiti senior citizen, benepisyo ti PWD, ken tulong pinansyal.",
    "cat-health": "Salun-at ken Wellness",
    "cat-health-desc": "Dagiti programa ti bakuna, health certificates, ken tulong medikal.",
    "cat-tax": "Panagbuwis ken Panagbayad",
    "cat-tax-desc": "Buwis ti sanikua, buwis ti negosyo, panagbayad, ken tax clearance.",
    "cat-agriculture": "Agrikultura",
    "cat-agriculture-desc": "Dagiti pautang ti agrikultura, insurance ti mula, tulong ti abono, ken panagsanay.",
    "cat-infrastructure": "Imprastraktura",
    "cat-infrastructure-desc": "Dagiti permit ti konstruksyon, dawat ti panagmantener ti kalsada, ken pampubliko a pasilidad.",
    "cat-education": "Edukasyon ken Iskolarship",
    "cat-education-desc": "Dagiti programa ti iskolarship, tulong ti estudiante, ken dagiti grant ti edukasyon.",
    "cat-safety": "Kinatalged ti Publiko",
    "cat-safety-desc": "Dagiti serbisyo ti emergency, panagisagana ti kalamidad, ken dagiti programa ti kinatalged ti komunidad.",
    "cat-environment": "Aglawlaw",
    "cat-environment-desc": "Dagiti permit ti aglawlaw, panagtaripato ti basura, ken dagiti programa ti konserbasyon.",

    // FAQ Page
    "faq-title": "Masansan a Maisaludsod",
    "faq-subtitle": "Biruken dagiti sungbat kadagiti gagangay a saludsod maipapan kadagiti serbisyo ti munisipalidad",
    "faq-general": "Dagiti Gagangay a Saludsod",
    "faq-certificates": "Dagiti Sertipiko ken Dokumento",
    "faq-business": "Negosyo ken Permit",
    "faq-payments": "Panagbayad ken Bayadan",
    "faq-social": "Serbisyo Sosyal",
    "faq-technical": "Dagiti Teknikal a Saludsod",
    "faq-still-questions": "Adda pay saludsodyo?",
    "faq-contact-help": "No saandayo a nasarakan ti sungbat a sapulenyo, dikay agmuna nga agkontak kadakami.",

    // Government Page
    "government-title": "Gobierno",
    "government-subtitle": "Dagiti Opisial ti Gobierno ken Estructura",
    "government-description": "Amuen dagiti pangulo ken dagiti opisina a nagserbi ken Calauan, Laguna",
    "executive-branch": "Sanga nga Ehekutibo",
    "executive-branch-title": "Panguluan ti Munisipalidad",
    "executive-branch-desc": "Dagiti opisial nga ehekutibo a nangunguna iti panangulo ti Calauan",
    "legislative-branch": "Sanga nga Lehislatura",
    "legislative-branch-title": "Mga Miyembro ti Sangguniang Bayan",
    "legislative-branch-desc": "Dagiti Konsehal ti Munisipalidad a nagserbi kadagiti tattao ti Calauan",
    "municipal-offices": "Dagiti Opisina ti Munisipalidad",
    "municipal-offices-title": "Dagiti Hepe ti Departamento ken Dagiti Nangruna nga Opisina",
    "municipal-offices-desc": "Dagiti opisina ti munisipalidad a mangted kadagiti serbisyo kadagiti umili",
    "barangay-units": "Dagiti Unidad ti Barangay",
    "barangay-units-title": "Dagiti Barangay ti Calauan",
    "barangay-units-desc": "17 a Barangay a nagserbi iti komunidad tayo",

    // Statistics Page
    "stats-title": "Estadistika",
    "stats-subtitle": "Estadistika ti Munisipalidad",
    "stats-description": "Dagiti datos ken estadistika maipapan ti Calauan, Laguna",
    "stats-badge": "Dagiti Datos ti Munisipalidad",
    "finance-section": "Pinansia",
    "finance-title": "Kita ti Munisipalidad",
    "finance-desc": "Kadawyan ti pinansia para iti fiscal a tawen 2024",
    "income-composition": "Komposision ti Kita",
    "income-ira": "Internal Revenue Allotment",
    "income-local": "Dagiti Lokal a Pagtaudan",
    "growth-section": "Panagdagup",
    "growth-title": "Trend ti Populasion",
    "growth-desc": "Nasapaan a panagdagup manipud idi 1990 agingga idi 2024",
    "distribution-section": "Panangwaras",
    "distribution-title": "Populasion babaen ti Barangay",
    "distribution-desc": "Sensus ti Populasion 2024",
    "view-all-barangays": "Kitaen dagiti amin a 16 a barangay",
    "economy-section": "Ekonomia",
    "economy-title": "Dagiti Indikador ti Ekonomia",
    "economy-desc": "Nangruna a datos iti ekonomia ken estadistika ti negosyo",
    "economic-sectors": "Dagiti Sektor ti Ekonomia",
    "poverty-section": "Kapanglaw",
    "poverty-title": "Estadistika ti Kapanglaw",
    "poverty-desc": "2021 Panagkarkulo ti Kapanglaw iti Level ti Siudad ken Munisipalidad",
    "competitive-section": "Kakaduaan a Makipagkompetensia",
    "competitive-title": "Indeks ti Kakaduaan a Makipagkompetensia ti Calauan",
    "competitive-desc": "Panagandar ti Indeks ti Kakaduaan a Makipagkompetensia dagiti Siudad ken Munisipalidad (CMCI) 2016-2024",
    "key-indicators-trend": "Trend dagiti Pangruna a mga Indikador (2016-2024)",
    "visual-section": "Bisual",
    "visual-title": "Bar Chart ti Populasion",
    "visual-desc": "Panagipadpada dagiti amin a 16 a barangay",

    // Legislative Page
    "legislative-title": "Lehislatura",
    "legislative-subtitle": "Dagiti Dokumento ti Lehislatura",
    "legislative-description": "Dagiti ordinansa ken resolusyon ti Sangguniang Bayan ti Calauan",
    "legislative-badge": "Sangguniang Bayan",
    "ordinance-framework": "Karkulo ti Ordinansa",
    "ordinance-framework-desc": "Dagiti ordinansa ti munisipalidad a naenact babaen ti Sangguniang Bayan — dagiti lokal a linteg a nagturay iti munisipalidad ken dagiti residente na.",
    "browse-ordinances": "Browse dagiti Ordinansa",
    "resolution-framework": "Karkulo ti Resolusion",
    "resolution-framework-desc": "Dagiti resolusion a naipasa babaen ti Sangguniang Bayan a mangipakita ti panunot wenno panunot ti katawan nga lehislatibo kadagiti nadumaduma a banag.",
    "browse-resolutions": "Browse dagiti Resolusion",
    "process-flow": "Panagayus ti Proseso",
    "process-flow-title": "Flowchart para iti Panukala ti Lehislatura",
    "process-flow-desc": "Hakbang-babaen-hakbang a proseso iti panang-enact kadagiti ordinansa ken resolusyon",
    "for-ordinances": "Para kadagiti Ordinansa",
    "ordinances-steps": "11 a Hakbang",
    "for-resolutions": "Para kadagiti Resolusion",
    "resolutions-steps": "6 a Hakbang",
    "about-section": "Maipapan",
    "about-title": "Panaw-aw iti Lokal nga Lehislatura",
    "about-desc": "Adalen maipapan ti proseso ti lehislatura ti Sangguniang Bayan",
    "ordinances-info": "Dagiti Ordinansa",
    "ordinances-info-desc": "Dagiti lokal a linteg nga addaan kadagiti permanente ken panagkailian a panangipakat a kasapulan ti panagsunod manipud kadagiti residente ken negosyo iti uneg ti munisipalidad.",
    "resolutions-info": "Dagiti Resolusion",
    "resolutions-info-desc": "Dagiti ekspresion iti panunot wenno panunot ti katawan nga lehislatibo kadagiti partikular a banag, madalas a mausar kadagiti panangdayaw, panagkiddaw, wenno dagiti posision iti annuroten.",
    "public-participation": "Partisipasion ti Publiko",
    "public-participation-desc": "Mabalin a dumalo dagiti umili kadagiti sesion ti Sangguniang Bayan ken aglaok kadagiti pampubliko a panangdinig para kadagiti panukalang ordinansa.",
    "transparency-info": "Transparensiya",
    "transparency-info-desc": "Amin dagiti naenact a ordinansa ken resolusyon ket maibaga kadagiti publiko a kas paset ti pangakotayo iti nalukneng a panangulo.",
  }
};

type Language = 'en' | 'fil' | 'ilo';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Load saved language from localStorage
    const savedLang = localStorage.getItem('bettercalauan_lang') as Language;
    if (savedLang && ['en', 'fil', 'ilo'].includes(savedLang)) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('bettercalauan_lang', lang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['en']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
