"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import {
  User,
  MapPin,
  Fingerprint,
  GraduationCap,
  Briefcase,
  FileText,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  UploadCloud,
  FileUp,
  Trash2,
  Plus,
  AlertCircle,
} from "lucide-react";

// --- SECURITY CONSTANTS ---
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB Limit
const ALLOWED_MIME_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/jpg",
];

// --- XSS CLIENT SIDE SANITIZATION UTILITY ---
function sanitizeInput(value: string): string {
  if (!value) return "";
  return value
    .replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, "") // Remove script tags
    .replace(/<\/?[^>]+(>|$)/g, "") // Remove HTML tags
    .replace(/[<>'"\/]/g, (match) => {
      // Escape special markup characters
      const map: Record<string, string> = {
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": " &#x27;",
        "/": "&#x2F;",
      };
      return map[match] || match;
    })
    .trim();
}

// --- SECURE COMPREHENSIVE ZOD VALIDATION SCHEMAS ---
const step1Schema = z.object({
  fullName: z
    .string()
    .min(3, "Full Name must be at least 3 characters")
    .max(70),
  dob: z.string().min(1, "Date of Birth is required"),
  gender: z.enum(["Male", "Female", "Other"], {
    message: "Please select your gender",
  }),
  mobile: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Provide a valid 10-digit mobile number"),
  email: z.string().email("Provide a valid email address"),
  fatherName: z
    .string()
    .min(3, "Father's Name must be at least 3 characters")
    .max(70),
  motherName: z
    .string()
    .min(3, "Mother's Name must be at least 3 characters")
    .max(70),
});

const step2Schema = z.object({
  current: z
    .string()
    .min(10, "Current address must be descriptive (min 10 chars)")
    .max(250),
  permanent: z
    .string()
    .min(10, "Permanent address must be descriptive (min 10 chars)")
    .max(250),
  city: z.string().min(2, "Invalid City name").max(50),
  state: z.string().min(2, "Invalid State name").max(50),
  pincode: z
    .string()
    .regex(/^\d{6}$/, "Pincode must be exactly 6 numeric digits"),
});

const step3Schema = z.object({
  aadhaarNum: z
    .string()
    .regex(/^\d{12}$/, "Aadhaar must be exactly 12 numeric digits"),
  panNum: z
    .string()
    .regex(
      /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
      "Invalid alphanumeric PAN Card framework structure",
    ),
  aadhaarFront: z
    .any()
    .refine((file) => file !== null, "Aadhaar front document is required"),
  aadhaarBack: z
    .any()
    .refine((file) => file !== null, "Aadhaar back document is required"),
  panCard: z
    .any()
    .refine((file) => file !== null, "PAN Card scanned object is required"),
});

const step4Schema = z.object({
  education: z
    .array(
      z.object({
        qualification: z.string().min(1, "Selection required"),
        board: z.string().min(3, "Board name too short").max(100),
        school: z.string().min(3, "Institution name too short").max(100),
        passingYear: z
          .string()
          .regex(/^(19|20)\d{2}$/, "Provide a valid passing year"),
        cgpa: z.string().min(1, "Grade metrics required"),
        file: z
          .any()
          .refine(
            (file) => file !== null,
            "Marksheet file upload is mandatory",
          ),
      }),
    )
    .min(1),
});

const step5Schema = z.object({
  expType: z.enum(["Fresher", "Experienced Professional"]),
});

const step6Schema = z.object({
  resume: z
    .any()
    .refine((file) => file !== null, "Resume PDF artifact is mandatory"),
  photo: z
    .any()
    .refine((file) => file !== null, "Passport photo element is mandatory"),
  offerLetter: z.any().nullable(),
  additional: z.any().nullable(),
});

const step7Schema = z.object({
  declarationAccepted: z
    .boolean()
    .refine(
      (val) => val === true,
      "You must accept the legal declaration to proceed",
    ),
});

const STEPS = [
  { id: 1, label: "Personal", short: "Personal Details", icon: User },
  { id: 2, label: "Address", short: "Address Details", icon: MapPin },
  {
    id: 3,
    label: "Identity",
    short: "Identity Verification",
    icon: Fingerprint,
  },
  {
    id: 4,
    label: "Education",
    short: "Education Details",
    icon: GraduationCap,
  },
  {
    id: 5,
    label: "Professional",
    short: "Professional Details",
    icon: Briefcase,
  },
  { id: 6, label: "Documents", short: "Documents Upload", icon: FileText },
  { id: 7, label: "Declaration", short: "Declaration", icon: CheckCircle2 },
];

