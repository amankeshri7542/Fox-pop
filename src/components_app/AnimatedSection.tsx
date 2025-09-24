// src/components_app/AnimatedSection.tsx
"use client";
import { motion } from "framer-motion";
import React from "react";

export default function AnimatedSection({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      {children}
    </motion.section>
  );
}
