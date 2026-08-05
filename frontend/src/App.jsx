import { useEffect, useMemo, useState } from "react";

const projectCategories = ["Featured", "All", "Generative AI", "Machine Learning", "Data Systems"];

const projects = [
  {
    title: "GovAI Guardian",
    kicker: "Enterprise AI governance",
    category: ["Featured", "Generative AI", "Data Systems"],
    summary:
      "A secure, role-based RAG platform that answers questions over approved government documents with citations, permission-aware retrieval, auditability, and human oversight.",
    stack: ["React", "FastAPI", "PostgreSQL", "pgvector", "Gemini API", "Supabase Auth"],
    stats: ["Grounded RAG", "Role-based access", "Prompt-injection defense"],
    visual: "governance",
  },
  {
    title: "Cloud Sentinel",
    kicker: "Real-time anomaly detection",
    category: ["Featured", "Machine Learning", "Data Systems"],
    summary:
      "A distributed streaming platform that ingests telemetry from 10,000+ IoT devices and delivers anomaly predictions through Kafka, FastAPI, WebSockets, and live dashboards.",
    stack: ["Kafka", "FastAPI", "WebSockets", "Isolation Forest", "React"],
    stats: ["10K+ devices", "Sub-second inference", "15–20% anomaly rate"],
    visual: "streaming",
    github: "https://github.com/RichWilliams772/CloudSentinel",
  },
  {
    title: "Intelligent Energy Infrastructure",
    kicker: "Industrial predictive monitoring",
    category: ["Featured", "Machine Learning", "Data Systems"],
    summary:
      "A full-stack monitoring system for industrial telemetry, equipment health scoring, anomaly detection, alerts, and predictive maintenance decision support.",
    stack: ["Python", "FastAPI", "PostgreSQL", "React", "Docker", "Scikit-learn"],
    stats: ["Live telemetry", "Health scoring", "Predictive maintenance"],
    visual: "energy",
    github: "https://github.com/RichWilliams772/IEI",
  },
  {
    title: "PULSE",
    kicker: "Explainable healthcare AI",
    category: ["Featured", "Machine Learning"],
    summary:
      "A full-stack machine learning platform that predicts risk across six chronic diseases and explains how lifestyle changes affect long-term outcomes.",
    stack: ["XGBoost", "SHAP", "FastAPI", "SwiftUI", "HealthKit"],
    stats: ["40K+ records", "6 disease models", "2nd place hackathon"],
    visual: "health",
  },
  {
    title: "Commodity Price Intelligence",
    kicker: "Procurement analytics platform",
    category: ["Featured", "Data Systems"],
    summary:
      "A procurement intelligence platform that automates commodity mapping, vendor price validation, spend hierarchy modeling, and external market-index analysis.",
    stack: ["Python", "SQL", "Pandas", "Streamlit", "Plotly"],
    stats: ["1.5M+ records", "Automated validation", "Sourcing insights"],
    visual: "commodity",
    github:"https://github.com/RichWilliams772/Commodity-Price-Intelligence-and-Vendor-Validation-",
  },
  {
    title: "AI Knowledge Assistant",
    kicker: "Document intelligence",
    category: ["Generative AI"],
    summary:
      "A context-aware document assistant using embeddings, semantic retrieval, structured prompting, and response validation to improve grounding and reduce hallucinations.",
    stack: ["LLMs", "Vector Search", "FastAPI", "RAG", "Prompt Engineering"],
    stats: ["Semantic retrieval", "Grounded answers", "Validation controls"],
    visual: "knowledge",
  },
  {
    title: "Patient Churn Prediction",
    kicker: "Healthcare analytics",
    category: ["Machine Learning"],
    summary:
      "A supervised learning workflow that identifies behavioral and satisfaction-based churn drivers and translates model findings into practical patient-retention strategies.",
    stack: ["Python", "Scikit-learn", "EDA", "Logistic Regression", "Random Forest"],
    stats: ["Feature engineering", "ROC-AUC", "F1 evaluation"],
    visual: "churn",
    github:"https://github.com/RichWilliams772/EDA-Patient-Churn-Dataset-Kaggle-",
  },
  {
    title: "AI Stock Price Prediction",
    kicker: "Quantitative finance research",
    category: ["Machine Learning"],
    summary:
      "A time-series forecasting pipeline that uses LSTM networks and sliding-window features to model sequential stock-price behavior and evaluate prediction error.",
    stack: ["Python", "LSTM", "Time Series", "Deep Learning", "RMSE", "MAE"],
    stats: ["Sequential modeling", "Sliding windows", "FinTech focus"],
    visual: "finance",
  },
];

