import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";

import PageTransition from "../components/shared/PageTransition";
import GlowButton from "../components/shared/GlowButton";

import { pricingPlans } from "../data/siteContent";

export default function PricingPage() {
  const { openTicketModal } =
    useOutletContext();

  const [billingCycle, setBillingCycle] =
    useState("yearly");

  const planCopy = useMemo(
    () =>
      pricingPlans.map((plan) => ({
        ...plan,
        price:
          billingCycle === "yearly"
            ? plan.yearlyPrice
            : plan.monthlyPrice,
      })),
    [billingCycle]
  );

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
          <div className="relative text-center">
            {/* Eyebrow */}
            <div
              className="
                text-[11px]
                uppercase
                tracking-[0.35em]
                text-[#0C324A]/50
              "
            >
              Pricing
            </div>

            {/* Heading */}
            <h1
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

                lg:text-[6rem]
              "
            >
              Choose the pass
              experience that fits
              how you want to arrive.
            </h1>

            {/* Description */}
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
              Flexible pricing for solo
              builders, product teams,
              and VIP guests who want
              a deeper layer of access.
            </p>

            {/* Billing Toggle */}
            <div
              className="
                mx-auto
                mt-10

                flex
                w-fit
                items-center

                rounded-full
                border
                border-white/50
                bg-white/65

                p-2

                shadow-[0_10px_30px_rgba(12,50,74,0.05)]
                backdrop-blur-xl
              "
            >
              {["monthly", "yearly"].map(
                (cycle) => (
                  <button
                    key={cycle}
                    type="button"
                    className={`
                      rounded-full
                      px-6
                      py-3

                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.28em]

                      transition-all
                      duration-300

                      ${
                        billingCycle ===
                        cycle
                          ? `
                            bg-[#0C324A]
                            text-white
                            shadow-[0_10px_30px_rgba(12,50,74,0.20)]
                          `
                          : `
                            text-[#0C324A]/55
                            hover:text-[#0C324A]
                          `
                      }
                    `}
                    onClick={() =>
                      setBillingCycle(
                        cycle
                      )
                    }
                  >
                    {cycle}
                  </button>
                )
              )}
            </div>

            {/* Note */}
            <div
              className="
                mt-5
                text-sm
                leading-7
                text-[#0C324A]/50
              "
            >
              {billingCycle ===
              "yearly"
                ? "Yearly plans save two months and include post-event Astra Circle access."
                : "Monthly plans are ideal for independent attendees and flexible team budgeting."}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRICING CARDS
      ========================================================= */}

      <section
        className="
          relative
          w-full
          overflow-hidden

          px-4
          py-10

          sm:px-6

          lg:px-10
          lg:py-14

          xl:px-16
        "
      >
        <div
          className="
            grid
            gap-6

            xl:grid-cols-3
          "
        >
          {planCopy.map(
            (plan, index) => {
              const Icon = plan.icon;

              return (
                <motion.article
                  key={plan.name}
                  initial={{
                    opacity: 0,
                    y: 24,
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
                    duration: 0.6,
                    delay:
                      index * 0.08,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className={`
                    group
                    relative
                    overflow-hidden

                    rounded-[38px]
                    border

                    p-7

                    shadow-[0_20px_60px_rgba(12,50,74,0.08)]
                    backdrop-blur-[28px]

                    transition-all
                    duration-500

                    sm:p-8

                    ${
                      plan.featured
                        ? `
                          border-[#679CBC]/25
                          bg-gradient-to-b
                          from-white/75
                          to-white/55
                        `
                        : `
                          border-white/45
                          bg-white/55
                        `
                    }
                  `}
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

                  {/* Featured Badge */}
                  {plan.featured && (
                    <div
                      className="
                        absolute
                        right-6
                        top-6

                        rounded-full
                        border
                        border-white/50
                        bg-white/70

                        px-4
                        py-2

                        text-[10px]
                        uppercase
                        tracking-[0.28em]
                        text-[#0C324A]/70

                        backdrop-blur-xl
                      "
                    >
                      Featured
                    </div>
                  )}

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

                  {/* Content */}
                  <div className="relative mt-8">
                    <h3
                      className="
                        font-serif
                        text-[2.2rem]
                        text-[#0C324A]
                      "
                    >
                      {plan.name}
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
                        plan.description
                      }
                    </p>
                  </div>

                  {/* Price */}
                  <div
                    className="
                      relative
                      mt-10
                      flex
                      items-end
                      gap-3
                    "
                  >
                    <span
                      className="
                        font-serif
                        text-6xl
                        leading-none
                        text-[#0C324A]
                      "
                    >
                      $
                      {plan.price}
                    </span>

                    <span
                      className="
                        pb-2
                        text-xs
                        uppercase
                        tracking-[0.22em]
                        text-[#0C324A]/45
                      "
                    >
                      /
                      {billingCycle ===
                      "yearly"
                        ? "year"
                        : "month"}
                    </span>
                  </div>

                  {/* Features */}
                  <div
                    className="
                      relative
                      mt-10
                      space-y-5

                      border-t
                      border-[#0C324A]/8

                      pt-8
                    "
                  >
                    {plan.features.map(
                      (feature) => (
                        <div
                          key={feature}
                          className="
                            flex
                            items-center
                            gap-4

                            text-sm
                            text-[#0C324A]/70
                          "
                        >
                          <span
                            className="
                              h-2.5
                              w-2.5
                              rounded-full
                              bg-[#679CBC]
                            "
                          />

                          <span>
                            {feature}
                          </span>
                        </div>
                      )
                    )}
                  </div>

                  {/* CTA */}
                  <GlowButton
                    className="
                      mt-10
                      w-full
                      justify-center
                    "
                    onClick={() =>
                      openTicketModal(
                        plan.name,
                        billingCycle
                      )
                    }
                  >
                    Secure {plan.name}
                  </GlowButton>
                </motion.article>
              );
            }
          )}
        </div>
      </section>

      {/* =========================================================
          TEAM SECTION
      ========================================================= */}

      <section
        className="
          relative
          w-full
          overflow-hidden

          px-4
          py-10

          sm:px-6

          lg:px-10
          lg:py-16

          xl:px-16
        "
      >
        <div
          className="
            relative
            overflow-hidden

            rounded-[40px]
            border
            border-white/45
            bg-white/45

            p-8

            shadow-[0_20px_80px_rgba(12,50,74,0.08)]
            backdrop-blur-[30px]

            sm:p-10

            lg:grid
            lg:grid-cols-[1fr_0.9fr]
            lg:items-center
            lg:gap-10
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

          {/* Glow */}
          <div
            className="
              absolute
              right-[-10%]
              top-[-20%]
              h-[320px]
              w-[320px]
              rounded-full
              bg-[#679CBC]/10
              blur-3xl
            "
          />

          {/* Content */}
          <div className="relative">
            <div
              className="
                text-[11px]
                uppercase
                tracking-[0.35em]
                text-[#0C324A]/50
              "
            >
              Team pricing
            </div>

            <h3
              className="
                mt-4
                font-serif
                text-[2.5rem]
                leading-[0.95]
                tracking-[-0.03em]
                text-[#0C324A]

                sm:text-[3.5rem]
              "
            >
              Bringing your
              startup or
              product team?
            </h3>

            <p
              className="
                mt-6
                max-w-2xl

                text-base
                leading-8
                text-[#0C324A]/65

                lg:text-lg
              "
            >
              We offer curated
              seating, grouped
              registration, and
              concierge support
              for team delegations
              attending Astra Nova
              together.
            </p>
          </div>

          {/* CTA */}
          <div
            className="
              relative
              mt-10

              flex
              flex-col
              gap-4

              sm:flex-row

              lg:mt-0
              lg:justify-end
            "
          >
            <GlowButton
              onClick={() =>
                openTicketModal(
                  "Pro Pass",
                  billingCycle
                )
              }
            >
              Register a team
            </GlowButton>

            <GlowButton
              to="/#contact"
              variant="secondary"
            >
              Contact partnerships
            </GlowButton>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}