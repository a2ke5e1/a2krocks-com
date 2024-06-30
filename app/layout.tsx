import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "../components/MainLayout";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{<MainLayout>{children}</MainLayout>}</body>
    </html>
  );
}
