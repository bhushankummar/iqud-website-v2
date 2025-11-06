"use client";

import { Button } from "@/components/ui/button";
import HeroLogoMarquee from "./hero-logo-marquee";
import { TextAnimate } from "@/components/ui/text-animate";
import { motion } from "framer-motion";
import HeroActionBtn from "./hero-action-btn";

export default function HeroSection() {
  return (
    <section className="relative flex h-[700px] flex-col items-center justify-center overflow-hidden text-center">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full scale-105 object-cover"
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/75 to-black/90 md:bg-gradient-to-r md:from-black/90 md:via-black/70 md:to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl px-6 text-white">
        {/* Animated Heading */}
        <h1 className="mb-6 max-w-[630px] text-center leading-tight font-extrabold tracking-tight">
          <TextAnimate
            by="character"
            animation="blurInUp"
            className="text-4xl font-extrabold text-white drop-shadow-xl sm:text-5xl md:text-6xl"
            duration={0.8}
            once
          >
            Empowering Digital Transformation with
          </TextAnimate>

          <TextAnimate
            by="character"
            animation="blurInUp"
            delay={0.5}
            duration={0.8}
            className="text-primary text-5xl"
            once
          >
            Iqud
          </TextAnimate>
        </h1>

        {/* Animated Subtext */}
        <motion.p
          className="mx-auto mb-4 max-w-2xl text-base text-gray-300 sm:text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        >
          We design, develop, and deliver innovative IT solutions to help your
          business grow and succeed in the digital era.
        </motion.p>

        {/* Animated CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
        >
          <HeroActionBtn />
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/90 to-transparent" />

      {/* Logo Carousel (fixed positioning for consistency) */}
      <div className="absolute bottom-0 left-1/2 z-10 w-full -translate-x-1/2">
        <HeroLogoMarquee />
      </div>
    </section>
  );
}
