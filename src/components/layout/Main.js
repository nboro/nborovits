import React from 'react';
import About from '../sections/About';
import Publications from '../sections/Publications';
import Projects from '../sections/Projects';
import Teaching from '../sections/Teaching';
import Skills from '../sections/Skills';
import Contact from '../sections/Contact';
import Footer from './Footer';

/**
 * Scrolling content column. Sections are accordion panels; the open one is
 * controlled from App. All panels stay in the DOM (hidden via CSS when closed)
 * so their text is crawlable.
 */
class Main extends React.Component {
  render() {
    const { openId, onToggle } = this.props;
    const p = (id) => ({ isOpen: openId === id, onToggle });
    return (
      <main className="main" id="page-top">
        <About {...p('about')} />
        <Publications {...p('publications')} />
        <Projects {...p('projects')} />
        <Teaching {...p('services')} />
        <Skills {...p('skills')} />
        <Contact {...p('contact')} />
        <Footer />
      </main>
    );
  }
}

export default Main;
