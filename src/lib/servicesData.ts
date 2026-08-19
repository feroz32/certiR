export interface ServiceData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  requiredDocuments: string[];
  processSteps: { step: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const SERVICES_DATA: Record<string, ServiceData> = {
  'birth-certificate': {
    slug: 'birth-certificate',
    title: 'Birth Certificate Services in India',
    metaTitle: 'Birth Certificate Services in India | Certification Work',
    metaDescription: 'Get doorstep assistance for birth certificate registration, name addition, corrections, and delayed birth certificate processing in India.',
    category: 'Essential Identity',
    shortDescription: 'Doorstep assistance for birth certificate registration, name addition, corrections, and non-availability certificates.',
    fullDescription: 'A Birth Certificate is the fundamental proof of age and legal identity required for school admission, passport applications, Aadhaar enrollment, and official procedures. Certification Work provides end-to-end guidance, documentation collection, application formatting, and doorstep delivery for fresh registrations, name additions, or official corrections.',
    requiredDocuments: [
      'Hospital Discharge Summary or Birth Intimation Slip',
      'Parents Aadhaar Card / Voter ID / Passport',
      'Parents Marriage Certificate (if available)',
      'Self-Declaration Affidavit (for delayed registration beyond 21 days)',
      'Address Proof of Parents (Utility bill, Rent Agreement, or Ration Card)',
    ],
    processSteps: [
      { step: '01 — Document Inspection', description: 'Share your available documents via WhatsApp for a quick compliance check.' },
      { step: '02 — Application Preparation', description: 'We format the application according to designated municipal/gram panchayat guidelines.' },
      { step: '03 — Submission & Tracking', description: 'Our team handles the submission and follows up with the issuing authority.' },
      { step: '04 — Doorstep Delivery', description: 'Your verified birth certificate is delivered directly to your doorstep.' },
    ],
    faqs: [
      { question: 'Can I add a child\'s name to a birth certificate later?', answer: 'Yes, child name addition is allowed within designated municipal timelines. We assist in filing the name addition request with required affidavits.' },
      { question: 'What if birth registration was not done at the time of birth?', answer: 'Delayed birth registration requires a Non-Availability Certificate (NABC) and a magistrate order/affidavit. We guide you through the complete delayed registration workflow.' },
    ],
    relatedSlugs: ['caste-certificate', 'residence-certificate', 'aadhaar-services'],
  },

  'caste-certificate': {
    slug: 'caste-certificate',
    title: 'Caste Certificate Application Assistance',
    metaTitle: 'Caste Certificate Application Assistance | Certification Work',
    metaDescription: 'Expert documentation assistance for SC, ST, OBC, and SEBC caste certificates in India. Fast doorstep delivery and guidance.',
    category: 'Government Certificate',
    shortDescription: 'Complete documentation support for SC, ST, and OBC caste certificate applications across Indian states.',
    fullDescription: 'A Caste Certificate is an essential document for availing reservation benefits in educational admissions, government jobs, scholarships, and welfare schemes. Certification Work assists individuals in compiling family lineage proofs, affidavits, and government-required forms for seamless processing.',
    requiredDocuments: [
      'Applicant Aadhaar Card and Passport Photo',
      'Father / Relative Caste Certificate (if available)',
      'Ration Card or Voter ID Card',
      'Proof of Residence (Electricity Bill / Water Bill)',
      'School Leaving Certificate / Bonafide Certificate displaying caste entry',
    ],
    processSteps: [
      { step: '01 — Lineage Check', description: 'We review your family lineage documents and caste entry records.' },
      { step: '02 — Form & Affidavit Filling', description: 'We draft legal affidavits and complete the state Revenue Department application.' },
      { step: '03 — Verification Follow-up', description: 'We track verification progress with revenue officers and local tehsildar office.' },
      { step: '04 — Delivery', description: 'The issued caste certificate is delivered securely to your home.' },
    ],
    faqs: [
      { question: 'Is a caste certificate valid across India?', answer: 'State caste certificates are valid for state benefits. For central government jobs and admissions, a Central OBC/SC/ST format certificate is required, which we also assist with.' },
      { question: 'What if my parents do not have a caste certificate?', answer: 'You can provide blood relation caste certificates (paternal uncle/grandfather) along with land revenue records or old school records indicating caste.' },
    ],
    relatedSlugs: ['income-certificate', 'ews-certificate', 'residence-certificate'],
  },

  'income-certificate': {
    slug: 'income-certificate',
    title: 'Income Certificate Processing & Assistance',
    metaTitle: 'Income Certificate Assistance in India | Certification Work',
    metaDescription: 'Reliable assistance for state and central income certificates for scholarships, fee concessions, and government welfare programs.',
    category: 'Financial Documentation',
    shortDescription: 'Hassle-free application processing for annual income certificates for scholarships, loans, and subsidies.',
    fullDescription: 'An Income Certificate verifies the total annual income of an individual or family from all sources. It is mandated for scholarship schemes, fee waivers, EWS quota applications, and housing welfare benefits. We assist in compiling income proofs, ITR records, or self-declarations.',
    requiredDocuments: [
      'Applicant & Parent Aadhaar Card',
      'Salary Slip / Form 16 / ITR (for employed/salaried applicants)',
      'Self-Declaration Affidavit of Income (for self-employed/farmers)',
      'Ration Card or Address Proof',
      'Recent Passport-Size Photograph',
    ],
    processSteps: [
      { step: '01 — Income Proof Audit', description: 'Share income proofs or self-declaration details for formatting.' },
      { step: '02 — Form Verification', description: 'We prepare the income affidavit and application form.' },
      { step: '03 — Revenue Processing', description: 'Application is routed to the competent revenue authority.' },
      { step: '04 — Final Delivery', description: 'Completed income certificate delivered directly to your doorstep.' },
    ],
    faqs: [
      { question: 'What is the validity period of an Income Certificate?', answer: 'Most income certificates are valid for 1 financial year (April to March) or 3 years depending on state revenue regulations.' },
      { question: 'Is an Income Certificate required for EWS certificates?', answer: 'Yes, an income certificate or verified family income proof is a primary requirement for obtaining an EWS certificate.' },
    ],
    relatedSlugs: ['ews-certificate', 'caste-certificate', 'residence-certificate'],
  },

  'ews-certificate': {
    slug: 'ews-certificate',
    title: 'Economically Weaker Section (EWS) Certificate Assistance',
    metaTitle: 'EWS Certificate Application Assistance | Certification Work',
    metaDescription: 'Assistance for obtaining Economically Weaker Section (EWS) certificates for educational admissions and central/state jobs in India.',
    category: 'Government Quota',
    shortDescription: 'Guidance and application processing for EWS certificates under 10% quota rules.',
    fullDescription: 'The Economically Weaker Section (EWS) Certificate enables general category candidates meeting specific family income and asset criteria to claim 10% reservation in government jobs and educational institutions. Certification Work helps structure your application to meet eligibility standards.',
    requiredDocuments: [
      'Aadhaar Card and PAN Card of Applicant & Family',
      'Income Proof / Income Certificate of the family',
      'Property & Land ownership documents (Ration card / Khata / Property tax receipt)',
      'Self-Declaration Affidavit regarding assets and income',
      'Passport size photographs',
    ],
    processSteps: [
      { step: '01 — Eligibility Pre-Screening', description: 'We verify your annual family income and property holdings against official EWS criteria.' },
      { step: '02 — Documentation & Affidavit', description: 'We draft the mandatory asset affidavit and assemble required annexures.' },
      { step: '03 — Processing & Submission', description: 'We submit and follow up with Tehsildar / Sub-Divisional Magistrate office.' },
      { step: '04 — Certificate Delivery', description: 'Verified EWS certificate delivered to your doorstep.' },
    ],
    faqs: [
      { question: 'Who is eligible for an EWS certificate?', answer: 'General category candidates whose gross family annual income is below Rs. 8 Lakh and who do not own agricultural land/residential plots above specified thresholds.' },
      { question: 'How long does EWS certificate processing take?', answer: 'Standard processing takes 10 to 15 working days subject to revenue department verification schedules.' },
    ],
    relatedSlugs: ['income-certificate', 'caste-certificate', 'residence-certificate'],
  },

  'residence-certificate': {
    slug: 'residence-certificate',
    title: 'Residence & Domicile Certificate Services',
    metaTitle: 'Residence & Domicile Certificate Services | Certification Work',
    metaDescription: 'Fast and reliable assistance for obtaining Residence, Domicile, and Nativity Certificates across India.',
    category: 'Address & Residency',
    shortDescription: 'Application guidance for legal Domicile, Residence, and Nativity certificates in India.',
    fullDescription: 'A Domicile or Residence Certificate proves an individual’s continuous stay in a particular state or union territory. It is essential for state-level college admissions, state recruitment exams, local welfare schemes, and passport verification.',
    requiredDocuments: [
      'Applicant Aadhaar Card & Voter ID',
      'Continuous Stay Proof (Electricity bills, Gas bills, Rent agreements for past 3-10 years)',
      'School Leaving Certificate / College Bonafide showing study duration',
      'Parents Domicile Certificate (if applicant is minor)',
      'Passport size photograph',
    ],
    processSteps: [
      { step: '01 — Stay Proof Verification', description: 'We check your residency proof documents to ensure compliance with state stay duration rules.' },
      { step: '02 — Application Drafting', description: 'We compile the residence affidavit and state portal application.' },
      { step: '03 — Department Processing', description: 'Application processed via District Collectorate / Revenue Officer.' },
      { step: '04 — Delivery', description: 'Completed Domicile Certificate delivered to your address.' },
    ],
    faqs: [
      { question: 'What is the difference between Domicile and Residence Certificate?', answer: 'A Domicile Certificate proves long-term permanent residence (usually 3 to 15 years in a state), while a Residence Certificate verifies current physical address.' },
    ],
    relatedSlugs: ['birth-certificate', 'caste-certificate', 'income-certificate'],
  },

  'aadhaar-services': {
    slug: 'aadhaar-services',
    title: 'Aadhaar Card Update & Renewal Assistance',
    metaTitle: 'Aadhaar Card Update & Verification Assistance | Certification Work',
    metaDescription: 'Guidance and appointment assistance for Aadhaar address update, name correction, mobile link, and biometric updates.',
    category: 'National Identity',
    shortDescription: 'Assistance with Aadhaar address updates, mobile number linking, demographic corrections, and slot bookings.',
    fullDescription: 'Aadhaar is India’s primary unique identification number. Keeping your Aadhaar details updated (address, mobile number, name spelling, date of birth) is critical for bank KYC, SIM registration, and government benefits. We assist you with document preparation and official appointment scheduling.',
    requiredDocuments: [
      'Existing Aadhaar Card number / copy',
      'Valid Proof of Address (Voter ID, Passport, Bank Passbook, Utility Bill)',
      'Valid Proof of Identity (PAN Card, Passport, Voter ID) for name change',
      'Proof of Date of Birth (Birth Certificate, SSLC Marks Card)',
    ],
    processSteps: [
      { step: '01 — Data Audit', description: 'We identify exact mismatch fields and verify acceptable UIDAI supporting documents.' },
      { step: '02 — Online Portal Filing', description: 'We assist in submitting address update requests or booking official Aadhaar Kendra slots.' },
      { step: '03 — Tracking Update Status', description: 'We monitor URN update status until update approval.' },
      { step: '04 — e-Aadhaar Delivery', description: 'We help print and deliver updated physical Aadhaar card copy to your home.' },
    ],
    faqs: [
      { question: 'Can address be updated online in Aadhaar?', answer: 'Yes, if your mobile number is linked to Aadhaar, address can be updated online with valid address proof.' },
      { question: 'How can I update my mobile number in Aadhaar?', answer: 'Mobile number update requires biometric verification at an Aadhaar Seva Kendra. We assist with priority slot booking.' },
    ],
    relatedSlugs: ['pan-card', 'passport-services', 'birth-certificate'],
  },

  'pan-card': {
    slug: 'pan-card',
    title: 'PAN Card Application & Correction Services',
    metaTitle: 'PAN Card Application & Correction Services | Certification Work',
    metaDescription: 'Doorstep assistance for new PAN card applications, PAN corrections, name change, and Aadhaar-PAN linking.',
    category: 'Financial Identity',
    shortDescription: 'Assistance with new PAN allotment, correction of name/DOB, e-PAN generation, and physical card delivery.',
    fullDescription: 'Permanent Account Number (PAN) is mandatory for financial transactions, opening bank accounts, filing income tax returns, and property transactions. Certification Work provides hassle-free assistance for fresh PAN applications, correction of existing errors, and Aadhaar-PAN linking.',
    requiredDocuments: [
      'Aadhaar Card (Primary Identity & Address proof)',
      'Proof of Date of Birth (Birth Certificate, Metric Certificate, Passport)',
      '2 Recent Passport-Size Photographs',
      'Existing PAN Card copy (for corrections or reprint)',
    ],
    processSteps: [
      { step: '01 — Form Selection', description: 'We determine whether Form 49A (New PAN) or CSF Form (Changes/Correction) is needed.' },
      { step: '02 — Digital Verification', description: 'We assist with e-KYC filing or paper document submission.' },
      { step: '03 — Allotment & e-PAN', description: 'PAN allotment number and digital e-PAN generated.' },
      { step: '04 — Physical Delivery', description: 'Original physical PVC PAN card delivered by courier.' },
    ],
    faqs: [
      { question: 'How long does a new PAN card take?', answer: 'Digital e-PAN is usually issued within 24–48 hours, while physical PVC card reaches your doorstep in 7–10 days.' },
      { question: 'What if there is a spelling mistake in my PAN card?', answer: 'We process a PAN Correction Application supported by your Aadhaar or official identity proof.' },
    ],
    relatedSlugs: ['aadhaar-services', 'gst-services', 'income-certificate'],
  },

  'passport-services': {
    slug: 'passport-services',
    title: 'Passport Application & Renewal Assistance',
    metaTitle: 'Passport Application & Renewal Assistance | Certification Work',
    metaDescription: 'End-to-end assistance for fresh passport applications, passport renewal, Tatkaal appointments, and police verification guidance.',
    category: 'Travel Documentation',
    shortDescription: 'Complete guidance for fresh passport filing, renewal, Tatkaal appointment booking, and documentation.',
    fullDescription: 'An Indian Passport serves as official international travel authorization and proof of citizenship. Certification Work simplifies the complex Passport Seva portal application, annexure drafting, appointment slot booking, and police verification guidance.',
    requiredDocuments: [
      'Aadhaar Card with full DOB',
      'Proof of Address (Passbook, Utility bill, Rent agreement)',
      'Proof of Birth (Birth Certificate, School Leaving Certificate)',
      'Old Passport Copy (for Renewal / Re-issue applications)',
      'ECNR Proof (10th Pass Certificate / Higher Education Degree)',
    ],
    processSteps: [
      { step: '01 — Profile & Document Verification', description: 'We verify your documents against Passport Seva Kendra standards.' },
      { step: '02 — Portal Filing & Payment', description: 'We complete official Passport Seva filing and fee payment.' },
      { step: '03 — Appointment Scheduling', description: 'We book convenient PSK/POPSK appointment slots.' },
      { step: '04 — Police Verification & Delivery', description: 'We guide you on police verification protocols until passport delivery.' },
    ],
    faqs: [
      { question: 'What is the difference between Normal and Tatkaal Passport?', answer: 'Tatkaal passports are processed on priority with faster appointment availability and dispatch prior to police verification.' },
      { question: 'When should I renew my passport?', answer: 'You can apply for passport renewal up to 1 year before its expiry date.' },
    ],
    relatedSlugs: ['aadhaar-services', 'pan-card', 'birth-certificate'],
  },

  'marriage-certificate': {
    slug: 'marriage-certificate',
    title: 'Marriage Certificate Registration & Processing',
    metaTitle: 'Marriage Certificate Registration Assistance | Certification Work',
    metaDescription: 'Doorstep documentation assistance for legal marriage registration under Hindu Marriage Act & Special Marriage Act.',
    category: 'Legal Registration',
    shortDescription: 'Documentation and application support for legal marriage registration and marriage certificate issuance.',
    fullDescription: 'A Marriage Certificate is legal proof of marriage required for spouse visa applications, passport name changes, joint bank accounts, and insurance claims. We guide couples through Hindu Marriage Act or Special Marriage Act registration procedures.',
    requiredDocuments: [
      'Aadhaar & PAN of Husband & Wife',
      'Proof of Age for both (Birth Certificate / Passport / 10th Certificate)',
      'Proof of Marriage (Wedding Card, Marriage Hall receipt, Priest/Pandit/Qazi Certificate)',
      'Joint Marriage Photographs and Passport Photos of couple',
      'Witness Details (Aadhaar & photos of 2-3 witnesses)',
    ],
    processSteps: [
      { step: '01 — Act & Eligibility Check', description: 'We identify whether registration falls under Hindu Marriage Act or Special Marriage Act.' },
      { step: '02 — Application & Notice Drafting', description: 'We prepare the official registration forms, affidavits, and document sets.' },
      { step: '03 — Sub-Registrar Appointment', description: 'We assist in scheduling Sub-Registrar office verification.' },
      { step: '04 — Certificate Issuance', description: 'Official legal marriage certificate issued and delivered.' },
    ],
    faqs: [
      { question: 'Can marriage be registered after several years of marriage?', answer: 'Yes, marriage can be legally registered anytime after marriage with valid wedding proofs and witness affidavits.' },
    ],
    relatedSlugs: ['birth-certificate', 'residence-certificate', 'passport-services'],
  },

  'driving-licence': {
    slug: 'driving-licence',
    title: 'Driving Licence Renewal & Services Assistance',
    metaTitle: 'Driving Licence Renewal & Application Assistance | Certification Work',
    metaDescription: 'Assistance for Learner Licence, Permanent Driving Licence renewal, address change, and duplicate DL processing in India.',
    category: 'Transport & Licensing',
    shortDescription: 'Guidance for Learner License, Driving License renewal, duplicate DL, and address updates via Sarathi Parivahan.',
    fullDescription: 'Driving Licence services under the Ministry of Road Transport & Highways (Parivahan) involve online slot booking, Form 1A medical certificates, and document verification. Certification Work assists drivers with hassle-free DL renewal, address updates, and duplicate licence requests.',
    requiredDocuments: [
      'Existing Driving Licence copy (for Renewal / Duplicate)',
      'Aadhaar Card (Address & Identity proof)',
      'Form 1A Medical Certificate (for applicants above 40 years or commercial DL)',
      'FIR copy / LDR (for lost driving licence)',
      'Passport size photographs',
    ],
    processSteps: [
      { step: '01 — Service Selection', description: 'We review your request on Parivahan Sarathi portal standards.' },
      { step: '02 — Form & Fee Payment', description: 'We file the online application and complete RTO fee payment.' },
      { step: '03 — Slot / Verification', description: 'We book RTO appointment or assist with contact-less Aadhaar e-KYC.' },
      { step: '04 — Smart Card Delivery', description: 'Smart card driving licence delivered by speed post to your home.' },
    ],
    faqs: [
      { question: 'How long is a private Driving Licence valid?', answer: 'A private DL is valid for 20 years from date of issue or until the holder reaches 40 years of age, whichever is earlier.' },
    ],
    relatedSlugs: ['aadhaar-services', 'pan-card', 'passport-services'],
  },

  'property-search': {
    slug: 'property-search',
    title: 'Property Search & Document Verification Services',
    metaTitle: 'Property Search & Title Document Verification | Certification Work',
    metaDescription: 'Professional property document search, encumbrance certificate (EC) assistance, and title verification support in India.',
    category: 'Real Estate Legal',
    shortDescription: 'Assistance with property encumbrance certificates (EC), title search reports, and land record verification.',
    fullDescription: 'Buying or financing real estate requires thorough title verification and search reports to avoid legal disputes. Certification Work provides assistance in obtaining Encumbrance Certificates (EC), certified copies of registered deeds, and khata/mutation search guidance.',
    requiredDocuments: [
      'Property Details (Survey Number, Plot Number, Khata Number)',
      'Boundaries and Village / Sub-Registrar Jurisdiction',
      'Copy of previous Sale Deed / Title Deed (if available)',
      'Applicant ID proof',
    ],
    processSteps: [
      { step: '01 — Jurisdiction Identification', description: 'We identify the correct Sub-Registrar Office (SRO) and revenue village.' },
      { step: '02 — Search Filing', description: 'We file for 15-30 years Encumbrance Certificate (EC) search.' },
      { step: '03 — Record Verification', description: 'We obtain certified entries of registered transactions and mortgages.' },
      { step: '04 — Search Report Delivery', description: 'Complete search documents delivered to your hands.' },
    ],
    faqs: [
      { question: 'What is an Encumbrance Certificate (EC)?', answer: 'An EC certifies that a property is free from legal liabilities, mortgages, or undisclosed sales over a specific time period.' },
    ],
    relatedSlugs: ['gst-services', 'income-certificate', 'residence-certificate'],
  },

  'gst-services': {
    slug: 'gst-services',
    title: 'GST Registration & Filing Assistance',
    metaTitle: 'GST Registration & Compliance Assistance | Certification Work',
    metaDescription: 'End-to-end guidance for new GST registration, GST profile updates, and business tax compliance in India.',
    category: 'Business Compliance',
    shortDescription: 'Assistance for new GST registration, business address updates, amendment filing, and compliance support.',
    fullDescription: 'GST registration is mandatory for businesses exceeding turnover thresholds or engaging in inter-state e-commerce. Certification Work supports entrepreneurs, small businesses, and freelancers with fast GSTIN registration, document formatting, and ARN tracking.',
    requiredDocuments: [
      'Proprietor / Partners / Directors PAN Card & Aadhaar Card',
      'Business Principal Place Address Proof (Electricity bill, NOC, Rent Agreement)',
      'Bank Account Passbook / Cancelled Cheque',
      'Passport size photographs of proprietor/partners',
      'Board Resolution / Authorization Letter',
    ],
    processSteps: [
      { step: '01 — Business Profile Review', description: 'We inspect your business constitution and address proofs.' },
      { step: '02 — TRN & REG-01 Filing', description: 'We submit Part A & Part B of GST REG-01 on GST portal.' },
      { step: '03 — Aadhaar Authentication', description: 'We guide you through instant online Aadhaar biometric link.' },
      { step: '04 — GSTIN Certificate Delivery', description: 'GST Registration Certificate (Form REG-06) issued and delivered.' },
    ],
    faqs: [
      { question: 'How many days does GST registration take?', answer: 'With online Aadhaar authentication, GST registration is typically approved within 3 to 7 working days.' },
    ],
    relatedSlugs: ['pan-card', 'property-search', 'income-certificate'],
  },
};
