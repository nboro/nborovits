import React from 'react';
import Section from '../core/Section';
import { research } from '../../data/research';

class Research extends Section {
  constructor(props) {
    super(props);
    this.sectionId = 'research';
    this.sectionTitle = 'Research';
  }

  renderContent() {
    return (
      <div className="cards">
        {research.map((item, i) => (
          <article key={i} className="card">
            <h3 className="card__title">{item.title}</h3>
            <p className="card__body">{item.body}</p>
          </article>
        ))}
      </div>
    );
  }
}

export default Research;
