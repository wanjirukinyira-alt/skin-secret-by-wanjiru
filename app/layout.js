import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartProvider";
import NewsletterPopup from "@/components/NewsletterPopup";
import FloatingActions from "@/components/FloatingActions";

export const metadata = {
  title: "Skin Secrets by Wanjiru",
  description: "Thoughtful skincare, beautiful routines and easy shopping.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingActions />
          <NewsletterPopup />
        </CartProvider>
      </body>
    </html>
  );
}
