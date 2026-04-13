import type { ProductVisual } from '../components/ProductCanvas';

export type NavItem = {
  label: string;
  href: string;
};

export type FeatureCard = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  link: string;
  statLabel: string;
  statValue: string;
  visual: ProductVisual;
  tone: 'mint' | 'peach' | 'sky' | 'lilac' | 'sand';
  /** When set, shows video in iPhone frame instead of ProductCanvas */
  videoSrc?: string;
};

export const navItems: NavItem[] = [
  { label: 'Platform', href: '/platform' },
  { label: 'Videos', href: '/videos' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' },
];

export const trustLogos = [
  'Harbor Ridge Health',
  'Northwell Post-Acute Network',
  'Evergreen Recovery Group',
];

export const trustBadges = [
  'HIPAA Compliant',
  'PCC Integrated',
];

export const painPoints = [
  {
    title: 'Discharge-to-ready bottlenecks',
    text: 'Beds stay idle because EVS, nursing, maintenance, and admissions are not working from one accountable task timeline.',
  },
  {
    title: 'No owner-level accountability',
    text: 'Leaders cannot quickly see who started, delayed, or completed critical tasks across roles, shifts, and facilities.',
  },
  {
    title: 'Recurring compliance drift',
    text: 'Weekly, monthly, and quarterly requirements often live in manual trackers, causing missed deadlines and avoidable audit exposure.',
  },
  {
    title: 'Operational blind spots',
    text: 'Payer mix, Medicare-days-left risk, grievance patterns, and real bed availability are hard to assess fast enough for action.',
  },
];

export const outcomes = [
  {
    title: 'Faster discharge turnaround',
    text: 'Discharge-triggered notifications route the next steps to each team and capture completion in sequence.',
  },
  {
    title: 'Role-level SLA visibility',
    text: 'Administrators and admissions leaders can see response and completion times by person, unit, and workflow.',
  },
  {
    title: 'Automated compliance execution',
    text: 'Recurring maintenance, cleaning, and regulatory tasks are pre-scheduled and pushed to the right team on the right day.',
  },
  {
    title: 'AI-guided improvement',
    text: 'The AI agent finds recurring bottlenecks and underperforming areas so leadership can intervene before problems escalate.',
  },
];

export const featureCards: FeatureCard[] = [
  {
    id: 'discharge-turnover',
    title: 'Discharge Turnover Orchestration',
    summary: 'The moment a patient discharges, tasks are routed to each role needed to make that bed placement-ready.',
    detail: 'Nursing, EVS, maintenance, and admissions each get accountable notifications and check-offs with full timestamp history.',
    link: '/platform',
    statLabel: 'Discharge-to-ready bed',
    statValue: 'Tracked to the minute',
    visual: 'floor',
    tone: 'mint',
  },
  {
    id: 'admissions-lifecycle',
    title: 'Admissions Agreement Accountability',
    summary: 'Track admissions from referral through signed agreement with clear ownership at every step.',
    detail: 'See who completed packet tasks, when signatures were captured, and where handoffs are slowing down.',
    link: '/platform',
    statLabel: 'Referral to signed packet',
    statValue: 'Owner + timestamp',
    visual: 'documents',
    tone: 'sky',
    videoSrc: '/grievance-form-demo.mp4',
  },
  {
    id: 'facility-ai-assistant',
    title: 'Facility AI Assistant',
    summary: 'Ask your facility questions in plain language and get immediate answers on accountability and compliance gaps.',
    detail:
      'Ask who is behind, which units are below standard, and what is at risk before survey. AI compares expected vs actual performance and highlights where to act first.',
    link: '/platform',
    statLabel: 'Time to accountability signal',
    statValue: 'Seconds',
    visual: 'dashboard',
    tone: 'sky',
  },
  {
    id: 'recurring-compliance',
    title: 'Recurring Compliance Automation',
    summary: 'Pre-schedule weekly, monthly, and quarterly tasks and notify the right teams automatically.',
    detail: 'From generator checks to cleaning and maintenance workflows, each task is assigned, completed, and logged on time.',
    link: '/security',
    statLabel: 'Compliance calendar coverage',
    statValue: '365 days pre-scheduled',
    visual: 'alerts',
    tone: 'lilac',
  },
  {
    id: 'end-of-day-command',
    title: 'End-of-Day Command Report',
    summary: 'Close the day with live facility status, planned discharges, pending referrals, and lost opportunities.',
    detail: 'Leadership and marketers can review what changed, what is blocked, and which beds or rooms are placement-ready.',
    link: '/platform',
    statLabel: 'Daily operational summary',
    statValue: 'One view',
    visual: 'census',
    tone: 'sand',
  },
];

export const workflowSteps = ['Discharge', 'Assign', 'Complete', 'Verify', 'Improve'];

export const metrics = [
  {
    label: 'Faster discharge-to-ready bed',
    value: '42%',
    snippet: 'Automated role routing reduced average turnaround from discharge to placement-ready status.',
  },
  {
    label: 'On-time task completion',
    value: '96%',
    snippet: 'Teams improved completion of assigned operational and compliance tasks within defined SLAs.',
  },
  {
    label: 'Admin follow-up recovered',
    value: '12 hrs/week',
    snippet: 'Leadership reclaimed time by replacing manual follow-up calls with live accountability dashboards.',
  },
];

export const testimonial = {
  quote:
    'ComplyCare.io gave us full accountability across every role. We can now see who did what, when it happened, and where to fix delays before they hurt operations.',
  name: 'Katherine Liu',
  title: 'VP Operations',
  organization: 'Regional Post-Acute Group',
};

export const securityModules = [
  {
    title: 'Role-based access control',
    text: 'Permission tiers mapped by role, facility, and workflow responsibility with policy-driven access boundaries.',
  },
  {
    title: 'Immutable audit logs',
    text: 'Every critical workflow event is captured with actor, timestamp, and event context for defensible traceability.',
  },
  {
    title: 'Encryption by default',
    text: 'Data encrypted in transit and at rest with managed key policies and secure service-to-service communication.',
  },
  {
    title: 'Retention controls',
    text: 'Policy-aligned retention and export governance to support legal, regulatory, and payer compliance obligations.',
  },
];

export const platformCapabilities = {
  web: [
    'Role-based accountability timeline for discharge, bed-ready, admissions, and compliance workflows',
    'Discharge-triggered orchestration showing who owns each next step and how fast it is completed',
    'Admissions-to-signature tracking with full owner and timestamp visibility',
    'Payer mix and Medicare-days-left dashboard with proactive risk alerts',
    'Grievance and compliance dashboards with defensible audit evidence exports',
    'Conversational AI for identifying bottlenecks, missed SLAs, and underperforming areas',
    'PointClickCare integration for synchronized census and operational context',
  ],
  mobile: [
    'Task inbox by role with due-now notifications for discharge, cleaning, maintenance, and compliance work',
    'One-tap task completion with timestamped accountability logs',
    'Live bed visibility, room lookup, and placement-ready filtering for admissions and marketers',
    'Secure e-signature and admissions workflow continuity on the floor',
    'Real-time operational alerts and follow-through tracking across teams',
  ],
};

export const rolesServed = [
  'Facility administrators',
  'Admissions coordinators',
  'Admissions directors',
  'Nursing leadership',
  'Compliance officers',
  'Environmental services teams',
  'Maintenance teams',
  'Marketing/liaison teams',
  'Regional and executive operators',
];

export const companyValues = [
  {
    title: 'Operational clarity',
    text: 'We unify teams around one live source of truth for decisions that affect patient flow and quality outcomes.',
  },
  {
    title: 'Compliance by design',
    text: 'Every workflow produces defensible evidence so teams do not have to choose between speed and regulatory confidence.',
  },
  {
    title: 'Enterprise reliability',
    text: 'We design for multi-site health systems where uptime, governance, and data integrity are business critical.',
  },
];

export const footerColumns = [
  {
    heading: 'Product',
    links: [
      { label: 'Platform', href: '/platform' },
      { label: 'Security', href: '/security' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Payments', href: '/payments' },
      { label: 'PCC eSign Integration', href: '/solutions/pointclickcare-esign-admissions' },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { label: 'Post-Acute Care', href: '/solutions/post-acute' },
      { label: 'Accountability Ops', href: '/platform' },
      { label: 'Audit Readiness', href: '/security' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Resource Center', href: '/resources' },
      { label: 'Product videos', href: '/videos' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact Sales', href: '/contact' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/about' },
      { label: 'Legal', href: '/security' },
    ],
  },
];
