import React from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../../components/layout/Footer';
import PipelineDemo from './PipelineDemo';
import OpinionGraph from './OpinionGraph';
import Generations from './Generations';
import pageSeo from './seo.json';
import './product-awareness.css';

/**
 * Standalone project page for "Product Awareness: From Triplets to Knowledge
 * Graphs". App renders it when the path is /product-awareness. Text stays
 * minimal; three visuals carry the story from unstructured call center text
 * to a living Neo4j opinion graph.
 *
 * SEO: seo.json is the single source of truth for this page's head. The same
 * values are baked into a static build/product-awareness.html by
 * scripts/prerender-seo.js, so the route serves its own SEO without
 * JavaScript; the Helmet below keeps the SPA in sync at runtime.
 */
class ProductAwareness extends React.Component {
  render() {
    return (
      <div className="pa">
        <Helmet>
          <title>{pageSeo.title}</title>
          <meta name="description" content={pageSeo.description} />
          <meta name="keywords" content={pageSeo.keywords} />
          <meta name="author" content={pageSeo.author} />
          <link rel="canonical" href={pageSeo.canonical} />
          <script type="application/ld+json">{JSON.stringify(pageSeo.jsonLd)}</script>
        </Helmet>

        <header className="pa__top">
          <a className="pa__toplink" href="/">← Nemania Borovits</a>
          <a className="pa__toplink" href="/#projects">All projects</a>
        </header>

        <main className="pa__main">
          <section className="pa__hero">
            <p className="pa__kicker">Nemania Borovits · Internal Product · NLP · Machine Learning · Knowledge Graphs</p>
            <h1 className="pa__title">
              Product Awareness
              <span className="pa__subtitle">From Triplets to Knowledge Graphs</span>
            </h1>
            <p className="pa__dek">
              Thousands of B2B and B2C call center conversations become one living Neo4j
              knowledge graph of what customers think about every product and service a telco offers.
            </p>
          </section>

          <section className="pa__section" aria-label="From call to graph">
            <h2 className="pa__subhead">01 · From Call to Graph</h2>
            <PipelineDemo />
          </section>

          <section className="pa__section" aria-label="The living graph">
            <h2 className="pa__subhead">02 · The Living Graph</h2>
            <OpinionGraph />
          </section>

          <section className="pa__section" aria-label="Three generations of extraction">
            <h2 className="pa__subhead">03 · Three Generations of Extraction</h2>
            <Generations />
          </section>
        </main>

        <div className="pa__footwrap">
          <Footer />
        </div>
      </div>
    );
  }
}

export default ProductAwareness;
