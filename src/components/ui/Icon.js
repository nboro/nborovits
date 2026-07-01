import React from 'react';

/**
 * Small inline SVG icon set. Kept as a single component so no icon-font or
 * external dependency is needed. `name` maps to the link kinds in profile.js.
 */
const PATHS = {
  email: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m3 6 9 7 9-7" />
    </>
  ),
  linkedin: (
    <>
      <path d="M4 4h16v16H4z" />
      <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 17v-7" />
    </>
  ),
  scholar: (
    <>
      <path d="M12 3 2 8.5 12 14l10-5.5L12 3Z" />
      <path d="M6 11v4.5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V11" />
    </>
  ),
  orcid: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 8v8M9 6.5v.01M13 10h1.5a3 3 0 0 1 0 6H13v-6Z" />
    </>
  ),
  github: (
    <path d="M9 19c-4 1.4-4-2-5.5-2.5M15 21v-3.2c0-1 .3-1.7-.4-2.4 2.2-.2 4.5-1 4.5-4.9a3.9 3.9 0 0 0-1-2.7 3.6 3.6 0 0 0-.1-2.7s-.9-.2-2.9 1.1a10 10 0 0 0-5.2 0C6.4 2.8 5.5 3 5.5 3a3.6 3.6 0 0 0-.1 2.7 3.9 3.9 0 0 0-1 2.7c0 3.9 2.3 4.7 4.5 4.9-.6.6-.6 1.2-.5 2.1V21" />
  ),
  dblp: (
    <>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M9 8h4M9 12h6M9 16h6" />
    </>
  ),
};

class Icon extends React.Component {
  render() {
    const { name, size = 20 } = this.props;
    const content = PATHS[name];
    if (!content) return null;
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        {content}
      </svg>
    );
  }
}

export default Icon;
