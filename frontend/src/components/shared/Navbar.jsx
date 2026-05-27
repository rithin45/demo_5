import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/siteContent";

export default function Navbar({ onOpenTicket }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `group relative text-[0.82rem] uppercase tracking-[0.24em] transition-all duration-300 ${
      isActive
        ? "text-ink"
        : "text-ink/70 hover:text-taupe"
    }`;

  return (
    <>
      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <header className="fixed inset-x-0 top-0 z-50">
        <motion.nav
          initial={{
            y: -80,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`
            relative
            flex
            w-full
            items-center
            justify-between
            overflow-hidden
            border-b
            px-5
            py-4
            transition-all
            duration-500
            sm:px-8
            lg:px-14
            xl:px-20

            ${
              isScrolled
                ? `
                  border-ink/15
                  bg-white/80
                  shadow-[0_10px_60px_rgba(6,45,42,0.12)]
                  backdrop-blur-[30px]
                `
                : `
                  border-ink/10
                  bg-white/70
                  shadow-[0_8px_40px_rgba(6,45,42,0.08)]
                  backdrop-blur-[26px]
                `
            }
          `}
        >
          {/* =========================================================
              GLASSMORPHISM LAYERS
          ========================================================= */}

          {/* Main Gradient Overlay */}
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

          {/* Frosted Reflection */}
          <div
            className="
              pointer-events-none
              absolute
              left-[-10%]
              top-[-120%]
              h-[320%]
              w-[40%]
              rotate-12
              bg-white/35
              blur-3xl
            "
          />

          {/* Top Shine */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              h-[1px]
              bg-gradient-to-r
              from-transparent
              via-white/95
              to-transparent
            "
          />

          {/* Bottom Glow */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-[1px]
              bg-gradient-to-r
              from-transparent
              via-[#597B6A]/30
              to-transparent
            "
          />

          {/* =========================================================
              LEFT SECTION
          ========================================================= */}

          <NavLink
            to="/"
            className="
              relative
              z-10
              flex
              items-center
              gap-4
            "
          >
            {/* LOGO */}
            <motion.div
              whileHover={{
                rotate: 6,
                scale: 1.04,
              }}
              transition={{
                type: "spring",
                stiffness: 220,
              }}
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                border
                border-ink/10
                bg-white/80
                text-ink
                shadow-[0_8px_30px_rgba(6,45,42,0.08)]
                backdrop-blur-xl
              "
            >
              <Sparkles className="h-5 w-5" />
            </motion.div>

            {/* BRAND */}
            <div className="hidden sm:block">
              <h1
                className="
                  font-serif
                  text-[1.45rem]
                  font-semibold
                  tracking-[0.18em]
                  text-ink
                "
              >
                ASTRA NOVA
              </h1>

              <p
                className="
                  text-[0.65rem]
                  uppercase
                  tracking-[0.38em]
                  text-ink/55
                "
              >
                Premium Experience
              </p>
            </div>
          </NavLink>

          {/* =========================================================
              CENTER NAVIGATION
          ========================================================= */}

          <div className="hidden items-center gap-10 xl:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={navLinkClass}
              >
                <span className="relative">
                  {link.label}

                  {/* Underline */}
                  <span
                    className="
                      absolute
                      -bottom-2
                      left-0
                      h-[1.5px]
                      w-0
                      rounded-full
                      bg-taupe
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </span>
              </NavLink>
            ))}
          </div>

          {/* =========================================================
              RIGHT BUTTONS
          ========================================================= */}

          <div className="hidden items-center gap-3 lg:flex">
            {/* Secondary Button */}
            <button
              className="
                rounded-full
                border
                border-ink/15
                bg-white/80
                px-5
                py-3
                text-[0.78rem]
                font-medium
                uppercase
                tracking-[0.18em]
                text-ink
                shadow-[0_4px_20px_rgba(6,45,42,0.06)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:bg-white
              "
            >
              View Passes
            </button>

            {/* Primary Button */}
            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={() =>
                onOpenTicket("Pro Pass", "yearly")
              }
              className="
                group
                relative
                overflow-hidden
                rounded-full
                bg-ink
                px-6
                py-3
                text-[0.78rem]
                font-medium
                uppercase
                tracking-[0.2em]
                text-white
                shadow-[0_10px_35px_rgba(6,45,42,0.22)]
                transition-all
                duration-300
                hover:bg-[#0A3B37]
              "
            >
              {/* Shine Animation */}
              <span
                className="
                  absolute
                  inset-0
                  translate-x-[-120%]
                  bg-gradient-to-r
                  from-transparent
                  via-white/25
                  to-transparent
                  transition-transform
                  duration-1000
                  group-hover:translate-x-[120%]
                "
              />

              <span className="relative z-10 flex items-center gap-2">
                Reserve Seat

                <ArrowRight className="h-4 w-4" />
              </span>
            </motion.button>
          </div>

          {/* =========================================================
              MOBILE MENU BUTTON
          ========================================================= */}

          <button
            onClick={() =>
              setIsOpen((prev) => !prev)
            }
            className="
              relative
              z-20
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-2xl
              border
              border-ink/12
              bg-white/80
              text-ink
              backdrop-blur-xl
              lg:hidden
            "
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </motion.nav>

        {/* =========================================================
            MOBILE MENU
        ========================================================= */}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -15,
              }}
              transition={{
                duration: 0.3,
              }}
              className="lg:hidden"
            >
              <div
                className="
                  overflow-hidden
                  border-b
                  border-ink/12
                  bg-white/80
                  p-6
                  shadow-[0_10px_60px_rgba(6,45,42,0.1)]
                  backdrop-blur-[30px]
                "
              >
                <div className="flex flex-col gap-5">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.label}
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className="
                        border-b
                        border-ink/8
                        pb-4
                        text-sm
                        uppercase
                        tracking-[0.22em]
                        text-ink/75
                        transition
                        hover:text-taupe
                      "
                    >
                      {link.label}
                    </NavLink>
                  ))}

                  {/* Mobile Buttons */}
                  <div className="mt-4 flex flex-col gap-3">
                    <button
                      className="
                        rounded-full
                        border
                        border-ink/12
                        bg-white/85
                        px-5
                        py-3
                        text-sm
                        uppercase
                        tracking-[0.18em]
                        text-ink
                        backdrop-blur-xl
                      "
                    >
                      View Passes
                    </button>

                    <button
                      onClick={() => {
                        setIsOpen(false);

                        onOpenTicket(
                          "Pro Pass",
                          "yearly"
                        );
                      }}
                      className="
                        rounded-full
                        bg-ink
                        px-5
                        py-3
                        text-sm
                        uppercase
                        tracking-[0.18em]
                        text-white
                        shadow-[0_10px_35px_rgba(6,45,42,0.2)]
                      "
                    >
                      Reserve Seat
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* =========================================================
          SPACER
      ========================================================= */}

      <div className="h-[72px]" />
    </>
  );
}