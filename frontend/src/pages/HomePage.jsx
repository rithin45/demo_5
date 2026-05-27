import { useOutletContext } from "react-router-dom";
import CountdownSection from "../components/home/CountdownSection";
import ContactSection from "../components/home/ContactSection";
import FaqSection from "../components/home/FaqSection";
import HeroSection from "../components/home/HeroSection";
import HighlightsSection from "../components/home/HighlightsSection";
import NewsletterSection from "../components/home/NewsletterSection";
import SponsorsSection from "../components/home/SponsorsSection";
import StatsSection from "../components/home/StatsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import PageTransition from "../components/shared/PageTransition";

export default function HomePage() {
  const { openTicketModal } = useOutletContext();

  return (
    <PageTransition>
      <HeroSection onOpenTicket={openTicketModal} />
      <StatsSection />
      <HighlightsSection />
      <SponsorsSection />
      <CountdownSection onOpenTicket={openTicketModal} />
      <TestimonialsSection />
      <FaqSection />
      <NewsletterSection />
      <ContactSection />
    </PageTransition>
  );
}
