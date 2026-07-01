import React from 'react';

/** A small pill used for skills and keywords. */
class Tag extends React.Component {
  render() {
    return <span className="tag">{this.props.children}</span>;
  }
}

export default Tag;
