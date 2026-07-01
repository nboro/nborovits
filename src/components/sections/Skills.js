import React from 'react';
import Section from '../core/Section';
import Tag from '../ui/Tag';
import { skills } from '../../data/awards';

class Skills extends Section {
  constructor(props) {
    super(props);
    this.sectionId = 'skills';
    this.sectionTitle = 'Skills';
  }

  renderTrack(track) {
    return (
      <div key={track.key} className="track">
        <div className="track__head">
          <h3 className="track__label">{track.label}</h3>
          <p className="track__caption">{track.caption}</p>
        </div>
        <div className="track__groups">
          {track.groups.map((g, i) => (
            <div key={i} className="track__group">
              <span className="track__group-label">{g.label}</span>
              <div className="tags">
                {g.items.map((item, j) => (
                  <Tag key={j}>{item}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  renderContent() {
    return (
      <div className="skills">
        <p className="skills__note">{skills.note}</p>
        <div className="tracks">{skills.tracks.map((t) => this.renderTrack(t))}</div>

        <div className="skills__meta">
          <div className="skills__block">
            <h3 className="subhead">Service</h3>
            <ul className="skills__list">
              {skills.service.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="skills__block">
            <h3 className="subhead">Languages</h3>
            <ul className="skills__list">
              {skills.languages.map((l, i) => (
                <li key={i}>
                  <span className="skills__lang">{l.name}</span>
                  <span className="skills__level">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