const experience = [
  {
    role: "Technical Fellow",
    org: "CodePath",
    period: "May 2026 — Present",
    detail:
      "Teach and mentor students in algorithms, software engineering, LLM systems, prompt engineering, RAG, backend development, API integration, and production-oriented AI workflows.",
  },
  {
    role: "Technology Data Analyst & Data Manager Intern",
    org: "FAU Office of Technology Development",
    period: "Aug 2026 — Present",
    detail:
      "Build Power BI dashboards, maintain technology-transfer data quality in Salesforce, improve reporting workflows, and create SOPs supporting IP and licensing operations.",
  },
  {
    role: "Data Analyst Intern",
    org: "Cost U Less",
    period: "Summer 2026",
    detail:
      "Use SQL, Python, Excel, and analytics tools to study sales, inventory, pricing, and operational performance while automating recurring reporting and data-preparation workflows.",
  },
  {
    role: "Data Science Trainee & NSF NRT Scholar",
    org: "Florida Atlantic University",
    period: "Aug 2025 — Aug 2026",
    detail:
      "Develop machine learning models and statistical analyses on real-world datasets, collaborate with faculty researchers, and translate findings into publication-ready technical work.",
  },
  {
    role: "Research & Development Intern / AI Innovator Fellow",
    org: "One Hope",
    period: "Fall 2025 — Spring 2026",
    detail:
      "Designed GPT-powered automation systems, agentic workflows, and API-driven proof-of-concept applications for internal operations and scalable AI adoption.",
  },
 
];

const skillGroups = [
  ["Generative AI", ["Gemini", "OpenAI APIs", "LangChain", "RAG", "Vector Search", "Prompt Engineering", "Agentic Workflows"]],
  ["Machine Learning", ["Scikit-learn", "XGBoost", "PyTorch", "SHAP", "Feature Engineering", "Model Evaluation", "Statistical Testing"]],
  ["Backend & Data", ["FastAPI", "REST APIs", "PostgreSQL", "SQL", "Kafka", "WebSockets", "Streaming Pipelines", "Pandas"]],
  ["Cloud & Product", ["AWS", "Azure", "Docker", "Linux", "React", "Power BI", "Tableau", "Streamlit", "Git"]],
];

