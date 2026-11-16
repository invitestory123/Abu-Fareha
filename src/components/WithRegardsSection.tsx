import { motion } from "motion/react";
import { Heart } from "lucide-react";

const FAMILY_NAMES = [
  "Sara",
  "Naqushain",
  "Sidra",
  "Salman",
  "Safa",
  "Fatima",
  "Atifa",
  "Abdullah",
  "Ahmed",
  "Hamna",
  "Abdurrahman",
];

export function WithRegardsSection() {
  return (
    <section id="with-regards" className="relative mx-auto max-w-lg px-4 sm:px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[2.5rem] border border-[#e5c178]/50 bg-gradient-to-b from-[#0e2756] via-[#091b3e] to-[#051129] p-6 sm:p-10 text-center shadow-[0_30px_70px_rgba(0,0,0,0.85),0_0_40px_rgba(20,50,110,0.4)]"
      >
        {/* Subtle Watermark Mandala Background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-10 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url('https://media.invitestory.in/emerald-nikah/images/mandala.png')`,
          }}
        />

        {/* Ambient Glow */}
        <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-44 w-72 rounded-full bg-blue-400/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 h-44 w-72 rounded-full bg-amber-300/15 blur-3xl" />

        {/* Inner Delicate Double Border */}
        <div className="pointer-events-none absolute inset-3 sm:inset-4 rounded-[2rem] border border-[#c5a059]/35" />
        <div className="pointer-events-none absolute inset-4 sm:inset-5 rounded-[1.8rem] border border-dashed border-[#c5a059]/20" />

        {/* Header: WITH REGARDS */}
        <div className="relative z-10 pt-4">
          <p className="font-display text-[0.72rem] sm:text-xs uppercase tracking-[0.45em] font-semibold text-[#e5c178] drop-shadow-sm">
            With Regards
          </p>
          <div className="mx-auto mt-2 h-[1px] w-20 bg-gradient-to-r from-transparent via-[#e5c178] to-transparent" />
        </div>

        {/* Emotional Quote */}
        <div className="relative z-10 mt-8 px-2 sm:px-4">
          <p className="font-display text-base sm:text-lg italic leading-relaxed text-[#f4eedb] drop-shadow-md">
            “Your presence is the blessing we wish for most. Come dine with us, dance with us, and let us begin forever surrounded by the people we love.”
          </p>
        </div>

        {/* Separator */}
        <div className="relative z-10 my-7 flex items-center justify-center gap-3">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#e5c178]/50 to-transparent" />
          <div className="h-1.5 w-1.5 rotate-45 border border-[#e5c178] bg-[#e5c178]/40" />
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#e5c178]/50 to-transparent" />
        </div>

        {/* Names List */}
        <div className="relative z-10 px-2 sm:px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 text-xs sm:text-sm uppercase tracking-[0.25em] font-medium text-[#fdfaf2]/90">
            {FAMILY_NAMES.map((name, i) => (
              <span key={name} className="inline-flex items-center">
                <span className="hover:text-[#ffd983] transition-colors">{name}</span>
                {i < FAMILY_NAMES.length - 1 && (
                  <span className="ml-2.5 text-[#c5a059]/70 text-xs">·</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Couple Names Sign-off */}
        <div className="relative z-10 mt-10">
          <p className="font-script text-4xl sm:text-5xl text-[#ffd782] drop-shadow-[0_2px_12px_rgba(255,215,130,0.35)]">
            Fareha &amp; Abu Talha
          </p>
          <p className="mt-3 inline-flex items-center gap-1.5 text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.35em] text-[#d6c7a3]">
            Made with <Heart className="h-3 w-3 fill-amber-400 text-amber-400 inline" /> for our favourite people
          </p>
        </div>

        {/* Lotus Floral Illustration at Bottom (matching Image 1) */}
        <div className="relative z-10 mt-8 -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 overflow-hidden pt-4 pointer-events-none">
          <svg
            viewBox="0 0 500 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto opacity-75"
          >
            {/* Outer lotus petals and foliage */}
            <path
              d="M250 15 C240 45, 215 75, 175 90 C220 90, 240 60, 250 35 C260 60, 280 90, 325 90 C285 75, 260 45, 250 15 Z"
              fill="rgba(56, 120, 210, 0.35)"
              stroke="#68a4ee"
              strokeWidth="1"
            />
            <path
              d="M250 30 C243 55, 225 80, 200 95 C230 95, 245 70, 250 45 C255 70, 270 95, 300 95 C275 80, 257 55, 250 30 Z"
              fill="rgba(70, 140, 235, 0.4)"
              stroke="#95c5f8"
              strokeWidth="1"
            />
            {/* Central Lotus Flower */}
            <path
              d="M250 5 C245 35, 238 65, 220 85 C240 82, 248 55, 250 25 C252 55, 260 82, 280 85 C262 65, 255 35, 250 5 Z"
              fill="rgba(100, 165, 250, 0.45)"
              stroke="#e5c178"
              strokeWidth="1.2"
            />
            {/* Left Lotus Flower */}
            <g transform="translate(110, 35) scale(0.65)">
              <path
                d="M100 10 C90 40, 70 70, 30 85 C75 85, 90 55, 100 30 C110 55, 125 85, 170 85 C130 70, 110 40, 100 10 Z"
                fill="rgba(56, 120, 210, 0.3)"
                stroke="#68a4ee"
                strokeWidth="1"
              />
              <path
                d="M100 0 C95 30, 85 60, 65 78 C88 75, 96 50, 100 20 C104 50, 112 75, 135 78 C115 60, 105 30, 100 0 Z"
                fill="rgba(80, 150, 240, 0.4)"
                stroke="#e5c178"
                strokeWidth="1"
              />
            </g>
            {/* Right Lotus Flower */}
            <g transform="translate(325, 35) scale(0.65)">
              <path
                d="M100 10 C90 40, 70 70, 30 85 C75 85, 90 55, 100 30 C110 55, 125 85, 170 85 C130 70, 110 40, 100 10 Z"
                fill="rgba(56, 120, 210, 0.3)"
                stroke="#68a4ee"
                strokeWidth="1"
              />
              <path
                d="M100 0 C95 30, 85 60, 65 78 C88 75, 96 50, 100 20 C104 50, 112 75, 135 78 C115 60, 105 30, 100 0 Z"
                fill="rgba(80, 150, 240, 0.4)"
                stroke="#e5c178"
                strokeWidth="1"
              />
            </g>
            {/* Far Left bud */}
            <g transform="translate(25, 55) scale(0.45)">
              <path
                d="M50 0 C45 30, 35 60, 15 75 C40 70, 48 50, 50 20 C52 50, 60 70, 85 75 C65 60, 55 30, 50 0 Z"
                fill="rgba(70, 140, 235, 0.35)"
                stroke="#68a4ee"
                strokeWidth="1.2"
              />
            </g>
            {/* Far Right bud */}
            <g transform="translate(425, 55) scale(0.45)">
              <path
                d="M50 0 C45 30, 35 60, 15 75 C40 70, 48 50, 50 20 C52 50, 60 70, 85 75 C65 60, 55 30, 50 0 Z"
                fill="rgba(70, 140, 235, 0.35)"
                stroke="#68a4ee"
                strokeWidth="1.2"
              />
            </g>
            {/* Water / Pad Base Curved Lines */}
            <ellipse cx="250" cy="115" rx="230" ry="18" fill="none" stroke="rgba(100, 170, 255, 0.25)" strokeWidth="1" />
            <ellipse cx="250" cy="120" rx="170" ry="12" fill="none" stroke="rgba(229, 193, 120, 0.35)" strokeWidth="0.8" />
            <ellipse cx="120" cy="110" rx="70" ry="10" fill="none" stroke="rgba(100, 170, 255, 0.2)" strokeWidth="1" />
            <ellipse cx="380" cy="110" rx="70" ry="10" fill="none" stroke="rgba(100, 170, 255, 0.2)" strokeWidth="1" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}

export default WithRegardsSection;
