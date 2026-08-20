import { LuShieldCheck, LuGraduationCap } from "react-icons/lu";

const certifications = [
  { name: "ISC² Certified in Cybersecurity (CC)", org: "ISC²" },
  { name: "CISA Cybersecurity for ICS (ICS-210w)", org: "DHS / CISA" },
  { name: "Fortinet Certified Associate (FCA)", org: "Fortinet" },
  { name: "Qualys VMDR Specialist", org: "Qualys" },
  { name: "Junior Cybersecurity Analyst", org: "Cisco" },
];

const education = [
  {
    degree: "BSc (Hons) in IT, Cybersecurity",
    institution: "Kingston University, UK",
    year: "2026",
  },
  {
    degree: "HND in IT, Cybersecurity",
    institution: "SLIIT, Sri Lanka",
    year: "2023",
  },
];

export default function Credentials() {
  return (
    <section className="credentials-section" id="credentials" aria-labelledby="credentials-title" style={{ marginTop: '100px' }}>
      <div className="credentials-container">
        <header className="credentials-header">
          <span className="section-kicker">Credentials</span>
          <h2 id="credentials-title">
            <strong>Certifications</strong>
            <span>& Education</span>
          </h2>
        </header>

        <div className="credentials-layout">
          <div className="credentials-block">
            <h3 className="credentials-block-title">
              <LuShieldCheck aria-hidden="true" />
              Industry Certifications
            </h3>
            <ul className="cert-list">
              {certifications.map((cert) => (
                <li className="cert-item" key={cert.name}>
                  <span className="cert-name">{cert.name}</span>
                  <span className="cert-org">{cert.org}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="credentials-block">
            <h3 className="credentials-block-title">
              <LuGraduationCap aria-hidden="true" />
              Education
            </h3>
            <ul className="edu-list">
              {education.map((edu) => (
                <li className="edu-item" key={edu.degree}>
                  <span className="edu-degree">{edu.degree}</span>
                  <span className="edu-institution">{edu.institution}</span>
                  <span className="edu-year">{edu.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
