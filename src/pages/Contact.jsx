import { LuMail } from "react-icons/lu";
import { FaAws, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

const links = {
  github: "https://github.com/theneth",
  email: "mailto:stheneth@gmail.com",
  linkedin: "https://www.linkedin.com/in/ariyarathne/",
  whatsapp: "https://wa.me/94770450564",
};

export default function Contact() {
  return (
    <div className="contact-page" style={{ paddingTop: '100px', paddingBottom: '100px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <section className="contact-section" id="contact" style={{ width: '100%' }}>
        <div className="contact-container">
          <div className="contact-content">
            <span className="section-kicker">Get in touch</span>
            <h2 className="contact-headline">
              Let&apos;s work<br />together
            </h2>
            <p className="contact-subtext">
              Available for international cybersecurity roles, consulting
              engagements, and freelance security projects. Let&apos;s discuss
              how I can help secure your systems.
            </p>
          </div>

          <div className="contact-links">
            <a
              className="contact-link"
              href={links.email}
              aria-label="Send email"
            >
              <span className="contact-link-icon">
                <LuMail aria-hidden="true" />
              </span>
              <span className="contact-link-label">stheneth@gmail.com</span>
            </a>
            <a
              className="contact-link"
              href={links.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp chat"
            >
              <span className="contact-link-icon">
                <FaWhatsapp aria-hidden="true" />
              </span>
              <span className="contact-link-label">+94 77 0 450 564</span>
            </a>
            <a
              className="contact-link"
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <span className="contact-link-icon">
                <FaLinkedinIn aria-hidden="true" />
              </span>
              <span className="contact-link-label">linkedin.com/in/ariyarathne</span>
            </a>
            <a
              className="contact-link"
              href={links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <span className="contact-link-icon">
                <FaGithub aria-hidden="true" />
              </span>
              <span className="contact-link-label">github.com/theneth</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
