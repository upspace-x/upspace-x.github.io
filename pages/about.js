import Layout from '../components/layout/Layout';
import SEO from '../components/seo/SEO';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <Layout>
      <SEO 
        title="About UpSpaceX - Your daily space for everything that matters"
        description="Learn about UpSpaceX, our mission, and our team of writers."
      />

      {/* ✅ Page Header */}
      <section className={`${styles.section} ${styles.about}`}>
        <div className="container">
          <h1>About UpSpaceX</h1>
        </div>
      </section>
      
      {/* ✅ Mission Section */}
      <section className={`${styles.section} ${styles.mission}`}>
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            UpSpaceX is dedicated to bringing you the latest insights in technology, 
            business, and innovation. We believe in empowering professionals and 
            entrepreneurs with knowledge that drives success.
          </p>
        </div>
      </section>

      {/* ✅ Values Section */}
      <section className={`${styles.section} ${styles.values}`}>
        <div className="container">
          <h2>What We Stand For</h2>
          <div className={styles.valueGrid}>
            <div className={styles.value}>
              <h3>🎯 Quality Content</h3>
              <p>Every article is researched, fact-checked, and crafted by industry experts.</p>
            </div>
            <div className={styles.value}>
              <h3>🚀 Innovation</h3>
              <p>We cover cutting-edge topics that matter to forward-thinking professionals.</p>
            </div>
            <div className={styles.value}>
              <h3>🌍 Global Perspective</h3>
              <p>Our content reflects insights from markets and innovators worldwide.</p>
            </div>
            <div className={styles.value}>
              <h3>💡 Practical Insights</h3>
              <p>We focus on actionable advice you can implement immediately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Team Section */}
      <section className={`${styles.section} ${styles.team}`}>
        <div className="container">
          <h2>Our Team</h2>
          <p>
            UpSpaceX is powered by a diverse team of writers, editors, and contributors 
            who are passionate about technology and business. Our contributors include 
            industry veterans, startup founders, and thought leaders.
          </p>
        </div>
      </section>

      {/* ✅ Call to Action Section */}
      <section className={`${styles.section} ${styles.cta}`}>
        <div className="container">
          <h2>Join Our Community</h2>
          <p>
            Stay updated with our latest articles and insights. Subscribe to our 
            newsletter and never miss a story.
          </p>
        </div>
      </section>
    </Layout>
  );
}