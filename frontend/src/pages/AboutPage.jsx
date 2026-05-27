import { motion } from "framer-motion";

import { useOutletContext } from "react-router-dom";

import {
  fadeUp,
  staggerContainer,
} from "../animations/variants";

import PageTransition from "../components/shared/PageTransition";

import GlowButton from "../components/shared/GlowButton";

import {
  aboutStory,
  achievements,
  eventDetails,
  missionVision,
  team,
  timeline,
} from "../data/siteContent";

export default function AboutPage() {
  const { openTicketModal } =
    useOutletContext();

  return (
    <PageTransition>
      {/* =========================================================
          HERO SECTION
      ========================================================= */}

      <section
        className="
          relative
          w-full
          overflow-hidden

          px-4
          pt-20
          pb-10

          sm:px-6
          sm:pt-24

          lg:px-10
          lg:pt-28

          xl:px-16
        "
      >
        {/* Background */}
        <div className="absolute inset-0 -z-10">
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

        {/* Main Container */}
        <div
          className="
            relative
            overflow-hidden

            rounded-[40px]
            border
            border-white/45
            bg-white/45

            px-6
            py-12

            shadow-[0_20px_80px_rgba(12,50,74,0.08)]
            backdrop-blur-[30px]

            sm:px-10
            sm:py-14

            lg:px-14
            lg:py-16

            xl:px-20
          "
        >
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

          {/* Grid */}
          <div className="absolute inset-0 bg-grid-fade opacity-30" />

          {/* Content */}
          <div
            className="
              relative
              grid
              gap-14

              lg:grid-cols-[1fr_0.85fr]
              lg:items-end
            "
          >
            {/* LEFT */}
            <div>
              <div
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.35em]
                  text-[#0C324A]/50
                "
              >
                {aboutStory.eyebrow}
              </div>

              <h1
                className="
                  mt-5
                  max-w-5xl

                  font-serif
                  text-[2.8rem]
                  leading-[0.92]
                  tracking-[-0.03em]
                  text-[#0C324A]

                  sm:text-[4rem]

                  lg:text-[6rem]
                "
              >
                {aboutStory.title}
              </h1>

              <p
                className="
                  mt-7
                  max-w-3xl

                  text-base
                  leading-8
                  text-[#0C324A]/65

                  lg:text-lg
                "
              >
                {
                  aboutStory.description
                }
              </p>
            </div>

            {/* RIGHT CARD */}
            <div
              className="
                relative
                overflow-hidden

                rounded-[34px]
                border
                border-white/45
                bg-white/55

                p-7

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
                <div
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.32em]
                    text-[#0C324A]/50
                  "
                >
                  Why it exists
                </div>

                <p
                  className="
                    mt-5
                    text-lg
                    leading-9
                    text-[#0C324A]/70
                  "
                >
                  {
                    eventDetails.shortBlurb
                  }
                </p>

                <div
                  className="
                    mt-10
                    flex
                    flex-col
                    gap-4

                    sm:flex-row
                  "
                >
                  <GlowButton
                    onClick={() =>
                      openTicketModal(
                        "Pro Pass",
                        "yearly"
                      )
                    }
                  >
                    Join the summit
                  </GlowButton>

                  <GlowButton
                    to="/pricing"
                    variant="secondary"
                  >
                    Explore pricing
                  </GlowButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MISSION / VISION
      ========================================================= */}

      <section
        className="
          relative
          w-full

          px-4
          py-10

          sm:px-6

          lg:px-10
          lg:py-14

          xl:px-16
        "
      >
        <motion.div
          className="
            grid
            gap-6

            lg:grid-cols-2
          "
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >
          {missionVision.map(
            (item) => {
              const Icon =
                item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden

                    rounded-[38px]
                    border
                    border-white/45
                    bg-white/55

                    p-7

                    shadow-[0_20px_60px_rgba(12,50,74,0.08)]
                    backdrop-blur-[28px]

                    transition-all
                    duration-500

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
                      bg-white/60
                      text-[#0C324A]

                      shadow-[0_10px_30px_rgba(12,50,74,0.05)]
                      backdrop-blur-xl
                    "
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3
                    className="
                      relative
                      mt-8

                      font-serif
                      text-[2.2rem]
                      text-[#0C324A]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      relative
                      mt-5

                      text-sm
                      leading-8
                      text-[#0C324A]/65
                    "
                  >
                    {item.text}
                  </p>
                </motion.div>
              );
            }
          )}
        </motion.div>
      </section>

      {/* =========================================================
          TIMELINE
      ========================================================= */}

      <section
        className="
          relative
          w-full

          px-4
          py-10

          sm:px-6

          lg:px-10
          lg:py-16

          xl:px-16
        "
      >
        {/* Header */}
        <div className="text-center">
          <div
            className="
              text-[11px]
              uppercase
              tracking-[0.35em]
              text-[#0C324A]/50
            "
          >
            Timeline
          </div>

          <h2
            className="
              mx-auto
              mt-5
              max-w-5xl

              font-serif
              text-[2.8rem]
              leading-[0.92]
              tracking-[-0.03em]
              text-[#0C324A]

              sm:text-[4rem]

              lg:text-[5rem]
            "
          >
            From intimate salon
            to flagship summit.
          </h2>

          <p
            className="
              mx-auto
              mt-7
              max-w-3xl

              text-base
              leading-8
              text-[#0C324A]/65

              lg:text-lg
            "
          >
            Astra Nova has grown
            carefully, preserving
            curation and atmosphere
            at every stage.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-14 space-y-6">
          {timeline.map(
            (item, index) => (
              <motion.div
                key={item.year}
                initial={{
                  opacity: 0,
                  x:
                    index % 2 === 0
                      ? -20
                      : 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.65,
                }}
                className="
                  relative
                  overflow-hidden

                  rounded-[36px]
                  border
                  border-white/45
                  bg-white/55

                  p-7

                  shadow-[0_20px_60px_rgba(12,50,74,0.08)]
                  backdrop-blur-[28px]

                  sm:grid
                  sm:grid-cols-[180px_1fr]
                  sm:gap-8

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

                {/* Year */}
                <div
                  className="
                    relative

                    font-serif
                    text-5xl
                    text-[#679CBC]
                  "
                >
                  {item.year}
                </div>

                {/* Content */}
                <div className="relative mt-6 sm:mt-0">
                  <h3
                    className="
                      font-serif
                      text-[2rem]
                      text-[#0C324A]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-sm
                      leading-8
                      text-[#0C324A]/65
                    "
                  >
                    {
                      item.description
                    }
                  </p>
                </div>
              </motion.div>
            )
          )}
        </div>
      </section>
    </PageTransition>
  );
}