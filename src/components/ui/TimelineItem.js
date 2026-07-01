import React from 'react';

/** A single entry on a vertical timeline (used by Experience and Education). */
class TimelineItem extends React.Component {
  render() {
    const { start, end, title, org, detail } = this.props;
    const period = `${start} — ${end || 'Present'}`;
    return (
      <li className="timeline__item">
        <div className="timeline__marker" aria-hidden="true" />
        <div className="timeline__content">
          <span className="timeline__period">{period}</span>
          <h4 className="timeline__role">{title}</h4>
          <p className="timeline__org">{org}</p>
          {detail ? <p className="timeline__detail">{detail}</p> : null}
        </div>
      </li>
    );
  }
}

export default TimelineItem;
