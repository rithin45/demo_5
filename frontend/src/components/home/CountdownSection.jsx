import { motion } from "framer-motion";

import { eventDetails } from "../../data/siteContent";

import useCountdown from "../../hooks/useCountdown";

import GlowButton from "../shared/GlowButton";

export default function CountdownSection({
  onOpenTicket,
}) {
  const timer = useCountdown(
    eventDetails.isoDate
  );

  const countdownItems = [
    {
      label: "Days",
      value: timer.days,
    },
    {
      label: "Hours",
      value: timer.hours,
    },
    {
      label: "Minutes",
      value: timer.minutes,
    },
    {
      label: "Seconds",
      value: timer.seconds,
    },
  ];

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
        {/* Gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#f5f2ec]
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
            bg-[#679CBC]/12
            blur-3xl
          "
        />

        {/* Red Glow */}
        <div
          className="
            absolute
            right-[-10%]
            bottom-[10%]
            h-[360px]
            w-[360px]
            rounded-full
            bg-[#C11720]/8
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
            lg:items-center
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
            className="max-w-2xl"
          >
            {/* Eyebrow */}
            <div
              className="
                text-[11px]
                uppercase
                tracking-[0.35em]
                text-[#0C324A]/50
              "
            >
              Countdown
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
              The room
              opens soon.
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
              Astra Nova 2026 begins with
              a tightly choreographed
              arrival, opening sequence,
              and founder-only after-hours
              salons.
            </p>

            {/* Meta */}
            <div
              className="
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/45
                bg-white/60
                px-5
                py-3
                text-[11px]
                uppercase
                tracking-[0.28em]
                text-[#0C324A]/60
                backdrop-blur-xl
              "
            >
              Limited invitation access
            </div>
          </motion.div>

          {/* =========================================================
              RIGHT SIDE
          ========================================================= */}

          <div className="space-y-8">
            {/* =========================================================
                TIMER GRID
            ========================================================= */}

            <div
              className="
                grid
                gap-4

                grid-cols-2

                sm:grid-cols-4
              "
            >
              {countdownItems.map(
                (item, index) => (
                  <motion.div
                    key={item.label}
                    whileHover={{
                      y: -5,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[30px]
                      border
                      border-white/45
                      bg-white/60

                      p-6

                      text-center

                      shadow-[0_10px_40px_rgba(12,50,74,0.06)]
                      backdrop-blur-[24px]

                      transition-all
                      duration-500

                      hover:border-[#679CBC]/25
                      hover:shadow-[0_20px_60px_rgba(12,50,74,0.10)]

                      sm:p-7
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

                    {/* Index */}
                    <div
                      className="
                        absolute
                        right-5
                        top-5
                        text-xs
                        tracking-[0.18em]
                        text-[#0C324A]/18
                      "
                    >
                      0{index + 1}
                    </div>

                    {/* Number */}
                    <div
                      className="
                        relative
                        font-serif
                        text-5xl
                        leading-none
                        text-[#0C324A]

                        sm:text-6xl
                      "
                    >
                      {item.value}
                    </div>

                    {/* Label */}
                    <div
                      className="
                        relative
                        mt-4
                        text-[11px]
                        uppercase
                        tracking-[0.32em]
                        text-[#0C324A]/50
                      "
                    >
                      {item.label}
                    </div>

                    {/* Bottom Accent */}
                    <div
                      className="
                        relative
                        mt-6
                        h-[1px]
                        w-full
                        overflow-hidden
                        rounded-full
                        bg-[#0C324A]/8
                      "
                    >
                      <div
                        className="
                          h-full
                          w-0
                          bg-gradient-to-r
                          from-[#679CBC]
                          to-[#597B6A]
                          transition-all
                          duration-700

                          group-hover:w-full
                        "
                      />
                    </div>
                  </motion.div>
                )
              )}
            </div>

            {/* =========================================================
                CTA SECTION
            ========================================================= */}

            <motion.div
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
                duration: 0.7,
              }}
              className="
                flex
                flex-col
                gap-4

                sm:flex-row
                sm:items-center
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
                Claim VIP access
              </GlowButton>

              <GlowButton
                variant="secondary"
                to="/pricing"
              >
                Compare passes
              </GlowButton>
            </motion.div>

            {/* =========================================================
                BOTTOM INFO
            ========================================================= */}

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
                Arrival protocol
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
                Guests receive
                curated arrival windows,
                concierge guidance,
                and private access details
                before the opening sequence.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}