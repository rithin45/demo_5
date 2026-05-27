import { motion } from "framer-motion";

import { NavLink } from "react-router-dom";

import {
  contactDetails,
  navLinks,
} from "../../data/siteContent";

import GlowButton from "./GlowButton";

export default function Footer({
  onOpenTicket,
}) {
  return (
    <footer
      className="
        relative
        w-full
        overflow-hidden

        px-4
        pb-10
        pt-16

        sm:px-6
        sm:pb-14
        sm:pt-20

        lg:px-10
        lg:pb-16
        lg:pt-24

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
            TOP SECTION
        ========================================================= */}

        <div
          className="
            relative
            grid
            gap-14

            lg:grid-cols-[1.4fr_0.9fr_1fr]
          "
        >
          {/* =========================================================
              LEFT SIDE
          ========================================================= */}

          <div className="space-y-8">
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
              Elite Achievers Awards 2026
            </span>

            {/* Heading */}
            <div className="space-y-5">
              <h3
                className="
                  max-w-3xl
                  font-serif
                  text-[2.5rem]
                  leading-[0.95]
                  tracking-[-0.03em]
                  text-[#0C324A]

                  sm:text-[3.5rem]

                  lg:text-[4.8rem]
                "
              >
                Curated for
                ambitious builders
                who want more
                than another event.
              </h3>

              <p
                className="
                  max-w-2xl
                  text-base
                  leading-8
                  text-[#0C324A]/65

                  lg:text-lg
                "
              >
                Stagecraft,
                hospitality,
                and founder energy
                blended into one
                premium experience.
              </p>
            </div>

            {/* CTA */}
            <div
              className="
                flex
                flex-col
                gap-4

                sm:flex-row
              "
            >
              <GlowButton
                onClick={() =>
                  onOpenTicket(
                    "VIP Pass",
                    "yearly"
                  )
                }
              >
                Join the guest list
              </GlowButton>

              <GlowButton
                variant="secondary"
                to="/about"
              >
                Read the story
              </GlowButton>
            </div>

            {/* Bottom Quote */}
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
                Experience philosophy
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
                Designed to feel
                intimate, cinematic,
                and emotionally
                unforgettable.
              </div>
            </div>
          </div>

          {/* =========================================================
              NAVIGATION
          ========================================================= */}

          <div className="space-y-8">
            {/* Title */}
            <div
              className="
                text-[11px]
                uppercase
                tracking-[0.35em]
                text-[#0C324A]/50
              "
            >
              Navigate
            </div>

            {/* Links */}
            <div className="space-y-4">
              {navLinks.map(
                (link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay:
                        index * 0.05,
                    }}
                  >
                    <NavLink
                      to={link.to}
                      className="
                        group
                        flex
                        items-center
                        justify-between

                        rounded-[24px]
                        border
                        border-white/40
                        bg-white/55

                        px-5
                        py-4

                        text-sm
                        uppercase
                        tracking-[0.22em]
                        text-[#0C324A]/65

                        shadow-[0_10px_30px_rgba(12,50,74,0.04)]
                        backdrop-blur-xl

                        transition-all
                        duration-300

                        hover:border-[#679CBC]/25
                        hover:text-[#0C324A]
                      "
                    >
                      <span>
                        {
                          link.label
                        }
                      </span>

                      <span
                        className="
                          opacity-0
                          transition-all
                          duration-300

                          group-hover:translate-x-1
                          group-hover:opacity-100
                        "
                      >
                        →
                      </span>
                    </NavLink>
                  </motion.div>
                )
              )}
            </div>
          </div>

          {/* =========================================================
              CONTACT
          ========================================================= */}

          <div className="space-y-8">
            {/* Title */}
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

            {/* Contact Cards */}
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
                          gap-4
                        "
                      >
                        {/* Icon */}
                        <div
                          className="
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-[20px]
                            border
                            border-white/40
                            bg-white/60
                            text-[#0C324A]

                            shadow-[0_10px_30px_rgba(12,50,74,0.05)]
                            backdrop-blur-xl
                          "
                        >
                          <Icon className="h-4 w-4" />
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
                              mt-2
                              text-sm
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
          </div>
        </div>

        {/* =========================================================
            FOOTER BOTTOM
        ========================================================= */}

        <div
          className="
            relative
            mt-14
            border-t
            border-[#0C324A]/8
            pt-8
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5

              text-sm
              text-[#0C324A]/50

              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            {/* Left */}
            <div>
              © 2026 Astra Nova.
              Crafted for premium
              experiences.
            </div>

            {/* Right */}
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-5
              "
            >
              <a
                href="#"
                className="
                  transition-colors
                  duration-300

                  hover:text-[#0C324A]
                "
              >
                Privacy
              </a>

              <a
                href="#"
                className="
                  transition-colors
                  duration-300

                  hover:text-[#0C324A]
                "
              >
                Terms
              </a>

              <a
                href="#"
                className="
                  transition-colors
                  duration-300

                  hover:text-[#0C324A]
                "
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Animated Accent */}
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
                duration: 6,
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
      </div>
    </footer>
  );
}