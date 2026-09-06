import "./globals.css";

export const metadata = {
  title: "Sales Operations Tracker",
  description: "Interactive portfolio demo for sales pipeline management",
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
