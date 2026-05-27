import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import TicketRegistrationModal from "../components/shared/TicketRegistrationModal";

export default function SiteLayout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selection, setSelection] = useState({
    passType: "Pro Pass",
    billingCycle: "yearly",
  });

  const openTicketModal = (passType = "Pro Pass", billingCycle = "yearly") => {
    setSelection({ passType, billingCycle });
    setIsModalOpen(true);
  };

  return (
    <>
      <Navbar onOpenTicket={openTicketModal} />
      <Outlet context={{ openTicketModal }} />
      <Footer onOpenTicket={openTicketModal} />
      <TicketRegistrationModal
        billingCycle={selection.billingCycle}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPass={selection.passType}
      />
    </>
  );
}
