import { LuBriefcase, LuCalendar } from "react-icons/lu";

const careerTimeline = [
  {
    role: "Security Software Developer / Engineer",
    company: "Aurasync Technologies",
    location: "Rajagiriya, Sri Lanka",
    period: "Jul 2025 – Present",
    current: true,
    highlight: "Developing secure client applications, significantly reducing post-release vulnerabilities.",
  },
  {
    role: "Associate Security Software Developer",
    company: "Aurasync Technologies",
    location: "Rajagiriya, Sri Lanka",
    period: "Dec 2024 – Jun 2025",
    highlight: "Implemented secure gateways and authentication flows for high-traffic environments.",
  },
  {
    role: "Junior Software Engineer",
    company: "Aurasync Technologies",
    location: "Rajagiriya, Sri Lanka",
    period: "May 2024 – Nov 2024",
    highlight: "Optimized backend systems to improve uptime and reduce overall response latency.",
  },
  {
    role: "Associate Information Security Analyst",
    company: "Sysflicx IT Solutions",
    location: "Pannipitiya, Sri Lanka",
    period: "Jun 2023 – May 2024",
    highlight: "Streamlined incident response workflows, shortening remediation times.",
  },
  {
    role: "Network Security Analyst Intern",
    company: "Avian Technologies",
    location: "Nawala, Sri Lanka",
    period: "Nov 2022 – May 2023",
    highlight: "Monitored endpoint security and ensured strict compliance across the network.",
  },
  {
    role: "ML & Systems Security Specialist",
    company: "Freelance",
    location: "Sri Lanka",
    period: "Jan 2020 – Present",
    highlight: "Built custom Python automation scripts and specialized threat detection tools.",
  },
];

export default function Career() {
  return (
    <section className="career-section" id="career" aria-labelledby="career-title" style={{ marginTop: '100px' }}>
      <div className="career-container">
        <header className="career-header">
          <span className="section-kicker">Professional experience</span>
          <h2 id="career-title">
            <strong>Career</strong>
            <span>Timeline</span>
          </h2>
        </header>

        <div className="compact-timeline-grid">
          {careerTimeline.map((item, index) => (
            <article 
              className={`compact-timeline-card${item.current ? " is-current" : ""}`} 
              key={item.role + item.company}
              style={{ "--card-index": index }}
            >
              <div className="card-node-indicator"></div>
              {item.current && <span className="timeline-badge">Current</span>}
              <h3 className="timeline-role">{item.role}</h3>
              <div className="timeline-meta">
                <span className="timeline-company">
                  <LuBriefcase aria-hidden="true" />
                  {item.company}
                </span>
                <span className="timeline-period">
                  <LuCalendar aria-hidden="true" />
                  {item.period}
                </span>
              </div>
              <p className="timeline-highlight">{item.highlight}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
