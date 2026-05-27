import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, LoaderCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { pricingPlans } from "../../data/siteContent";
import api from "../../utils/api";
import GlowButton from "./GlowButton";

const emptyState = {
  fullName: "",
  email: "",
  company: "",
  passType: "Pro Pass",
  billingCycle: "yearly",
  teamSize: 1,
  notes: "",
};

export default function TicketRegistrationModal({
  billingCycle,
  isOpen,
  onClose,
  selectedPass,
}) {
  const [formData, setFormData] = useState(emptyState);
  const [status, setStatus] = useState({
    loading: false,
    error: "",
    success: "",
  });

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setFormData((current) => ({
      ...current,
      passType: selectedPass || "Pro Pass",
      billingCycle: billingCycle || "yearly",
    }));
    setStatus({ loading: false, error: "", success: "" });
  }, [billingCycle, isOpen, selectedPass]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: name === "teamSize" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, error: "", success: "" });

    try {
      const response = await api.post("/tickets", formData);
      setStatus({
        loading: false,
        error: "",
        success: response.data.message || "Ticket request received.",
      });
      setFormData((current) => ({
        ...emptyState,
        passType: current.passType,
        billingCycle: current.billingCycle,
      }));
    } catch (error) {
      setStatus({
        loading: false,
        error:
          error.response?.data?.message ||
          "Unable to submit your request right now. Please try again.",
        success: "",
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[95] flex items-center justify-center bg-ink/60 px-4 py-10 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="glass-panel premium-border noise-overlay relative w-full max-w-2xl overflow-hidden p-6 sm:p-8"
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.97, opacity: 0, y: 18 }}
            transition={{ duration: 0.35 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-ink/12 bg-white/80 text-ink/70 transition hover:text-ink"
              onClick={onClose}
              data-cursor="hover"
              aria-label="Close ticket registration"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="space-y-4">
              <span className="inline-flex rounded-full border border-sage/30 bg-sand/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-ink/80">
                Ticket registration
              </span>
              <div className="space-y-2">
                <h3 className="font-display text-3xl text-ink">
                  Secure your place at Astra Nova
                </h3>
                <p className="max-w-xl text-sm leading-7 text-ink/70 sm:text-base">
                  Tell us a bit about you and our concierge team will confirm your access, billing, and seating details.
                </p>
              </div>
            </div>

            <form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <InputField
                  label="Full name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Ava Rao"
                />
                <InputField
                  label="Work email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ava@company.com"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <InputField
                  label="Company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Northstar Labs"
                />
                <div className="grid gap-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.26em] text-ink/55">
                    Team size
                  </label>
                  <input
                    className={inputClassName}
                    min="1"
                    max="20"
                    name="teamSize"
                    onChange={handleChange}
                    type="number"
                    value={formData.teamSize}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.26em] text-ink/55">
                    Pass type
                  </label>
                  <select
                    className={inputClassName}
                    name="passType"
                    onChange={handleChange}
                    value={formData.passType}
                  >
                    {pricingPlans.map((plan) => (
                      <option key={plan.name} value={plan.name}>
                        {plan.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.26em] text-ink/55">
                    Billing cycle
                  </label>
                  <select
                    className={inputClassName}
                    name="billingCycle"
                    onChange={handleChange}
                    value={formData.billingCycle}
                  >
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-2">
                <label className="text-xs font-semibold uppercase tracking-[0.26em] text-ink/55">
                  Notes
                </label>
                <textarea
                  className={`${inputClassName} min-h-28 resize-none`}
                  name="notes"
                  onChange={handleChange}
                  placeholder="Tell us if you want team seating, concierge help, or partnership access."
                  value={formData.notes}
                />
              </div>

              {status.error && (
                <p className="rounded-2xl border border-rose-300/15 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">
                  {status.error}
                </p>
              )}

              {status.success && (
                <div className="flex items-center gap-3 rounded-2xl border border-emerald-300/15 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>{status.success}</span>
                </div>
              )}

              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-ink/55">
                  Your details are used only to confirm event access and concierge follow-up.
                </p>
                <GlowButton
                  type="submit"
                  className="min-w-48 justify-center"
                  icon={!status.loading}
                >
                  {status.loading ? (
                    <>
                      <LoaderCircle className="h-4 w-4 animate-spin" />
                      <span>Submitting</span>
                    </>
                  ) : (
                    "Submit request"
                  )}
                </GlowButton>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function InputField({ label, ...props }) {
  return (
    <div className="grid gap-2">
      <label className="text-xs font-semibold uppercase tracking-[0.26em] text-ink/55">
        {label}
      </label>
      <input className={inputClassName} {...props} required />
    </div>
  );
}

const inputClassName =
  "rounded-2xl border border-ink/12 bg-white/80 px-4 py-3 text-sm text-ink outline-none transition placeholder:text-ink/40 focus:border-sage/45 focus:bg-white";
