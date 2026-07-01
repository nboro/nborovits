import React from 'react';
import Section from '../core/Section';
import { services } from '../../data/teaching';

/** Professional Services: refereeing (journals & conferences), lecturer, supervision. */
class Teaching extends Section {
  constructor(props) {
    super(props);
    this.sectionId = 'services';
    this.sectionTitle = 'Professional Services';
  }

  list(items, valueKey) {
    return (
      <ul className="services__list">
        {items.map((it, i) => (
          <li key={i}>
            <span className="services__name">{it.name}</span>
            {it[valueKey] ? <span className="services__year">{it[valueKey]}</span> : null}
          </li>
        ))}
      </ul>
    );
  }

  renderContent() {
    return (
      <div className="services">
        <div className="services__col services__col--wide">
          <h3 className="subhead">Referee for International Journals</h3>
          {this.list(services.journals, 'years')}
        </div>

        <div className="services__col">
          <h3 className="subhead">Referee for International Conferences</h3>
          {this.list(services.conferences, 'role')}
        </div>

        <div className="services__col">
          <h3 className="subhead">Lecturer</h3>
          {this.list(services.courses, 'context')}

          <h3 className="subhead subhead--sep">Supervision</h3>
          <p className="services__note">{services.supervision}</p>
        </div>
      </div>
    );
  }
}

export default Teaching;
