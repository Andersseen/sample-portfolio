"use client";
import React from "react";
import { motion } from "framer-motion";
import "./lamp.scss";

const LAMP_TRANSITION = {
  delay: 0.3,
  duration: 0.8,
  ease: "easeInOut" as const,
};

export const LampContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="lamp">
      <div className="lamp__glow-wrapper">
        <motion.div
          initial={{ opacity: 0.35, width: "12rem" }}
          whileInView={{ opacity: 0.65, width: "22rem" }}
          transition={LAMP_TRANSITION}
          className="lamp__conic lamp__conic--left"
        >
          <div className="lamp__mask lamp__mask--bottom-left" />
          <div className="lamp__mask lamp__mask--left-edge" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.35, width: "12rem" }}
          whileInView={{ opacity: 0.65, width: "22rem" }}
          transition={LAMP_TRANSITION}
          className="lamp__conic lamp__conic--right"
        >
          <div className="lamp__mask lamp__mask--right-edge" />
          <div className="lamp__mask lamp__mask--bottom-right" />
        </motion.div>
        <div className="lamp__blur-bg" />
        <div className="lamp__backdrop" />
        <div className="lamp__top-fill" />
      </div>
      <div className="lamp__children">{children}</div>
    </div>
  );
};
