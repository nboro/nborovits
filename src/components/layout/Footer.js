import React from 'react';
import { profile } from '../../data/profile';

class Footer extends React.Component {
  render() {
    const year = new Date().getFullYear();
    return (
      <footer className="footer">
        <p>
          © {year} {profile.name}
        </p>
      </footer>
    );
  }
}

export default Footer;
