"use client"; // 👈 this is mandatory at the top

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  text: string;
  icon: ReactNode;
}

const Title = ({ text, icon }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex items-center gap-4 text-2xl group pb-8"
    >
      <motion.h3
        className="font-semibold relative overflow-hidden"
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {text}
        <span className="w-full h-[2px] absolute bottom-0 left-0 inline-block bg-blue-600 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
      </motion.h3>
      <motion.span
        className="text-blue-600"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120, delay: 0.3 }}
      >
        {icon}
      </motion.span>
    </motion.div>
  );
};

export default Title;
