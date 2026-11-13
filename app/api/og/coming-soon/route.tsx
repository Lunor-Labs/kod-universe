import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { getCountdownParts, padCountdownUnit } from "@/lib/launch";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const parts = getCountdownParts();

  let bgDataUri: string | null = null;
  try {
    const imgPath = path.join(process.cwd(), "public", "coming-soon.jpg");
    const buffer = await readFile(imgPath);
    bgDataUri = `data:image/jpeg;base64,${buffer.toString("base64")}`;
  } catch {
    bgDataUri = null;
  }

  const boxes = [
    { label: "DAYS", value: padCountdownUnit(parts.days) },
    { label: "HOURS", value: padCountdownUnit(parts.hours) },
    { label: "MINUTES", value: padCountdownUnit(parts.minutes) },
  ];

  const response = new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          backgroundColor: "#0a0a0c",
          color: "#ffffff",
          fontFamily: "sans-serif",
          overflow: "hidden",
        }}
      >
        {bgDataUri && (
          <img
            src={bgDataUri}
            alt=""
            width={1200}
            height={630}
            style={{
              position: "absolute",
              inset: 0,
              width: "1200px",
              height: "630px",
              objectFit: "cover",
              opacity: 0.6,
            }}
          />
        )}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.82) 100%)",
            display: "flex",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "48px 64px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 18,
              letterSpacing: "0.35em",
              color: "#eac240",
              fontWeight: 700,
              marginBottom: 18,
              display: "flex",
            }}
          >
            KOD UNIVERSE
          </div>

          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              letterSpacing: "0.06em",
              color: "#ffffff",
              marginBottom: 12,
              display: "flex",
            }}
          >
            {parts.isLaunched ? "THE CAVE IS OPEN" : "THE CAVE IS ALMOST OPEN"}
          </div>

          <div
            style={{
              fontSize: 22,
              color: "#f3e5d0",
              letterSpacing: "0.08em",
              marginBottom: 36,
              display: "flex",
            }}
          >
            {parts.isLaunched
              ? "Our new website is now live at kod.lk"
              : "COUNTDOWN TO LAUNCH"}
          </div>

          {!parts.isLaunched && (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "24px",
                marginBottom: 32,
              }}
            >
              {boxes.map((box) => (
                <div
                  key={box.label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "160px",
                    height: "136px",
                    borderRadius: "18px",
                    backgroundColor: "rgba(12, 10, 9, 0.82)",
                    border: "2px solid rgba(234, 194, 64, 0.35)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 64,
                      fontWeight: 800,
                      color: "#ffffff",
                      lineHeight: 1,
                      display: "flex",
                    }}
                  >
                    {box.value}
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      letterSpacing: "0.24em",
                      color: "#eac240",
                      marginTop: 10,
                      display: "flex",
                    }}
                  >
                    {box.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div
            style={{
              display: "flex",
              padding: "12px 28px",
              borderRadius: "999px",
              border: "1px solid rgba(234, 194, 64, 0.45)",
              backgroundColor: "rgba(229, 76, 42, 0.2)",
              fontSize: 18,
              letterSpacing: "0.22em",
              color: "#fef3c7",
              fontWeight: 600,
            }}
          >
            11 · 11 · 2026 - 11:11:11 AM SLST
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );

  response.headers.set(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, max-age=0"
  );
  return response;
}

