export interface ServiceItem {
  id: string;
  title: string;
  category: 'Identity' | 'Income & Tax' | 'Residence & Caste' | 'Vehicle & Driving' | 'Business & Legal';
  description: string;
  estimatedDays: number;
  feeAmount: number;
  requiredDocs: string[];
  popular?: boolean;
  icon: string;
  badge?: string;
}

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: 'birth-certificate',
    title: 'Birth Certificate',
    category: 'Identity',
    description: 'Assistance with municipal birth registration and certificate issuance.',
    estimatedDays: 7,
    feeAmount: 200,
    requiredDocs: ['Hospital Birth Slip', 'Parents Identity Proof', 'Address Proof'],
    popular: true,
    icon: 'Baby'
  },
  {
    id: 'caste-certificate',
    title: 'Caste Certificate',
    category: 'Residence & Caste',
    description: 'Verification and official issuance of SC/ST/OBC caste certificate.',
    estimatedDays: 12,
    feeAmount: 300,
    requiredDocs: ['Father/Relative Caste Proof', 'Voter Card', 'School Record'],
    popular: true,
    icon: 'ShieldCheck'
  },
  {
    id: 'income-certificate',
    title: 'Income Certificate',
    category: 'Income & Tax',
    description: 'Tehsildar issued annual income certificate for scholarship and subsidies.',
    estimatedDays: 10,
    feeAmount: 250,
    requiredDocs: ['Salary Slip / ITR', 'Ration Card', 'Self Declaration'],
    popular: true,
    icon: 'TrendingUp'
  },
  {
    id: 'ews-certificate',
    title: 'EWS Certificate',
    category: 'Income & Tax',
    description: 'Economically Weaker Section certificate for education and employment reservation.',
    estimatedDays: 10,
    feeAmount: 350,
    requiredDocs: ['Income Proof', 'Property Records', 'Aadhaar Card'],
    popular: true,
    icon: 'Award'
  },
  {
    id: 'domicile-certificate',
    title: 'Residence / Domicile Certificate',
    category: 'Residence & Caste',
    description: 'Official proof of permanent state residence for admissions and jobs.',
    estimatedDays: 10,
    feeAmount: 300,
    requiredDocs: ['10-yr Residence Proof', 'School Leaving Cert', 'Aadhaar Card'],
    popular: true,
    icon: 'Home'
  },
  {
    id: 'aadhaar-services',
    title: 'Aadhaar Services',
    category: 'Identity',
    description: 'Assistance with new Aadhaar enrolment, address, and mobile updates.',
    estimatedDays: 5,
    feeAmount: 150,
    requiredDocs: ['Identity Proof', 'Address Proof'],
    popular: true,
    icon: 'Fingerprint'
  },
  {
    id: 'pan-services',
    title: 'PAN Card Services',
    category: 'Income & Tax',
    description: 'Fresh PAN card application, name correction, and duplicate reprint.',
    estimatedDays: 5,
    feeAmount: 200,
    requiredDocs: ['Identity Proof', 'Address Proof', 'Photo'],
    popular: true,
    icon: 'CreditCard'
  },
  {
    id: 'passport-services',
    title: 'Passport Services',
    category: 'Identity',
    description: 'End-to-end help with Tatkal and Normal fresh passport applications.',
    estimatedDays: 14,
    feeAmount: 1500,
    requiredDocs: ['Aadhaar Card', 'PAN Card', 'Bank Passbook'],
    popular: true,
    icon: 'Globe'
  },
  {
    id: 'marriage-certificate',
    title: 'Marriage Certificate',
    category: 'Business & Legal',
    description: 'Official marriage registration and government certificate issuance.',
    estimatedDays: 15,
    feeAmount: 600,
    requiredDocs: ['Marriage Card', 'Couple Photo', 'Age & Identity Proof'],
    icon: 'Heart'
  },
  {
    id: 'driving-licence',
    title: 'Driving Licence Services',
    category: 'Vehicle & Driving',
    description: 'Renew expired Driving Licence or apply for International Driving Permit.',
    estimatedDays: 7,
    feeAmount: 450,
    requiredDocs: ['Existing DL', 'Medical Form 1A', 'Aadhaar Card'],
    icon: 'Car'
  },
  {
    id: 'encumbrance-certificate',
    title: 'Encumbrance Certificate (EC)',
    category: 'Business & Legal',
    description: 'Official property search and encumbrance proof from sub-registrar.',
    estimatedDays: 7,
    feeAmount: 500,
    requiredDocs: ['Property Deed Copy', 'Survey Number Details'],
    icon: 'Key'
  },
  {
    id: 'gst-services',
    title: 'GST Registration & Services',
    category: 'Business & Legal',
    description: 'GSTIN registration for businesses, proprietors, and firms.',
    estimatedDays: 5,
    feeAmount: 999,
    requiredDocs: ['PAN Card', 'Business Premises NOC/Bill', 'Bank Details'],
    icon: 'Briefcase'
  }
];

export interface StoredDocument {
  id: string;
  title: string;
  category: 'Identity' | 'Income & Tax' | 'Residence' | 'Vehicle' | 'Education';
  documentNumber: string;
  fileSize: string;
  fileType: 'pdf' | 'jpg' | 'png';
  issueDate: string;
  expiryDate: string;
  status: 'Active' | 'Expiring Soon' | 'Expired';
  isVerified: boolean;
  metadata: {
    issuingAuthority: string;
    holderName: string;
    state: string;
  };
}

export const INITIAL_DOCUMENTS: StoredDocument[] = [
  {
    id: 'doc-101',
    title: 'Aadhaar Card (UIDAI)',
    category: 'Identity',
    documentNumber: 'XXXX-XXXX-9842',
    fileSize: '1.2 MB',
    fileType: 'pdf',
    issueDate: '2021-04-12',
    expiryDate: 'Lifetime',
    status: 'Active',
    isVerified: true,
    metadata: {
      issuingAuthority: 'Unique Identification Authority of India',
      holderName: 'Rahul Sharma',
      state: 'Maharashtra'
    }
  }
];

export interface ApplicationTrackItem {
  id: string;
  applicationNumber: string;
  serviceTitle: string;
  category: string;
  applicantName: string;
  status: 'Submitted' | 'Verification' | 'Processing' | 'Completed' | 'Rejected';
  currentStep: number;
  feePaid: number;
  submittedAt: string;
  estimatedCompletion: string;
  stepsHistory: {
    title: string;
    description: string;
    completed: boolean;
    timestamp?: string;
  }[];
}

export const INITIAL_APPLICATIONS: ApplicationTrackItem[] = [];
