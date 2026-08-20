import { LuBriefcase, LuMapPin, LuCalendar, LuCheckCircle, LuTerminal, LuFolderGit2 } from "react-icons/lu";

const careerData = [
  {
    company: "Aurasync Technologies",
    location: "Rajagiriya, Sri Lanka",
    period: "May 2024 – Present",
    roles: [
      { title: "Security Software Developer / Engineer", date: "Jul 2025 – Present" },
      { title: "Associate Security Software Developer", date: "Dec 2024 – Jun 2025" },
      { title: "Junior Software Engineer", date: "May 2024 – Nov 2024" }
    ],
    responsibilities: [
      "Built custom software tools and embedded DevSecOps practices across the SDLC, reducing post-release defects by 35%.",
      "Architected secure cloud infrastructure and integrated continuous vulnerability scanning (SAST/DAST) into CI/CD pipelines.",
      "Provided strategic IT consulting on application security hardening, encrypted communications (AES/TLS), and tamper-resistant software design.",
      "Designed and developed scalable web and mobile applications using Python, Node.js, and React, securing 100K+ daily user interactions.",
      "Implemented secure OAuth 2.0/JWT authentication and encrypted microservices data transmission, maintaining 99.9% uptime."
    ],
    tools: ["Python", "Node.js", "React", "CI/CD", "SAST/DAST", "OAuth 2.0 / JWT", "AWS / GCP", "AES/TLS"],
    projects: [
      { name: "Enterprise DevSecOps CI/CD", period: "Aug 2025 – Nov 2025", desc: "Integrated SAST/DAST scanners into cloud workflows, cutting post-release defects by 35%." },
      { name: "Secure Microservices Gateway", period: "Feb 2025 – May 2025", desc: "Architected an encrypted authentication gateway handling 100K+ daily API transactions." },
      { name: "Web & Mobile Portal Hardening", period: "Jun 2024 – Sep 2024", desc: "Developed responsive React/Node.js modules and remediated OWASP Top 10 vulnerabilities." }
    ]
  },
  {
    company: "Sysflicx IT Solutions",
    location: "Pannipitiya, Sri Lanka",
    period: "Jun 2023 – May 2024",
    roles: [
      { title: "Associate Information Security Analyst", date: "Jun 2023 – May 2024" }
    ],
    responsibilities: [
      "Spearheaded incident response support and threat triage across diverse enterprise client environments.",
      "Analyzed 30+ weekly security alerts and reduced Mean Time to Remediation (MTTR) by 25%.",
      "Conducted comprehensive network vulnerability assessments and security audits for 10+ corporate infrastructures.",
      "Collaborated with systems engineering to harden defense mechanisms and deploy patches across 200+ endpoints.",
      "Authored technical risk assessments and security policy documentation."
    ],
    tools: ["Metasploit", "Burp Suite", "SIEM", "NIST CSF", "ISO 27001", "Endpoint Protection"],
    projects: [
      { name: "Multi-Site VAPT & Compliance", period: "Jan 2024 – Apr 2024", desc: "Full-scope penetration testing across 5+ networks, achieving ISO 27001 alignment." },
      { name: "SIEM Triage Optimization", period: "Jul 2023 – Oct 2023", desc: "Engineered custom log correlation rules to triage alerts and reduce MTTR." }
    ]
  },
  {
    company: "Avian Technologies",
    location: "Nawala, Sri Lanka",
    period: "Nov 2022 – May 2023",
    roles: [
      { title: "Network Security Analyst Intern", date: "Nov 2022 – May 2023" }
    ],
    responsibilities: [
      "Configured, deployed, and maintained enterprise network firewalls (Sophos, Cyberoam).",
      "Managed centralized antivirus and endpoint defense suites across 100+ endpoints.",
      "Monitored real-time network traffic and system logs for suspicious behaviors using Wireshark and SIEM tools.",
      "Assisted senior engineers in troubleshooting RF and IP/Ethernet network communication protocols.",
      "Implemented encrypted site-to-site VPN tunnels for secure remote enterprise access."
    ],
    tools: ["Sophos / Cyberoam", "Wireshark", "SIEM", "VPN (AES/TLS)", "Endpoint Security"],
    projects: [
      { name: "Firewall & IPS Deployment", period: "Feb 2023 – Apr 2023", desc: "Configured perimeter firewalls across 15+ corporate deployments with active intrusion prevention." },
      { name: "Encrypted Site-to-Site VPN", period: "Dec 2022 – Jan 2023", desc: "Implemented AES/TLS encrypted tunnels for tamper-resilient remote access." }
    ]
  },
  {
    company: "Freelance",
    location: "Self-Employed",
    period: "Jan 2020 – Present",
    roles: [
      { title: "Machine Learning & Systems Security Specialist", date: "Jan 2020 – Present" }
    ],
    responsibilities: [
      "Delivered custom infrastructure defense, security automation, and penetration testing for commercial networks.",
      "Engineered 15+ custom Python automation scripts and specialized vulnerability scanning tools.",
      "Conducted full-scope network and web application penetration tests using Metasploit, Nessus, and Burp Suite.",
      "Researched and integrated Machine Learning algorithms to enhance anomaly detection accuracy by 30%."
    ],
    tools: ["Python", "Metasploit", "Nessus", "Burp Suite", "Machine Learning", "Automation"],
    projects: [
      { name: "Next-Gen NIDS & Threat Engine", period: "Mar 2024 – Jun 2024", desc: "Developed a custom Python/ML Network Intrusion Detection System for zero-day anomalies." },
      { name: "SCADA & IoT Protocol Scanner", period: "Aug 2022 – Nov 2022", desc: "Built a Python vulnerability scanner to audit RF and IP/Ethernet command packets." }
    ]
  }
];

