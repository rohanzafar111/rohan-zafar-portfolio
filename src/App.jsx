import React from 'react'

const experiences = [
  {
    role: 'Sales Executive',
    company: 'Dunya Travel',
    period: 'Present',
    points: ['B2B client communication and relationship building', 'Sharing hotel and visa rates, preparing offers and following up with travel partners', 'Supporting sales coordination and client requirements'],
  },
  {
    role: 'Digital Marketing & Recruitment Support',
    company: 'Greenland Overseas Employment Promoters',
    period: 'Feb 2025 – Present',
    points: ['Managing social media inquiries and customer follow-ups', 'Maintaining customer and lead records in Excel', 'Supporting overseas recruitment campaigns and promotional posts'],
  },
  {
    role: 'Data Entry & Marketing Support',
    company: 'Hazir Freight Forwarding',
    period: 'Previous Experience',
    points: ['Data entry and record management', 'Facebook page posting, basic Canva designs and ad coordination'],
  },
  {
    role: 'Social Media Marketing',
    company: 'Al Yasir Travel & Tours',
    period: 'Previous Experience',
    points: ['Social media posting and customer inquiry support', 'Promoting travel services and assisting with online engagement'],
  },
]

const skills = ['B2B Sales', 'Client Relationship Management', 'Travel & Tourism', 'Hotel & Visa Rates', 'Lead Generation', 'Customer Follow-ups', 'Excel & Data Entry', 'Canva Design', 'Facebook Ads Coordination', 'Social Media Marketing']

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home"><span>RZ</span> ROHAN ZAFAR</a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#contact" className="nav-cta">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO OPPORTUNITIES</div>
            <p className="kicker">SALES · OPERATIONS · DIGITAL MARKETING</p>
            <h1>Building connections.<br /><em>Creating opportunities.</em></h1>
            <p className="intro">I’m Rohan Zafar, a sales and operations professional focused on B2B relationships, travel and tourism, customer coordination and digital marketing.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Let’s connect <span>↗</span></a>
              <a className="button button-quiet" href="#experience">Explore my experience <span>↓</span></a>
            </div>
            <div className="hero-meta"><span>BASED IN KARACHI, PAKISTAN</span><span>SALES & CLIENT RELATIONS</span></div>
          </div>
          <div className="hero-art" aria-label="Abstract portfolio graphic">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="art-card"><span className="art-label">PROFILE / 01</span><div className="monogram">R<span>.</span>Z</div><div className="art-line" /><p>People first.<br />Progress always.</p><span className="art-bottom">ROHAN ZAFAR · 2026</span></div>
            <div className="floating-tag tag-top">B2B SALES</div><div className="floating-tag tag-bottom">TRAVEL &amp; TOURISM ↗</div>
          </div>
        </section>

        <section className="stats section">
          <div><strong>01</strong><span>Client relationships</span></div><div><strong>02</strong><span>Sales coordination</span></div><div><strong>03</strong><span>Digital support</span></div><div><strong>04</strong><span>Continuous learning</span></div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading"><p className="kicker">A LITTLE ABOUT ME</p><h2>Professional mindset.<br /><em>Practical approach.</em></h2></div>
          <div className="about-copy"><p>I enjoy working where communication, service and business growth come together. My experience spans travel services, overseas recruitment support, freight forwarding and social media marketing.</p><p>I believe in clear communication, reliable follow-ups and building long-term professional relationships. I’m continuing to strengthen my digital and technical skills alongside my sales experience.</p><a className="text-link" href="https://www.linkedin.com/in/rohan-zafar-0658b5309/" target="_blank" rel="noreferrer">View LinkedIn profile ↗</a></div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-title-row"><div><p className="kicker">CAREER JOURNEY</p><h2>Experience<span>.</span></h2></div><p className="section-note">The roles and teams that have shaped my professional journey.</p></div>
          <div className="experience-list">{experiences.map((item, index) => <article className="experience-item" key={item.company}><div className="experience-number">0{index + 1}</div><div className="experience-main"><h3>{item.role}</h3><p className="company">{item.company}</p><ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul></div><div className="period">{item.period}</div></article>)}</div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-title-row"><div><p className="kicker">WHAT I BRING</p><h2>Skills &amp; strengths<span>.</span></h2></div><p className="section-note">A mix of people skills, business support and creative tools.</p></div>
          <div className="skill-grid">{skills.map((skill, index) => <div className="skill-chip" key={skill}><span>0{index + 1}</span>{skill}<b>↗</b></div>)}</div>
        </section>

        <section className="contact-section section" id="contact">
          <p className="kicker">HAVE A PROJECT OR OPPORTUNITY?</p><h2>Let’s make<br /><em>something happen.</em></h2>
          <p className="contact-copy">For professional opportunities, B2B travel business, collaborations or a quick introduction, feel free to connect.</p>
          <div className="contact-actions"><a className="button button-primary" href="https://www.linkedin.com/in/rohan-zafar-0658b5309/" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a><a className="button button-outline" href="mailto:">Send an email ↗</a></div>
        </section>
      </main>

      <footer className="footer"><a className="brand" href="#home"><span>RZ</span> ROHAN ZAFAR</a><p>Designed with purpose · © {new Date().getFullYear()} Rohan Zafar</p><a href="#home">BACK TO TOP ↑</a></footer>
    </div>
  )
}

export default App
