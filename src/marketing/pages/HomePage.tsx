import { PageMeta } from '../components/PageMeta';
import { SiteShell } from '../components/SiteShell';
import { FinalCtaSection } from '../components/home/FinalCtaSection';
import { FlowAnimationSection } from '../components/home/FlowAnimationSection';
import { HeroSection } from '../components/home/HeroSection';
import { MetricsSection } from '../components/home/MetricsSection';
import { StorybookPanelsSection } from '../components/home/StorybookPanelsSection';

export function HomePage() {
  return (
    <>
      <PageMeta
        title="Compliance Operating System for Post-Acute Care"
        description="ComplyCare.io unifies admissions, bed operations, documentation, and audit readiness for post-acute care organizations."
        path="/"
      />
      <SiteShell>
        <HeroSection />
        <FlowAnimationSection />
        <StorybookPanelsSection />
        <MetricsSection />
        <FinalCtaSection />
      </SiteShell>
    </>
  );
}