export default function Career() {
  return (
    <div className="career-page">
      {/* Master Header */}
      <section className="career-section-dark" style={{ paddingTop: '100px' }}>
        <header className="master-header">
          <span className="section-kicker">Professional Journey</span>
          <h2 className="master-title">
            <strong>Career</strong>
            <span>Timeline</span>
          </h2>
          <p className="master-description">
            A comprehensive overview of my professional roles, key responsibilities, tools utilized, and major projects delivered across the cybersecurity industry.
          </p>
        </header>
      </section>

      {/* Alternating Company Sections */}
      {careerData.map((company, index) => {
        const isDark = index % 2 !== 0;
        const sectionClass = isDark ? "career-section-dark" : "career-section-light";
        
        return (
          <section key={company.company} className={sectionClass}>
            <div className="company-container">
              <div className="company-header">
                <div className="company-title-wrapper">
                  <div className="company-icon-box">
                    <LuBriefcase aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="company-name">{company.company}</h3>
                    <div className="company-meta">
                      <span className="meta-item"><LuMapPin aria-hidden="true" /> {company.location}</span>
                      <span className="meta-item"><LuCalendar aria-hidden="true" /> {company.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="company-details-grid">
                
                {/* Left Column: Roles & Responsibilities */}
                <div className="company-main-col">
                  <div className="company-roles">
                    <h4 className="sub-heading">Positions Held</h4>
                    <ul className="role-list">
                      {company.roles.map((role, i) => (
                        <li key={i} className="role-item">
                          <span className="role-bullet"></span>
                          <div className="role-info">
                            <span className="role-title">{role.title}</span>
                            <span className="role-date">{role.date}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="company-responsibilities">
                    <h4 className="sub-heading">Key Achievements</h4>
                    <ul className="achievement-list">
                      {company.responsibilities.map((resp, i) => (
                        <li key={i} className="achievement-item">
                          <LuCheckCircle className="achievement-icon" aria-hidden="true" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column: Tools & Projects */}
                <div className="company-side-col">
                  <div className="company-tools">
                    <h4 className="sub-heading"><LuTerminal className="sub-icon"/> Technologies Used</h4>
                    <div className="tool-tags">
                      {company.tools.map((tool, i) => (
                        <span key={i} className="tool-tag">{tool}</span>
                      ))}
                    </div>
                  </div>

                  <div className="company-projects">
                    <h4 className="sub-heading"><LuFolderGit2 className="sub-icon"/> Specific Projects</h4>
                    <div className="company-project-grid">
                      {company.projects.map((proj, i) => (
                        <div key={i} className="company-project-card">
                          <h5 className="proj-name">{proj.name}</h5>
                          <span className="proj-date">{proj.period}</span>
                          <p className="proj-desc">{proj.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
