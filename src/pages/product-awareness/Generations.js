import React from 'react';
import StackLegend from './StackLegend';
import { generations, smeNote } from './data';

/** 1.0 sketch: POS tags and dependency arcs over one sentence. */
class ParseSketch extends React.Component {
  render() {
    const tokens = [
      { t: 'The', pos: 'DET', x: 26 },
      { t: 'router', pos: 'NOUN', x: 84 },
      { t: 'drops', pos: 'VERB', x: 158 },
      { t: 'the', pos: 'DET', x: 216 },
      { t: 'signal', pos: 'NOUN', x: 272 },
    ];
    const arcs = [
      { d: 'M 80 72 C 80 46, 30 46, 30 72', label: 'det', lx: 55, ly: 42 },
      { d: 'M 154 72 C 154 28, 88 28, 88 72', label: 'nsubj', lx: 121, ly: 24 },
      { d: 'M 162 72 C 162 16, 276 16, 276 72', label: 'obj', lx: 217, ly: 14 },
      { d: 'M 266 72 C 266 50, 218 50, 218 72', label: 'det', lx: 242, ly: 46 },
    ];
    return (
      <svg className="ps" viewBox="0 0 320 128" role="img" aria-label="POS tagging and dependency parsing sketch">
        <defs>
          <marker id="ps-arr" viewBox="0 0 8 8" refX="6.5" refY="4" markerWidth="5.5" markerHeight="5.5" orient="auto">
            <path d="M 0 0 L 8 4 L 0 8 z" fill="#6d8aa5" />
          </marker>
        </defs>
        {arcs.map((a) => (
          <g key={a.label + a.lx}>
            <path className="ps__arc" d={a.d} markerEnd="url(#ps-arr)" />
            <text className="ps__lbl" x={a.lx} y={a.ly}>{a.label}</text>
          </g>
        ))}
        {tokens.map((tk) => (
          <g key={tk.x}>
            <text className="ps__token" x={tk.x} y={88}>{tk.t}</text>
            <text className="ps__pos" x={tk.x} y={105}>{tk.pos}</text>
          </g>
        ))}
      </svg>
    );
  }
}

/** 2.0 sketch: NER spans over the same sentence plus the fine-tuned model note. */
class NerSketch extends React.Component {
  render() {
    return (
      <div className="ner">
        <p className="ner__line">
          The{' '}
          <span className="ner__ent ner__ent--prod">
            wi-fi router<i>PRODUCT</i>
          </span>{' '}
          keeps{' '}
          <span className="ner__ent ner__ent--issue">
            dropping the signal<i>ISSUE</i>
          </span>{' '}
          at night.
        </p>
        <div className="ner__model">
          <span className="ner__bars" aria-hidden="true"><i /><i /><i /></span>
          <span className="ner__modeltext">BERT · fine-tuned on SME-labeled transcripts · PyTorch</span>
        </div>
      </div>
    );
  }
}

/** 3.0 sketch: agentic GraphRAG loop from question to grounded answer. */
class RagSketch extends React.Component {
  render() {
    return (
      <svg className="rag" viewBox="0 0 320 152" role="img" aria-label="Agentic GraphRAG loop sketch">
        <defs>
          <marker id="rag-arr" viewBox="0 0 8 8" refX="6.5" refY="4" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 8 4 L 0 8 z" fill="#6d8aa5" />
          </marker>
        </defs>
        <text className="rag__q" x="160" y="20">“Which service do business clients escalate most?”</text>

        <rect className="rag__box" x="10" y="56" width="84" height="32" rx="8" />
        <text className="rag__t" x="52" y="76">Question</text>

        <rect className="rag__box rag__box--agent" x="126" y="52" width="84" height="40" rx="8" />
        <text className="rag__t" x="168" y="69">Agent</text>
        <text className="rag__s" x="168" y="83">LangGraph</text>

        <circle className="rag__db" cx="281" cy="72" r="27" />
        <text className="rag__t rag__t--light" x="281" y="70">Neo4j</text>
        <text className="rag__s rag__s--light" x="281" y="83">graph</text>

        <line className="rag__line" x1="94" y1="72" x2="120" y2="72" markerEnd="url(#rag-arr)" />
        <path className="rag__line" d="M 210 62 C 228 50, 238 50, 250 60" markerEnd="url(#rag-arr)" />
        <text className="rag__lbl" x="231" y="45">Cypher</text>
        <path className="rag__line" d="M 252 86 C 240 96, 228 96, 214 84" markerEnd="url(#rag-arr)" />
        <text className="rag__lbl" x="233" y="108">subgraph</text>
        <line className="rag__line" x1="168" y1="92" x2="168" y2="110" markerEnd="url(#rag-arr)" />

        <rect className="rag__box rag__box--ans" x="112" y="116" width="112" height="28" rx="8" />
        <text className="rag__t" x="168" y="134">Grounded answer</text>
      </svg>
    );
  }
}

/** The three generations of the extraction engine, each with its stack legend. */
class Generations extends React.Component {
  renderSketch(kind) {
    if (kind === 'parse') return <ParseSketch />;
    if (kind === 'ner') return <NerSketch />;
    return <RagSketch />;
  }

  render() {
    return (
      <div className="gens">
        <div className="gens__grid">
          {generations.map((g) => (
            <article key={g.v} className="pa__panel gen">
              <header className="gen__head">
                <span className="gen__v">{g.v}</span>
                <h3 className="gen__name">{g.name}</h3>
              </header>
              <div className="gen__sketch">{this.renderSketch(g.sketch)}</div>
              <p className="gen__line">{g.line}</p>
              <StackLegend items={g.stack.map((s) => ({ label: s }))} />
            </article>
          ))}
        </div>
        <p className="gens__sme">{smeNote}</p>
      </div>
    );
  }
}

export default Generations;
