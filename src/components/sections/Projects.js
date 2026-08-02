import React from 'react';
import Section from '../core/Section';
import { projects } from '../../data/projects';

class Projects extends Section {
  constructor(props) {
    super(props);
    this.sectionId = 'projects';
    this.sectionTitle = 'Selected Projects';
  }

  renderContent() {
    return (
      <div className="cards">
        {projects.map((p, i) => (
          <article key={i} className="card">
            {p.tag ? <span className="card__tag">{p.tag}</span> : null}
            <h3 className="card__title">{p.name}</h3>
            {p.body ? <p className="card__body">{p.body}</p> : null}
            {p.url ? (
              <a className="card__link" href={p.url} target="_blank" rel="noopener noreferrer">
                View
              </a>
            ) : null}
          </article>
        ))}
      </div>
    );
  }
}

export default Projects;
