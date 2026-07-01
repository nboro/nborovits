import React from 'react';

/**
 * Abstract base for every section, rendered as an accordion panel.
 *
 * Each section shows a full-width clickable BAR (its title). The active
 * section's panel is expanded; the others collapse to just their bar.
 * Open state is controlled by the parent via props (isOpen / onToggle), so
 * the sidebar nav and the bars stay in sync.
 *
 * Subclasses set `this.sectionId` / `this.sectionTitle` and implement
 * `renderContent()`. All panels stay in the DOM (hidden via CSS when closed)
 * so their text remains crawlable for SEO.
 */
class Section extends React.Component {
  constructor(props) {
    super(props);
    this.sectionId = 'section';
    this.sectionTitle = '';
    this.handleToggle = this.handleToggle.bind(this);
  }

  renderContent() {
    throw new Error(`${this.constructor.name} must implement renderContent()`);
  }

  handleToggle() {
    if (this.props.onToggle) this.props.onToggle(this.sectionId);
  }

  render() {
    const open = !!this.props.isOpen;
    return (
      <section id={this.sectionId} className={`acc${open ? ' acc--open' : ''}`}>
        <h2 className="acc__heading">
          <button
            type="button"
            className="acc__bar"
            aria-expanded={open}
            aria-controls={`${this.sectionId}-panel`}
            onClick={this.handleToggle}
          >
            <span className="acc__title">{this.sectionTitle}</span>
            <span className="acc__icon" aria-hidden="true" />
          </button>
        </h2>
        <div
          id={`${this.sectionId}-panel`}
          className="acc__panel"
          role="region"
          aria-label={this.sectionTitle}
        >
          <div className="acc__inner">{this.renderContent()}</div>
        </div>
      </section>
    );
  }
}

export default Section;
