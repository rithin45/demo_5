import { motion } from "framer-motion";

import { sponsors } from "../../data/siteContent";

export default function SponsorsSection() {
  const items = [...sponsors, ...sponsors];

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
            from-[#f3efe8]
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
            bottom-[5%]
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
            mb-12
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
              Global partners
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
              Trusted by
              ambitious teams
              and modern
              product brands.
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
            Astra Nova collaborates with
            forward-thinking companies,
            creative operators, and global
            innovation communities shaping
            the future of experiences.
          </p>
        </motion.div>

        {/* =========================================================
            MARQUEE WRAPPER
        ========================================================= */}

        <div className="relative overflow-hidden">
          {/* Left Fade */}
          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-10
              h-full
              w-32
              bg-gradient-to-r
              from-[#f5f2ec]
              to-transparent
            "
          />

          {/* Right Fade */}
          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              z-10
              h-full
              w-32
              bg-gradient-to-l
              from-[#f5f2ec]
              to-transparent
            "
          />

          {/* =========================================================
              MARQUEE
          ========================================================= */}

          <motion.div
            className="
              flex
              w-max
              items-center
              gap-5
            "
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {items.map((brand, index) => (
              <motion.div
                key={`${brand}-${index}`}
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-full
                  border
                  border-white/50
                  bg-white/65

                  px-7
                  py-4

                  shadow-[0_10px_30px_rgba(12,50,74,0.05)]
                  backdrop-blur-xl

                  transition-all
                  duration-500

                  hover:border-[#679CBC]/25
                  hover:bg-white/80
                "
              >
                {/* Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-[#679CBC]/0
                    via-[#679CBC]/6
                    to-[#C11720]/0
                    opacity-0
                    transition-opacity
                    duration-500

                    group-hover:opacity-100
                  "
                />

                {/* Text */}
                <div
                  className="
                    relative
                    text-sm
                    uppercase
                    tracking-[0.32em]
                    text-[#0C324A]/70

                    transition-colors
                    duration-300

                    group-hover:text-[#0C324A]
                  "
                >
                  {brand}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* =========================================================
            BOTTOM LINE
        ========================================================= */}

        <div
          className="
            relative
            mt-14
            h-[1px]
            w-full
            overflow-hidden
            rounded-full
            bg-[#0C324A]/8
          "
        >
          <motion.div
            animate={{
              x: ["-100%", "100%"],
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
    </section>
  );
}