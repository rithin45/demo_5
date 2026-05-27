import { motion } from "framer-motion";

import {
  fadeUp,
  staggerContainer,
} from "../../animations/variants";

import { testimonials } from "../../data/siteContent";

export default function TestimonialsSection() {
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
            from-[#f3efe8]
            via-[#f7f4ef]
            to-[#f1ece5]
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
            HEADER
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
            mx-auto
            mb-14
            max-w-5xl
            text-center
          "
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
            What guests say
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
            Signal-rich,
            visually unforgettable,
            and meticulously hosted.
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-base
              leading-8
              text-[#0C324A]/65

              lg:text-lg
            "
          >
            The experience is engineered
            to create meaningful momentum
            before, during, and after
            the summit.
          </p>
        </motion.div>

        {/* =========================================================
            TESTIMONIALS GRID
        ========================================================= */}

        <motion.div
          className="
            relative
            grid
            gap-5

            lg:grid-cols-3
          "
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >
          {testimonials.map(
            (item, index) => (
              <motion.article
                key={item.name}
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
                    tracking-[0.18em]
                    text-[#0C324A]/18
                  "
                >
                  0{index + 1}
                </div>

                {/* Quote Icon */}
                <div
                  className="
                    relative
                    text-6xl
                    leading-none
                    text-[#679CBC]/20
                  "
                >
                  "
                </div>

                {/* Quote */}
                <p
                  className="
                    relative
                    mt-2
                    text-base
                    leading-8
                    text-[#0C324A]/70

                    sm:text-lg
                  "
                >
                  {item.quote}
                </p>

                {/* Bottom */}
                <div
                  className="
                    relative
                    mt-10
                    border-t
                    border-[#0C324A]/8
                    pt-6
                  "
                >
                  {/* Name */}
                  <div
                    className="
                      font-serif
                      text-2xl
                      text-[#0C324A]
                    "
                  >
                    {item.name}
                  </div>

                  {/* Role */}
                  <div
                    className="
                      mt-2
                      text-sm
                      uppercase
                      tracking-[0.22em]
                      text-[#0C324A]/50
                    "
                  >
                    {item.title}
                  </div>
                </div>

                {/* Bottom Accent */}
                <div
                  className="
                    relative
                    mt-8
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
              </motion.article>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}