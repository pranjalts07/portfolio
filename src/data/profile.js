/* ============================================================
   PROFILE DATA — single source of truth.
   Reconciled against Pranjal's AI/ML résumé. Every number below
   is taken directly from that document.
   ============================================================ */

export const profile = {
  name: "Pranjal T S",
  first: "Pranjal",
  last: "T S",

  role: "Machine Learning Engineer",
  location: "San Francisco, CA",
  status: "Open to internships · Full-time 2027",

  // Stated plainly: a recruiter who has to guess at authorization usually
  // guesses against you.
  authorization: "F-1 · CPT/OPT eligible",

  tagline:
    "I build machine learning systems that hold up outside the notebook — " +
    "RAG pipelines, computer-vision inspection, and churn models that rank by revenue at risk.",

  // Résumé PDF lives in /public with this exact name.
  resumeUrl: "/Pranjal_TS_Resume.pdf",

  socials: {
    github: "https://github.com/pranjalts07",
    linkedin: "https://www.linkedin.com/in/pranjal-ts/",
    email: "pranjal.tariga.suresh@gmail.com",
  },
};

/* --- Hero name lines (rendered as masked reveal) --- */
export const heroLines = ["Pranjal", "T S"];

/* --- Marquee strip --- */
export const marquee = [
  "Python",
  "PyTorch",
  "Machine Learning",
  "RAG",
  "NLP",
  "Computer Vision",
  "Transformers",
  "Hugging Face",
  "AWS",
  "Docker",
];

/* --- About --- */
export const about = {
  lead:
    "I care about models that survive contact with production and metrics " +
    "that mean something to the business.",
  body: [
    "I'm an MS Statistics student at California State University, East Bay " +
      "(Data Science concentration, graduating June 2027), working across applied " +
      "machine learning, NLP, and computer vision.",
    "My work tends to start where a model meets a hard constraint — a latency " +
      "budget, a compute bill, or an answer that has to be right. That's produced a " +
      "medical RAG assistant that cut hallucination from 27% to 6%, a dual-model " +
      "vision system inspecting production bottles in 0.04s, and an evolutionary " +
      "LoRA search that removed 98% of fine-tuning cost. I'm also IEEE-published, " +
      "on machine-learning prediction of healthy life expectancy.",
  ],
  // Mirrors the résumé's Technical Skills section.
  skills: [
    {
      label: "Languages",
      items: ["Python", "R", "SQL"],
    },
    {
      label: "Libraries",
      items: [
        "PyTorch",
        "TensorFlow",
        "Keras",
        "scikit-learn",
        "Hugging Face Transformers",
        "pandas",
        "NumPy",
        "OpenCV",
        "Matplotlib",
        "Seaborn",
      ],
    },
    {
      label: "Machine Learning",
      items: [
        "Classification",
        "Regression",
        "Clustering",
        "CNNs",
        "Transformers",
        "RAG",
        "NLP",
        "Computer Vision",
        "Feature Engineering",
        "Model Evaluation",
      ],
    },
    {
      label: "Cloud & Tools",
      items: [
        "AWS",
        "Docker",
        "Git",
        "Jupyter",
        "Google Colab",
        "Weights & Biases",
        "Hugging Face Hub",
      ],
    },
  ],
  // Add any certifications here and the block renders itself.
  certifications: [],
};

/* --- Impact band (count-up stats) --- */
export const impactStats = [
  { value: 365, prefix: "$", suffix: "K", label: "At-risk revenue identified (Churn Radar)" },
  { value: 10000, suffix: "+", label: "Security events processed (Toyota Kirloskar)" },
  { value: 6, suffix: "%", label: "Hallucination rate, down from 27% (MediQuery)" },
  { value: 1, suffix: "", label: "IEEE peer-reviewed publication" },
];

/* --- Experience (matches résumé's Professional Experience) --- */
export const experience = [
  {
    company: "Toyota Kirloskar Motor Private Limited",
    role: "Applied Machine Learning Intern",
    period: "Jan — Jun 2025",
    where: "Bangalore, India",
    blurb:
      "Applied ML on the security operations side — turning raw incident streams into metrics the team could actually staff against.",
    // Impact first: a screener reads bullet one and skims the rest.
    bullets: [
      "Identified 31% of P2 incidents breaching SLA during night shifts, surfacing a critical staffing gap and enabling targeted resource reallocation across security operations.",
      "Replaced the manual monthly reporting process by automating incident analysis workflows, cutting report generation time by 70% and saving 15+ analyst hours per month.",
      "Built the Automated Incident Response Metric System behind both: processed 10,000+ real security events, applied token-based classification, and generated SLA metrics to support priority-based response.",
    ],
  },
];

