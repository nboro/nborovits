// Publications, sourced from dblp, the TU/e research portal and Google Scholar.
// To add a paper, copy an entry and edit the fields. `group` sets the heading;
// entries render newest-first within each group.

export const publicationGroups = [
  'Journal Articles',
  'Conferences & Workshops',
  'Preprints',
  'PhD Thesis',
];

export const publications = [
  // ---- PhD Thesis ----
  {
    group: 'PhD Thesis',
    year: 2026,
    title:
      'Engineering Privacy in Practice: Privacy Engineering Solutions for GDPR-Compliant Contemporary Software Systems',
    authors: 'N. Borovits',
    venue: 'PhD Dissertation · Eindhoven University of Technology (240 pp.)',
    doi: '10.6100/ws6h-tq59',
  },

  // ---- Journal Articles ----
  {
    group: 'Journal Articles',
    year: 2026,
    title:
      'Addressing Data Scarcity with Synthetic Data: A Secure and GDPR-Compliant Cloud-Based Platform',
    authors:
      'N. Borovits, G. Bardelloni, H. Hashemi, M. Tulsiani, D. A. Tamburri, W.-J. van den Heuvel',
    venue: 'ACM Transactions on Software Engineering and Methodology (TOSEM) 35(3)',
    doi: '10.1145/3732937',
  },
  {
    group: 'Journal Articles',
    year: 2025,
    title:
      'Establishing a Digitally Enabled Healthcare Framework for Enhanced Prevention, Risk Identification, and Relief for Dementia and Frailty',
    authors: 'G. Manias, N. Borovits, M. Sangiovanni, D. Kyriazis, W.-J. van den Heuvel, et al.',
    venue: "Journal of Dementia and Alzheimer's Disease 2(3)",
    doi: '10.3390/jdad2030030',
  },
  {
    group: 'Journal Articles',
    year: 2022,
    title:
      'FindICI: Using machine learning to detect linguistic inconsistencies between code and natural language descriptions in infrastructure-as-code',
    authors:
      'N. Borovits, I. Kumara, D. Di Nucci, P. Krishnan, S. Dalla Palma, F. Palomba, D. A. Tamburri, W.-J. van den Heuvel',
    venue: 'Empirical Software Engineering (EMSE) 27(7):178',
    doi: '10.1007/s10664-022-10215-5',
  },

  // ---- Conferences & Workshops ----
  {
    group: 'Conferences & Workshops',
    year: 2025,
    title: 'Early Detection and Prevention of Dementia: An AI-Driven Multimodal Approach',
    authors:
      'A. Huang, G. Manias, R. Cordeiro Ferreira, M. Sangiovanni, N. Borovits, D. A. Tamburri, E. Ntanasi, N. Scarmeas, W.-J. van den Heuvel',
    venue: 'AIAI Workshops',
    doi: '10.1007/978-3-031-97313-0_16',
  },
  {
    group: 'Conferences & Workshops',
    year: 2025,
    title:
      'Aligning Clinical Workflows and AI Integration: Digital Healthcare Reference Model in Dementia and Frailty Care',
    authors: 'M. Sangiovanni, N. Borovits, G. Manias, W.-J. van den Heuvel',
    venue: 'BMSD',
    doi: '10.1007/978-3-031-98033-6_20',
  },
  {
    group: 'Conferences & Workshops',
    year: 2025,
    title: 'On the Maturity of LLMOps Services Computing: An Industrial Study',
    authors: 'N. Borovits, D. A. Tamburri, W.-J. van den Heuvel',
    venue: 'CAiSE Workshops',
    doi: '10.1007/978-3-031-94931-9_25',
  },
  {
    group: 'Conferences & Workshops',
    year: 2024,
    title: 'Enhancing Federated Learning with SOA: An Approach to Tackle Non-IID Data Challenges',
    authors: 'L. Papadopoulos, N. Borovits, G. Manias, D. A. Tamburri, W.-J. van den Heuvel',
    venue: 'ICSOC Workshops',
    doi: '10.1007/978-981-96-7238-7_14',
  },
  {
    group: 'Conferences & Workshops',
    year: 2023,
    title: 'Anonymization-as-a-Service: The Service Center Transcripts Industrial Case',
    authors: 'N. Borovits, G. Bardelloni, D. A. Tamburri, W.-J. van den Heuvel',
    venue: 'ICSOC',
    doi: '10.1007/978-3-031-48424-7_19',
  },
  {
    group: 'Conferences & Workshops',
    year: 2023,
    title:
      'Privacy Engineering in the Data Mesh: Towards a Decentralized Data Privacy Governance Framework',
    authors: 'N. Borovits, I. Kumara, D. A. Tamburri, W.-J. van den Heuvel',
    venue: 'ICSOC Workshops',
    doi: '10.1007/978-981-97-0989-2_21',
  },
  {
    group: 'Conferences & Workshops',
    year: 2020,
    title: 'DeepIaC: deep learning-based linguistic anti-pattern detection in IaC',
    authors:
      'N. Borovits, I. Kumara, P. Krishnan, S. Dalla Palma, D. Di Nucci, F. Palomba, D. A. Tamburri, W.-J. van den Heuvel',
    venue: 'MaLTeSQuE @ ESEC/FSE',
    doi: '10.1145/3416505.3423564',
  },

  // ---- Preprints ----
  {
    group: 'Preprints',
    year: 2026,
    title: 'Privacy Engineering: A Systematic Literature Review',
    authors: 'N. Borovits, D. A. Tamburri, W.-J. van den Heuvel',
    venue: 'arXiv:2606.23696 · 90 studies synthesized (2018–2025)',
    url: 'https://arxiv.org/abs/2606.23696',
  },
  {
    group: 'Preprints',
    year: 2025,
    title:
      'Engineering Data Minimization and Purpose Limitation: Metrics and Methodology for Compliance Verification in Software Systems',
    authors: 'N. Borovits, G. Manias, D. A. Tamburri, W.-J. van den Heuvel',
    venue: 'SSRN preprint',
    doi: '10.2139/ssrn.5227833',
    url: 'https://ssrn.com/abstract=5227833',
  },
];

export default publications;
