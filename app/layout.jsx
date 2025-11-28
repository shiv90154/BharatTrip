
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main style={{ paddingBottom: "70px" }}>
          {children}
        </main>

        <BottomNav />

        <Footer />
      </body>
    </html>
  );
}
