import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Features from "./pages/Features";
import UseCases from "./pages/UseCases";
import PricingPage from "./pages/PricingPage";
import Changelog from "./pages/Changelog";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import Contact from "./pages/Contact";
import Docs from "./pages/Docs";
import HelpCenter from "./pages/HelpCenter";
import Community from "./pages/Community";
import Guides from "./pages/Guides";
import DashboardAnalytics from "./pages/dashboard/Analytics";
import DashboardReports from "./pages/dashboard/Reports";
import DashboardTeam from "./pages/dashboard/Team";
import DashboardBilling from "./pages/dashboard/Billing";
import ScrollToHash from "./components/ScrollToHash";

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/features" element={<Features />} />
      <Route path="/use-cases" element={<UseCases />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/changelog" element={<Changelog />} />
      <Route path="/about" element={<About />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/press" element={<Press />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/help-center" element={<HelpCenter />} />
      <Route path="/community" element={<Community />} />
      <Route path="/guides" element={<Guides />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="analytics" element={<DashboardAnalytics />} />
        <Route path="reports" element={<DashboardReports />} />
        <Route path="team" element={<DashboardTeam />} />
        <Route path="billing" element={<DashboardBilling />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      </Routes>
    </>
  );
}
