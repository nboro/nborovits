// Demo content for the Product Awareness page.
// Every sentence, count and percentage below is generic and illustrative: it
// mirrors the shape of real call center data, never its content.

export const ROLE_LABEL = { subj: 'SUBJ', pred: 'PRED', obj: 'OBJ' };

// Opinion polarity colors shared by the visuals.
export const MOOD = {
  pos: '#2bd4b4',
  neu: '#7f9ec2',
  neg: '#ff8b74',
};

// Rotating examples for the call-to-graph animation. Each sentence carries
// subject, predicate and object spans; the triplet shows the canonicalized
// entities that land in the graph.
export const pipelineExamples = [
  {
    speaker: 'Consumer · B2C',
    sentence: [
      { text: 'The ' },
      { text: 'wi-fi router', role: 'subj' },
      { text: ' ' },
      { text: 'drops', role: 'pred' },
      { text: ' the ' },
      { text: 'connection', role: 'obj' },
      { text: ' every evening.' },
    ],
    triplet: { s: 'Wi-Fi Router', p: 'drops', o: 'Connection' },
    target: 'router',
    sentiment: 'neg',
  },
  {
    speaker: 'Consumer · B2C',
    sentence: [
      { text: 'My ' },
      { text: 'family', role: 'subj' },
      { text: ' really ' },
      { text: 'loves', role: 'pred' },
      { text: ' the new ' },
      { text: 'sports package', role: 'obj' },
      { text: '.' },
    ],
    triplet: { s: 'Consumer', p: 'loves', o: 'TV Package' },
    target: 'tv',
    sentiment: 'pos',
  },
  {
    speaker: 'Business client · B2B',
    sentence: [
      { text: 'Our ' },
      { text: 'warehouse', role: 'subj' },
      { text: ' ' },
      { text: 'needs', role: 'pred' },
      { text: ' a faster ' },
      { text: 'fiber line', role: 'obj' },
      { text: '.' },
    ],
    triplet: { s: 'Business Client', p: 'needs', o: 'Fiber Internet' },
    target: 'fiber',
    sentiment: 'neu',
  },
  {
    speaker: 'Consumer · B2C',
    sentence: [
      { text: 'I', role: 'subj' },
      { text: ' ' },
      { text: 'want to cancel', role: 'pred' },
      { text: ' the ' },
      { text: 'streaming add-on', role: 'obj' },
      { text: ' after the season.' },
    ],
    triplet: { s: 'Consumer', p: 'cancels', o: 'Streaming Bundle' },
    target: 'streaming',
    sentiment: 'neg',
  },
];

// Hand-laid layout for the opinion graph (viewBox 900 x 540).
// r encodes mention volume; actors are the two customer segments.
export const graphNodes = [
  { id: 'consumers', label: 'Consumers', sub: 'B2C', x: 150, y: 205, r: 34, kind: 'actor', info: 'customer segment · source of most mentions' },
  { id: 'business', label: 'Business', sub: 'B2B', x: 210, y: 432, r: 27, kind: 'actor', info: 'customer segment · contract accounts' },
  { id: 'fiber', label: 'Fiber Internet', x: 428, y: 190, r: 46, mentions: 480, info: '480 mentions · top predicate: complain about' },
  { id: 'mobile', label: 'Mobile 5G', x: 648, y: 112, r: 40, mentions: 350, info: '350 mentions · top predicate: upgrade to' },
  { id: 'tv', label: 'TV Package', x: 638, y: 330, r: 38, mentions: 310, info: '310 mentions · top predicate: praise' },
  { id: 'care', label: 'Customer Care', x: 448, y: 428, r: 36, mentions: 300, info: '300 mentions · top predicate: contact' },
  { id: 'router', label: 'Wi-Fi Router', x: 292, y: 72, r: 33, mentions: 260, info: '260 mentions · top predicate: return' },
  { id: 'streaming', label: 'Streaming', x: 792, y: 228, r: 30, mentions: 210, info: '210 mentions · top predicate: ask about' },
  { id: 'vpn', label: 'Business VPN', x: 668, y: 470, r: 24, mentions: 140, info: '140 mentions · top predicate: praise' },
  { id: 'smart', label: 'Smart Home', x: 818, y: 78, r: 20, mentions: 90, info: '90 mentions · top predicate: ask about' },
];

// Directed edges carry the extracted predicates; mood colors the opinion.
export const graphEdges = [
  { from: 'consumers', to: 'fiber', label: 'complain about', mood: 'neg', bend: -30 },
  { from: 'consumers', to: 'router', label: 'return', mood: 'neg', bend: 26 },
  { from: 'consumers', to: 'tv', label: 'praise', mood: 'pos', bend: 44 },
  { from: 'consumers', to: 'mobile', label: 'upgrade to', mood: 'pos', bend: -64 },
  { from: 'consumers', to: 'care', label: 'contact', mood: 'neu', bend: 22 },
  { from: 'business', to: 'fiber', label: 'need', mood: 'neu', bend: -24 },
  { from: 'business', to: 'vpn', label: 'praise', mood: 'pos', bend: 36 },
  { from: 'business', to: 'care', label: 'escalate to', mood: 'neg', bend: -16 },
  { from: 'router', to: 'fiber', label: 'part of', mood: 'neu', bend: 16 },
  { from: 'streaming', to: 'fiber', label: 'depends on', mood: 'neu', bend: -36 },
  { from: 'tv', to: 'streaming', label: 'bundled with', mood: 'neu', bend: 18 },
  { from: 'smart', to: 'mobile', label: 'connects via', mood: 'neu', bend: 16 },
];

// The three generations of the extraction engine.
export const generations = [
  {
    v: '1.0',
    name: 'Syntactic Extraction',
    sketch: 'parse',
    line: 'Grammar does the extraction: subjects, predicates and objects come straight off the dependency tree.',
    stack: ['Stanza', 'POS Tagging', 'Dependency Parsing', 'Rule-based SVO', 'Neo4j'],
  },
  {
    v: '2.0',
    name: 'Neural NER',
    sketch: 'ner',
    line: 'Subject matter experts labeled the transcripts; a BERT model fine-tuned on that data outperformed the spaCy, Hugging Face and Stanza baselines and other BERT variants.',
    stack: ['Fine-tuned BERT', 'PyTorch', 'HF Transformers', 'spaCy', 'Stanza NER', 'SME Labels'],
  },
  {
    v: '3.0',
    name: 'Agentic GraphRAG',
    sketch: 'rag',
    line: 'An agent turns a question into Cypher, retrieves the relevant subgraph and answers with grounded evidence.',
    stack: ['LangGraph', 'GraphRAG', 'LLM Agent', 'Cypher Retrieval', 'Neo4j'],
  },
];

export const smeNote =
  'Subject matter experts labeled the 2.0 training data and evaluated every generation, 1.0 through 3.0.';
