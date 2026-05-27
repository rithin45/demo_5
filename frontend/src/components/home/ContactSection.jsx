import { CheckCircle2 } from "lucide-react";

import { motion } from "framer-motion";

import { useState } from "react";

import { contactDetails } from "../../data/siteContent";

import api from "../../utils/api";

import GlowButton from "../shared/GlowButton";

export default function ContactSection() {
  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      company: "",
      message: "",
    });

  const [status, setStatus] =
    useState({
      loading: false,
      error: "",
      success: "",
    });

  const handleChange = (event) => {
    const { name, value } =
      event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    event
  ) => {
    event.preventDefault();

    setStatus({
      loading: true,
      error: "",
      success: "",
    });

    try {
      const response = await api.post(
        "/contact",
        formData
      );

      setStatus({
        loading: false,
        error: "",
        success:
          response.data.message ||
          "Message sent successfully.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        loading: false,
        error:
          error.response?.data
            ?.message ||
          "Unable to send your message right now. Please try again.",
        success: "",
      });
    }
  };

  return (
    <section
      id="contact"
      className="
        relative
        w-full
        overflow-hidden

        px-4
        py-16

        sm:px-6
        sm:py-20

        lg:px-10
        lg:py-24

        xl:px-16
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="absolute inset-0 -z-10">
        {/* Main Gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#f4f1eb]
            via-[#f7f4ef]
            to-[#f2eee7]
          "
        />

        {/* Blue Glow */}
        <div
          className="
            absolute
            left-[-10%]
            top-[10%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#679CBC]/10
            blur-3xl
          "
        />

        {/* Warm Glow */}
        <div
          className="
            absolute
            right-[-10%]
            bottom-[10%]
            h-[380px]
            w-[380px]
            rounded-full
            bg-[#C11720]/7
            blur-3xl
          "
        />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-white/45
          bg-white/45

          px-6
          py-10

          shadow-[0_20px_80px_rgba(12,50,74,0.08)]
          backdrop-blur-[30px]

          sm:px-10
          sm:py-14

          lg:px-14
          lg:py-16

          xl:px-20
        "
      >
        {/* =========================================================
            GLASS EFFECTS
        ========================================================= */}

        {/* Overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-br
            from-white/60
            via-white/10
            to-white/5
          "
        />

        {/* Reflection */}
        <div
          className="
            pointer-events-none
            absolute
            left-[-10%]
            top-[-30%]
            h-[320px]
            w-[320px]
            rounded-full
            bg-white/35
            blur-3xl
          "
        />

        {/* Grid Texture */}
        <div className="absolute inset-0 bg-grid-fade opacity-30" />

        {/* =========================================================
            CONTENT GRID
        ========================================================= */}

        <div
          className="
            relative
            grid
            gap-14

            lg:grid-cols-[0.9fr_1.1fr]
          "
        >
          {/* =========================================================
              LEFT SIDE
          ========================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
            className="space-y-10"
          >
            {/* HEADER */}
            <div>
              {/* Eyebrow */}
              <div
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.35em]
                  text-[#0C324A]/50
                "
              >
                Contact
              </div>

              {/* Title */}
              <h2
                className="
                  mt-4
                  font-serif
                  text-[2.5rem]
                  leading-[0.95]
                  tracking-[-0.03em]
                  text-[#0C324A]

                  sm:text-[3.5rem]

                  lg:text-[5rem]
                "
              >
                Talk to the
                team behind
                the experience.
              </h2>

              {/* Description */}
              <p
                className="
                  mt-6
                  max-w-xl
                  text-base
                  leading-8
                  text-[#0C324A]/65

                  lg:text-lg
                "
              >
                Reach out for
                partnerships,
                team bookings,
                speaker opportunities,
                or concierge help
                for your arrival.
              </p>
            </div>

            {/* CONTACT CARDS */}
            <div className="space-y-5">
              {contactDetails.map(
                (detail, index) => {
                  const Icon =
                    detail.icon;

                  return (
                    <motion.div
                      key={
                        detail.title
                      }
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.5,
                        delay:
                          index *
                          0.05,
                      }}
                      whileHover={{
                        y: -4,
                      }}
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-[30px]
                        border
                        border-white/45
                        bg-white/55

                        p-5

                        shadow-[0_10px_40px_rgba(12,50,74,0.05)]
                        backdrop-blur-[24px]

                        transition-all
                        duration-500

                        hover:border-[#679CBC]/25
                        hover:shadow-[0_20px_60px_rgba(12,50,74,0.08)]
                      "
                    >
                      {/* Glow */}
                      <div
                        className="
                          absolute
                          right-[-20%]
                          top-[-20%]
                          h-32
                          w-32
                          rounded-full
                          bg-[#679CBC]/10
                          blur-3xl
                          transition-all
                          duration-700

                          group-hover:scale-125
                        "
                      />

                      <div
                        className="
                          relative
                          flex
                          items-start
                          gap-5
                        "
                      >
                        {/* Icon */}
                        <div
                          className="
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-[22px]
                            border
                            border-white/40
                            bg-white/60
                            text-[#0C324A]

                            shadow-[0_10px_30px_rgba(12,50,74,0.05)]
                            backdrop-blur-xl
                          "
                        >
                          <Icon className="h-5 w-5" />
                        </div>

                        {/* Content */}
                        <div>
                          <div
                            className="
                              text-[11px]
                              uppercase
                              tracking-[0.32em]
                              text-[#0C324A]/50
                            "
                          >
                            {
                              detail.title
                            }
                          </div>

                          <div
                            className="
                              mt-3
                              text-base
                              leading-7
                              text-[#0C324A]/70
                            "
                          >
                            {
                              detail.value
                            }
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                }
              )}
            </div>
          </motion.div>

          {/* =========================================================
              RIGHT SIDE — FORM
          ========================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="
              relative
              overflow-hidden
              rounded-[36px]
              border
              border-white/45
              bg-white/55

              p-6

              shadow-[0_20px_60px_rgba(12,50,74,0.08)]
              backdrop-blur-[28px]

              sm:p-8
            "
          >
            {/* Glow */}
            <div
              className="
                absolute
                right-[-20%]
                top-[-20%]
                h-40
                w-40
                rounded-full
                bg-[#679CBC]/10
                blur-3xl
              "
            />

            <div className="relative">
              {/* Header */}
              <div>
                <div
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.32em]
                    text-[#0C324A]/50
                  "
                >
                  Send inquiry
                </div>

                <div
                  className="
                    mt-4
                    font-serif
                    text-3xl
                    leading-tight
                    text-[#0C324A]
                  "
                >
                  Let’s create
                  something
                  unforgettable.
                </div>
              </div>

              {/* FORM */}
              <form
                className="mt-8 space-y-5"
                onSubmit={handleSubmit}
              >
                {/* Row */}
                <div
                  className="
                    grid
                    gap-5

                    sm:grid-cols-2
                  "
                >
                  <InputField
                    label="Name"
                    name="name"
                    value={
                      formData.name
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Ava Rao"
                  />

                  <InputField
                    label="Email"
                    name="email"
                    type="email"
                    value={
                      formData.email
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="ava@company.com"
                  />
                </div>

                {/* Company */}
                <InputField
                  label="Company"
                  name="company"
                  value={
                    formData.company
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Northstar Labs"
                />

                {/* Message */}
                <div className="grid gap-3">
                  <label
                    className="
                      text-[11px]
                      uppercase
                      tracking-[0.32em]
                      text-[#0C324A]/50
                    "
                  >
                    Message
                  </label>

                  <textarea
                    className={`${inputClassName} min-h-[180px] resize-none rounded-[28px]`}
                    name="message"
                    onChange={
                      handleChange
                    }
                    placeholder="Tell us what you need, and we’ll route it to the right team."
                    value={
                      formData.message
                    }
                    required
                  />
                </div>

                {/* ERROR */}
                {status.error && (
                  <div
                    className="
                      rounded-[24px]
                      border
                      border-rose-300/15
                      bg-rose-400/10

                      px-5
                      py-4

                      text-sm
                      leading-7
                      text-rose-300
                    "
                  >
                    {status.error}
                  </div>
                )}

                {/* SUCCESS */}
                {status.success && (
                  <div
                    className="
                      flex
                      items-start
                      gap-3

                      rounded-[24px]
                      border
                      border-emerald-300/15
                      bg-emerald-400/10

                      px-5
                      py-4

                      text-sm
                      leading-7
                      text-emerald-300
                    "
                  >
                    <CheckCircle2
                      className="
                        mt-1
                        h-5
                        w-5
                        shrink-0
                      "
                    />

                    <span>
                      {
                        status.success
                      }
                    </span>
                  </div>
                )}

                {/* BUTTON */}
                <GlowButton
                  type="submit"
                  className="w-full justify-center"
                  icon={
                    !status.loading
                  }
                >
                  {status.loading
                    ? "Sending message..."
                    : "Send message"}
                </GlowButton>
              </form>

              {/* Bottom Accent */}
              <div
                className="
                  mt-8
                  h-[1px]
                  w-full
                  overflow-hidden
                  rounded-full
                  bg-[#0C324A]/8
                "
              >
                <motion.div
                  animate={{
                    x: [
                      "-100%",
                      "100%",
                    ],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    h-full
                    w-[30%]
                    bg-gradient-to-r
                    from-transparent
                    via-[#679CBC]
                    to-transparent
                  "
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InputField({
  label,
  ...props
}) {
  return (
    <div className="grid gap-3">
      <label
        className="
          text-[11px]
          uppercase
          tracking-[0.32em]
          text-[#0C324A]/50
        "
      >
        {label}
      </label>

      <input
        className={
          inputClassName
        }
        required
        {...props}
      />
    </div>
  );
}

const inputClassName = `
  w-full
  rounded-full
  border
  border-white/50
  bg-white/70

  px-6
  py-5

  text-sm
  text-[#0C324A]

  outline-none
  transition-all
  duration-300

  placeholder:text-[#0C324A]/35

  shadow-[0_10px_30px_rgba(12,50,74,0.04)]
  backdrop-blur-xl

  focus:border-[#679CBC]/40
  focus:bg-white
  focus:shadow-[0_10px_40px_rgba(12,50,74,0.08)]
`;