import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "TaskFlow — Personal Task Manager", description: "A calm, focused space to plan, track and finish your work." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}
