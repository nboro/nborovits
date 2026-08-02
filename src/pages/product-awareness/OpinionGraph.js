import React from 'react';
import StackLegend from './StackLegend';
import { graphNodes, graphEdges, MOOD } from './data';

const NODE_BY_ID = {};
graphNodes.forEach((n) => {
  NODE_BY_ID[n.id] = n;
});

// Quadratic edge from node rim to node rim, bent sideways so parallel edges
// and labels stay readable. Returns the path and the label anchor point.
function edgeGeometry(edge) {
  const a = NODE_BY_ID[edge.from];
  const b = NODE_BY_ID[edge.to];
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const px = -uy;
  const py = ux;
  const sx = a.x + ux * (a.r + 3);
  const sy = a.y + uy * (a.r + 3);
  const tx = b.x - ux * (b.r + 10);
  const ty = b.y - uy * (b.r + 10);
  const mx = (sx + tx) / 2 + px * edge.bend;
  const my = (sy + ty) / 2 + py * edge.bend;
  return {
    d: `M ${sx} ${sy} Q ${mx} ${my} ${tx} ${ty}`,
    lx: (sx + tx) / 4 + mx / 2,
    ly: (sy + ty) / 4 + my / 2,
  };
}

/**
 * The living graph: node size follows mention volume, directed edges carry the
 * extracted predicates and their color encodes opinion polarity. Hover or tap
 * focuses a node and its neighborhood; the info line reports the details.
 */
class OpinionGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hoverNode: null, hoverEdge: null };
    this.clearHover = this.clearHover.bind(this);
  }

  setNode(id) {
    this.setState({ hoverNode: id, hoverEdge: null });
  }

  toggleNode(id) {
    this.setState((s) => ({ hoverNode: s.hoverNode === id ? null : id, hoverEdge: null }));
  }

  setEdge(i) {
    this.setState({ hoverEdge: i, hoverNode: null });
  }

  clearHover() {
    this.setState({ hoverNode: null, hoverEdge: null });
  }

  isAdjacent(id) {
    const { hoverNode } = this.state;
    if (!hoverNode) return false;
    return graphEdges.some(
      (e) => (e.from === hoverNode && e.to === id) || (e.to === hoverNode && e.from === id)
    );
  }

  infoText() {
    const { hoverNode, hoverEdge } = this.state;
    if (hoverNode) {
      const n = NODE_BY_ID[hoverNode];
      return `${n.label}${n.sub ? ` (${n.sub})` : ''} · ${n.info}`;
    }
    if (hoverEdge !== null) {
      const e = graphEdges[hoverEdge];
      return `${NODE_BY_ID[e.from].label} · ${e.label} · ${NODE_BY_ID[e.to].label}`;
    }
    return 'Hover a node: size follows mention volume, edges carry the extracted predicates.';
  }

  render() {
    const { hoverNode, hoverEdge } = this.state;
    const hasHover = hoverNode !== null || hoverEdge !== null;
    return (
      <div className="og">
        <div className={`og__panel${hasHover ? ' og--hasHover' : ''}`}>
          <svg
            className="og__svg"
            viewBox="0 0 900 540"
            role="img"
            aria-label="Opinion knowledge graph of telco products and services"
            onMouseLeave={this.clearHover}
          >
            <defs>
              {Object.keys(MOOD).map((m) => (
                <marker
                  key={m}
                  id={`og-arr-${m}`}
                  viewBox="0 0 8 8"
                  refX="7"
                  refY="4"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 8 4 L 0 8 z" fill={MOOD[m]} />
                </marker>
              ))}
            </defs>

            {graphEdges.map((e, i) => {
              const g = edgeGeometry(e);
              const hot = hoverEdge === i || (hoverNode && (e.from === hoverNode || e.to === hoverNode));
              const dim = hasHover && !hot;
              return (
                <g
                  key={`${e.from}-${e.to}`}
                  className={`og__edge og__edge--${e.mood}${hot ? ' og__edge--hot' : ''}${dim ? ' og__edge--dim' : ''}`}
                  onMouseEnter={() => this.setEdge(i)}
                >
                  <path className="og__edgehit" d={g.d} />
                  <path className="og__edgeline" d={g.d} markerEnd={`url(#og-arr-${e.mood})`} />
                  <text className="og__edgelabel" x={g.lx} y={g.ly - 5}>{e.label}</text>
                </g>
              );
            })}

            {graphNodes.map((n, i) => {
              const hot = hoverNode === n.id;
              const adj = this.isAdjacent(n.id);
              const onHotEdge =
                hoverEdge !== null &&
                (graphEdges[hoverEdge].from === n.id || graphEdges[hoverEdge].to === n.id);
              const dim = hasHover && !hot && !adj && !onHotEdge;
              const inside = n.r >= 30 || n.kind === 'actor';
              return (
                <g
                  key={n.id}
                  className={`og__node${n.kind === 'actor' ? ' og__node--actor' : ''}${hot ? ' og__node--hot' : ''}${dim ? ' og__node--dim' : ''}`}
                  style={{ animationDelay: `${(i % 5) * -1.7}s`, animationDuration: `${6.5 + (i % 4)}s` }}
                  onMouseEnter={() => this.setNode(n.id)}
                  onClick={() => this.toggleNode(n.id)}
                >
                  <circle className="og__dot" cx={n.x} cy={n.y} r={n.r} />
                  {inside ? (
                    <>
                      <text className="og__label" x={n.x} y={n.y - 1}>{n.label}</text>
                      <text className="og__count" x={n.x} y={n.y + 13}>
                        {n.mentions ? n.mentions : n.sub}
                      </text>
                    </>
                  ) : (
                    <text className="og__label og__label--out" x={n.x} y={n.y + n.r + 14}>{n.label}</text>
                  )}
                </g>
              );
            })}
          </svg>

          <p className="og__info">{this.infoText()}</p>
          <p className="og__demonote">illustrative demo data</p>

          <div className="og__legends">
            <div className="og__key">
              <span className="og__keytitle">Legend</span>
              <span className="og__keyrow"><i className="og__glyph og__glyph--size" />node size · mention volume</span>
              <span className="og__keyrow"><i className="og__glyph og__glyph--edge" />edge · extracted predicate</span>
              <span className="og__keyrow"><i className="og__glyph og__glyph--actor" />customer segment · B2B / B2C</span>
              <span className="og__keyrow"><i className="og__swatch" style={{ background: MOOD.pos }} />positive opinion</span>
              <span className="og__keyrow"><i className="og__swatch" style={{ background: MOOD.neu }} />neutral / structural</span>
              <span className="og__keyrow"><i className="og__swatch" style={{ background: MOOD.neg }} />negative opinion</span>
            </div>
            <StackLegend dark items={[{ label: 'Neo4j' }, { label: 'Cypher' }]} />
          </div>
        </div>
      </div>
    );
  }
}

export default OpinionGraph;
