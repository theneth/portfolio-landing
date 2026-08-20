import { LuShieldCheck, LuGraduationCap, LuAward, LuArrowUpRight } from "react-icons/lu";

const certifications = [
  { 
    name: "ISC² Certified in Cybersecurity (CC)", 
    org: "ISC²",
    desc: "Validates foundational knowledge in IT infrastructure, access controls, and security operations." 
  },
  { 
    name: "CISA Cybersecurity for ICS (ICS-210w)", 
    org: "DHS / CISA",
    desc: "Specialized training in securing industrial control systems and critical infrastructure against cyber threats."
  },
  { 
    name: "Fortinet Certified Associate (FCA)", 
    org: "Fortinet",
    desc: "Demonstrates proficiency in configuring and managing Fortinet security architectures and firewalls." 
  },
  { 
    name: "Qualys VMDR Specialist", 
    org: "Qualys",
    desc: "Certifies expertise in vulnerability management, detection, and continuous monitoring workflows." 
  },
  { 
    name: "Junior Cybersecurity Analyst", 
    org: "Cisco",
    desc: "Verifies foundational skills in network security, threat analysis, and incident response." 
  },
];

const publications = [
  {
    title: "Enhancing Organizational Time Efficiency Using Machine Learning for Employee Activity Monitoring",
    journal: "International Journal of Scientific and Research Publications (IJSRP)",
    meta: "Volume 14, Issue 9 | Sept 2024 | ISSN: 2250-3153",
    description: "Co-authored peer-reviewed research investigating real-time computer vision and facial recognition algorithms to automate employee activity monitoring.",
    link: "https://dx.doi.org/10.29322/IJSRP.14.09.2024.p15309"
  },
  {
    title: "Developing an Optimal Strategy to Address the Vulnerability of Image Tampering",
    journal: "International Research Journal of Innovations in Engineering and Technology (IRJIET)",
    meta: "Volume 7, Issue 11 | Nov 2023 | ISSN (Online): 2581-3048",
    description: "Authored peer-reviewed research focusing on forensic integrity, digital anomaly detection, and optimal algorithmic mitigation strategies against data tampering.",
    link: "https://irjiet.com/article/Developing-an-Optimal-Strategy-to-Address-the-Vulnerability-of-Image-Tampering/1986"
  }
];

const education = [
  {
    degree: "BSc (Hons) in Information Technology, Specializing in Cybersecurity",
    institution: "Kingston University, UK",
    year: "Graduated: 2026",
  },
  {
    degree: "Higher National Diploma (HND) in IT, Specializing in Cybersecurity",
    institution: "SLIIT, Sri Lanka",
    year: "Graduated: 2023",
  },
];

const awards = [
  {
    title: "Outstanding Engineering Excellence Award (2025)",
    org: "Aurasync Technologies",
    description: "Recognized by executive leadership for spearheading secure cloud architecture and integrating programmatic DevSecOps vulnerability scanning across client digital transformation initiatives, resulting in zero post-release security breaches."
  }
];

export default function Credentials() {
  return (
    <div className="credentials-page">
      {/* Dark Section: Higher Education */}
      <section className="page-section-dark" id="education">
        <div className="page-container">
          
          <header className="master-header">
            <span className="section-kicker">Verified Excellence</span>
            <h2 id="credentials-title">
              <strong>Professional</strong>
              <span>Credentials</span>
            </h2>
          </header>

          <div className="project-category-block">
            <h3 className="category-title">Higher Education</h3>
            <p className="category-subtitle">Academic degrees and formal university education.</p>

          <div className="education-grid">
            {education.map((edu) => (
              <div className="edu-card" key={edu.degree}>
                <LuGraduationCap className="edu-icon" aria-hidden="true" />
                <h4 className="edu-degree">{edu.degree}</h4>
                <span className="edu-institution">{edu.institution}</span>
                <span className="edu-year">{edu.year}</span>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Light Section: Research & Publications */}
      <section className="page-section-light credentials-section-light" id="publications">
        <div className="page-container">
          <div className="project-category-block">
            <h3 className="category-title">Research & Publications</h3>
            <p className="category-subtitle">Peer-reviewed academic contributions to cybersecurity and machine learning.</p>

          <div className="publications-grid">
            {publications.map((pub, idx) => (
              <article className="publication-card" key={idx}>
                <div className="publication-header">
                  <span className="publication-journal">{pub.journal}</span>
                  <h4 className="publication-title">{pub.title}</h4>
                  <span className="publication-meta">{pub.meta}</span>
                </div>
                <p className="publication-description">{pub.description}</p>
                <a href={pub.link} className="publication-link" target="_blank" rel="noopener noreferrer">
                  View Published Paper <LuArrowUpRight />
                </a>
              </article>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Dark Section: Certifications */}
      <section className="page-section-dark" id="certifications">
        <div className="page-container">
          <div className="project-category-block">
            <h3 className="category-title">Industry Certifications</h3>
            <p className="category-subtitle">Recognized certifications from leading cybersecurity organizations.</p>

          <div className="certifications-grid">
            {certifications.map((cert) => (
              <div className="cert-card" key={cert.name}>
                <LuShieldCheck className="cert-icon" aria-hidden="true" />
                <h4 className="cert-name">{cert.name}</h4>
                <span className="cert-org">{cert.org}</span>
                <p className="cert-desc">{cert.desc}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Light Section: Industry Awards */}
      <section className="page-section-light credentials-section-light" id="awards">
        <div className="page-container">
          <div className="project-category-block">
            <h3 className="category-title">Industry Awards</h3>
            <p className="category-subtitle">Formal recognition for engineering and operational excellence.</p>

          <div className="awards-grid">
            {awards.map((award) => (
              <div className="award-card" key={award.title}>
                <LuAward className="award-icon" aria-hidden="true" />
                <h4 className="award-title">{award.title}</h4>
                <span className="award-org">{award.org}</span>
                <p className="award-description">{award.description}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
