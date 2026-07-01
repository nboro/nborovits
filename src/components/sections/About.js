import React from 'react';
import Section from '../core/Section';
import RichText from '../ui/RichText';
import { profile } from '../../data/profile';
import { experience } from '../../data/experience';
import { education } from '../../data/education';

class About extends Section {
  constructor(props) {
    super(props);
    this.sectionId = 'about';
    this.sectionTitle = 'About';
  }

  card(period, title, org, key) {
    return (
      <article key={key} className="histcard">
        <span className="histcard__period">{period}</span>
        <h4 className="histcard__title">{title}</h4>
        <p className="histcard__org">{org}</p>
      </article>
    );
  }

  renderContent() {
    return (
      <div className="about3">
        {/* About text */}
        <div className="about3__col about3__text">
          <p className="about__lead">{profile.tagline}</p>
          {profile.bio.map((para, i) => (
            <p key={i} className="about__para">
              <RichText text={para} />
            </p>
          ))}
        </div>

        {/* Education & Career (each 3 across) */}
        <div className="about3__col about3__hist">
          <h3 className="subhead">Education</h3>
          <div className="rowgrid">
            {education.map((e, i) => this.card(`${e.start} — ${e.end}`, e.degree, e.org, i))}
          </div>
          <h3 className="subhead subhead--sep">Career</h3>
          <div className="rowgrid">
            {experience.map((e, i) =>
              this.card(`${e.start} — ${e.end || 'Present'}`, e.role, e.org, i)
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
