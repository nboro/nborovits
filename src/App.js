import React from 'react';
import { Helmet } from 'react-helmet-async';
import Sidebar from './components/layout/Sidebar';
import Main from './components/layout/Main';
import ProductAwareness from './pages/product-awareness/ProductAwareness';
import { SEO } from './data/seo';
import { profile } from './data/profile';
import { sections, legacyRoutes } from './data/navigation';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    // Which accordion section is expanded. Default: first (About).
    this.state = { open: sections[0].id };
    this.openSection = this.openSection.bind(this);
    this.toggleSection = this.toggleSection.bind(this);
  }

  // Paths that render a standalone page instead of the accordion layout.
  standalonePath() {
    const path = window.location.pathname.replace(/\/+$/, '') || '/';
    return path === '/product-awareness' ? path : null;
  }

  componentDidMount() {
    // Standalone pages keep their own URL; the accordion logic stays out.
    if (this.standalonePath()) return;
    // SEO continuity: old routes (/resume, /contact, ...) open the mapped
    // section instead of 404-ing, and the URL is normalised to a hash.
    const path = window.location.pathname.replace(/\/+$/, '') || '/';
    const target = legacyRoutes[path] || (window.location.hash || '').replace('#', '');
    if (target && sections.some((s) => s.id === target)) {
      this.setState({ open: target });
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', `/#${target}`);
      }
    }
  }

  scrollToBar(id) {
    window.requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // Called by the sidebar nav — always opens the target.
  openSection(id) {
    this.setState({ open: id });
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, '', `#${id}`);
    }
    this.scrollToBar(id);
  }

  // Called by a bar click — toggles (clicking the open one collapses it).
  toggleSection(id) {
    this.setState((s) => ({ open: s.open === id ? null : id }));
    if (this.state.open !== id) this.scrollToBar(id);
  }

  personJsonLd() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: profile.name,
      url: SEO.url,
      jobTitle: 'Researcher, Data Scientist, ML/DL/AI Engineer',
      worksFor: { '@type': 'Organization', name: 'Tilburg University (JADS)' },
      knowsAbout: [
        'Data Science',
        'Data Engineering',
        'Machine Learning',
        'Deep Learning',
        'Privacy Engineering',
      ],
      sameAs: profile.links.filter((l) => l.kind !== 'email').map((l) => l.href),
    };
  }

  render() {
    if (this.standalonePath() === '/product-awareness') {
      return <ProductAwareness />;
    }
    return (
      <div className="layout">
        <Helmet>
          <title>{SEO.title}</title>
          <meta name="description" content={SEO.description} />
          <meta name="keywords" content={SEO.keywords} />
          <meta name="author" content={SEO.author} />
          <link rel="canonical" href={SEO.url} />
          <script type="application/ld+json">{JSON.stringify(this.personJsonLd())}</script>
        </Helmet>

        <Sidebar openId={this.state.open} onNavigate={this.openSection} />
        <Main openId={this.state.open} onToggle={this.toggleSection} />
      </div>
    );
  }
}

export default App;
