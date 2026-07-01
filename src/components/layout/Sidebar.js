import React from 'react';
import AccordionNav from './ScrollSpyNav';
import Icon from '../ui/Icon';
import { profile } from '../../data/profile';

/**
 * Fixed identity sidebar: photo, name, roles, section nav, contact icons, CV.
 * On mobile it collapses to a top bar with a hamburger.
 */
class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
    this.handleNavigate = this.handleNavigate.bind(this);
  }

  toggle() {
    this.setState((s) => ({ open: !s.open }));
  }

  handleNavigate(id) {
    if (this.props.onNavigate) this.props.onNavigate(id);
    this.setState({ open: false }); // close mobile menu after choosing
  }

  render() {
    const { open } = this.state;
    return (
      <header className={`sidebar${open ? ' sidebar--open' : ''}`}>
        <div className="sidebar__bar">
          <button
            type="button"
            className="sidebar__brand"
            onClick={() => this.handleNavigate('about')}
          >
            {profile.name}
          </button>
          <button
            type="button"
            className="sidebar__toggle"
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={this.toggle}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className="sidebar__panel">
          <div className="sidebar__identity">
            <img
              className="sidebar__photo"
              src={profile.photo}
              alt={profile.name}
              width="128"
              height="128"
            />
            <p className="sidebar__name">{profile.name}</p>
            <p className="sidebar__title">{profile.title}</p>
            <dl className="sidebar__facts">
              <dt>Experience</dt>
              <dd>{profile.facts.experience}</dd>
              <dt>Based</dt>
              <dd>{profile.facts.based}</dd>
            </dl>
          </div>

          <AccordionNav openId={this.props.openId} onNavigate={this.handleNavigate} />

          <div className="sidebar__foot">
            <a className="sidebar__cv" href={profile.cv} target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
            <ul className="sidebar__links">
              {profile.links.map((link) => (
                <li key={link.kind}>
                  <a
                    href={link.href}
                    aria-label={link.label}
                    title={link.label}
                    target={link.kind === 'email' ? undefined : '_blank'}
                    rel="noopener noreferrer"
                  >
                    <Icon name={link.kind} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Sidebar;
