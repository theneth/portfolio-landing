import { LuArrowUpRight, LuGlobe } from "react-icons/lu";

const companyProjects = [
  {
    title: "Enterprise DevSecOps CI/CD Pipeline",
    context: "Aurasync Technologies",
    description: "Integrated SAST/DAST vulnerability scanners into cloud deployment workflows for continuous security validation.",
    metric: "Reduced post-release defects by 35%",
    tags: ["SAST", "DAST", "CI/CD", "Cloud"],
  },
  {
    title: "Secure Microservices OAuth 2.0 Gateway",
    context: "Aurasync Technologies",
    description: "Architected an encrypted authentication gateway for distributed enterprise microservices environments.",
    metric: "100K+ daily API transactions, zero breaches",
    tags: ["OAuth 2.0", "JWT", "API", "Microservices"],
  },
];

const freelanceProjects = [
  {
    title: "Next-Gen NIDS & Threat Intelligence Engine",
    context: "Freelance",
    description: "Developed a custom Python/ML Network Intrusion Detection System for real-time packet flow inspection.",
    metric: "Real-time zero-day anomaly blocking",
    tags: ["Python", "ML", "IDS", "Threat Intel"],
  },
  {
    title: "Multi-Site Corporate VAPT & Compliance",
    context: "Sysflicx IT Solutions",
    description: "Full-scope penetration testing across enterprise networks using industry-standard offensive tools.",
    metric: "ISO 27001 alignment across 5+ networks",
    tags: ["Metasploit", "Burp Suite", "VAPT", "ISO 27001"],
  },
  {
    title: "SCADA & IoT Protocol Scanner",
    context: "Freelance",
    description: "Built a custom vulnerability scanner to audit RF and IP/Ethernet command packets for industrial control systems.",
    metric: "ICS security audit automation",
    tags: ["Python", "SCADA", "IoT", "ICS"],
  },
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
    <section className="projects-section" id="projects" aria-labelledby="projects-title" style={{ marginTop: '100px' }}>
      <div className="projects-container">
        
        {/* Header */}
        <header className="projects-header" style={{ marginBottom: '4rem' }}>
          <span className="section-kicker">Proof of work</span>
          <h2 id="projects-title">
            <strong>Featured</strong>
            <span>Projects</span>
          </h2>
        </header>

        {/* Web Development Section */}
        <div className="project-category-block">
          <h3 className="category-title">Web Development</h3>
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
                <div className="web-project-image">
                  <img src={project.image} alt={`${project.title} Preview`} loading="lazy" />
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

        {/* Company Work Section */}
        <div className="project-category-block">
          <h3 className="category-title">Enterprise & Company Work</h3>
          <p className="category-subtitle">Secure infrastructure and architecture implemented at scale.</p>

          <div className="projects-grid">
            {companyProjects.map((project) => (
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

        {/* Freelance Section */}
        <div className="project-category-block">
          <h3 className="category-title">Freelance Security Projects</h3>
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
  );
}
