// Progressive enhancement: no motion is required to access any content.
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (!reducedMotion.matches && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -25px 0px" }
  );
  document
    .querySelectorAll(
      ".intro h2,.intro-bottom,.section-heading,.product-card,.statement h2,.steps article,.closing h2"
    )
    .forEach((el) => {
      el.classList.add("reveal");
      observer.observe(el);
    });
}

// Fallback: ensure entrance transforms settle even if observation is delayed.
window.addEventListener("load", () => {
  window.setTimeout(() => {
    document
      .querySelectorAll(".reveal:not(.is-visible)")
      .forEach((el) => el.classList.add("is-visible"));
  }, 2200);
});
