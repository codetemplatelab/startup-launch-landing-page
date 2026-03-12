import { ArrowUpRight } from "lucide-react";
import PageShell from "../components/PageShell";
import PricingCard from "../components/PricingCard";
import SectionHeader from "../components/SectionHeader";
import FaqItem from "../components/FaqItem";
import { pricing, faqs } from "../data/landingData";

export default function PricingPage() {
  return (
    <PageShell
      eyebrow="Pricing"
      title="Flexible plans for every launch stage"
      subtitle="Scale your launch experience with clear pricing tiers and enterprise-ready support."
      pageName="Pricing"
      cta={
        <button className="btn-primary">
          View all plans
          <ArrowUpRight size={16} />
        </button>
      }
    >
      <section className="section">
        <div className="section-inner space-y-12">
          <SectionHeader
            eyebrow="Plans"
            title="Choose your launch tier"
            description="Upgrade anytime as your product and traction grow."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {pricing.map((plan, index) => (
              <PricingCard key={plan.name} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner space-y-12">
          <SectionHeader
            eyebrow="FAQ"
            title="Common billing questions"
            description="Everything you need to know before selecting a plan."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((item) => (
              <FaqItem key={item.question} item={item} />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
