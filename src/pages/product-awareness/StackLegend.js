import React from 'react';

/**
 * Small legend box. `items` is a list of { label, swatch? }: entries with a
 * swatch render a colored key dot, plain entries render as stack chips.
 * `dark` switches the palette for use on the dark graph panel.
 */
class StackLegend extends React.Component {
  render() {
    const { title = 'Stack', items, dark = false } = this.props;
    return (
      <div className={`lgd${dark ? ' lgd--dark' : ''}`}>
        <span className="lgd__title">{title}</span>
        <ul className="lgd__items">
          {items.map((it, i) => (
            <li key={i} className="lgd__item">
              {it.swatch ? <i className="lgd__swatch" style={{ background: it.swatch }} /> : null}
              {it.label}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default StackLegend;
