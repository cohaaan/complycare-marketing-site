import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AboutPage } from './marketing/pages/AboutPage';
import { ContactPage } from './marketing/pages/ContactPage';
import { HomePage } from './marketing/pages/HomePage';
import { NotFoundPage } from './marketing/pages/NotFoundPage';
import { PlatformPage } from './marketing/pages/PlatformPage';
import { PaymentsPage } from './marketing/pages/PaymentsPage';
import { PricingPage } from './marketing/pages/PricingPage';
import { ResourcesPage } from './marketing/pages/ResourcesPage';
import { SecurityPage } from './marketing/pages/SecurityPage';
import { SignInPage } from './marketing/pages/SignInPage';
import { SolutionsPostAcutePage } from './marketing/pages/SolutionsPostAcutePage';

export default function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/solutions/post-acute" element={<SolutionsPostAcutePage />} />
        <Route path="/solutions" element={<Navigate to="/solutions/post-acute" replace />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/payments/liberty" element={<PaymentsPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
