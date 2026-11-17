import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://andreicraciunoiu.com"),
  title: "Andrei Craciunoiu",
  description:
    "Product leader building prediction markets and consumer betting apps at Smarkets and SBK. London.",
  openGraph: {
    title: "Andrei Craciunoiu",
    description: "Probably the best product leader you haven't heard of (yet).",
    images: ["/andrei.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen font-sans">
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(319deg, rgba(51,51,255,0.08) 10%, rgba(85,255,0,0) 30%), linear-gradient(20deg, rgba(255,128,0,0.13) 5%, rgba(0,255,128,0) 25%)",
          }}
        />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
