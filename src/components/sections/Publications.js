import React from 'react';
import Section from '../core/Section';
import PublicationItem from '../ui/PublicationItem';
import { profile } from '../../data/profile';
import { publications } from '../../data/publications';

class Publications extends Section {
  constructor(props) {
    super(props);
    this.sectionId = 'publications';
    this.sectionTitle = 'Publications';
  }

  renderGroup(group) {
    const items = publications
      .filter((p) => p.group === group)
      .sort((a, b) => b.year - a.year);
    if (items.length === 0) return null;
    return (
      <div className="pubs__group">
        <h3 className="pubs__group-title">{group}</h3>
        <ol className="pubs__list">
          {items.map((p, i) => (
            <PublicationItem key={i} {...p} />
          ))}
        </ol>
      </div>
    );
  }

  renderContent() {
    return (
      <div className="pubs">
        <p className="pubs__note">
          Full record on{' '}
          <a href={profile.links.find((l) => l.kind === 'scholar').href} target="_blank" rel="noopener noreferrer">
            Google Scholar
          </a>
          .
        </p>

        <div className="pubs__cols">
          <div className="pubs__col">
            {this.renderGroup('Journal Articles')}
            {this.renderGroup('Preprints')}
            {this.renderGroup('PhD Thesis')}
          </div>
          <div className="pubs__col">
            {this.renderGroup('Conferences & Workshops')}
          </div>
        </div>
      </div>
    );
  }
}

export default Publications;
