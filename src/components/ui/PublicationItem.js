import React from 'react';

/**
 * One publication. The author's own surname is emphasised for scannability,
 * and the DOI (or explicit url) becomes the "View" link.
 */
class PublicationItem extends React.Component {
  renderAuthors(authors) {
    // Bold every occurrence of "Borovits" so the reader finds the author fast.
    const parts = String(authors).split(/(Borovits)/g);
    return parts.map((p, i) =>
      p === 'Borovits' ? <strong key={i}>{p}</strong> : <React.Fragment key={i}>{p}</React.Fragment>
    );
  }

  render() {
    const { title, authors, venue, year, doi, url, openAccess } = this.props;
    const href = url || (doi ? `https://doi.org/${doi}` : null);
    return (
      <li className="pub">
        <span className="pub__year">{year}</span>
        <div className="pub__body">
          <h4 className="pub__title">{title}</h4>
          <p className="pub__authors">{this.renderAuthors(authors)}</p>
          <p className="pub__venue">
            {venue}
            {openAccess ? <span className="pub__oa">Open Access</span> : null}
          </p>
          {href ? (
            <a className="pub__link" href={href} target="_blank" rel="noopener noreferrer">
              View{doi ? ` · doi:${doi}` : ''}
            </a>
          ) : null}
        </div>
      </li>
    );
  }
}

export default PublicationItem;
