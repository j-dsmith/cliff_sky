"use client";
import { motion } from "framer-motion";
import { FC } from "react";

import { checkIconVariants, circleVariants } from "./variants";
import { VariantNames } from "@/types/VariantNames";
import Link from "next/link";
import NavigateHomeButton from "../NavigateHomeButton";

const SuccessAnimation: FC = ({}) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-12 3xs:row-start-1 xs:pb-8">
      <div className="relative">
        <motion.div
          variants={circleVariants}
          initial={VariantNames.Initial}
          animate={VariantNames.Animate}
          className="relative inset-0 grid h-64 w-64 place-items-center rounded-full border border-emerald-300 bg-emerald-200 text-emerald-500 shadow-xl shadow-emerald-300/50 3xs:h-32 3xs:w-32"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.25}
            stroke="currentColor"
            className="h-32 w-32 drop-shadow-md-emerald 3xs:h-16 3xs:w-16"
          >
            <motion.path
              variants={checkIconVariants}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </motion.div>
      </div>
      <div className="text-center">
        <p className="text-xl font-semibold">Order Received!</p>
        <p className="md:max-w-[40ch]">
          Thank you for your purchase, I{"'"}ll send an email with tracking
          information when it ships.
        </p>
      </div>
      <NavigateHomeButton />
    </div>
  );
};

export default SuccessAnimation;
