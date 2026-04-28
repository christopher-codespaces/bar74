"use client";

import { Fredoka } from "next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-fredoka",
});

function OliveBranch({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="40"
      height="24"
      viewBox="0 0 40 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main stem */}
      <path
        d="M38 12C38 12 32 8 24 8C16 8 10 4 2 6"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Leaves - alternating left and right */}
      <ellipse
        cx="32"
        cy="7"
        rx="3"
        ry="5"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
        transform="rotate(-30 32 7)"
      />
      <ellipse
        cx="26"
        cy="5"
        rx="3"
        ry="4.5"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
        transform="rotate(25 26 5)"
      />
      <ellipse
        cx="20"
        cy="4"
        rx="3"
        ry="4.5"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
        transform="rotate(-20 20 4)"
      />
      <ellipse
        cx="14"
        cy="4.5"
        rx="2.5"
        ry="4"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
        transform="rotate(30 14 4.5)"
      />
      <ellipse
        cx="8"
        cy="5.5"
        rx="2.5"
        ry="3.5"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
        transform="rotate(-25 8 5.5)"
      />
    </svg>
  );
}

export default function B74Logo({ height = 52 }: { height?: number }) {
  return (
    <div
      className={`${fredoka.variable} flex items-center justify-center rounded-lg px-4 py-2 h-[52px]`}
      style={{ backgroundColor: "#6B7A52" }}
    >
      <div className="flex items-center gap-2">
        {/* Left olive branch */}
        <OliveBranch className="w-8 h-5" />

        {/* Text container */}
        <div className="flex flex-col items-center">
          <span
            className="text-white leading-none tracking-wide"
            style={{
              fontFamily: "var(--font-fredoka), sans-serif",
              fontWeight: 700,
              fontSize: "1.25rem",
              letterSpacing: "0.05em",
            }}
          >
            BISTRO 74
          </span>
          <span
            className="text-white leading-none mt-0.5"
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 500,
              fontSize: "0.45rem",
              letterSpacing: "0.2em",
            }}
          >
            RESTAURANT AND BAR
          </span>
        </div>

        {/* Right olive branch (mirrored) */}
        <div className="transform scale-x-[-1]">
          <OliveBranch className="w-8 h-5" />
        </div>
      </div>
    </div>
  );
}
