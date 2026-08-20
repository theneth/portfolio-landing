import { LuArrowUpRight, LuGlobe } from "react-icons/lu";

const aurasyncProjects = [
  {
    title: "Automated Cloud Security",
    period: "Aug 2025 – Nov 2025",
    description: "Built security directly into the deployment pipeline, ensuring every release is automatically tested for vulnerabilities before going live.",
    metric: "35% drop in security defects",
    tags: ["SAST", "DAST", "CI/CD", "Cloud"],
  },
  {
    title: "Zero-Trust API Gateway",
    period: "Feb 2025 – May 2025",
    description: "Designed a centralized authentication layer to secure high-traffic communication between dozens of internal microservices.",
    metric: "Securing 100K+ daily requests",
    tags: ["OAuth 2.0", "JWT", "API", "Microservices"],
  },
  {
    title: "Commercial Portal Hardening",
    period: "Jun 2024 – Sep 2024",
    description: "Developed secure, responsive web modules and patched critical vulnerabilities for digital transformation clients.",
    metric: "Remediated OWASP Top 10 flaws",
    tags: ["React", "Node.js", "AppSec"],
  }
];

const sysflicxProjects = [
  {
    title: "Enterprise Penetration Testing",
    period: "Jan 2024 – Apr 2024",
    description: "Conducted extensive security assessments across multiple corporate networks to identify and patch critical vulnerabilities.",
    metric: "Secured 5+ networks for ISO 27001",
    tags: ["Metasploit", "Burp Suite", "VAPT", "ISO 27001"],
  },
  {
    title: "SIEM Triage & Alert Optimization",
    period: "Jul 2023 – Oct 2023",
    description: "Engineered custom log correlation rules to drastically reduce the time it takes to respond to and triage security alerts.",
    metric: "25% faster threat remediation",
    tags: ["SIEM", "Log Correlation", "SOC"],
  }
];

const avianProjects = [
  {
    title: "Multi-Site Firewall & IPS Deployment",
    period: "Feb 2023 – Apr 2023",
    description: "Configured and hardened perimeter firewalls across multiple corporate environments to block active intrusions.",
    metric: "Secured 15+ corporate deployments",
    tags: ["Sophos", "Cyberoam", "Firewall", "IPS"],
  },
  {
    title: "Encrypted VPN Architecture",
    period: "Dec 2022 – Jan 2023",
    description: "Implemented heavily encrypted VPN tunnels to provide staff with tamper-resilient, secure remote access to the enterprise network.",
    metric: "Guaranteed communication redundancy",
    tags: ["VPN", "AES/TLS", "Network Security"],
  }
];

const freelanceProjects = [
  {
    title: "AI-Powered Intrusion Detection",
    description: "Built a custom machine learning tool in Python to analyze network traffic and catch zero-day threats in real time.",
    metric: "Live anomaly detection",
    tags: ["Python", "ML", "IDS", "Threat Intel"],
  },
  {
    title: "Industrial IoT Security Scanner",
    description: "Engineered a specialized tool to audit network traffic in industrial control systems and identify potential physical risks.",
    metric: "Automated ICS compliance",
    tags: ["Python", "SCADA", "IoT", "ICS"],
  }
];

const webDevProjects = [
  {
    title: "Megesl",
    url: "https://megesl.com",
    image: "/assets/projects/megesl.png",
    description: "Designed and developed a responsive, high-performance landing page to drive conversions and establish brand presence.",
    tags: ["React", "Web Design", "Frontend"],
  },
  {
    title: "Omaru Farms",
    url: "https://omarufarms.vercel.app",
    image: "/assets/projects/omarufarms.png",
    description: "Built an engaging web experience for Omaru Farms, focusing on visual storytelling and seamless navigation.",
    tags: ["Next.js", "Full Stack", "UI/UX"],
  },
];

