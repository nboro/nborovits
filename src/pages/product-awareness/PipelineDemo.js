import React from 'react';
import StackLegend from './StackLegend';
import { pipelineExamples, ROLE_LABEL, MOOD } from './data';

const CYCLE_MS = 7200;

/** Mini graph at the end of the pipeline: the target node absorbs the new triplet. */
class MiniGraph extends React.Component {
  render() {
    const { target, sentiment } = this.props;
    const nodes = [
      { id: 'fiber', label: 'Fiber', x: 112, y: 74, r: 17 },
      { id: 'router', label: 'Router', x: 42, y: 36, r: 11 },
      { id: 'tv', label: 'TV', x: 178, y: 38, r: 11 },
      { id: 'streaming', label: 'Stream', x: 184, y: 112, r: 10 },
      { id: 'mobile', label: '5G', x: 42, y: 114, r: 10 },
    ];
    const hub = nodes[0];
    return (
      <svg className="mg" viewBox="0 0 224 152" role="img" aria-label="Mini knowledge graph absorbing the new triplet">
        {nodes.slice(1).map((n) => (
          <line
            key={n.id}
            className={`mg__edge${n.id === target ? ` mg__edge--${sentiment}` : ''}`}
            x1={hub.x}
            y1={hub.y}
            x2={n.x}
            y2={n.y}
          />
        ))}
        {nodes.map((n) => (
          <g key={n.id} className={`mg__node${n.id === target ? ' mg__node--hot' : ''}`}>
            {n.id === target ? <circle className="mg__ring" cx={n.x} cy={n.y} r={n.r + 3} /> : null}
            <circle className="mg__dot" cx={n.x} cy={n.y} r={n.r} />
            <text className="mg__label" x={n.x} y={n.y + n.r + 11}>{n.label}</text>
            {n.id === target ? <text className="mg__plus" x={n.x} y={n.y - n.r - 7}>+1</text> : null}
          </g>
        ))}
      </svg>
    );
  }
}

/**
 * Animated pipeline: one call center sentence gets parsed into a
 * subject-predicate-object triplet, the triplet is canonicalized, and the
 * graph aggregates it. Remounting on each cycle restarts the CSS animations.
 */
class PipelineDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { idx: 0 };
  }

  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.setState((s) => ({ idx: (s.idx + 1) % pipelineExamples.length }));
    }, CYCLE_MS);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  render() {
    const { idx } = this.state;
    const ex = pipelineExamples[idx];
    return (
      <div className="pa__panel pipe">
        <div key={idx} className="pipe__stage">
          <div className="pipe__col">
            <p className="pipe__speaker">{ex.speaker}</p>
            <p className="pipe__sentence">
              {ex.sentence.map((t, i) =>
                t.role ? (
                  <mark key={i} className={`pipe__span pipe__span--${t.role}`}>
                    {t.text}
                    <span className="pipe__roletag">{ROLE_LABEL[t.role]}</span>
                  </mark>
                ) : (
                  <React.Fragment key={i}>{t.text}</React.Fragment>
                )
              )}
            </p>
            <p className="pipe__under">unstructured text</p>
          </div>

          <div className="pipe__arrow" aria-hidden="true">→</div>

          <div className="pipe__col pipe__col--mid">
            <div className="pipe__triplet">
              <span className="pipe__pill pipe__pill--s">{ex.triplet.s}</span>
              <span className={`pipe__edge pipe__edge--${ex.sentiment}`}>
                <em>{ex.triplet.p}</em>
                <i />
              </span>
              <span className="pipe__pill pipe__pill--o">{ex.triplet.o}</span>
            </div>
            <p className="pipe__under">triplet · canonicalized</p>
          </div>

          <div className="pipe__arrow pipe__arrow--late" aria-hidden="true">→</div>

          <div className="pipe__col pipe__col--end">
            <MiniGraph target={ex.target} sentiment={ex.sentiment} />
            <p className="pipe__under">graph · aggregated opinion</p>
          </div>
        </div>

        <div className="pipe__legends">
          <StackLegend
            title="Key"
            items={[
              { swatch: 'var(--pa-subj)', label: 'Subject' },
              { swatch: 'var(--pa-pred)', label: 'Predicate' },
              { swatch: 'var(--pa-obj)', label: 'Object' },
              { swatch: MOOD.pos, label: 'Positive' },
              { swatch: MOOD.neu, label: 'Neutral' },
              { swatch: MOOD.neg, label: 'Negative' },
            ]}
          />
          <StackLegend
            items={[
              { label: 'Python' },
              { label: 'Stanza → fine-tuned BERT' },
              { label: 'Neo4j' },
              { label: 'Cypher' },
            ]}
          />
        </div>
      </div>
    );
  }
}

export default PipelineDemo;
