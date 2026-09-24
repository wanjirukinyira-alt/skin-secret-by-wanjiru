"use client";

import { ChevronUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const WHATSAPP_MESSAGE = "Hello Skin Secrets by Wanjiru, I have a question about your products.";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setShowScrollTop(window.scrollY > 320);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const whatsappHref = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
    : "/contact";

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        className={`floating-action flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--paper-alt)] text-[var(--accent)] shadow-[var(--shadow-md)] transition-all hover:-translate-y-0.5 hover:bg-[var(--accent-soft)] focus-visible:outline-none ${
          showScrollTop
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <ChevronUp size={20} strokeWidth={1.8} />
      </button>

      <a
        href={whatsappHref}
        target={WHATSAPP_NUMBER ? "_blank" : undefined}
        rel={WHATSAPP_NUMBER ? "noreferrer" : undefined}
        aria-label={WHATSAPP_NUMBER ? "Chat with us on WhatsApp" : "Contact Skin Secrets by Wanjiru"}
        title={WHATSAPP_NUMBER ? "Chat with us on WhatsApp" : "Add a WhatsApp number to enable chat"}
        className="floating-action flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-lg)] transition hover:-translate-y-0.5 hover:bg-[#1ebe5d] focus-visible:outline-none"
      >
        <MessageCircle size={23} strokeWidth={1.8} aria-hidden="true" />
      </a>
    </div>
  );
}
