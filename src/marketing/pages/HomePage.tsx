import { PageMeta } from '../components/PageMeta';
import { SiteShell } from '../components/SiteShell';
import { FeatureRailSection } from '../components/home/FeatureRailSection';
import { FinalCtaSection } from '../components/home/FinalCtaSection';
import { FlowAnimationSection } from '../components/home/FlowAnimationSection';
import { HeroSection } from '../components/home/HeroSection';
import { MetricsSection } from '../components/home/MetricsSection';
import { SecurityPreviewSection } from '../components/home/SecurityPreviewSection';
import { StorybookPanelsSection } from '../components/home/StorybookPanelsSection';
import { WorkflowSection } from '../components/home/WorkflowSection';

export function HomePage() {
  return (
    <>
      <PageMeta
        title="Compliance Operating System for Post-Acute Care"
        description="ComplyCare.ai unifies admissions, bed operations, documentation, and audit readiness for post-acute care organizations."
        path="/"
      />
      <SiteShell>
        <HeroSection />
        <FlowAnimationSection />
        <StorybookPanelsSection />
        <FeatureRailSection />
        <WorkflowSection />
        <MetricsSection />
        <SecurityPreviewSection />
        <FinalCtaSection />
      </SiteShell>
    </>
  );
}
