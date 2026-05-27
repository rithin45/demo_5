import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Play,
  Sparkles,
  Stars,
} from "lucide-react";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import {
  heroMetrics,
  eventDetails,
} from "../../data/siteContent";

import useParallax from "../../hooks/useParallax";

import GlowButton from "../shared/GlowButton";

export default function HeroSection({
  onOpenTicket,
}) {
  const heroRef = useRef(null);

  const titleRef = useRef(null);
  const badgeRef = useRef(null);
  const copyRef = useRef(null);
  const cardRef = useRef(null);

  const orbOneRef = useRef(null);
  const orbTwoRef = useRef(null);

  const cardY = useParallax(-80);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from(titleRef.current?.children || [], {
        y: 80,
        opacity: 0,
        stagger: 0.08,
        duration: 1.15,
        ease: "power4.out",
      });

      gsap.from(badgeRef.current?.children || [], {
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.8,
        delay: 0.12,
        ease: "power3.out",
      });

      gsap.from(copyRef.current?.children || [], {
        y: 24,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        delay: 0.28,
        ease: "power3.out",
      });

      gsap.from(cardRef.current, {
        y: 40,
        opacity: 0,
        duration: 1.1,
        delay: 0.48,
        ease: "power3.out",
      });

      gsap.to(orbOneRef.current, {
        x: 70,
        y: -35,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(orbTwoRef.current, {
        x: -55,
        y: 48,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="
        relative
        flex
        min-h-screen
        w-full
        items-center
        overflow-hidden
        px-4
        pb-12
        pt-24

        sm:px-6
        sm:pt-24

        lg:px-10
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
            from-[#fdfcf8]
            via-[#f7f4ee]
            to-[#f2eee8]
          "
        />

        {/* Blue Glow */}
        <div
          className="
            absolute
            left-[-10%]
            top-[10%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#679CBC]/15
            blur-3xl
          "
        />

        {/* Red Glow */}
        <div
          className="
            absolute
            right-[-10%]
            top-[20%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#C11720]/10
            blur-3xl
          "
        />
      </div>

      {/* =========================================================
          MAIN HERO CONTAINER
      ========================================================= */}

      <div
        className="
          relative
          w-full
          overflow-hidden
          rounded-[40px]
          border
          border-white/45
          bg-white/45
          px-6
          py-8
          shadow-[0_20px_80px_rgba(12,50,74,0.10)]
          backdrop-blur-[30px]

          sm:px-10
          sm:py-10

          
          lg:px-14
          lg:py-12

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
            top-[-20%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-white/35
            blur-3xl
          "
        />

        {/* Animated Orbs */}
        <div
          ref={orbOneRef}
          className="
            absolute
            left-10
            top-8
            h-40
            w-40
            rounded-full
            bg-[#679CBC]/15
            blur-3xl
          "
        />

        <div
          ref={orbTwoRef}
          className="
            absolute
            right-8
            top-14
            h-52
            w-52
            rounded-full
            bg-[#C11720]/10
            blur-3xl
          "
        />

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-grid-fade opacity-40" />

        {/* =========================================================
            CONTENT GRID
        ========================================================= */}

        <div
          className="
            relative
            grid
            min-h-[70vh]
            gap-16

            lg:grid-cols-[1.1fr_0.9fr]
            lg:items-center
          "
        >
          {/* =========================================================
              LEFT SIDE
          ========================================================= */}

          <div className="space-y-8">
            {/* BADGES */}
            <div
              ref={badgeRef}
              className="
                flex
                flex-wrap
                items-center
                gap-3
                text-sm
                text-[#0C324A]/60
              "
            >
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#679CBC]/20
                  bg-white/60
                  px-4
                  py-2
                  uppercase
                  tracking-[0.3em]
                  text-[#0C324A]/80
                  backdrop-blur-xl
                "
              >
                <Sparkles className="h-4 w-4" />
                Flagship edition
              </span>

              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#0C324A]/10
                  bg-white/60
                  px-4
                  py-2
                  uppercase
                  tracking-[0.24em]
                  text-[#0C324A]/70
                  backdrop-blur-xl
                "
              >
                <CalendarDays className="h-4 w-4" />
                {eventDetails.dateLabel}
              </span>
            </div>

            {/* TITLE */}
            <div className="space-y-6">
              <h1
                ref={titleRef}
                className="
                  font-serif
                  text-[2.8rem]
                  leading-[0.92]
                  tracking-[-0.03em]
                  text-[#0C324A]
                  break-words

                  sm:text-[4.5rem]

                  lg:text-[6rem]

                  xl:text-[7rem]
                "
              >
                {eventDetails.name
                  .split(" ")
                  .map((word, index) => (
                    <span
                      key={`${word}-${index}`}
                      className="
                        mr-[0.18em]
                        inline-block
                      "
                    >
                      {word}
                    </span>
                  ))}
              </h1>

              {/* DESCRIPTION */}
              <div
                ref={copyRef}
                className="space-y-5"
              >
                <p
                  className="
                    max-w-2xl
                    text-base
                    leading-8
                    text-[#0C324A]/70

                    sm:text-lg

                    lg:text-xl
                    lg:leading-9
                  "
                >
                  {eventDetails.tagline}
                </p>

                {/* META */}
                <div
                  className="
                    flex
                    flex-wrap
                    items-center
                    gap-4
                    text-sm
                    uppercase
                    tracking-[0.22em]
                    text-[#0C324A]/55
                  "
                >
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#679CBC]" />

                    {eventDetails.location}
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <Stars className="h-4 w-4 text-[#C11720]" />

                    Invitation-led guest list
                  </span>
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <GlowButton
                onClick={() =>
                  onOpenTicket(
                    "Pro Pass",
                    "yearly"
                  )
                }
              >
                Reserve your pass
              </GlowButton>

              <GlowButton
                to="/about"
                variant="secondary"
              >
                Discover the story
              </GlowButton>
            </div>

            {/* METRICS */}
            <div
              className="
                grid
                gap-4
                border-t
                border-[#0C324A]/10
                pt-6

                sm:grid-cols-3
              "
            >
              {heroMetrics.map((metric) => (
                <motion.div
                  key={metric.label}
                  className="
                    rounded-[28px]
                    border
                    border-white/45
                    bg-white/55
                    p-5
                    backdrop-blur-xl
                  "
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
                    amount: 0.35,
                  }}
                  transition={{
                    duration: 0.65,
                  }}
                >
                  <div
                    className="
                      font-serif
                      text-3xl
                      text-[#0C324A]
                    "
                  >
                    {metric.value}
                  </div>

                  <div className="mt-1 text-sm text-[#0C324A]/55">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN — PREMIUM IMAGE CARD
          ========================================================= */}

          <motion.div
            style={{ y: cardY }}
            className="
              relative
              mx-auto
              w-full
              max-w-[650px]
            "
          >
            <div
              ref={cardRef}
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/45
                bg-white/45
                p-5
                shadow-[0_20px_80px_rgba(12,50,74,0.10)]
                backdrop-blur-[30px]

                sm:p-6

                lg:p-8
              "
            >
              {/* Premium Glow */}
              <div
                className="
                  absolute
                  right-0
                  top-0
                  h-52
                  w-52
                  rounded-full
                  bg-[#679CBC]/15
                  blur-3xl
                "
              />

              {/* Reflection */}
              <div
                className="
                  absolute
                  left-[-10%]
                  top-[-10%]
                  h-40
                  w-40
                  rounded-full
                  bg-white/40
                  blur-3xl
                "
              />

              <div className="relative space-y-6">
                {/* TOP */}
                <div className="flex items-center justify-between">
                  <div>
                    <div
                      className="
                        text-[11px]
                        uppercase
                        tracking-[0.32em]
                        text-[#0C324A]/55
                      "
                    >
                      Experience deck
                    </div>

                    <div
                      className="
                        mt-2
                        font-serif
                        text-2xl
                        leading-tight
                        text-[#0C324A]

                        sm:text-3xl
                      "
                    >
                      A curated evening
                      of immersive luxury.
                    </div>
                  </div>

                  {/* PLAY */}
                  <button
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/60
                      bg-white/55
                      text-[#0C324A]
                      shadow-[0_10px_30px_rgba(12,50,74,0.08)]
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:scale-105
                    "
                  >
                    <Play className="ml-1 h-5 w-5" />
                  </button>
                </div>

                {/* MAIN IMAGE */}
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[28px]
                  "
                >
                  <img
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1400&auto=format&fit=crop"
                    alt="Luxury event"
                    className="
                      h-[420px]
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-105

                      sm:h-[500px]
                    "
                  />

                  {/* Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/55
                      via-black/5
                      to-transparent
                    "
                  />

                  {/* Content */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      p-6
                    "
                  >
                    <div
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/20
                        bg-white/10
                        px-4
                        py-2
                        text-[11px]
                        uppercase
                        tracking-[0.22em]
                        text-white
                        backdrop-blur-xl
                      "
                    >
                      <Sparkles className="h-3.5 w-3.5" />
                      Invitation-only gathering
                    </div>

                    <h3
                      className="
                        mt-4
                        font-serif
                        text-3xl
                        leading-tight
                        text-white

                        sm:text-4xl
                      "
                    >
                      Elevated hospitality
                      meets cinematic storytelling.
                    </h3>
                  </div>
                </div>

                {/* IMAGE GRID */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",

                    "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1200&auto=format&fit=crop",

                    "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1200&auto=format&fit=crop",
                  ].map((image, index) => (
                    <div
                      key={index}
                      className="
                        overflow-hidden
                        rounded-[22px]
                      "
                    >
                      <img
                        src={image}
                        alt="Experience"
                        className="
                          h-28
                          w-full
                          object-cover
                          transition-transform
                          duration-700
                          hover:scale-110

                          sm:h-36
                        "
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}