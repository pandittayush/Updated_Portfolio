"use client";

import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="wrapper">
      <div className="max-w-5xl mx-auto flex flex-col gap-8 items-center justify-center">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">EDUCATION</h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-6 w-full"
        >
          {/* B.Tech */}
          <div className="group relative p-4 rounded-lg bg-white shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 hover:bg-gray-100">
            <div className="flex flex-col gap-2 text-gray-900">
              <div className="font-semibold text-xl">B.Tech</div>
              <div className="font-medium">Lovely Professional University, Punjab, India</div>
              <div className="italic">2022 - Present</div>
              <div className="font-semibold">CGPA: 7.8</div>
            </div>
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition duration-300 rounded-lg"></div>
          </div>

          {/* Intermediate */}
          <div className="group relative p-4 rounded-lg bg-white shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 hover:bg-gray-100">
            <div className="flex flex-col gap-2 text-right text-gray-900">
              <div className="font-semibold text-xl">Intermediate (12th)</div>
              <div className="font-medium">MPSS</div>
              <div className="italic">2021</div>
              <div className="font-semibold">Percentage: 80%</div>
            </div>
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition duration-300 rounded-lg"></div>
          </div>

          {/* 10th */}
          <div className="group relative p-4 rounded-lg bg-white shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 hover:bg-gray-100">
            <div className="flex flex-col gap-2 text-gray-900">
              <div className="font-semibold text-xl">10th</div>
              <div className="font-medium">MPSS</div>
              <div className="italic">2019</div>
              <div className="font-semibold">Percentage: 84%</div>
            </div>
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition duration-300 rounded-lg"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
