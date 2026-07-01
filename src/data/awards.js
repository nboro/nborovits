// "Skills & Service" content, split into two career tracks:
//   1) Software Development  — classic full-stack engineering (early career)
//   2) Data & AI Pipeline    — the data-to-model-to-production stack (now)
// Both carried to production level at every step.
export const skills = {
  note: 'I work across both software engineering and the data-and-AI stack.',
  tracks: [
    {
      key: 'software',
      label: 'Software Development',
      caption: 'Designing, building, and shipping full-stack applications, APIs, and services.',
      groups: [
        { label: 'Languages', items: ['C#', 'Python', 'SQL', 'JavaScript'] },
        { label: 'Back-end & APIs', items: ['ASP.NET MVC', 'ASP.NET (C#)', 'REST / SOAP', 'fastAPI', 'Flask'] },
        { label: 'Data modeling & ORM', items: ['MS SQL Server', 'MongoDB', 'Entity Framework', 'nHibernate'] },
        { label: 'Front-end', items: ['React', 'Vue', 'Knockout', 'HTML5 / CSS', 'jQuery · AJAX · JSON', 'Bootstrap'] },
        { label: 'Source control', items: ['Git / GitHub', 'BitBucket'] },
      ],
    },
    {
      key: 'data',
      label: 'Data & AI Pipeline',
      caption: 'Building data pipelines and training, evaluating, and deploying ML, DL, and AI models.',
      groups: [
        { label: 'Data engineering', items: ['Apache Spark', 'Apache Kafka', 'Elastic Stack', 'SQL Server', 'MongoDB'] },
        { label: 'ML & Deep Learning', items: ['scikit-learn', 'PyTorch', 'TensorFlow', 'Keras', 'NumPy · Pandas', 'Snorkel'] },
        { label: 'NLP', items: ['HF Transformers', 'spaCy', 'NLTK', 'gensim', 't-SNE'] },
        { label: 'LLMs', items: ['RAG', 'LangGraph', 'MCP', 'Qdrant'] },
        { label: 'MLOps · Cloud · Containers', items: ['Docker', 'Kubernetes', 'Amazon ECS', 'Azure AKS / Databricks', 'Google Cloud', 'Dataiku'] },
        { label: 'Visualization', items: ['Plotly Dash', 'Power BI', 'Tableau', 'Kibana', 'Matplotlib · Seaborn'] },
        { label: 'Privacy frameworks', items: ['Flower', 'Opacus', 'SEAL'] },
      ],
    },
  ],
  service: [
    'JADS PhD Board member (since 2022)',
    'Reviewer for privacy and software engineering venues',
    'CIPP/E certification (in progress)',
  ],
  languages: [
    { name: 'Greek', level: 'Native' },
    { name: 'Serbian', level: 'Native' },
    { name: 'English', level: 'Proficient (IELTS, CPE)' },
    { name: 'Dutch', level: 'Working knowledge' },
  ],
};

export default skills;
