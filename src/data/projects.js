// Selected projects — applied, production-oriented work across AI, data and privacy.
// A project may define a url; the card renders it as a "View" link in a new tab.
export const projects = [
  {
    name: 'COMFORTage',
    tag: 'Healthcare AI · Horizon Europe',
    body:
      'System architect for an AI-driven platform supporting dementia and frailty care across 38 partners. Reference model, architecture, and AI models deployed into clinical workflows.',
    url: 'https://doi.org/10.5281/zenodo.21498556',
  },
  {
    name: 'Synthetic Data Platform',
    tag: 'GDPR · Cloud · KPN',
    body:
      'Secure, GDPR-compliant cloud platform for generating and evaluating synthetic data, published in ACM TOSEM.',
    url: 'https://dl.acm.org/doi/full/10.1145/3732937',
  },
  {
    name: 'Anonymization-as-a-Service',
    tag: 'NLP · Production · KPN',
    body:
      'Rule-, deep-learning- and LLM-based anonymization of Dutch call-center transcripts, running as a service within KPN’s data pipelines.',
    url: 'https://doi.org/10.1007/978-3-031-48424-7_19',
  },
  {
    name: 'ML for Infrastructure-as-Code',
    tag: 'Deep learning · Software engineering',
    body:
      'FindICI / DeepIaC: machine and deep learning to detect linguistic inconsistencies and anti-patterns between code and its natural-language descriptions in IaC.',
    url: 'https://doi.org/10.1007/s10664-022-10215-5',
  },
  {
    name: 'Product Awareness: From Triplets to Knowledge Graphs',
    tag: 'NLP · Knowledge Graphs · Telco',
    body:
      'End-to-end internal product turning B2B and B2C call center transcripts into a living Neo4j knowledge graph of customer opinion. Extraction evolved from Stanza parsing through fine-tuned BERT NER to agentic GraphRAG with LangGraph.',
    url: '/product-awareness',
  },
];

export default projects;
