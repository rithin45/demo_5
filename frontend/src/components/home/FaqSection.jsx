import {
  AnimatePresence,
  motion,
} from "framer-motion";

import { ChevronDown } from "lucide-react";

import { useState } from "react";

import { faqs } from "../../data/siteContent";

export default function FaqSection() {
  const [activeIndex, setActiveIndex] =
    useState(0);

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

            lg:grid-cols-[0.85fr_1.15fr]
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
            className="
              max-w-2xl
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
              FAQ
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
              Everything
              you might
              want to know
              before
              you arrive.
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
              Astra Nova is intentionally
              curated, so here is how
              access, recordings,
              and team registrations work.
            </p>

            {/* Side Card */}
            <div
              className="
                mt-10
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
                Guest policy
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
                Invitations are reviewed
                individually to preserve
                the intimacy and quality
                of the experience.
              </div>
            </div>
          </motion.div>

          {/* =========================================================
              FAQ LIST
          ========================================================= */}

          <div className="relative space-y-5">
            {faqs.map((item, index) => {
              const isActive =
                activeIndex === index;

              return (
                <motion.div
                  key={item.question}
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-white/45
                    bg-white/55

                    shadow-[0_10px_40px_rgba(12,50,74,0.06)]
                    backdrop-blur-[24px]

                    transition-all
                    duration-500

                    hover:border-[#679CBC]/25
                    hover:shadow-[0_20px_60px_rgba(12,50,74,0.10)]
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

                  {/* Question Button */}
                  <button
                    type="button"
                    className="
                      relative
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-5

                      px-6
                      py-6

                      text-left

                      sm:px-8
                    "
                    onClick={() =>
                      setActiveIndex(
                        isActive
                          ? -1
                          : index
                      )
                    }
                  >
                    {/* Question */}
                    <span
                      className="
                        max-w-[90%]
                        font-serif
                        text-[1.5rem]
                        leading-tight
                        text-[#0C324A]

                        sm:text-[1.8rem]
                      "
                    >
                      {item.question}
                    </span>

                    {/* Icon */}
                    <motion.div
                      animate={{
                        rotate: isActive
                          ? 180
                          : 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/40
                        bg-white/60
                        text-[#0C324A]
                        backdrop-blur-xl
                      "
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.div>
                  </button>

                  {/* =========================================================
                      ANSWER
                  ========================================================= */}

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                      >
                        <div
                          className="
                            px-6
                            pb-6

                            sm:px-8
                            sm:pb-8
                          "
                        >
                          {/* Divider */}
                          <div
                            className="
                              mb-6
                              h-[1px]
                              w-full
                              bg-[#0C324A]/8
                            "
                          />

                          {/* Answer */}
                          <p
                            className="
                              max-w-3xl
                              text-sm
                              leading-8
                              text-[#0C324A]/70

                              sm:text-base
                            "
                          >
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}