import React from 'react';
import { sections } from '../../data/navigation';

/**
 * Sidebar navigation for the accordion. Clicking an item opens that section
 * (App controls the open state) and highlights the active one.
 */
class AccordionNav extends React.Component {
  render() {
    const { openId, onNavigate } = this.props;
    return (
      <nav className="nav" aria-label="Sections">
        <ul className="nav__list">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <button
                type="button"
                className={`nav__link${openId === id ? ' nav__link--active' : ''}`}
                aria-current={openId === id ? 'true' : undefined}
                onClick={() => onNavigate(id)}
              >
                <span className="nav__dot" aria-hidden="true" />
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default AccordionNav;
