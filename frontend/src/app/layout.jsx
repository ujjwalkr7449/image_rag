import "./globals.css";
import { Providers } from "./Providers";

export const metadata = {
  title: "SnapStudy - AI-Powered Visual Learning",
  description: "SnapStudy helps students upload diagrams, handwritten notes, textbook pages, and files, then converts them into structured analysis, tutor-led conversations, and editable notes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
