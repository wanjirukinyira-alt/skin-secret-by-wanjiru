"use client";

import { Mail, X, Check } from "lucide-react";
import { useEffect, useState } from "react";

const POPUP_STATUS_KEY = "skin-secrets-newsletter-popup-status";

export default function NewsletterPopup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const close = (status = "dismissed") => {
    window.localStorage.setItem(POPUP_STATUS_KEY, status);
    setOpen(false);
  };

  useEffect(() => {
    if (window.localStorage.getItem(POPUP_STATUS_KEY)) return;

    const showAfterScroll = () => {
      if (window.scrollY < 240) return;
      window.removeEventListener("scroll", showAfterScroll);
      window.setTimeout(() => setOpen(true), 350);
    };

    window.addEventListener("scroll", showAfterScroll, { passive: true });
    return () => window.removeEventListener("scroll", showAfterScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    window.localStorage.setItem(POPUP_STATUS_KEY, "submitted");
  };

  if (!open) return null;

  return (
    <div
      className="newsletter-popup-backdrop fixed inset-0 z-[100] flex items-end justify-center bg-[rgba(27,29,24,.55)] p-4 backdrop-blur-[3px] sm:items-center sm:p-6"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <section
        className="newsletter-popup relative w-full max-w-[460px] overflow-hidden rounded-[28px] bg-[var(--paper-alt)] shadow-[0_40px_90px_-40px_rgba(27,29,24,0.45)]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="newsletter-popup-title"
      >
        {/* Top moss band — the elegant signature */}
        <div className="newsletter-popup-band" aria-hidden="true">
          <span className="newsletter-popup-band-line" />
          <span className="newsletter-popup-band-mark">✦</span>
          <span className="newsletter-popup-band-line" />
        </div>

        {/* Close */}
        <button
          type="button"
          onClick={() => close()}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full text-[rgba(255,252,246,0.75)] transition hover:bg-[rgba(255,252,246,0.14)] hover:text-[var(--paper-alt)]"
          aria-label="Close email signup"
        >
          <X size={16} />
        </button>

        <div className="px-7 pb-8 pt-9 sm:px-10 sm:pb-10 sm:pt-11">
          {submitted ? (
            <div className="text-center">
              <span className="newsletter-popup-icon">
                <Check size={20} strokeWidth={1.8} />
              </span>
              <p className="eyebrow mt-5 justify-center">You&apos;re all set</p>
              <h2
                id="newsletter-popup-title"
                className="brand-serif mt-3 text-[28px] leading-[1.15] text-[var(--ink)] sm:text-[32px]"
              >
                Thanks for joining us.
              </h2>
              <p className="mx-auto mt-3 max-w-xs text-[13.5px] leading-6 text-[var(--ink-soft)]">
                We&apos;ll share product launches, restocks and thoughtful
                skin-care notes — never noise.
              </p>
              <button
                type="button"
                onClick={() => close("submitted")}
                className="btn-primary mt-7 w-full justify-center sm:w-auto sm:px-8"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            <>
              <span className="newsletter-popup-icon">
                <Mail size={18} strokeWidth={1.7} />
              </span>

              <p className="eyebrow mt-5">The Skin Letter</p>

              <h2
                id="newsletter-popup-title"
                className="brand-serif mt-3 text-[28px] leading-[1.15] text-[var(--ink)] sm:text-[34px]"
              >
                Quiet notes on skin,
                <br className="hidden sm:block" /> straight to your inbox.
              </h2>

              <p className="mt-4 max-w-sm text-[13.5px] leading-6 text-[var(--ink-soft)]">
                Early access to new formulas, restock alerts, and simple
                rituals we actually use. One email a month — no more.
              </p>

              <form onSubmit={handleSubmit} className="mt-7">
                <label htmlFor="newsletter-popup-email" className="sr-only">
                  Email address
                </label>
                <div className="newsletter-field">
                  <input
                    id="newsletter-popup-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="your@email.com"
                    className="newsletter-field-input"
                  />
                  <button
                    type="submit"
                    className="newsletter-field-submit"
                    aria-label="Join the email list"
                  >
                    Join
                  </button>
                </div>
              </form>

              <p className="mt-5 flex items-center justify-center gap-2 text-[10.5px] uppercase tracking-[0.18em] text-[var(--muted)]">
                <span className="inline-block h-1 w-1 rounded-full bg-[var(--accent)] opacity-60" />
                No spam. Unsubscribe anytime.
              </p>
            </>
          )}
        </div>
      </section>
    </div>
  );
}