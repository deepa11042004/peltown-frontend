"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import { Eye, EyeOff, Loader2, ShieldCheck, Mail, Lock, CheckCircle2, ArrowRight } from "lucide-react";

// Zod form validation schema
const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email address is required")
    .email("Please enter a valid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState<LoginFormValues>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof LoginFormValues, string>>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear validation error when editing field
    if (errors[name as keyof LoginFormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Zod Validation
    const result = loginSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof LoginFormValues, string>> = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof LoginFormValues;
        if (path) {
          fieldErrors[path] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsLoading(true);

    // Simulate login request
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      
      if (formData.rememberMe) {
        localStorage.setItem("remembered_email", formData.email);
      }

      // Redirect back to home page
      setTimeout(() => {
        router.push("/");
      }, 1500);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen w-full flex bg-white font-sans overflow-hidden">
      {/* LEFT COLUMN: Vector/Artwork (Hidden on mobile/tablet) */}
      <div className="hidden lg:flex w-1/2 relative flex-col items-center justify-center bg-white p-12 overflow-hidden border-r border-zinc-100">
        {/* Soft Modern Gradient Orbs in the background */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#2F69FF]/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#BFCA16]/4 blur-3xl" />
        
        {/* Animated image wrapper to create a soft floating effect */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10 w-full max-w-125 aspect-square flex items-center justify-center"
        >
          <Image
            src="/Img/login_security_penguin.png"
            alt="Peltown Security Guard Penguin"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain"
            priority
          />
        </motion.div>
        
        {/* Subtle tagline below artwork */}
        <div className="absolute bottom-12 text-center max-w-sm px-6">
          <p className="text-zinc-400 text-xs tracking-wider uppercase font-bold mb-2">
            Secure Entry Point
          </p>
          <p className="text-zinc-500 text-sm font-medium">
            Form security enforced with high-level client-side verification and schema-strict validation.
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#F8FAFC] px-6 sm:px-12 md:px-20 py-12 relative">
        {/* Background micro-details */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-radial-gradient from-zinc-200/20 to-transparent pointer-events-none" />

        {/* Outer Form Container */}
        <div className="w-full max-w-md">
          {/* Logo / Header Link */}
          <Link href="/" className="inline-flex items-center gap-1.5 mb-10 select-none group">
            <span className="text-2xl font-bold tracking-tight text-zinc-900 leading-none uppercase">
              Peltown<span className="text-[#BFCA16]">.</span>
            </span>
            <span className="text-[9px] font-bold tracking-[0.45em] text-zinc-400 uppercase mt-1 pl-0.5 group-hover:text-zinc-600 transition-colors">
              STUDIO
            </span>
          </Link>

          {/* Form Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-[#0F172A] tracking-tight mb-2">
              Peltown
            </h1>
            <p className="text-zinc-500 text-sm font-semibold">
              Welcome back! Please enter your details to sign in.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!submitSuccess ? (
              <motion.form
                key="login-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-6"
                noValidate
              >
                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-bold text-zinc-700 uppercase tracking-wider">
                    Email Address
                  </label>
                  <div className="relative rounded-lg shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-4.5 w-4.5 text-zinc-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      disabled={isLoading}
                      className={`w-full bg-white border ${
                        errors.email ? "border-red-500 ring-2 ring-red-100" : "border-zinc-200"
                      } rounded-xl py-3.5 pl-10 pr-4 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#2F69FF] focus:ring-4 focus:ring-[#2F69FF]/10 transition-all duration-200`}
                    />
                  </div>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs font-bold text-red-500 flex items-center gap-1 mt-1"
                    >
                      <span>●</span> {errors.email}
                    </motion.p>
                  )}
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-xs font-bold text-zinc-700 uppercase tracking-wider">
                      Password
                    </label>
                    <Link
                      href="#"
                      className="text-xs font-bold text-[#2F69FF] hover:text-blue-700 transition-colors"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative rounded-lg shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-4.5 w-4.5 text-zinc-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      disabled={isLoading}
                      className={`w-full bg-white border ${
                        errors.password ? "border-red-500 ring-2 ring-red-100" : "border-zinc-200"
                      } rounded-xl py-3.5 pl-10 pr-12 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#2F69FF] focus:ring-4 focus:ring-[#2F69FF]/10 transition-all duration-200`}
                    />
                    <button
                      type="button"
                      tabIndex={-1}
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-400 hover:text-zinc-600 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs font-bold text-red-500 flex items-center gap-1 mt-1"
                    >
                      <span>●</span> {errors.password}
                    </motion.p>
                  )}
                </div>

                {/* Remember Me Checkbox */}
                <div className="flex items-center">
                  <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="h-4 w-4 rounded border-zinc-300 text-[#2F69FF] focus:ring-[#2F69FF] transition-all cursor-pointer"
                  />
                  <label htmlFor="rememberMe" className="ml-2 block text-xs font-bold text-zinc-500 select-none cursor-pointer">
                    Remember me for 30 days
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#2F69FF] hover:bg-blue-600 text-white font-bold text-sm py-4 rounded-xl shadow-lg shadow-[#2F69FF]/15 hover:shadow-[#2F69FF]/25 focus:ring-4 focus:ring-blue-100 transition-all flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin text-white" />
                      <span>Verifying Security...</span>
                    </>
                  ) : (
                    <>
                      <span>Log In</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>

                {/* Footer Section */}
                <div className="text-center pt-4">
                  <p className="text-xs font-bold text-zinc-500">
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" className="text-[#2F69FF] hover:text-blue-700 transition-colors">
                      Sign up
                    </Link>
                  </p>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success-screen"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white border border-emerald-100 rounded-2xl p-8 text-center shadow-xl shadow-emerald-500/5 relative overflow-hidden"
              >
                {/* Background graphic */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-emerald-50 rounded-full blur-xl pointer-events-none" />

                <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-500 shadow-md">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-extrabold text-zinc-900 mb-2">
                  Access Authorized
                </h3>
                <p className="text-zinc-500 text-sm font-semibold max-w-xs mx-auto mb-6">
                  Zod security check passed. Successfully signed into Peltown Studio. Redirecting you to the workspace...
                </p>
                <div className="flex justify-center items-center gap-1.5 text-xs text-emerald-600 font-bold bg-emerald-50/50 py-2.5 px-4 rounded-xl border border-emerald-50">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Secure Handshake Completed</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