export default function Projects() {
  return (
    <>
      {/* Dark Section: Enterprise & Company Work */}
      <section className="projects-section projects-section-dark" id="projects" aria-labelledby="projects-title" style={{ marginTop: '100px' }}>
        <div className="projects-container">
          <header className="projects-header" style={{ marginBottom: '4rem' }}>
            <span className="section-kicker">Proof of work</span>
            <h2 id="projects-title">
              <strong>Featured</strong>
              <span>Projects</span>
            </h2>
          </header>

          <div className="project-category-block">
            <h3 className="category-title">Enterprise & Company Work</h3>
            <p className="category-subtitle">Secure infrastructure and architecture implemented at scale.</p>

            <div className="company-group" style={{ marginBottom: '4rem' }}>
              <h4 className="company-group-title" style={{ fontSize: '1.2rem', color: 'var(--accent)', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Aurasync Technologies</h4>
              <div className="projects-grid">
                {aurasyncProjects.map((project) => (
                  <article className="project-card" key={project.title}>
                    <div className="project-card-top">
                      <span className="project-context">{project.period}</span>
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                    </div>
                    <div className="project-card-bottom">
                      <span className="project-metric">
                        <LuArrowUpRight aria-hidden="true" />
                        {project.metric}
                      </span>
                      <div className="project-tags">
                        {project.tags.map((tag) => (
                          <span className="project-tag" key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="company-group" style={{ marginBottom: '4rem' }}>
              <h4 className="company-group-title" style={{ fontSize: '1.2rem', color: 'var(--accent)', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Sysflicx IT Solutions</h4>
              <div className="projects-grid">
                {sysflicxProjects.map((project) => (
                  <article className="project-card" key={project.title}>
                    <div className="project-card-top">
                      <span className="project-context">{project.period}</span>
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                    </div>
                    <div className="project-card-bottom">
                      <span className="project-metric">
                        <LuArrowUpRight aria-hidden="true" />
                        {project.metric}
                      </span>
                      <div className="project-tags">
                        {project.tags.map((tag) => (
                          <span className="project-tag" key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="company-group">
              <h4 className="company-group-title" style={{ fontSize: '1.2rem', color: 'var(--accent)', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Avian Technologies</h4>
              <div className="projects-grid">
                {avianProjects.map((project) => (
                  <article className="project-card" key={project.title}>
                    <div className="project-card-top">
                      <span className="project-context">{project.period}</span>
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                    </div>
                    <div className="project-card-bottom">
                      <span className="project-metric">
                        <LuArrowUpRight aria-hidden="true" />
                        {project.metric}
                      </span>
                      <div className="project-tags">
                        {project.tags.map((tag) => (
                          <span className="project-tag" key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Light Section: Freelance Security Projects */}
      <section className="projects-section projects-section-light" aria-labelledby="freelance-title">
        <div className="projects-container">
          <div className="project-category-block">
            <h3 className="category-title" id="freelance-title">Freelance Security Projects</h3>
            <p className="category-subtitle">Custom security tooling, threat intelligence, and vulnerability assessments.</p>

            <div className="projects-grid">
              {freelanceProjects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-card-top">
                    <span className="project-context">{project.context}</span>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                  </div>
                  <div className="project-card-bottom">
                    <span className="project-metric">
                      <LuArrowUpRight aria-hidden="true" />
                      {project.metric}
                    </span>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span className="project-tag" key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dark Section: Web Development */}
      <section className="projects-section projects-section-dark" aria-labelledby="webdev-title">
        <div className="projects-container">
          <div className="project-category-block">
            <h3 className="category-title" id="webdev-title">Web Development</h3>
            <p className="category-subtitle">Building engaging and high-performance digital experiences.</p>
            
            <div className="web-projects-grid">
              {webDevProjects.map((project) => (
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="web-project-card" 
                  key={project.title}
                >
                  <div className="web-project-iframe-container">
                    <iframe 
                      src={project.url} 
                      title={`${project.title} live preview`}
                      className="live-preview-iframe"
                      loading="lazy"
                      tabIndex="-1"
                    />
                    <div className="image-overlay">
                      <span className="visit-btn">Visit Website <LuArrowUpRight /></span>
                    </div>
                  </div>
                  <div className="web-project-content">
                    <div className="web-project-header">
                      <h4>{project.title}</h4>
                      <LuGlobe className="globe-icon" />
                    </div>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span className="project-tag" key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
