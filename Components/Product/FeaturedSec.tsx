import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureItem {
  title: string;
  desc: string;
  icon: LucideIcon;
}

interface FeaturedSecProps {
  featured: {
    title: string;
    desc?: string;
    list: FeatureItem[];
  };
}

function FeaturedSec({ featured }: FeaturedSecProps) {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-headingColor">
            {featured.title}
          </h2>
          {featured.desc && (
            <p className="text-descriptionColor font-medium text-sm md:text-base">
              {featured.desc}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.list.map((feat, idx) => {
            const FeatIcon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-cardBgColor border border-cardBorderColor p-6 md:p-10 rounded-2xl hover:border-[#BFCA16] hover:bg-white hover:shadow-xl hover:shadow-zinc-100 transition-all duration-300 group flex flex-col justify-between space-y-4 text-left h-full"
              >
                <div className="space-y-4">
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 group-hover:text-[#BFCA16] group-hover:border-[#BFCA16] transition-all duration-300">
                    <FeatIcon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-lg md:text-xl text-zinc-950 tracking-tight leading-snug">
                    {feat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-descriptionColor font-medium leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturedSec;
