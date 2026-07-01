import profileImg from '../assets/profile.jpg';
import cv from '../files/borovits_cv.pdf';

export const profile = {
  name: 'Nemania Borovits',
  title: 'Researcher · Data Scientist · Data/ML/DL/AI Engineer',
  photo: profileImg,
  cv,

  // Short line at the top of the About text column.
  tagline: 'I Build Data-Intensive, AI-Driven Software Systems.',

  // Two facts shown in the sidebar, under the work titles.
  facts: {
    experience: '10 yrs industry · 5 yrs academia',
    based: 'Rotterdam, NL',
  },

  // Bio paragraphs — plain text, no emphasis.
  bio: [
    'I am a researcher, data scientist and ML/DL/AI engineer with a background in data and software engineering — a decade in industry and five years in academia. I recently completed my PhD (Data Engineering and AI for Privacy) at Eindhoven University of Technology / JADS, co-financed by KPN.',
    'Right now I am a Postdoctoral Researcher and System Architect on COMFORTage, a Horizon Europe healthcare-AI programme with 38 partners: I design its reference model and architecture, define system requirements, and take AI models into production for dementia and frailty care.',
    'My work spans full-stack software engineering, data and ML/DL/AI systems, and privacy-preserving, GDPR-compliant software.',
  ],

  // Social / profile links (shown as icons in the sidebar).
  links: [
    { label: 'Email', kind: 'email', href: 'mailto:nborovits@gmail.com' },
    { label: 'LinkedIn', kind: 'linkedin', href: 'https://www.linkedin.com/in/nemania-borovits/' },
    { label: 'Google Scholar', kind: 'scholar', href: 'https://scholar.google.com/citations?user=VZOsMdAAAAAJ' },
    { label: 'ORCID', kind: 'orcid', href: 'https://orcid.org/0000-0002-5661-4795' },
    { label: 'GitHub', kind: 'github', href: 'https://github.com/nboro' },
  ],
};

export default profile;
