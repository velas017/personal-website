import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} | ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0a0d13",
          color: "#e7eaf0",
          fontFamily: "ui-monospace, Menlo, monospace",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#8a95a8" }}>
          <span style={{ color: "#f5b342" }}>{site.prompt}</span>
          <span style={{ marginLeft: 16 }}>whoami</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 600, letterSpacing: -2 }}>{site.name}</div>
          <div style={{ display: "flex", fontSize: 36, color: "#8a95a8" }}>{`↳ ${site.role}`}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: "#8a95a8" }}>
          <div style={{ width: 16, height: 16, borderRadius: 999, background: "#4ade80" }} />
          <span>{site.availability.label}</span>
          <span style={{ marginLeft: "auto", color: "#5b6678" }}>{site.url.replace(/^https?:\/\//, "")}</span>
        </div>
      </div>
    ),
    size,
  );
}
