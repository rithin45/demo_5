import { motion } from "framer-motion";

import {
  fadeUp,
  staggerContainer,
} from "../../animations/variants";

import { highlights } from "../../data/siteContent";

export default function HighlightsSection() {
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
            to-[#f3efe8]
          "
        />

        {/* Blue Glow */}
        <div
          className="
            absolute
            left-[-10%]
            top-[15%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#679CBC]/12
            blur-3xl
          "
        />

        {/* Warm Glow */}
        <div
          className="
            absolute
            right-[-5%]
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
            SECTION HEADER
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
          className="
            relative
            mb-14
            flex
            flex-col
            items-start
            justify-between
            gap-6

            lg:flex-row
            lg:items-end
          "
        >
          {/* LEFT */}
          <div className="max-w-3xl">
            <div
              className="
                text-[11px]
                uppercase
                tracking-[0.35em]
                text-[#0C324A]/50
              "
            >
              Event highlights
            </div>

            <h2
              className="
                mt-4
                font-serif
                text-[2.5rem]
                leading-[0.95]
                tracking-[-0.03em]
                text-[#0C324A]

                sm:text-[3.5rem]

                lg:text-[4.8rem]
              "
            >
              Every layer is
              designed to feel
              intentional,
              immersive,
              and rare.
            </h2>
          </div>

          {/* RIGHT */}
          <p
            className="
              max-w-xl
              text-base
              leading-8
              text-[#0C324A]/65

              lg:text-lg
            "
          >
            From stage arcs to hospitality
            details, Astra Nova creates
            emotional texture instead of
            conference clutter.
          </p>
        </motion.div>

        {/* =========================================================
            HIGHLIGHTS GRID
        ========================================================= */}

        <motion.div
          className="
            relative
            grid
            gap-5

            lg:grid-cols-2
          "
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/45
                  bg-white/55

                  p-6

                  shadow-[0_10px_40px_rgba(12,50,74,0.06)]
                  backdrop-blur-[24px]

                  transition-all
                  duration-500

                  hover:border-[#679CBC]/25
                  hover:shadow-[0_20px_60px_rgba(12,50,74,0.10)]

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
                    transition-all
                    duration-700

                    group-hover:scale-125
                  "
                />

                {/* Index */}
                <div
                  className="
                    absolute
                    right-6
                    top-6
                    text-xs
                    font-medium
                    tracking-[0.18em]
                    text-[#0C324A]/20
                  "
                >
                  0{index + 1}
                </div>

                {/* Icon */}
                <div
                  className="
                    relative
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-[24px]
                    border
                    border-white/40
                    bg-white/55
                    text-[#0C324A]
                    shadow-[0_10px_30px_rgba(12,50,74,0.06)]
                    backdrop-blur-xl
                  "
                >
                  <Icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <div className="relative mt-8 space-y-4">
                  <h3
                    className="
                      font-serif
                      text-[2rem]
                      leading-tight
                      text-[#0C324A]

                      sm:text-[2.3rem]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      max-w-[36rem]
                      text-sm
                      leading-8
                      text-[#0C324A]/65

                      sm:text-base
                    "
                  >
                    {item.description}
                  </p>
                </div>

                {/* Bottom Line */}
                <div
                  className="
                    relative
                    mt-10
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
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}