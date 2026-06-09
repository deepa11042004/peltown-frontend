"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  CreditCard,
  Layers,
  ShieldCheck,
  Mail,
  AlertCircle,
} from "lucide-react";

export default function TermSec() {
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
        {/* ================= DOCUMENT INTRO HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4 text-left border-b border-zinc-800 pb-8"
        >
          <p className="text-zinc-400 text-sm md:text-base font-medium leading-relaxed max-w-4xl pt-2">
            These Terms and Conditions govern the relationship between Peltown
            and the client regarding the provision of services by Peltown. By
            engaging Peltown for any project, the Client agrees to be bound by
            these Terms.
          </p>
        </motion.div>

        {/* ================= CORE COMPONENT TERMS MATRIX ================= */}
        <div className="space-y-8">
          {/* CATEGORY 1: PAYMENT TERMS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="border border-zinc-800 rounded-3xl bg-zinc-900/40 p-6 md:p-10 text-left space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4 text-[#BFCA16]">
              <CreditCard className="w-5 h-5" />
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white">
                Payment Terms
              </h2>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#BFCA16] mt-2 shrink-0" />
                <p className="text-sm text-zinc-400 leading-relaxed">
                  <span className="font-bold text-white block sm:inline mr-1">
                    Payment Schedule:
                  </span>
                  The Client agrees to make an advance payment of 50% of the
                  total project cost upon commencement of the project. The
                  remaining 50% of the total project cost shall be payable upon
                  completion and delivery of the project.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#BFCA16] mt-2 shrink-0" />
                <p className="text-sm text-zinc-400 leading-relaxed">
                  <span className="font-bold text-white block sm:inline mr-1">
                    EMI Option:
                  </span>
                  Peltown may offer a short EMI option for select projects,
                  subject to mutual agreement between Peltown and the Client.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#BFCA16] mt-2 shrink-0" />
                <p className="text-sm text-zinc-400 leading-relaxed">
                  <span className="font-bold text-white block sm:inline mr-1">
                    Change in Project Scope:
                  </span>
                  Any additional requirements added during the project will be
                  subject to a new agreement and may incur additional costs.
                  Similarly, any reduction in project scope may result in a
                  reduction of costs, to be determined on a case-by-case basis.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CATEGORY 2: PROJECT REQUIREMENTS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="border border-zinc-800 rounded-3xl bg-zinc-900/40 p-6 md:p-10 text-left space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4 text-[#BFCA16]">
              <Layers className="w-5 h-5" />
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white">
                Project Requirements
              </h2>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#BFCA16] mt-2 shrink-0" />
                <p className="text-sm text-zinc-400 leading-relaxed">
                  <span className="font-bold text-white block sm:inline mr-1">
                    Clear Requirements:
                  </span>
                  All project requirements must be clearly defined and agreed
                  upon by both parties before the commencement of the project.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#BFCA16] mt-2 shrink-0" />
                <p className="text-sm text-zinc-400 leading-relaxed">
                  <span className="font-bold text-white block sm:inline mr-1">
                    No Mid-Project Changes:
                  </span>
                  No changes to the project scope will be accepted once the
                  agreement is signed. Any changes requested by the Client after
                  signing the agreement will require a new agreement and may
                  result in additional costs.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CATEGORY 3: ADDITIONAL TERMS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="border border-zinc-800 rounded-3xl bg-zinc-900/40 p-6 md:p-10 text-left space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4 text-[#BFCA16]">
              <ShieldCheck className="w-5 h-5" />
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white">
                Additional Terms
              </h2>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#BFCA16] mt-2 shrink-0" />
                <p className="text-sm text-zinc-400 leading-relaxed">
                  <span className="font-bold text-white block sm:inline mr-1">
                    Intellectual Property:
                  </span>
                  All intellectual property rights related to the project
                  deliverables shall belong to the Client upon full payment.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#BFCA16] mt-2 shrink-0" />
                <p className="text-sm text-zinc-400 leading-relaxed">
                  <span className="font-bold text-white block sm:inline mr-1">
                    Confidentiality:
                  </span>
                  Both parties agree to maintain the confidentiality of any
                  proprietary information shared during the project.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#BFCA16] mt-2 shrink-0" />
                <p className="text-sm text-zinc-400 leading-relaxed">
                  <span className="font-bold text-white block sm:inline mr-1">
                    Governing Law:
                  </span>
                  These Terms shall be governed by and construed in accordance
                  with the laws of India, and any disputes shall be subject to
                  the exclusive jurisdiction of the courts of Delhi, India.
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
          className="inline-flex flex-col sm:flex-row items-center gap-3 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-5 w-full text-center sm:text-left justify-between"
        >
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-zinc-500 shrink-0 hidden sm:block" />
            <span className="text-xs md:text-sm text-zinc-400 font-medium">
              If you have any questions or concerns regarding these Terms,
              please reach out.
            </span>
          </div>
          <a
            href="mailto:info@peltown.com"
            className="text-xs md:text-sm font-bold text-[#BFCA16] hover:text-[#9ba40e] transition-colors flex items-center gap-1.5 shrink-0 group"
          >
            <Mail className="w-4 h-4 text-zinc-500 group-hover:text-[#BFCA16] transition-colors" />
            info@peltown.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
