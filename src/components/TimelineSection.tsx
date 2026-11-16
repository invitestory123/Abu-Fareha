import { motion } from "motion/react";
import { Sparkles, Crown, Utensils } from "lucide-react";

interface RoyalProgrammeItem {
  time: string;
  title: string;
  description: string;
  icon: typeof Sparkles;
}

const PROGRAMME_ITEMS: RoyalProgrammeItem[] = [
  {
    time: "07:00 PM",
    title: "Function Commences",
    description: "Warm reception of all guests & family gathering",
    icon: Sparkles,
  },
  {
    time: "07:30 PM",
    title: "Grand Arrival of Bride & Groom",
    description: "Welcoming Abu Talha & Dr. Fareha Noor to the royal stage",
    icon: Crown,
  },
  {
    time: "08:00 PM",
    title: "Royal Dinner Banquet",
    description: "A lavish feast celebrated with beloved family & friends",
    icon: Utensils,
  },
];

export function TimelineSection() {
  return (
    <section id="itinerary" className="relative mx-auto max-w-lg px-4 sm:px-6 py-16">
      {/* Top Diamond Accent Motif (from reference image) */}
      <div className="flex items-center justify-center mb-6">
        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-[#c49a45]/40 to-transparent" />
        <div className="mx-3 flex items-center gap-1 text-[#c49a45]">
          <span className="text-xs">◆</span>
        </div>
        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-[#c49a45]/40 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-[2.2rem] border border-[#d6bc83]/70 bg-[#fdfbf7] p-6 sm:p-9 shadow-[0_25px_60px_rgba(0,0,0,0.45),0_0_30px_rgba(214,188,131,0.2)] overflow-hidden text-left"
      >
        {/* Subtle Decorative Inner Border */}
        <div className="pointer-events-none absolute inset-2.5 sm:inset-3 rounded-[1.8rem] border border-[#e8d5ab]/40" />

        {/* Header Section */}
        <div className="text-center pt-2 pb-6">
          <p className="font-display text-[0.68rem] uppercase tracking-[0.42em] font-semibold text-[#8c6721]">
            Order of Celebration
          </p>
          <h2 className="mt-1 font-display text-3xl sm:text-4xl font-bold tracking-wide uppercase text-[#85581b] drop-shadow-sm">
            Royal Programme
          </h2>
        </div>

        {/* Timeline Itinerary List */}
        <div className="relative mt-2 pl-2 sm:pl-4">
          {/* Continuous vertical bronze/gold guide line */}
          <div className="absolute left-[29px] sm:left-[37px] top-6 bottom-6 w-[1.5px] bg-[#d9c49c]" />

          <div className="space-y-8 relative z-10">
            {PROGRAMME_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-4 sm:gap-5 group"
                >
                  {/* Circular Medallion Node (matching Image 2) */}
                  <div className="relative flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full border border-[#b88c3a] bg-gradient-to-b from-[#faf5eb] to-[#eedcba] shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5 text-[#85581b]" strokeWidth={1.75} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-0.5">
                    <p className="font-display text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#8c6721]">
                      {item.time}
                    </p>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1f2d24] mt-0.5 group-hover:text-[#85581b] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#4a584e]/85">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Decorative Diamond Motif (matching Image 2) */}
        <div className="flex items-center justify-center mt-8 pt-4">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#c49a45]/30 to-transparent" />
          <div className="mx-2 text-xs text-[#c49a45]">❖</div>
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#c49a45]/30 to-transparent" />
        </div>
      </motion.div>

      {/* Bottom Floating Diamond Accent Motif */}
      <div className="flex items-center justify-center mt-6">
        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-[#c49a45]/40 to-transparent" />
        <div className="mx-3 flex items-center gap-1 text-[#c49a45]">
          <span className="text-xs">◆</span>
        </div>
        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-[#c49a45]/40 to-transparent" />
      </div>
    </section>
  );
}

export default TimelineSection;
