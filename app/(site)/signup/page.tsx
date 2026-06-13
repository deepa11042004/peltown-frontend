"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import { Eye, EyeOff, Loader2, ShieldCheck, Mail, Lock, User, Check, X, CheckCircle2 } from "lucide-react";

// Zod validation schema
const signupSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z
      .string()
      .min(1, "Email address is required")
      .email("Please enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Must contain at least one uppercase letter")
      .regex(/[a-z]/, "Must contain at least one lowercase letter")
      .regex(/[0-9]/, "Must contain at least one number"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    agreeTerms: z.boolean().refine((val) => val === true, {
      message: "You must agree to the Terms & Conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignupFormValues = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const router = useRouter();

  const [formData, setFormData] = useState<SignupFormValues>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof SignupFormValues, string>>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Real-time password check indicators
  const passwordCriteria = {
    length: formData.password.length >= 8,
    uppercase: /[A-Z]/.test(formData.password),
    lowercase: /[a-z]/.test(formData.password),
    number: /[0-9]/.test(formData.password),
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear validation error when editing field
    if (errors[name as keyof SignupFormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Zod validation check
    const result = signupSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof SignupFormValues, string>> = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof SignupFormValues;
        if (path) {
          fieldErrors[path] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsLoading(true);

    // Simulate database signup action
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);

      // Redirect to login after success
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen w-full flex bg-white font-sans overflow-hidden">
      {/* LEFT COLUMN: Graphic artwork (Hidden on mobile/tablet) */}
      <div className="hidden lg:flex w-1/2 relative flex-col items-center justify-center bg-white p-12 overflow-hidden border-r border-zinc-100">
        {/* Soft Ambient Blurs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#BFCA16]/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#2F69FF]/4 blur-3xl" />

        {/* Floating penguin container */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10 w-full max-w-125 aspect-square flex items-center justify-center"
        >
          <Image
            src="/Img/signup_security_penguin.png"
            alt="Peltown Signup Assistant Penguin"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Tagline */}
        <div className="absolute bottom-12 text-center max-w-sm px-6">
          <p className="text-zinc-400 text-xs tracking-wider uppercase font-bold mb-2">
            Workspace Enrollment
          </p>
          <p className="text-zinc-500 text-sm font-medium">
            Enroll your account securely. Your data is protected by schema validation filters and encryption standards.
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN: Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#F8FAFC] px-6 sm:px-12 md:px-20 py-8 relative overflow-y-auto">
        <div className="w-full max-w-md my-auto">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center gap-1.5 mb-6 select-none group">
            <span className="text-2xl font-bold tracking-tight text-zinc-900 leading-none uppercase">
              Peltown<span className="text-[#BFCA16]">.</span>
            </span>
            <span className="text-[9px] font-bold tracking-[0.45em] text-zinc-400 uppercase mt-1 pl-0.5 group-hover:text-zinc-600 transition-colors">
              STUDIO
            </span>
          </Link>

          {/* Form Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-extrabold text-[#0F172A] tracking-tight mb-1">
              Create Account
            </h1>
            <p className="text-zinc-500 text-sm font-semibold">
              Fill in your details to establish a secure login profile.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!submitSuccess ? (
              <motion.form
                key="signup-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-4"
                noValidate
              >
                {/* Full Name */}
                <div className="space-y-1">
                  <label htmlFor="name" className="block text-xs font-bold text-zinc-700 uppercase tracking-wider">
                    Full Name
                  </label>
                  <div className="relative rounded-lg shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-4.5 w-4.5 text-zinc-400" />
                    </div>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      disabled={isLoading}
                      className={`w-full bg-white border ${
                        errors.name ? "border-red-500 ring-2 ring-red-100" : "border-zinc-200"
                      } rounded-xl py-3 pl-10 pr-4 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#2F69FF] focus:ring-4 focus:ring-[#2F69FF]/10 transition-all duration-200`}
                    />
                  </div>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs font-bold text-red-500 flex items-center gap-1"
                    >
                      <span>●</span> {errors.name}
                    </motion.p>
                  )}
                </div>

                {/* Email Address */}
                <div className="space-y-1">
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
                      } rounded-xl py-3 pl-10 pr-4 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#2F69FF] focus:ring-4 focus:ring-[#2F69FF]/10 transition-all duration-200`}
                    />
                  </div>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs font-bold text-red-500 flex items-center gap-1"
                    >
                      <span>●</span> {errors.email}
                    </motion.p>
                  )}
                </div>

                {/* Password */}
                <div className="space-y-1">
                  <label htmlFor="password" className="block text-xs font-bold text-zinc-700 uppercase tracking-wider">
                    Password
                  </label>
                  <div className="relative rounded-lg shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-4.5 w-4.5 text-zinc-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Minimum 8 characters"
                      disabled={isLoading}
                      className={`w-full bg-white border ${
                        errors.password ? "border-red-500 ring-2 ring-red-100" : "border-zinc-200"
                      } rounded-xl py-3 pl-10 pr-12 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#2F69FF] focus:ring-4 focus:ring-[#2F69FF]/10 transition-all duration-200`}
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

                  {/* Real-time Password Strength Criteria Checklist */}
                  {formData.password.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="bg-zinc-50 border border-zinc-100 rounded-xl p-3 grid grid-cols-2 gap-2 mt-1.5"
                    >
                      <div className="flex items-center gap-1.5 text-[11px] font-bold">
                        {passwordCriteria.length ? (
                          <Check className="h-3.5 w-3.5 text-emerald-500" />
                        ) : (
                          <X className="h-3.5 w-3.5 text-zinc-300" />
                        )}
                        <span className={passwordCriteria.length ? "text-emerald-600" : "text-zinc-400"}>8+ Characters</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] font-bold">
                        {passwordCriteria.number ? (
                          <Check className="h-3.5 w-3.5 text-emerald-500" />
                        ) : (
                          <X className="h-3.5 w-3.5 text-zinc-300" />
                        )}
                        <span className={passwordCriteria.number ? "text-emerald-600" : "text-zinc-400"}>One Number</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] font-bold">
                        {passwordCriteria.uppercase ? (
                          <Check className="h-3.5 w-3.5 text-emerald-500" />
                        ) : (
                          <X className="h-3.5 w-3.5 text-zinc-300" />
                        )}
                        <span className={passwordCriteria.uppercase ? "text-emerald-600" : "text-zinc-400"}>One Uppercase</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] font-bold">
                        {passwordCriteria.lowercase ? (
                          <Check className="h-3.5 w-3.5 text-emerald-500" />
                        ) : (
                          <X className="h-3.5 w-3.5 text-zinc-300" />
                        )}
                        <span className={passwordCriteria.lowercase ? "text-emerald-600" : "text-zinc-400"}>One Lowercase</span>
                      </div>
                    </motion.div>
                  )}
                  
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

                {/* Confirm Password */}
                <div className="space-y-1">
                  <label htmlFor="confirmPassword" className="block text-xs font-bold text-zinc-700 uppercase tracking-wider">
                    Confirm Password
                  </label>
                  <div className="relative rounded-lg shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-4.5 w-4.5 text-zinc-400" />
                    </div>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      autoComplete="new-password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Repeat your password"
                      disabled={isLoading}
                      className={`w-full bg-white border ${
                        errors.confirmPassword ? "border-red-500 ring-2 ring-red-100" : "border-zinc-200"
                      } rounded-xl py-3 pl-10 pr-12 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#2F69FF] focus:ring-4 focus:ring-[#2F69FF]/10 transition-all duration-200`}
                    />
                    <button
                      type="button"
                      tabIndex={-1}
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-400 hover:text-zinc-600 transition-colors"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs font-bold text-red-500 flex items-center gap-1 mt-1"
                    >
                      <span>●</span> {errors.confirmPassword}
                    </motion.p>
                  )}
                </div>

                {/* Terms Agreement */}
                <div className="space-y-1 pt-1">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="agreeTerms"
                        name="agreeTerms"
                        type="checkbox"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        disabled={isLoading}
                        className="h-4 w-4 rounded border-zinc-300 text-[#2F69FF] focus:ring-[#2F69FF] transition-all cursor-pointer"
                      />
                    </div>
                    <div className="ml-2.5 text-xs">
                      <label htmlFor="agreeTerms" className="font-bold text-zinc-500 cursor-pointer select-none">
                        I agree to the{" "}
                        <Link href="#" className="text-[#2F69FF] hover:underline">
                          Terms & Conditions
                        </Link>{" "}
                        and{" "}
                        <Link href="#" className="text-[#2F69FF] hover:underline">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                  </div>
                  {errors.agreeTerms && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs font-bold text-red-500 flex items-center gap-1"
                    >
                      <span>●</span> {errors.agreeTerms}
                    </motion.p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#2F69FF] hover:bg-blue-600 text-white font-bold text-sm py-3.5 rounded-xl shadow-lg shadow-[#2F69FF]/15 hover:shadow-[#2F69FF]/25 focus:ring-4 focus:ring-blue-100 transition-all flex items-center justify-center gap-2 active:scale-[0.98] mt-4 cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin text-white" />
                      <span>Creating Profile...</span>
                    </>
                  ) : (
                    <>
                      <span>Sign Up</span>
                    </>
                  )}
                </button>

                {/* Footer Section */}
                <div className="text-center pt-2">
                  <p className="text-xs font-bold text-zinc-500">
                    Already have an account?{" "}
                    <Link href="/login" className="text-[#2F69FF] hover:text-blue-700 transition-colors">
                      Log in
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
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-emerald-50 rounded-full blur-xl pointer-events-none" />

                <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-500 shadow-md">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-extrabold text-zinc-900 mb-2">
                  Account Created
                </h3>
                <p className="text-zinc-500 text-sm font-semibold max-w-xs mx-auto mb-6">
                  Zod security constraints satisfied. Profiling completed successfully. Loading secure login dashboard...
                </p>
                <div className="flex justify-center items-center gap-1.5 text-xs text-emerald-600 font-bold bg-emerald-50/50 py-2.5 px-4 rounded-xl border border-emerald-50">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Secure Registration Enforced</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
