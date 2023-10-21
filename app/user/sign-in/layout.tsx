import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BeYou | Sign in",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
