import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Flowstate Labs — AI-Powered Automation for SMBs";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #111110 0%, #1a1a19 50%, #111110 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle grid pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(rgba(26,92,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(26,92,255,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(26,92,255,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Hex logo */}
        <svg
          width="80"
          height="92"
          viewBox="0 0 60 74"
          fill="none"
          style={{ marginBottom: 32 }}
        >
          <polygon
            points="30,6 60,23 60,57 30,74 0,57 0,23"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <polygon
            points="30,15 51,27 51,53 30,65 9,53 9,27"
            fill="#1A5CFF"
            opacity="0.15"
          />
          <polygon
            points="30,15 51,27 51,53 30,65 9,53 9,27"
            fill="none"
            stroke="#1A5CFF"
            strokeWidth="1.2"
            strokeLinejoin="round"
            opacity="0.4"
          />
          <circle cx="30" cy="40" r="5" fill="#1A5CFF" />
        </svg>

        {/* Company name */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 12,
            marginBottom: 20,
          }}
        >
          <span
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-1px",
            }}
          >
            Flowstate
          </span>
          <span
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#71716E",
              letterSpacing: "-1px",
            }}
          >
            Labs
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 24,
            color: "#A3A29C",
            letterSpacing: "0.5px",
          }}
        >
          AI-Powered Automation & Digital Transformation
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 18,
            color: "#1A5CFF",
            letterSpacing: "1px",
          }}
        >
          flowstatelabs.pt
        </div>
      </div>
    ),
    { ...size },
  );
}