const resumeLinks = [
  ["Applied AI Engineer", "/resumes/Richelle_Williams_Resume_AppliedAI.docx"],
  ["Machine Learning Engineer", "/resumes/Richelle_Williams_Resume_MLE.docx"],
  ["Data / Analytics Engineer", "/resumes/Richelle_Williams_Resume_DataEngineer.docx"],
  ["Data Scientist", "/resumes/Richelle_Williams_Resume_DataScientist.docx"],
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function ProjectVisual({ type }) {
  return (
    <div className={`project-visual ${type}`} aria-hidden="true">
      <div className="visual-topline"><span /> <span /> <span /></div>
      <div className="visual-canvas">
        <i className="pulse-dot one" />
        <i className="pulse-dot two" />
        <i className="pulse-dot three" />
        <div className="visual-grid" />
        <div className="visual-line line-a" />
        <div className="visual-line line-b" />
        <div className="visual-chip">LIVE</div>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Featured");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category.includes(activeFilter));
  }, [activeFilter]);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Richelle Williams home">
          <span className="brand-mark">RW</span>
          <span>Richelle Williams</span>
        </a>

        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span /><span />
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Primary navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#research" onClick={() => setMenuOpen(false)}>Research</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#resumes" onClick={() => setMenuOpen(false)}>Résumés</a>
          <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow">Applied AI Engineer · Data Scientist · Researcher</p>
            <h1>Building AI systems for real-world decisions.</h1>
            <p className="hero-text">
              I combine machine learning, generative AI, backend engineering, and data infrastructure to build secure,
              production-style systems across healthcare, cybersecurity, industrial monitoring, enterprise analytics, and FinTech.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">Explore projects <ArrowIcon /></a>
              <a className="button secondary" href="#resumes">View résumés</a>
            </div>
            <div className="hero-proof" aria-label="Selected highlights">
              <div><strong>1.5M+</strong><span>records analyzed</span></div>
              <div><strong>10K+</strong><span>devices monitored</span></div>
              <div><strong>37M+</strong><span>hosts sampled</span></div>
              <div><strong>$40K</strong><span>awards and fellowship funding</span></div>
            </div>
          </div>

          <aside className="hero-card" aria-label="Current profile">
            <div className="status-line"><span className="status-dot" /> Open to AI, FinTech, data, and research opportunities</div>
            <div className="portrait-placeholder">
              <img
                src="/images/richelle.jpeg"
                alt="Richelle Williams"
                className="portrait-image"
              />
            </div>
            <div className="hero-card-copy">
              <p>Currently</p>
              <h2>Ph.D. student in Electrical Engineering & Computer Science</h2>
              <span>Florida Atlantic University · Fall 2026</span>
            </div>
            <div className="mini-links">
              <a href="https://github.com/RichWilliams772" target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
            </div>
          </aside>
        </section>

        <section className="about-band" id="about">
          <div className="section-wrap about-grid">
            <div>
              <p className="eyebrow">About me</p>
              <h2>Engineer, researcher, mentor, and athlete.</h2>
            </div>
            <div className="about-copy">
              <p>
                I am an AI and data professional with a B.A. in Computer Science and an M.S. in Data Science and Analytics,
                currently pursuing a Ph.D. in Electrical Engineering and Computer Science. My experience spans AI engineering,
                data analytics, machine learning, backend development, and research, with hands-on work using Python, SQL,
                FastAPI, cloud platforms, and generative AI technologies.
              </p>
              <p>
                I design data-driven solutions, build secure AI applications, and translate complex technical concepts into
                practical business outcomes. Beyond engineering, I serve as an NCAA Division I Track & Field Team Captain,
                NSBE Public Relations Chair, CodePath Technical Fellow, and NSF NRT Scholar.
              </p>
              <div className="about-badges">
                <span>NCAA D-I Team Captain</span><span>NSBE PR Chair</span><span>CodePath Fellow</span><span>NSF NRT Scholar</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap section-block" id="work">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Project portfolio</p>
              <h2>AI and data systems built end to end.</h2>
            </div>
            <div className="filter" aria-label="Project filter">
              {projectCategories.map((filter) => (
                <button
                  key={filter}
                  className={activeFilter === filter ? "active" : ""}
                  onClick={() => setActiveFilter(filter)}
                  type="button"
                >{filter}</button>
              ))}
            </div>
          </div>
<div className="project-grid">
  {visibleProjects.map((project, index) => (
    <article
      className={
        index === 0
          ? "project-card project-card-wide"
          : "project-card"
      }
      key={project.title}
    >
      <ProjectVisual type={project.visual} />

      <div className="project-content">
        <p className="project-type">{project.kicker}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>

        <div className="metric-row">
          {project.stats.map((metric) => (
            <span key={metric}>{metric}</span>
          ))}
        </div>

        <div className="tag-row">
          {project.stack.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        {project.github && (
          <a
            className="project-link"
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${project.title} repository on GitHub`}
          >
            View GitHub <ArrowIcon />
          </a>
        )}
      </div>
    </article>
  ))}
</div>

        </section>

        <section className="research-band" id="research">
          <div className="section-wrap research-grid">
            <div>
              <p className="eyebrow">Research & publication</p>
              <h2>Measuring real-world IoT exposure at global scale.</h2>
              <p className="research-intro">My research connects cybersecurity, statistical analysis, machine learning, and reproducible data science.</p>
            </div>
            <article className="research-copy">
              <p className="publication-status">Under review</p>
              <h3>A Scan-Based Analysis of Internet-Exposed IoT Devices Using Shodan Data</h3>
              <p>
                Conducted a large-scale analysis of 7,634 internet-exposed IoT devices sampled from 37M+ hosts. Engineered
                scan-derived exposure features, applied the Kruskal–Wallis H test to evaluate cross-country differences, and
                trained Logistic Regression and Random Forest models with approximately 0.58 balanced accuracy.
              </p>
              <div className="research-stats">
                <span><strong>7,634</strong> devices</span>
                <span><strong>37M+</strong> hosts</span>
                <span><strong>0.58</strong> balanced accuracy</span>
              </div>
              <div className="tag-row research-tags"><span>Shodan</span><span>Cybersecurity</span><span>Statistical Testing</span><span>Random Forest</span></div>
            </article>
          </div>
        </section>

        <section className="section-wrap section-block" id="experience">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Engineering, analytics, research, and mentorship.</h2>
          </div>
          <div className="experience-list">
            {experience.map((item, index) => (
              <article className="experience-item" key={`${item.role}-${item.org}`}>
                <div className="timeline-index">0{index + 1}</div>
                <div className="experience-meta"><p>{item.period}</p><span>{item.org}</span></div>
                <div><h3>{item.role}</h3><p>{item.detail}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap section-block skills-section">
          <div className="section-heading">
            <p className="eyebrow">Technical toolkit</p>
            <h2>From research and modeling to deployment.</h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map(([title, skills]) => (
              <article className="skill-card" key={title}>
                <span className="skill-number">{String(skillGroups.findIndex((g) => g[0] === title) + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-band" id="resumes">
          <div className="section-wrap resume-grid">
            <div>
              <p className="eyebrow">Role-specific résumés</p>
              <h2>Choose the version that matches the opportunity.</h2>
              <p>Each résumé highlights the same experience through a different technical lens.</p>
            </div>
            <div className="resume-list">
              {resumeLinks.map(([label, href]) => (
                <a href={href} download key={label}><span>{label}</span><ArrowIcon /></a>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <p className="eyebrow">Let’s build something useful</p>
            <h2>Looking for an engineer who connects AI, data, and real-world products?</h2>
            <p>Open to opportunities in AI engineering, FinTech, data engineering, machine learning, and applied AI research.</p>
            <div className="contact-actions">
              <a className="button light" href="mailto:sashie772@gmail.com">Email Richelle <ArrowIcon /></a>
              <a className="button ghost-light" href="https://github.com/RichWilliams772" target="_blank" rel="noreferrer">View GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <p>© 2026 Richelle Williams</p>
        <p>Boca Raton, Florida · Built with React</p>
      </footer>
    </div>
  );
}

export default App;
