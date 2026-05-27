import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import useMagnetic from "../../hooks/useMagnetic";

const variants = {
  primary:
    "bg-gradient-to-r from-ink via-sage to-taupe text-white shadow-glow hover:brightness-105",
  secondary:
    "border border-ink/15 bg-white/80 text-ink hover:bg-white",
  ghost:
    "border border-sage/30 bg-sand/60 text-ink/80 hover:bg-sand/80",
};

export default function GlowButton({
  children,
  className = "",
  href,
  icon = true,
  onClick,
  to,
  type = "button",
  variant = "primary",
  ...props
}) {
  const ref = useMagnetic(0.12);
  const classes = `group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] transition duration-300 ${variants[variant]} ${className}`.trim();

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (to) {
    return (
      <Link
        ref={ref}
        to={to}
        className={classes}
        data-cursor="hover"
        {...props}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        className={classes}
        data-cursor="hover"
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      className={classes}
      data-cursor="hover"
      {...props}
    >
      {content}
    </button>
  );
}