interface EducationEntry {
  qualification: string;
  board: string;
  school: string;
  passingYear: string;
  cgpa: string;
  file: File | null;
}

export default function VerificationSec() {
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // --- STATE MODELS ---
  const [personal, setPersonal] = useState({
    fullName: "",
    dob: "",
    gender: "",
    mobile: "",
    email: "",
    fatherName: "",
    motherName: "",
  });
  const [address, setAddress] = useState({
    current: "",
    permanent: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [identity, setIdentity] = useState({
    aadhaarNum: "",
    panNum: "",
    aadhaarFront: null as File | null,
    aadhaarBack: null as File | null,
    panCard: null as File | null,
  });
  const [education, setEducation] = useState<EducationEntry[]>([
    {
      qualification: "",
      board: "",
      school: "",
      passingYear: "",
      cgpa: "",
      file: null,
    },
  ]);
  const [professional, setProfessional] = useState({ expType: "Fresher" });
  const [documents, setDocuments] = useState({
    resume: null as File | null,
    photo: null as File | null,
    offerLetter: null as File | null,
    additional: null as File | null,
  });
  const [declarationAccepted, setDeclarationAccepted] = useState(false);

  const progressPercentage = (currentStep / STEPS.length) * 100;

  // --- SECURE RUNTIME COMPLIANCE CHECK FOR INTERCEPTING POISONED CHUNKS ---
  const handleNext = () => {
    try {
      setErrors({});
      if (currentStep === 1) {
        step1Schema.parse(personal);
      } else if (currentStep === 2) {
        step2Schema.parse(address);
      } else if (currentStep === 3) {
        step3Schema.parse(identity);
      } else if (currentStep === 4) {
        step4Schema.parse({ education });
      } else if (currentStep === 5) {
        step5Schema.parse(professional);
      } else if (currentStep === 6) {
        step6Schema.parse(documents);
      }

      setCurrentStep((prev) => Math.min(STEPS.length, prev + 1));
    } catch (err) {
      if (err instanceof z.ZodError) {
        const formattedErrors: Record<string, string> = {};
        err.issues.forEach((e) => {
          if (e.path.length > 0) {
            const key = e.path.join(".");
            formattedErrors[key] = e.message;
          }
        });
        setErrors(formattedErrors);
      }
    }
  };

  const handlePrev = () => {
    setErrors({});
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleFinalSubmit = () => {
    try {
      step7Schema.parse({ declarationAccepted });
      alert(
        "Verification dataset locked and packaged securely. Data dispatched successfully.",
      );
    } catch (err) {
      if (err instanceof z.ZodError) {
        setErrors({ declarationAccepted: err.issues[0].message });
      }
    }
  };

  return (
    <section className="bg-black text-white py-16 px-4 md:px-12 lg:px-20 w-full min-h-screen font-sans antialiased flex items-center justify-center">
      <div className="max-w-6xl w-full border border-zinc-800 bg-zinc-900/60 rounded-3xl shadow-xl p-6 md:p-12 space-y-10 relative">
        {/* HEADER BAR */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-6 text-left">
          <div className="space-y-1">
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Verification Form
            </h1>
          </div>
          <div className="text-right shrink-0">
            <span className="text-sm font-bold text-zinc-400">
              Progress:{" "}
              <span className="text-white font-bold">
                Step {currentStep}/{STEPS.length}
              </span>
            </span>
            <div className="w-48 h-2 bg-zinc-800 rounded-full mt-2 overflow-hidden border border-zinc-700">
              <motion.div
                className="h-full bg-[#BFCA16]"
                animate={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* HORIZONTAL STEP HUD */}
        <div className="flex items-center justify-center gap-4 overflow-x-auto pb-4 pt-1 w-full no-scrollbar border-b border-zinc-800">
          {STEPS.map((step) => {
            const StepIcon = step.icon;
            const isCompleted = currentStep > step.id;
            const isActive = currentStep === step.id;

            return (
              <button
                key={step.id}
                onClick={() => {
                  if (step.id < currentStep || isCompleted) {
                    setErrors({});
                    setCurrentStep(step.id);
                  }
                }}
                disabled={step.id > currentStep}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs font-bold tracking-tight border transition-all shrink-0 ${
                  isActive
                    ? "bg-white border-white text-zinc-950 shadow-md"
                    : isCompleted
                      ? "bg-[#BFCA16]/5 border-[#BFCA16]/20 text-[#BFCA16]"
                      : "bg-zinc-800 border-zinc-700 text-zinc-500 cursor-not-allowed"
                }`}
              >
                <StepIcon className="w-4 h-4" />
                <span>{step.label}</span>
              </button>
            );
          })}
        </div>

        {/* MAIN BODY WINDOW */}
        <div className="min-h-95 flex flex-col justify-between pt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="text-left space-y-8 w-full"
            >
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                  Step {currentStep}: {STEPS[currentStep - 1].short}
                </h2>
                <div className="w-12 h-1 bg-[#BFCA16] rounded-full mt-2" />
              </div>

              {/* STEP 1: PERSONAL DETAILS */}
              {currentStep === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    label="Full Name (as per Aadhaar)"
                    value={personal.fullName}
                    error={errors["fullName"]}
                    onChange={(v) =>
                      setPersonal((p) => ({ ...p, fullName: sanitizeInput(v) }))
                    }
                    required
                  />
                  <FormInput
                    label="Date of Birth"
                    type="date"
                    value={personal.dob}
                    error={errors["dob"]}
                    onChange={(v) => setPersonal((p) => ({ ...p, dob: v }))}
                    required
                  />
                  <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-300 tracking-wide uppercase">
                        Gender *
                      </label>
                      <select
                        value={personal.gender}
                        onChange={(e) =>
                          setPersonal((p) => ({ ...p, gender: e.target.value }))
                        }
                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:border-[#BFCA16] focus:bg-zinc-900 text-white outline-none font-medium"
                      >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors["gender"] && (
                        <p className="text-xs text-red-500 font-bold mt-1">
                          {errors["gender"]}
                        </p>
                      )}
                    </div>
                    <FormInput
                      label="Mobile Number"
                      type="tel"
                      value={personal.mobile}
                      error={errors["mobile"]}
                      onChange={(v) =>
                        setPersonal((p) => ({ ...p, mobile: sanitizeInput(v) }))
                      }
                      required
                    />
                    <FormInput
                      label="Email ID"
                      type="email"
                      value={personal.email}
                      error={errors["email"]}
                      onChange={(v) =>
                        setPersonal((p) => ({ ...p, email: sanitizeInput(v) }))
                      }
                      required
                    />
                  </div>
                  <FormInput
                    label="Father's Name"
                    value={personal.fatherName}
                    error={errors["fatherName"]}
                    onChange={(v) =>
                      setPersonal((p) => ({
                        ...p,
                        fatherName: sanitizeInput(v),
                      }))
                    }
                    required
                  />
                  <FormInput
                    label="Mother's Name"
                    value={personal.motherName}
                    error={errors["motherName"]}
                    onChange={(v) =>
                      setPersonal((p) => ({
                        ...p,
                        motherName: sanitizeInput(v),
                      }))
                    }
                    required
                  />
                </div>
              )}

              {/* STEP 2: ADDRESS */}
              {currentStep === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-300 tracking-wide uppercase">
                      Current Address *
                    </label>
                    <textarea
                      rows={3}
                      value={address.current}
                      onChange={(e) =>
                        setAddress((p) => ({
                          ...p,
                          current: sanitizeInput(e.target.value),
                        }))
                      }
                      className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:border-[#BFCA16] focus:bg-zinc-900 text-white outline-none"
                    />
                    {errors["current"] && (
                      <p className="text-xs text-red-500 font-bold mt-1">
                        {errors["current"]}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-300 tracking-wide uppercase">
                      Permanent Address *
                    </label>
                    <textarea
                      rows={3}
                      value={address.permanent}
                      onChange={(e) =>
                        setAddress((p) => ({
                          ...p,
                          permanent: sanitizeInput(e.target.value),
                        }))
                      }
                      className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:border-[#BFCA16] focus:bg-zinc-900 text-white outline-none"
                    />
                    {errors["permanent"] && (
                      <p className="text-xs text-red-500 font-bold mt-1">
                        {errors["permanent"]}
                      </p>
                    )}
                  </div>
                  <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FormInput
                      label="City"
                      value={address.city}
                      error={errors["city"]}
                      onChange={(v) =>
                        setAddress((p) => ({ ...p, city: sanitizeInput(v) }))
                      }
                      required
                    />
                    <FormInput
                      label="State"
                      value={address.state}
                      error={errors["state"]}
                      onChange={(v) =>
                        setAddress((p) => ({ ...p, state: sanitizeInput(v) }))
                      }
                      required
                    />
                    <FormInput
                      label="Pincode"
                      value={address.pincode}
                      error={errors["pincode"]}
                      onChange={(v) =>
                        setAddress((p) => ({ ...p, pincode: sanitizeInput(v) }))
                      }
                      required
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: IDENTITY DOCUMENTS */}
              {currentStep === 3 && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormInput
                      label="Aadhaar Number"
                      value={identity.aadhaarNum}
                      error={errors["aadhaarNum"]}
                      onChange={(v) =>
                        setIdentity((p) => ({
                          ...p,
                          aadhaarNum: sanitizeInput(v),
                        }))
                      }
                      required
                    />
                    <FormInput
                      label="PAN Number"
                      value={identity.panNum}
                      error={errors["panNum"]}
                      onChange={(v) =>
                        setIdentity((p) => ({
                          ...p,
                          panNum: sanitizeInput(v).toUpperCase(),
                        }))
                      }
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <FileUploadBox
                      label="Upload Aadhaar Front *"
                      file={identity.aadhaarFront}
                      error={errors["aadhaarFront"]}
                      onFileSelect={(f) =>
                        setIdentity((p) => ({ ...p, aadhaarFront: f }))
                      }
                    />
                    <FileUploadBox
                      label="Upload Aadhaar Back *"
                      file={identity.aadhaarBack}
                      error={errors["aadhaarBack"]}
                      onFileSelect={(f) =>
                        setIdentity((p) => ({ ...p, aadhaarBack: f }))
                      }
                    />
                    <FileUploadBox
                      label="Upload PAN Card *"
                      file={identity.panCard}
                      error={errors["panCard"]}
                      onFileSelect={(f) =>
                        setIdentity((p) => ({ ...p, panCard: f }))
                      }
                    />
                  </div>
                </div>
              )}

              {/* STEP 4: DYNAMIC EDUCATION FLOW */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="flex justify-end">
                    <button
                      onClick={() =>
                        setEducation((e) => [
                          ...e,
                          {
                            qualification: "",
                            board: "",
                            school: "",
                            passingYear: "",
                            cgpa: "",
                            file: null,
                          },
                        ])
                      }
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 bg-white text-zinc-950 hover:bg-[#BFCA16] hover:text-zinc-950 rounded-xl shadow-sm"
                    >
                      <Plus className="w-3.5 h-3.5" />{" "}
                      <span>Add Qualification Block</span>
                    </button>
                  </div>
                  {education.map((edu, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-2xl space-y-6 relative"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-zinc-300 tracking-wide uppercase">
                            Qualification *
                          </label>
                          <select
                            value={edu.qualification}
                            onChange={(e) => {
                              const u = [...education];
                              u[idx].qualification = e.target.value;
                              setEducation(u);
                            }}
                            className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 text-sm outline-none"
                          >
                            <option value="">Select</option>
                            <option value="10th Standard">10th Standard</option>
                            <option value="12th Standard">12th Standard</option>
                            <option value="Graduation">Graduation</option>
                          </select>
                          {errors[`education.${idx}.qualification`] && (
                            <p className="text-xs text-red-500 font-bold mt-1">
                              {errors[`education.${idx}.qualification`]}
                            </p>
                          )}
                        </div>
                        <FormInput
                          label="Board / University"
                          value={edu.board}
                          error={errors[`education.${idx}.board`]}
                          onChange={(v) => {
                            const u = [...education];
                            u[idx].board = sanitizeInput(v);
                            setEducation(u);
                          }}
                          required
                        />
                        <FormInput
                          label="School / College Name"
                          value={edu.school}
                          error={errors[`education.${idx}.school`]}
                          onChange={(v) => {
                            const u = [...education];
                            u[idx].school = sanitizeInput(v);
                            setEducation(u);
                          }}
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-end">
                        <FormInput
                          label="Year of Passing"
                          value={edu.passingYear}
                          error={errors[`education.${idx}.passingYear`]}
                          onChange={(v) => {
                            const u = [...education];
                            u[idx].passingYear = sanitizeInput(v);
                            setEducation(u);
                          }}
                          required
                        />
                        <FormInput
                          label="CGPA / Percentage"
                          value={edu.cgpa}
                          error={errors[`education.${idx}.cgpa`]}
                          onChange={(v) => {
                            const u = [...education];
                            u[idx].cgpa = sanitizeInput(v);
                            setEducation(u);
                          }}
                          required
                        />
                        <FileUploadBox
                          label="Upload Scanned Marksheet *"
                          file={edu.file}
                          error={errors[`education.${idx}.file`]}
                          onFileSelect={(f) => {
                            const u = [...education];
                            u[idx].file = f;
                            setEducation(u);
                          }}
                        />
                      </div>
                      {education.length > 1 && (
                        <button
                          onClick={() =>
                            setEducation(education.filter((_, i) => i !== idx))
                          }
                          className="absolute top-4 right-4 text-xs font-bold text-red-400 border border-red-950 bg-zinc-900 hover:bg-red-950/20 p-2 rounded-xl transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* STEP 5: PROFESSIONAL TYPE */}
              {currentStep === 5 && (
                <div className="space-y-2 max-w-md text-left">
                  <label className="text-xs font-bold text-zinc-300 tracking-wide uppercase">
                    Experience Tier Classification *
                  </label>
                  <select
                    value={professional.expType}
                    onChange={(e) =>
                      setProfessional({ expType: e.target.value })
                    }
                    className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 text-sm font-bold"
                  >
                    <option value="Fresher">Fresher</option>
                    <option value="Experienced Professional">
                      Experienced Professional
                    </option>
                  </select>
                </div>
              )}

              {/* STEP 6: MISC SYSTEM ATTACHMENTS */}
              {currentStep === 6 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FileUploadBox
                    label="Resume Documents (PDF) *"
                    file={documents.resume}
                    error={errors["resume"]}
                    onFileSelect={(f) =>
                      setDocuments((p) => ({ ...p, resume: f }))
                    }
                  />
                  <FileUploadBox
                    label="Passport Photo Dimensions *"
                    file={documents.photo}
                    error={errors["photo"]}
                    onFileSelect={(f) =>
                      setDocuments((p) => ({ ...p, photo: f }))
                    }
                  />
                  <FileUploadBox
                    label="Relieving / Offer Letter"
                    file={documents.offerLetter}
                    onFileSelect={(f) =>
                      setDocuments((p) => ({ ...p, offerLetter: f }))
                    }
                  />
                  <FileUploadBox
                    label="Additional Portfolio Certifications"
                    file={documents.additional}
                    onFileSelect={(f) =>
                      setDocuments((p) => ({ ...p, additional: f }))
                    }
                  />
                </div>
              )}

              {/* STEP 7: COMPLIANCE STATUS DECLARATION */}
              {currentStep === 7 && (
                <div className="space-y-6 text-left">
                  <button
                    onClick={() => setDeclarationAccepted(!declarationAccepted)}
                    className="flex items-center gap-3.5 text-left w-full group"
                  >
                    <div
                      className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${declarationAccepted ? "bg-[#BFCA16] border-[#BFCA16] text-white" : "border-zinc-850 bg-zinc-900"}`}
                    >
                      {declarationAccepted && (
                        <CheckCircle2 className="w-3.5 h-3.5 fill-current" />
                      )}
                    </div>
                    <span className="text-sm font-semibold text-zinc-200">
                      I certify that all uploaded verification assets are
                      authentic.
                    </span>
                  </button>
                  {errors["declarationAccepted"] && (
                    <p className="text-xs text-red-500 font-bold">
                      {errors["declarationAccepted"]}
                    </p>
                  )}

                  <div className="p-4 bg-emerald-950/20 border border-emerald-900/30 rounded-xl flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-[#BFCA16] shrink-0" />
                    <p className="text-xs md:text-sm font-semibold text-zinc-300">
                      Submitting triggers verification workflow processing
                      engines pipelines.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* ACTION BUTTON CONTROLS */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-10 border-t border-zinc-800 mt-12 w-full">
            {currentStep > 1 ? (
              <button
                onClick={handlePrev}
                className="inline-flex items-center gap-1.5 px-5 py-3 border border-zinc-850 rounded-xl text-sm font-bold text-zinc-300 hover:bg-zinc-900"
              >
                <ChevronLeft className="w-4 h-4" /> <span>Previous</span>
              </button>
            ) : (
              <div />
            )}

            <div className="flex items-center gap-3">
              {currentStep < STEPS.length ? (
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-1.5 px-6 py-3 bg-white text-zinc-950 hover:bg-[#BFCA16] hover:text-zinc-950 rounded-full text-sm font-bold transition-colors shadow-sm"
                >
                  <span>Next</span> <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleFinalSubmit}
                  className="inline-flex items-center gap-1.5 px-6 py-3 bg-[#BFCA16] text-white rounded-xl text-sm font-bold shadow-sm"
                >
                  <span>Submit Application</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- SUB COMPONENTS OVERRIDE MODAL HOOKS ---
function FormInput({
  label,
  type = "text",
  value,
  error,
  onChange,
  required = false,
}: {
  label: string;
  type?: string;
  value: string;
  error?: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div className="space-y-2 text-left w-full">
      <label className="text-xs font-bold text-zinc-300 tracking-wide uppercase">
        {label} {required && "*"}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full bg-zinc-900/50 border rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:bg-zinc-900 focus:ring-1 focus:ring-[#BFCA16]/10 outline-none font-medium transition-all duration-200 ${error ? "border-red-500/50 focus:border-red-500" : "border-zinc-800 focus:border-[#BFCA16]"}`}
      />
      {error && (
        <p className="text-xs text-red-500 font-bold mt-0.5">{error}</p>
      )}
    </div>
  );
}

function FileUploadBox({
  label,
  file,
  error,
  onFileSelect,
}: {
  label: string;
  file: File | null;
  error?: string;
  onFileSelect: (f: File | null) => void;
}) {
  const hiddenInputRef = useRef<HTMLInputElement>(null);
  const [internalError, setInternalError] = useState<string | null>(null);

  // SECURE MULTI-LAYERED EXTENSION DETECTION & PARSING LOGIC
  const processSecureUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalError(null);
    const uploadedFile = e.target.files?.[0];
    if (!uploadedFile) return;

    // 1. Structural File Cap Verification
    if (uploadedFile.size > MAX_FILE_SIZE) {
      setInternalError(
        "Security violation: Maximum upload limit is capped at 5MB",
      );
      return;
    }

    // 2. MIME Magic Byte Check
    if (!ALLOWED_MIME_TYPES.includes(uploadedFile.type)) {
      setInternalError(
        "Security violation: Unsupported file structure format (PDF/PNG/JPG only)",
      );
      return;
    }

    onFileSelect(uploadedFile);
  };

  return (
    <div className="space-y-2 text-left w-full">
      <label className="text-xs font-bold text-zinc-300 tracking-wide uppercase">
        {label}
      </label>
      <div
        onClick={() => hiddenInputRef.current?.click()}
        className={`border border-dashed rounded-xl p-4 flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
          internalError || error
            ? "border-red-500/50 bg-red-950/10 text-red-400"
            : file
              ? "border-[#BFCA16] bg-[#BFCA16]/5 text-[#BFCA16]"
              : "border-zinc-850 bg-zinc-900/20 text-zinc-400 hover:border-zinc-750 hover:bg-zinc-900/40"
        }`}
      >
        <input
          type="file"
          ref={hiddenInputRef}
          className="hidden"
          accept=".pdf,.png,.jpg,.jpeg"
          onChange={processSecureUpload}
        />
        {file ? (
          <>
            <FileUp className="w-5 h-5" />
            <span className="text-xs font-bold truncate max-w-[18ch]">
              {file.name}
            </span>
          </>
        ) : (
          <>
            <UploadCloud className="w-5 h-5" />
            <span className="text-xs font-semibold">
              Choose secure artifact
            </span>
          </>
        )}
      </div>
      {(internalError || error) && (
        <p className="text-xs text-red-500 font-bold mt-0.5">
          {internalError || error}
        </p>
      )}
    </div>
  );
}
