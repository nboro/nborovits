import React from 'react';
import Section from '../core/Section';
import Icon from '../ui/Icon';
import { profile } from '../../data/profile';

class Contact extends Section {
  constructor(props) {
    super(props);
    this.sectionId = 'contact';
    this.sectionTitle = 'Contact';
  }

  renderContent() {
    return (
      <div className="contact">
        <p className="contact__lead">
          Open to collaborations on AI-enabled software systems, data governance, and privacy
          engineering for compliance.
        </p>
        <ul className="contact__links">
          {profile.links.map((link) => (
            <li key={link.kind}>
              <a
                href={link.href}
                target={link.kind === 'email' ? undefined : '_blank'}
                rel="noopener noreferrer"
              >
                <Icon name={link.kind} />
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Contact;
