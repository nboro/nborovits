import React from 'react';

/**
 * Renders a string where **wrapped** fragments become <strong> elements.
 * Used for the bio paragraphs so keywords can be emphasised in the data file
 * without embedding JSX there.
 */
class RichText extends React.Component {
  render() {
    const { text } = this.props;
    const parts = String(text).split(/(\*\*[^*]+\*\*)/g);
    return (
      <>
        {parts.map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i}>{part.slice(2, -2)}</strong>;
          }
          return <React.Fragment key={i}>{part}</React.Fragment>;
        })}
      </>
    );
  }
}

export default RichText;
