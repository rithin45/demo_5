import PageTransition from "../components/shared/PageTransition";
import GlowButton from "../components/shared/GlowButton";

export default function NotFoundPage() {
  return (
    <PageTransition>
      <section className="section-shell flex min-h-[70vh] items-center justify-center py-24">
        <div className="glass-panel premium-border max-w-2xl p-10 text-center">
          <div className="text-xs uppercase tracking-[0.32em] text-ink/50">404</div>
          <h1 className="mt-4 font-display text-5xl text-ink sm:text-6xl">
            The experience you’re looking for is off-stage.
          </h1>
          <p className="mt-6 text-ink/70">
            The route does not exist, but the summit still does.
          </p>
          <div className="mt-8 flex justify-center">
            <GlowButton to="/">Return home</GlowButton>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
