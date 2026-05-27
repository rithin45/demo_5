import { CheckCircle2 } from "lucide-react";

import { motion } from "framer-motion";

import { useState } from "react";

import api from "../../utils/api";

import GlowButton from "../shared/GlowButton";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const [status, setStatus] = useState({
    loading: false,
    error: "",
    success: "",
  });

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
        "/newsletter",
        {
          email,
          source:
            "homepage-newsletter",
        }
      );

      setStatus({
        loading: false,
        error: "",
        success:
          response.data.message ||
          "Subscribed successfully.",
      });

      setEmail("");
    } catch (error) {
      setStatus({
        loading: false,
        error:
          error.response?.data
            ?.message ||
          "Unable to subscribe right now. Please try again shortly.",
        success: "",
      });
    }
  };

  return (
    <section
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

        {/* Red Glow */}
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
            gap-12

            lg:grid-cols-[1fr_0.9fr]
            lg:items-end
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
            className="space-y-6"
          >
            {/* Badge */}
            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-white/45
                bg-white/60

                px-5
                py-2

                text-[11px]
                uppercase
                tracking-[0.35em]
                text-[#0C324A]/70

                backdrop-blur-xl
              "
            >
              Newsletter
            </span>

            {/* Heading */}
            <h3
              className="
                max-w-4xl
                font-serif
                text-[2.5rem]
                leading-[0.95]
                tracking-[-0.03em]
                text-[#0C324A]

                sm:text-[3.5rem]

                lg:text-[5rem]
              "
            >
              Stay close
              to speaker drops,
              venue previews,
              and curated
              side events.
            </h3>

            {/* Description */}
            <p
              className="
                max-w-2xl
                text-base
                leading-8
                text-[#0C324A]/65

                lg:text-lg
              "
            >
              Join the Astra Nova list
              for private announcements
              and early access moments
              before public release.
            </p>

            {/* Mini Card */}
            <div
              className="
                rounded-[30px]
                border
                border-white/45
                bg-white/55

                p-6

                shadow-[0_10px_40px_rgba(12,50,74,0.05)]
                backdrop-blur-[24px]
              "
            >
              <div
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.32em]
                  text-[#0C324A]/50
                "
              >
                Private announcements
              </div>

              <div
                className="
                  mt-4
                  font-serif
                  text-2xl
                  leading-tight
                  text-[#0C324A]
                "
              >
                Receive curated
                invitations, guest
                reveals, and venue
                access before public
                release windows.
              </div>
            </div>
          </motion.div>

          {/* =========================================================
              FORM SECTION
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
              {/* Heading */}
              <div>
                <div
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.32em]
                    text-[#0C324A]/50
                  "
                >
                  Join the list
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
                  Secure your place
                  before invitations
                  close.
                </div>
              </div>

              {/* FORM */}
              <form
                className="mt-8 space-y-5"
                onSubmit={handleSubmit}
              >
                {/* Input */}
                <div>
                  <input
                    className={
                      inputClassName
                    }
                    type="email"
                    name="email"
                    value={email}
                    onChange={(event) =>
                      setEmail(
                        event.target.value
                      )
                    }
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Button */}
                <GlowButton
                  type="submit"
                  className="w-full justify-center"
                  icon={
                    !status.loading
                  }
                >
                  {status.loading
                    ? "Joining list..."
                    : "Join the list"}
                </GlowButton>
              </form>

              {/* ERROR */}
              {status.error && (
                <div
                  className="
                    mt-5
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
                    mt-5
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
                    {status.success}
                  </span>
                </div>
              )}

              {/* Bottom Line */}
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