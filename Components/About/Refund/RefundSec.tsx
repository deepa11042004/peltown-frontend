"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { XCircle, Receipt, Mail, AlertCircle } from "lucide-react";

export default function RefundSec() {
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 lg:px-20 w-full min-h-screen flex flex-col items-center justify-center font-sans antialiased">
      <div className="max-w-5xl mx-auto w-full space-y-12">
        {/* ================= CORE POLICY MATRICES ================= */}
        <div className="space-y-8">
          {/* CATEGORY 1: CANCELLATION OF PROJECT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="border border-zinc-800 rounded-3xl bg-zinc-900/40 p-6 md:p-10 text-left space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4 text-[#BFCA16]">
              <XCircle className="w-5 h-5" />
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white">
                Cancellation of Project
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-sm font-semibold text-zinc-300 bg-zinc-800/40 rounded-xl px-4 py-3 border border-zinc-800/40">
                In the event of project cancellation, refunds will be processed
                based on the development status of the project.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#BFCA16] mt-2 shrink-0" />
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    If development has not commenced,{" "}
                    <span className="font-bold text-white">
                      100% of the advance payment
                    </span>{" "}
                    will be refunded.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#BFCA16] mt-2 shrink-0" />
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    If development has commenced and no deliverables have been
                    provided,{" "}
                    <span className="font-bold text-white">
                      50% of the advance payment
                    </span>{" "}
                    will be refunded.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    If development has commenced and deliverables have been
                    provided,{" "}
                    <span className="font-bold text-red-400">no refund</span>{" "}
                    will be issued.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CATEGORY 2: DEDUCTIBLE EXPENSES */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="border border-zinc-800 rounded-3xl bg-zinc-900/40 p-6 md:p-10 text-left space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4 text-[#BFCA16]">
              <Receipt className="w-5 h-5" />
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white">
                Deductible Expenses
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#BFCA16] mt-2 shrink-0" />
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Any expenses incurred by Peltown on behalf of the Client, such
                  as third-party assets (e.g., servers, SSL certificates,
                  images, videos), will be deducted from the refund amount.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= FOOTER SUPPORT CONTACT CALLOUT ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex flex-col sm:flex-row items-center gap-3 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-5 w-full text-center sm:text-left justify-between shadow-xs"
        >
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-zinc-555 shrink-0 hidden sm:block" />
            <span className="text-xs md:text-sm text-zinc-400 font-medium">
              If you have any questions or concerns regarding cancellations or
              processing timeframes, please reach out.
            </span>
          </div>
          <a
            href="mailto:info@peltown.com"
            className="text-xs md:text-sm font-bold text-[#BFCA16] hover:text-[#9ba40e] transition-colors flex items-center gap-1.5 shrink-0 group"
          >
            <Mail className="w-4 h-4 text-zinc-555 group-hover:text-[#BFCA16] transition-colors" />
            info@peltown.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
