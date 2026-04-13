export type BlogPost = {
  id: number;
  title: string;
  subtitle: string;
  excerpt: string;
  content?: string;
  author: string;
  date: string;
  /** Set when content was materially revised; drives schema and optional “Updated” label. */
  dateModified?: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  originalData?: boolean;
  featured?: boolean;
  caseStudy?: boolean;
  proprietaryResearch?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Hidden Cost of Manual Bed Tracking: Analysis of 50 SNFs",
    subtitle: "Our exclusive research reveals how manual processes cost facilities an average of $804,000 annually",
    excerpt: "We analyzed data from 50 skilled nursing facilities to quantify the true cost of manual bed tracking. The results will shock you.",
    // content is lazy loaded in BlogPostPage.tsx
    author: "Isaac Greenberg",
    date: "2024-12-15",
    readTime: "8 min",
    category: "Research",
    tags: ["Data Analysis", "Cost Savings", "Efficiency"],
    originalData: true,
    featured: true,
    image: "/blog-images/manual-bed-tracking.jpg"
  },
  {
    id: 2,
    title: "Case Study: How Oak Hills SNF Saved $47,280 in Year One",
    subtitle: "A detailed look at real implementation results and the strategies that drove success",
    excerpt: "When Oak Hills implemented BedTracker, they transformed their entire admissions process. Here's exactly how they did it.",
    // content is lazy loaded in BlogPostPage.tsx
    author: "Sarah Chen",
    date: "2024-12-10",
    readTime: "6 min",
    category: "Case Study",
    tags: ["Success Story", "ROI", "Implementation"],
    caseStudy: true,
    image: "/blog-images/oak-hills-success.jpg"
  },
  {
    id: 3,
    title: "The BedTracker Efficiency Framework: A New Approach to SNF Operations",
    subtitle: "Our proprietary methodology for measuring and optimizing facility efficiency",
    excerpt: "After working with 100+ facilities, we've developed a framework that consistently improves operational efficiency by 40% or more.",
    // content is lazy loaded in BlogPostPage.tsx
    author: "Dr. Michael Roberts",
    date: "2024-12-05",
    readTime: "10 min",
    category: "Framework",
    tags: ["Methodology", "Best Practices", "Metrics"],
    proprietaryResearch: true,
    image: "/blog-images/efficiency-framework.jpg"
  },
  {
    id: 4,
    title: "Survey-Ready Documentation: What State Inspectors Actually Look For",
    subtitle: "Insider insights from former state surveyors on documentation that prevents violations",
    excerpt: "We interviewed former state surveyors to understand exactly what they look for during inspections. The insights might surprise you.",
    // content is lazy loaded in BlogPostPage.tsx
    author: "Lisa Park",
    date: "2024-11-28",
    readTime: "7 min",
    category: "Compliance",
    tags: ["Inspections", "Documentation", "Risk Management"],
    image: "/blog-images/survey-documentation.jpg"
  },
  {
    id: 5,
    title: "The Mathematics of Patient Placement: Optimizing for Care and Revenue",
    subtitle: "How data-driven placement decisions can improve both patient outcomes and bottom line",
    excerpt: "Using machine learning analysis of placement patterns, we've identified the optimal approach to patient assignments.",
    // content is lazy loaded in BlogPostPage.tsx
    author: "Dr. James Wilson",
    date: "2024-11-20",
    readTime: "9 min",
    category: "Analytics",
    tags: ["Data Science", "Patient Care", "Revenue"],
    originalData: true,
    image: "/blog-images/patient-placement-data.jpg"
  },
  {
    id: 6,
    title: "From Referral to Signed Admission Agreement: Owning Every Step in SNF Intake",
    subtitle: "How skilled nursing teams cut packet delays, handoffs, and guesswork between referral and a complete signed admissions file",
    excerpt: "Paper chasing and unclear ownership kill admissions speed. Here is a practical way to run referral-to-signature workflow without losing accountability.",
    // content is lazy loaded in BlogPostPage.tsx
    author: "ComplyCare Team",
    date: "2025-03-10",
    readTime: "9 min",
    category: "Admissions",
    tags: ["Admissions", "E-Signature", "PointClickCare", "SNF Operations"],
    image: "/blog-images/admissions-workflow.jpg"
  },
  {
    id: 7,
    title: "SNF Grievance Tracking That Holds Up When Surveyors Ask for Proof",
    subtitle: "What to document beyond the form so grievance workflows are complete, dated, and defensible",
    excerpt: "A filled grievance form is not enough. Teams that pass scrutiny show intake, investigation, response, and closure with owners and timestamps.",
    // content is lazy loaded in BlogPostPage.tsx
    author: "ComplyCare Team",
    date: "2025-03-17",
    readTime: "8 min",
    category: "Compliance",
    tags: ["Grievances", "Survey Readiness", "Documentation"],
    image: "/blog-images/grievance-tracking.jpg"
  },
  {
    id: 8,
    title: "The First 21 Days: A Real Check-In Schedule for Residents and Families",
    subtitle: "Why day-one, day-three, and week-two touchpoints matter—and how SNFs catch friction before it escalates",
    excerpt: "Concierge-style follow-up is not a brochure perk. Structured check-ins on day 1, 3, 7, and beyond surface questions early while the resident is still in your building.",
    // content is lazy loaded in BlogPostPage.tsx
    author: "ComplyCare Team",
    date: "2025-03-25",
    readTime: "8 min",
    category: "Resident Experience",
    tags: ["Concierge", "Satisfaction", "Family Communication"],
    image: "/blog-images/concierge-checkins.jpg"
  },
  {
    id: 9,
    title: "Discharge to Bed-Ready: One Timeline for Nursing, EVS, and Maintenance",
    subtitle:
      "Why the handoff breaks without a single owner chain—and how facilities cut idle-bed time when every role shares one clock",
    excerpt:
      "From discharge order to placement-ready bed: how SNFs align nursing, EVS, and maintenance on one accountable sequence instead of three parallel guessing games.",
    // content is lazy loaded in BlogPostPage.tsx
    author: "ComplyCare Team",
    date: "2026-03-18",
    readTime: "10 min",
    category: "Operations",
    tags: ["EVS", "Bed Turnover", "SNF Operations"],
    image: "/blog-images/workflow-checklist.jpg"
  },
  {
    id: 10,
    title: "Recurring Cleaning and Maintenance: Assignments, Inboxes, and Closing the Loop",
    subtitle:
      "Operational execution—not survey binders—is what keeps generator tests, room turns, and preventive rounds from slipping",
    excerpt:
      "How post-acute teams move from sticky-note compliance to who owns each task, when it is due, and how completion is logged without another spreadsheet.",
    // content is lazy loaded in BlogPostPage.tsx
    author: "ComplyCare Team",
    date: "2026-03-25",
    readTime: "9 min",
    category: "Operations",
    tags: ["Maintenance", "Compliance Tasks", "Operations"],
    image: "/blog-images/documentation-system.jpg"
  },
  {
    id: 11,
    title: "SNF Admission Agreement Compliance: What CMS Surveyors Are Looking for in 2026",
    subtitle: "Understanding recent F-tag updates and why paper admission packets are a major compliance risk.",
    excerpt: "CMS surveyors are cracking down on missing signatures in SNF admissions agreements. Here is how automating your referral-to-signature workflow fixes the problem.",
    author: "ComplyCare Team",
    date: "2026-04-14",
    readTime: "8 min",
    category: "Compliance",
    tags: ["Survey Readiness", "Admissions", "E-Signature"],
    image: "/blog-images/admissions-workflow.jpg"
  },
  {
    id: 12,
    title: "How Nursing Homes Can Cut Discharge Turnaround Time by 42%",
    subtitle: "Replacing the hallway whiteboard with automated role orchestration.",
    excerpt: "Every minute a bed sits empty after discharge costs revenue. See how passing the baton automatically between EVS, Maintenance, and Nursing cuts idle times significantly.",
    author: "ComplyCare Team",
    date: "2026-04-15",
    readTime: "7 min",
    category: "Operations",
    tags: ["Bed Turnover", "EVS", "ROI"],
    image: "/blog-images/workflow-checklist.jpg"
  },
  {
    id: 13,
    title: "How ComplyCare + PointClickCare Creates a Complete Compliance Stack",
    subtitle: "Why an EHR is not an accountability engine, and how integration solves the gap.",
    excerpt: "PointClickCare holds your medical records, but it doesn't force your maintenance team to check the generator on time. Learn why integrating them creates the ultimate SNF tech stack.",
    author: "ComplyCare Team",
    date: "2026-04-16",
    readTime: "6 min",
    category: "Integrations",
    tags: ["PointClickCare", "Tech Stack", "EHR"],
    image: "/pcc-marketplace-partner.png"
  }
];
