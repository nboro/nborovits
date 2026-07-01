import React from 'react';
import Section from '../core/Section';
import TimelineItem from '../ui/TimelineItem';
import { experience } from '../../data/experience';
import { education } from '../../data/education';

class Experience extends Section {
  constructor(props) {
    super(props);
    this.sectionId = 'experience';
    this.sectionTitle = 'Experience & Education';
  }

  renderContent() {
    return (
      <div className="xp">
        <div className="xp__col xp__col--main">
          <h3 className="subhead">Professional experience</h3>
          <ul className="timeline">
            {experience.map((item, i) => (
              <TimelineItem
                key={i}
                start={item.start}
                end={item.end}
                title={item.role}
                org={item.org}
                detail={item.detail}
              />
            ))}
          </ul>
        </div>
        <div className="xp__col xp__col--side">
          <h3 className="subhead">Education</h3>
          <ul className="timeline timeline--compact">
            {education.map((e, i) => (
              <TimelineItem key={i} start={e.start} end={e.end} title={e.degree} org={e.org} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Experience;
