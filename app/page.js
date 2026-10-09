"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animation
      const timeline = gsap.timeline();

      timeline
        .fromTo(
          ".hero h1",
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          }
        )
        .fromTo(
          ".stat",
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.4"
        );

      // Scroll-driven visual animation
      gsap.to(".visual-box", {
        y: 270,
        rotation: 180,
        scale: 1.3,
        ease: "none",

        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });
      // Scroll-driven headline movement
gsap.to(".hero h1", {
  y: -120,
  opacity: 0.65,
  ease: "none",

  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
  },
});

// Scroll-driven statistics movement
gsap.to(".stats", {
  y: 100,
  opacity: 0.8,
  ease: "none",

  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
  },
});
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full">
      <section className="hero">
        <h1>W E L C O M E I T Z F I Z Z</h1>

        <div className="visual">
          <div className="visual-box"></div>
        </div>

        <div className="scroll-indicator">
          <span>SCROLL</span>
          <div className="scroll-line"></div>
        </div>

        <div className="stats">
          <div className="stat">
            <h2>87%</h2>
            <p>Customer Impact</p>
          </div>

          <div className="stat">
            <h2>92%</h2>
            <p>Growth Rate</p>
          </div>

          <div className="stat">
            <h2>76%</h2>
            <p>Success Rate</p>
          </div>
        </div>
      </section>
    </main>
  );
}
