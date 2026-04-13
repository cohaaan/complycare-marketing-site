import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ScrollToTop } from './ScrollToTop';
import { AboutPage } from './marketing/pages/AboutPage';
import { ContactPage } from './marketing/pages/ContactPage';
import { HomePage } from './marketing/pages/HomePage';
import { NotFoundPage } from './marketing/pages/NotFoundPage';
import { PlatformPage } from './marketing/pages/PlatformPage';
import { PaymentsPage } from './marketing/pages/PaymentsPage';
import { PricingPage } from './marketing/pages/PricingPage';
import { BlogPage } from './marketing/pages/BlogPage';
import { BlogPostPage } from './marketing/pages/BlogPostPage';
import { ResourcesPage } from './marketing/pages/ResourcesPage';
import { VideosPage } from './marketing/pages/VideosPage';
import { SecurityPage } from './marketing/pages/SecurityPage';
import { SignInPage } from './marketing/pages/SignInPage';
import { SolutionsPostAcutePage } from './marketing/pages/SolutionsPostAcutePage';
import { PointClickCareIntegrationPage } from './marketing/pages/PointClickCareIntegrationPage';

import { NursingHomeComplianceSoftwarePage } from './marketing/pages/NursingHomeComplianceSoftwarePage';
import { SnfAdmissionAgreementCompliancePage } from './marketing/pages/SnfAdmissionAgreementCompliancePage';
import { DischargeTurnoverSoftwarePage } from './marketing/pages/DischargeTurnoverSoftwarePage';

export default function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/solutions/post-acute" element={<SolutionsPostAcutePage />} />
        <Route path="/solutions/pointclickcare-esign-admissions" element={<PointClickCareIntegrationPage />} />
        <Route path="/solutions/nursing-home-compliance-software" element={<NursingHomeComplianceSoftwarePage />} />
        <Route path="/solutions/snf-admission-agreement-compliance" element={<SnfAdmissionAgreementCompliancePage />} />
        <Route path="/solutions/discharge-turnover-software" element={<DischargeTurnoverSoftwarePage />} />
        <Route path="/solutions" element={<Navigate to="/solutions/post-acute" replace />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/payments/liberty" element={<PaymentsPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
