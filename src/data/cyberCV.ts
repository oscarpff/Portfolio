import { getAssetUrl } from "@/lib/asset-utils";

// ============================================================
// CV shown in the Cybersecurity section (#cv).
// To update the downloadable PDF, replace the file:
//   public/cv/OscarPerezFernandez_CV.pdf
// (keep the same file name). Edit the text below if the
// content of the CV changes.
// ============================================================

export const CV_PDF_FILENAME = "OscarPerezFernandez_CV.pdf";
export const CV_PDF_URL = getAssetUrl(`/cv/${CV_PDF_FILENAME}`);

export const cvProfile = {
  title: "Cybersecurity Consultant | PMO – Technical Office",
  summary:
    "Cybersecurity professional with a GRC focus and experience in technology project management and operational coordination. I currently work at Isdefe, in the Technical Office of the COCS, performing PMO (Project Management Office) duties, asset management through a CMDB, escalation tracking and regulatory compliance oversight. Technical background in systems, networks and programming, with knowledge of ISO/IEC 27001, ENS and GDPR.",
};

export const cvExperience = [
  {
    period: "Apr. 2026 – Present",
    role: "Cybersecurity Consultant | PMO – Technical Office",
    company: "Isdefe",
    bullets: [
      "Management and maintenance of the CMDB (Configuration Management Database) for the registration, inventory and control of assets of the entities attached to the Cybersecurity Operations Centre (COCS) of the Spanish General State Administration (AGE).",
      "Project tracking and control from the Technical Office, including progress monitoring, coordination and reporting.",
      "Management and follow-up of escalations and incidents, supervising their evolution and resolution.",
      "Oversight of compliance with applicable regulations and requirements.",
      "Task automation and information processing through scripting.",
    ],
  },
  {
    period: "Feb. 2025 – Aug. 2025",
    role: "Software Developer & Innovation",
    company: "Renault Technology Spain",
    bullets: [
      "Monitoring and validation of secure communications in connected systems.",
      "Analysis of traffic and critical data in Linux environments.",
      "Log collection, processing and analysis using Python and SQL.",
      "Support in detecting and resolving technical incidents in communication systems.",
      "Work with MQTT and CAN protocols in industrial and automotive systems.",
      "Documentation of processes and results following technical procedures.",
    ],
  },
];

export const cvEducation = [
  {
    period: "2025 – 2026",
    degree: "Master's Degree in Cybersecurity",
    school: "University of Salamanca",
    thesisLabel: "Master's Thesis",
    thesis:
      "Hybrid PQC-OTS cryptographic protocol for data-stream integrity in Tactical Edge Computing environments.",
  },
  {
    period: "2021 – 2025",
    degree: "Bachelor's Degree in Interactive 3D Applications and Video Game Development",
    school: "University of Salamanca",
    thesisLabel: "Bachelor's Thesis",
    thesis:
      "Design and implementation of a real-time monitoring system based on the collection and analysis of timestamped data, focused on traceability, event management and system supervision.",
  },
];

export const cvSkills = [
  { area: "GRC & Compliance", items: ["ENS", "GDPR", "ISO/IEC 27001"] },
  { area: "Project Management", items: ["Project tracking", "Reporting", "Escalation management"] },
  { area: "Asset Management", items: ["CMDB", "Inventory", "Change control"] },
  { area: "Tools", items: ["Jira", "Confluence", "Trello", "Tadpole DB Hub"] },
  { area: "Programming & Data", items: ["Python", "SQL", "MySQL", "C"] },
];

export const cvClearance =
  "Active Personal Security Clearance (HPS): National, NATO, European Union (EU) and European Space Agency (ESA).";

export const cvCertificates = [
  { name: "ISO/IEC 27001 Security Associate", issuer: "SkillFront", year: "2025" },
  { name: "Generative AI", issuer: "University of Salamanca", year: "2025" },
];

export const cvLanguages = [
  { language: "Spanish", level: "Native" },
  { language: "English", level: "B2" },
  { language: "Italian", level: "A2" },
];
