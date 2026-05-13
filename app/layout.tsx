import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Changelog Impact Scorer — Score Your Releases",
  description: "Analyze Git commits and PRs to automatically score impact levels and generate user-facing changelog entries with business impact."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b616b3ad-1efd-4432-8d34-dd3e6c776f6d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