/* --- Featured projects (large, with pipeline visuals + metric counters) --- */
export const featured = [
  {
    no: "01",
    name: "MediQuery",
    flag: "RAG Healthcare Assistant",
    scope: "Solo build",
    description:
      "A retrieval-augmented medical chatbot constrained to verified sources. NIH PubMed and medical encyclopedias are normalised into a clean passage corpus, retrieved, then reranked before generation — so the model answers from evidence rather than memory.",
    metrics: [
      { value: 6, suffix: "%", label: "hallucination rate, from 27%" },
      { value: 92, suffix: "%", label: "answer accuracy" },
      { value: 1.4, suffix: "s", label: "response time" },
    ],
    tags: ["Python", "RAG", "Transformers", "NLP", "Hugging Face"],
    links: {
      github: "https://github.com/pranjalts07/mediquery",
      demo: null,
    },
    pipeline: {
      title: "Answer path",
      nodes: [
        { label: "NIH PubMed + medical encyclopedias" },
        { label: "normalise → clean passages", detail: "1,588" },
        { label: "retrieve from verified sources only", hot: true },
        { label: "rerank for faithfulness", detail: "80% → 91.7%" },
        { label: "grounded answer", detail: "< 1.4s" },
      ],
    },
  },
  {
    no: "02",
    name: "DefectScope",
    flag: "Production Defect Detection",
    scope: "Solo build",
    description:
      "An automated surface-inspection system for production bottles. A DenseNet classifier alone was not reliable on the real line, so it runs alongside an autoencoder that cross-verifies by reconstruction — two models that have to agree before a unit passes.",
    metrics: [
      { value: 0.04, suffix: "s", label: "per-unit inspection on GPU, from 5s" },
      { value: 93, suffix: "%", label: "defect precision, from 50%" },
      { value: 2, suffix: "", label: "models cross-verifying" },
    ],
    tags: ["PyTorch", "Computer Vision", "CNNs", "OpenCV", "Autoencoders"],
    links: {
      github: "https://github.com/pranjalts07/defectscope",
      demo: null,
    },
    pipeline: {
      title: "Inspection path",
      nodes: [
        { label: "bottle surface capture" },
        { label: "DenseNet classifier" },
        { label: "autoencoder reconstruction", detail: "cross-check", hot: true },
        { label: "dual-model agreement gate" },
        { label: "pass / defect", detail: "0.04s" },
      ],
    },
  },
  {
    no: "03",
    name: "Churn Radar",
    flag: "Customer Churn Prediction",
    scope: "Solo build",
    description:
      "A churn model for telecom customers that ranks by revenue at risk rather than probability alone, so retention effort goes where it pays. Blank billing charges and inconsistent service categories were resolved into a stable 33-feature set before modelling.",
    metrics: [
      { value: 365, prefix: "$", suffix: "K", label: "at-risk revenue identified" },
      { value: 58, suffix: "%", label: "of churners caught" },
      { value: 80, suffix: "%", label: "ranked above non-churners" },
    ],
    tags: ["Python", "scikit-learn", "pandas", "Feature Engineering"],
    // A screenshot of the running app replaces the pipeline diagram when present.
    image: "/projects/churnsense.jpg",
    links: {
      github: "https://github.com/pranjalts07/customer-churn-prediction",
      demo: "https://churnsense-qj1h.onrender.com",
    },
    pipeline: {
      title: "Scoring path",
      nodes: [
        { label: "telecom billing + service data" },
        { label: "resolve blanks → feature set", detail: "33", hot: true },
        { label: "logistic regression model" },
        { label: "rank by churn × revenue" },
        { label: "prioritised outreach list", detail: "$365K" },
      ],
    },
  },
];

/* --- Other projects (compact index) — add rows here as you build them --- */
export const projectsIndex = [];

/* --- Research / publication --- */
export const publication = {
  badge: "IEEE · Peer-Reviewed",
  title:
    "Healthy Life Expectancy (HALE) Analysis and Prediction using Machine Learning",
  meta: "Pranjal T S et al. · 2025 International Conference · IEEE, 2025",
  stats: [],
  url: "https://ieeexplore.ieee.org/document/10987496",
};

/* --- Education --- */
export const education = [
  {
    years: "2025 — 2027",
    school: "California State University, East Bay",
    degree: "M.S. Statistics",
    note: "Data Science concentration · Hayward, CA · Aug 2025 – Jun 2027",
  },
  {
    years: "2021 — 2025",
    school: "PES University",
    degree: "B.Tech, Computer Science",
    note: "Bengaluru, India · Sep 2021 – May 2025",
  },
];

export const contact = {
  pre: "What's next",
  blurb:
    "I'm looking for machine learning and data science roles — internships for " +
    "Fall 2026, Winter, and Summer 2027, and full-time from June 2027 onward. " +
    "Applied ML, NLP, computer vision, and the systems that carry them. I'm an " +
    "international student on an F-1 visa, eligible to work through CPT and OPT. " +
    "Recruiters and engineers shipping models to real users, my inbox is open.",
};
