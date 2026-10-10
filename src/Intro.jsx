import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useExperience } from "./components";
export default function Intro() {
  const frame = useRef(null),
    section = useRef(null),
    cancelled = useRef(false),
    advanced = useRef(false);
  const { motion, lenis } = useExperience();
  const navigate = useNavigate();
  useEffect(() => {
    let visible = true;
    const state = () =>
      frame.current?.contentWindow?.postMessage(
        { source: "tracetriage-parent", type: "state", motion, visible },
        location.origin,
      );
    const advance = () => {
      advanced.current = true;
      const hero = document.getElementById("homepage-hero");
      if (!hero) return;
      if (lenis.current)
        lenis.current.scrollTo(hero, {
          duration: 1.8,
          easing: (t) => 1 - Math.pow(1 - t, 4),
        });
      else hero.scrollIntoView({ behavior: motion ? "smooth" : "instant" });
    };
    const receive = (e) => {
      if (
        e.origin !== location.origin ||
        e.source !== frame.current?.contentWindow ||
        e.data?.source !== "tracetriage-intro"
      )
        return;
      const { type, href, delta } = e.data;
      if (type === "ready") state();
      if (type === "interaction") cancelled.current = true;
      if (
        type === "complete" &&
        !advanced.current &&
        motion &&
        !cancelled.current &&
        window.scrollY < 40
      )
        advance();
      if (type === "continue") advance();
      if (
        type === "navigate" &&
        typeof href === "string" &&
        href.startsWith("/") &&
        !href.startsWith("//")
      )
        navigate(href);
      if (type === "scroll" && Number.isFinite(delta)) {
        const y = Math.max(0, window.scrollY + delta);
        if (lenis.current) lenis.current.scrollTo(y, { immediate: true });
        else window.scrollTo(0, y);
      }
    };
    const cancel = () => {
      cancelled.current = true;
    };
    const keyCancel = (e) => {
      if (
        [
          "ArrowDown",
          "ArrowUp",
          "PageDown",
          "PageUp",
          " ",
          "Home",
          "End",
        ].includes(e.key)
      )
        cancel();
    };
    const updateNav = () => {
      document.documentElement.dataset.introInView =
        window.scrollY < window.innerHeight - 100 ? "true" : "false";
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting && entry.intersectionRatio > 0.2;
        state();
      },
      { threshold: [0, 0.2, 1] },
    );
    observer.observe(section.current);
    window.addEventListener("message", receive);
    window.addEventListener("keydown", keyCancel);
    window.addEventListener("wheel", cancel, { passive: true });
    window.addEventListener("touchstart", cancel, { passive: true });
    window.addEventListener("scroll", updateNav, { passive: true });
    updateNav();
    state();
    return () => {
      observer.disconnect();
      window.removeEventListener("message", receive);
      window.removeEventListener("keydown", keyCancel);
      window.removeEventListener("wheel", cancel);
      window.removeEventListener("touchstart", cancel);
      window.removeEventListener("scroll", updateNav);
      delete document.documentElement.dataset.introInView;
    };
  }, [motion, lenis, navigate]);
  return (
    <section className="site-intro" ref={section} aria-label="Introduction">
      <iframe
        ref={frame}
        src="/intro/index.html"
        title="TraceTriage cinematic introduction"
        allow="autoplay"
        onLoad={() =>
          frame.current?.contentWindow?.postMessage(
            {
              source: "tracetriage-parent",
              type: "state",
              motion,
              visible: true,
            },
            location.origin,
          )
        }
      />
    </section>
  );
}
