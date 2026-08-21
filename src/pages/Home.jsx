import { useCallback, useEffect, useRef, useState } from "react";
import {
  SiBurpsuite,
  SiCplusplus,
  SiGit,
  SiGnubash,
  SiGooglecloud,
  SiJavascript,
  SiMetasploit,
  SiNodedotjs,
  SiOpenjdk,
  SiOwasp,
  SiPython,
  SiReact,
  SiWireshark,
} from "react-icons/si";
import { FaAws, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import {
  LuActivity,
  LuCloudCog,
  LuMail,
  LuScanSearch,
  LuShieldCheck,
} from "react-icons/lu";

const links = {
  github: "https://github.com/theneth",
  email: "mailto:stheneth@gmail.com",
  linkedin: "https://www.linkedin.com/in/ariyarathne/",
};

const expertiseDefault = {
  kicker: "Core capabilities",
  titleStrong: "Core",
  titleLight: "Expertise",
  summary:
    "Specialized across the security lifecycle-from building secure systems to defending infrastructure and governing risk.",
};

const expertiseGrid = [
  {
    title: "Application Security",
    detail: "OWASP Top 10, secure code review, and web, mobile and API security.",
    headline: "Application",
    subline: "Security",
    summary:
      "I assess application risk from design to deployment, focusing on OWASP Top 10 issues, secure code review, API exposure and practical remediation.",
    image: "/assets/expertise-buttons/application-security-transparent.png",
  },
  {
    title: "DevSecOps & CI/CD Security",
    detail: "SAST, DAST, dependency scanning, security gates and remediation.",
    headline: "DevSecOps",
    subline: "Security",
    summary:
      "I bring security checks into delivery pipelines with scanning, dependency review, build gates and developer-friendly remediation workflows.",
    image: "/assets/expertise-buttons/devsecops-transparent.png",
  },
  {
    title: "Vulnerability Assessment",
    detail: "VAPT, technical risk analysis, prioritization and remediation.",
    headline: "Vulnerability",
    subline: "Assessment",
    summary:
      "I turn findings into clear risk decisions by validating vulnerabilities, prioritizing impact and guiding teams through focused remediation.",
    image: "/assets/expertise-buttons/vulnerability-assessment-transparent.png",
  },
  {
    title: "Secure Software & API Security",
    detail: "Secure architecture, OAuth 2.0, JWT and encrypted communications.",
    headline: "API",
    subline: "Security",
    summary:
      "I design and review secure API patterns across authentication, authorization, encrypted communication, token handling and abuse resistance.",
    image: "/assets/expertise-buttons/api-security-transparent.png",
  },
  {
    title: "Cloud Security",
    detail: "AWS and Google Cloud configuration, hardening and access controls.",
    headline: "Cloud",
    subline: "Security",
    summary:
      "I help secure cloud environments through identity controls, hardening, configuration review and practical guardrails for AWS and Google Cloud.",
    image: "/assets/expertise-buttons/cloud-security-transparent.png",
  },
  {
    title: "Network & Infrastructure Security",
    detail: "System hardening, traffic analysis and resilient infrastructure.",
    headline: "Network",
    subline: "Security",
    summary:
      "I strengthen infrastructure with network analysis, system hardening, segmentation awareness and resilient operational security practices.",
    image: "/assets/expertise-buttons/network-security-transparent.png",
  },
  {
    title: "Incident Response & Monitoring",
    detail: "Alert triage, investigation, SIEM workflows and security monitoring.",
    headline: "Incident",
    subline: "Response",
    summary:
      "I support detection and response through alert triage, investigation workflows, monitoring logic and clear security documentation.",
    image: "/assets/expertise-buttons/incident-response-transparent.png",
  },
  {
    title: "Security Automation & Machine Learning",
    detail: "Python and Mojo automation with anomaly-detection applications.",
    headline: "Automation",
    subline: "& ML",
    summary:
      "I build security automation with Python and Mojo, including anomaly-detection concepts and tooling that reduces repetitive security work.",
    image: "/assets/expertise-buttons/security-automation-ml-transparent.png",
  },
  {
    title: "Security Governance & Risk",
    detail: "Risk assessment, secure SDLC, NIST CSF and ISO/IEC 27001 controls.",
    headline: "Governance",
    subline: "& Risk",
    summary:
      "I connect technical security work to governance through risk assessment, secure SDLC practices, policy alignment and recognized frameworks.",
    image: "/assets/expertise-buttons/governance-risk-transparent.png",
  },
];

const toolkitGroups = [
  {
    accent: "cyan",
    title: "Development",
    tools: [
      { name: "Python", Icon: SiPython, color: "#3776ab" },
      { name: "Mojo", Icon: null, color: "#ff7a18", mark: "Mo" },
      { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
      { name: "React", Icon: SiReact, color: "#61dafb" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#5fa04e" },
      { name: "Java", Icon: SiOpenjdk, color: "#e76f00" },
      { name: "C++", Icon: SiCplusplus, color: "#659ad2" },
      { name: "Bash", Icon: SiGnubash, color: "#4eaa25" },
    ],
  },
  {
    accent: "blue",
    title: "AppSec",
    tools: [
      { name: "OWASP", Icon: SiOwasp, color: "#3ca9e8" },
      { name: "SAST & DAST", Icon: LuScanSearch, color: "#5b8cff" },
      { name: "Vulnerability Assessment", Icon: LuShieldCheck, color: "#22d3ee" },
      { name: "Security Monitoring", Icon: LuActivity, color: "#8b5cf6" },
    ],
  },
  {
    accent: "indigo",
    title: "Security Tools",
    tools: [
      { name: "Burp Suite", Icon: SiBurpsuite, color: "#ff6633" },
      { name: "Wireshark", Icon: SiWireshark, color: "#1679a7" },
      { name: "Metasploit", Icon: SiMetasploit, color: "#2596cd" },
      { name: "Git", Icon: SiGit, color: "#f05032" },
    ],
  },
  {
    accent: "violet",
    title: "Cloud & Governance",
    tools: [
      { name: "AWS", Icon: FaAws, color: "#ff9900" },
      { name: "Google Cloud", Icon: SiGooglecloud, color: "#4285f4" },
      { name: "Cloud Security", Icon: LuCloudCog, color: "#34d399" },
      { name: "NIST CSF & ISO 27001", Icon: LuShieldCheck, color: "#a78bfa" },
    ],
  },
];

function PlusIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 6v12M6 12h12" />
    </svg>
  );
}

import SEO from "../components/SEO";

export default function Home() {
  const [activeExpertise, setActiveExpertise] = useState(null);
  const heroRef = useRef(null);
  const colorPortraitRef = useRef(null);
  const portraitBoundsRef = useRef(null);
  const spotlightFrameRef = useRef(0);
  const spotlightEnabledRef = useRef(false);

  const moveSpotlight = useCallback((clientX, clientY) => {
    const colorPortrait = colorPortraitRef.current;

    if (!colorPortrait) {
      return;
    }

    const bounds =
      portraitBoundsRef.current ?? colorPortrait.getBoundingClientRect();

    portraitBoundsRef.current = bounds;
    cancelAnimationFrame(spotlightFrameRef.current);
    spotlightFrameRef.current = requestAnimationFrame(() => {
      colorPortrait.style.setProperty(
        "--spotlight-x",
        `${clientX - bounds.left}px`,
      );
      colorPortrait.style.setProperty(
        "--spotlight-y",
        `${clientY - bounds.top}px`,
      );
    });
  }, []);

  const handleSpotlightMove = useCallback(
    (event) => {
      const hasFinePointer = window.matchMedia(
        "(hover: hover) and (pointer: fine)",
      ).matches;

      if (!hasFinePointer || !colorPortraitRef.current) {
        return;
      }

      if (!spotlightEnabledRef.current) {
        spotlightEnabledRef.current = true;
        portraitBoundsRef.current =
          colorPortraitRef.current.getBoundingClientRect();
        colorPortraitRef.current.dataset.active = "true";
      }

      moveSpotlight(event.clientX, event.clientY);
    },
    [moveSpotlight],
  );

  const handleSpotlightLeave = useCallback(() => {
    spotlightEnabledRef.current = false;
    portraitBoundsRef.current = null;
    cancelAnimationFrame(spotlightFrameRef.current);

    if (colorPortraitRef.current) {
      colorPortraitRef.current.dataset.active = "false";
    }
  }, []);

  const handleSpotlightBoundary = useCallback(
    (event) => {
      if (
        spotlightEnabledRef.current &&
        heroRef.current &&
        !heroRef.current.contains(event.target)
      ) {
        handleSpotlightLeave();
      }
    },
    [handleSpotlightLeave],
  );

  const expertisePanel = activeExpertise
    ? {
        kicker: "Core capability",
        titleStrong: activeExpertise.headline,
        titleLight: activeExpertise.subline,
        summary: activeExpertise.summary,
      }
    : expertiseDefault;

  useEffect(() => {
    const invalidatePortraitBounds = () => {
      portraitBoundsRef.current = null;
    };

    window.addEventListener("resize", invalidatePortraitBounds, {
      passive: true,
    });

    return () => {
      window.removeEventListener("resize", invalidatePortraitBounds);
      cancelAnimationFrame(spotlightFrameRef.current);
    };
  }, []);

  return (
    <div
      onMouseMoveCapture={handleSpotlightBoundary}
      onMouseLeave={handleSpotlightLeave}
    >
      <SEO />
      <section
        ref={heroRef}
        className="hero"
        id="home"
        aria-labelledby="portfolio-title"
        onMouseEnter={handleSpotlightMove}
        onMouseMove={handleSpotlightMove}
        onMouseLeave={handleSpotlightLeave}
      >
        <div className="availability">
          <span>Available for international roles</span>
          <strong>Ariyarathna B.D.T.S.P.</strong>
        </div>

        <h1 id="portfolio-title" aria-label="Theneth">
          Theneth
        </h1>

        <div className="portrait-wrap" aria-hidden="true">
          <img
            className="portrait-image portrait-image-mono"
            src="/theneth-sanjuka.png"
            alt=""
            draggable="false"
            fetchPriority="high"
          />
          <img
            ref={colorPortraitRef}
            className="portrait-image portrait-image-color"
            src="/theneth-sanjuka.png"
            alt=""
            draggable="false"
          />
        </div>

        <div className="hero-copy hero-copy-left">
          <span className="copy-rule" aria-hidden="true" />
          <p>
            I build secure, reliable software with security engineered into
            every stage—from architecture and code to cloud deployment.
          </p>
        </div>

        <div className="hero-copy hero-copy-right">
          <span className="copy-rule" aria-hidden="true" />
          <p>
            Turning complex security risks into practical defenses across
            applications, cloud infrastructure and delivery pipelines.
          </p>
        </div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="about-content">
          <h2 id="about-title">
            <strong>Cybersecurity Specialist</strong>
            <span>Secure Software &amp; Systems</span>
          </h2>

          <p className="about-lead">
            I protect applications, cloud platforms and delivery
            pipelines—using development expertise to build security in from
            design to deployment.
          </p>

          <p className="about-body">
            I’m a Cybersecurity Specialist based in Colombo, Sri Lanka, with
            experience across application security, DevSecOps, vulnerability
            assessment, cloud and network security. My development background
            helps me turn security requirements into practical controls—from
            architecture and code review to vulnerability remediation and
            secure CI/CD.
          </p>

          <a
            className="about-link"
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <span className="about-link-icon">
              <PlusIcon />
            </span>
            <span>My profile</span>
          </a>
        </div>

        <figure className="about-portrait">
          <img
            src="/assets/about-portrait-cutout.png"
            alt="Ariyarathna B.D.T.S.P. in professional attire"
          />
        </figure>
      </section>

      <section
        className="expertise-section"
        id="expertise"
        aria-labelledby="expertise-title"
      >
        <div className="expertise-layout">
          <header className="expertise-heading">
            <div
              className={`expertise-copy-state${
                activeExpertise ? " is-detail" : ""
              }`}
              key={activeExpertise?.title ?? "core-expertise"}
              aria-live="polite"
            >
              <span className="expertise-kicker">{expertisePanel.kicker}</span>
              <h2 id="expertise-title">
                <strong>{expertisePanel.titleStrong}</strong>
                <span>{expertisePanel.titleLight}</span>
              </h2>
              <p>{expertisePanel.summary}</p>
            </div>
          </header>

          <div className="expertise-grid">
            {expertiseGrid.map((expertise) => (
              <article
                className={`expertise-card${
                  activeExpertise?.title === expertise.title ? " is-active" : ""
                }`}
                key={expertise.title}
                tabIndex="0"
                aria-label={expertise.title}
                onMouseEnter={() => setActiveExpertise(expertise)}
                onFocus={() => setActiveExpertise(expertise)}
                onMouseLeave={() => setActiveExpertise(null)}
                onBlur={() => setActiveExpertise(null)}
              >
                <div className="expertise-card-media">
                  <img
                    src={expertise.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section-dark toolkit-section" id="toolkit" aria-labelledby="toolkit-title">
        <div className="toolkit">
          <div className="toolkit-groups">
            {toolkitGroups.map((group) => (
              <section
                className={`toolkit-group toolkit-group-${group.accent}`}
                key={group.title}
                aria-labelledby={`toolkit-${group.accent}`}
              >
                <h4 id={`toolkit-${group.accent}`}>{group.title}</h4>
                <ul className="toolkit-icons">
                  {group.tools.map(({ name, Icon, color }) => (
                    <li key={name}>
                      <span
                        className="toolkit-icon"
                        style={{ "--tool-color": color }}
                        title={name}
                        aria-label={name}
                      >
                        {Icon ? (
                          <Icon aria-hidden="true" />
                        ) : (
                          <span className="toolkit-mojo-mark" aria-hidden="true">
                            Mo
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="toolkit-info">
            <div className="toolkit-heading">
              <span>Technical index</span>
              <h3 id="toolkit-title">Technology &amp; Security Toolkit</h3>
            </div>
            <p className="toolkit-description">
              A comprehensive arsenal of tools and technologies I use to architect secure solutions, 
              uncover vulnerabilities, and integrate robust defenses across the software development lifecycle. 
              From low-level system automation to cloud infrastructure, I select the right combination of tools 
              to minimize risk, ensure compliance, and maximize operational resilience.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
