"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { navLinks, type NavLink } from "@/shared/layouts/nav";
import ContactModal from "@/shared/components/ContactModal";

const MENU_TRANSITION_MS = 400;

// Smooth-scrolls to an in-page anchor target, offsetting for the fixed
// header's height (the header floats over the page at every scroll
// position now, so the offset always applies).
function scrollToAnchor(href: string) {
  const targetId = href.replace("#", "");
  const element = document.getElementById(targetId);
  if (!element) {
    // Section doesn't exist on this page (e.g. clicking a nav link from
    // /legal) — navigate to the homepage instead of silently doing nothing.
    window.location.href = `/${href}`;
    return;
  }

  setTimeout(() => {
    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 0;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offset = headerHeight + 20;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  }, 0);
}

function MobileMenu({
  isOpen,
  onNavigate,
  topOffset,
  onOpenContact,
}: {
  isOpen: boolean;
  onNavigate: () => void;
  topOffset: number;
  onOpenContact: () => void;
}) {
  const [rendered, setRendered] = useState(isOpen);
  const [entered, setEntered] = useState(false);
  const unmountTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Opening needs to render immediately (so the enter transition below has
  // something to animate from); closing keeps rendering for one more tick
  // so the exit transition can play before unmounting.
  if (isOpen && !rendered) setRendered(true);
  if (!isOpen && entered) setEntered(false);

  useEffect(() => {
    if (isOpen) {
      if (unmountTimeout.current) clearTimeout(unmountTimeout.current);
      return;
    }
    unmountTimeout.current = setTimeout(() => setRendered(false), MENU_TRANSITION_MS);
    return () => {
      if (unmountTimeout.current) clearTimeout(unmountTimeout.current);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!rendered) return;
    const raf = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(raf);
  }, [rendered]);

  // SSR has no document to portal into; the client render (post-hydration)
  // picks this up immediately after.
  if (typeof document === "undefined" || !rendered) return null;

  const handleLinkClick = (e: MouseEvent, href: string) => {
    e.preventDefault();
    scrollToAnchor(href);
    onNavigate();
  };

  // Portalled to document.body: the header this menu toggles from has its
  // own transform (translate-y) for the hide-on-scroll behavior, and a
  // transform on an ancestor turns position:fixed descendants into
  // behaving like position:absolute relative to *that* ancestor instead
  // of the viewport — which silently collapsed this panel to nothing.
  return createPortal(
    <div
      style={{
        top: topOffset + 8,
        transitionDuration: `${MENU_TRANSITION_MS}ms`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      className={`fixed inset-x-6 bottom-0 z-50 isolate flex flex-col overflow-y-auto rounded-t-4xl transition-[transform,opacity] lg:hidden ${
        entered ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
      }`}
    >
      {/* Same "liquid glass" recipe as the header (distorted+blurred
          backdrop, tint, specular ring), so the dropdown reads as an
          extension of the pill rather than a different material —
          just tinted dark instead of white, since this panel's nav
          text is hardcoded white and needs a dark backdrop for
          contrast regardless of what's scrolled behind it. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] backdrop-blur-[3px]"
        style={{ filter: "url(#glass-distortion)" }}
      />
      <div
        aria-hidden
        className="bg-gesitech-blue/85 pointer-events-none absolute inset-0 rounded-[inherit]"
      />
      <div
        aria-hidden
        className="ring-1 ring-white/10 shadow-lg shadow-black/20 pointer-events-none absolute inset-0 rounded-[inherit]"
      />

      <nav className="container-fluid px-4 sm:px-6 lg:px-8 relative flex flex-1 flex-col justify-center gap-1 py-8">
        {navLinks.map((link: NavLink, index: number) => (
          <div
            key={link.href}
            style={{
              transitionDuration: "500ms",
              transitionDelay: `${100 + index * 60}ms`,
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            className={`border-b border-white/10 py-4 first:pt-0 transition-[transform,opacity] ${
              entered ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <a
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="group flex items-center justify-between gap-4"
            >
              <span className="font-display text-3xl font-bold text-white transition-colors group-hover:text-gesitech-green sm:text-4xl">
                {link.label}
              </span>
              <Icon
                icon="lucide:arrow-right"
                className="h-5 w-5 shrink-0 -rotate-45 text-white/40 transition-all group-hover:rotate-0 group-hover:text-gesitech-green"
              />
            </a>
          </div>
        ))}
      </nav>

      <div
        style={{
          transitionDuration: "500ms",
          transitionDelay: `${100 + navLinks.length * 60}ms`,
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        }}
        className={`container-fluid px-4 sm:px-6 lg:px-8 relative flex flex-col items-start gap-4 border-t border-white/10 py-6 transition-[transform,opacity] ${
          entered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <p className="text-sm text-white/50">
          Safe, Reliable LPG Solutions Across Africa
        </p>
        <button
          type="button"
          onClick={() => {
            onOpenContact();
            onNavigate();
          }}
          className="w-full bg-gradient-to-r from-gesitech-blue to-gesitech-green text-white px-6 py-3 rounded-full font-semibold text-center transition-all duration-300 hover:shadow-lg cursor-pointer"
        >
          Get in touch
        </button>
      </div>
    </div>,
    document.body,
  );
}

export default function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [menuTop, setMenuTop] = useState(96);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [hoverRect, setHoverRect] = useState<{ left: number; width: number } | null>(null);
  // Kept around after the mouse leaves so the highlight has a position to
  // fade out from — without it, dropping `left`/`width` from `animate`
  // lets them snap to the pill's un-animated base (left-0), so it looked
  // like it was darting to the left edge before fading, instead of just
  // fading out in place.
  const [lastHoverRect, setLastHoverRect] = useState<{ left: number; width: number } | null>(null);

  useEffect(() => {
    let lastY = window.scrollY;

    const syncMenuTop = () => {
      const bottom = headerRef.current?.getBoundingClientRect().bottom;
      if (bottom) setMenuTop(bottom);
    };

    const onScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 8);
      // Header height/margins shift between the full-width and pill
      // states, so the mobile menu's own top offset (which measures the
      // header, not a hardcoded value) has to stay in sync too.
      syncMenuTop();

      if (isOpen) {
        lastY = y;
        return;
      }

      const delta = y - lastY;
      if (y <= 8) {
        setIsHidden(false);
      } else if (delta > 4) {
        setIsHidden(true);
      } else if (delta < -4) {
        setIsHidden(false);
      }

      lastY = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", syncMenuTop);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", syncMenuTop);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = (e: MouseEvent, href: string) => {
    e.preventDefault();
    scrollToAnchor(href);
  };

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <>
    {/* Liquid-glass refraction filter for the header background layer
        below. Hidden via zero size + overflow (not display:none —
        some browsers won't apply a filter referenced from a
        display:none SVG). Tuned subtle (scale 18, not the 70-100 a
        demo over a busy photo background would use) since this sits
        behind readable nav text, not a decorative image. */}
    <svg width="0" height="0" style={{ position: "absolute", overflow: "hidden" }}>
      <defs>
        <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.012" numOctaves="2" seed="8" result="noise" />
          <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
          <feDisplacementMap in="SourceGraphic" in2="blurred" scale="18" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>

    <header
      ref={headerRef}
      style={{
        transform: isHidden ? "translateY(calc(-100% - 2rem))" : "translateY(0)",
        transition:
          "top 500ms cubic-bezier(0.22, 1, 0.36, 1), margin 500ms cubic-bezier(0.22, 1, 0.36, 1), border-radius 500ms cubic-bezier(0.22, 1, 0.36, 1), transform 550ms cubic-bezier(0.65, 0, 0.35, 1)",
      }}
      className="fixed inset-x-0 top-4 z-60 isolate mx-6 overflow-hidden rounded-4xl xl:mx-10 2xl:mx-24"
    >
      {/* "Liquid glass": a distorted+blurred backdrop layer, a faint
          white tint, and an inset specular highlight — stacked in that
          order behind the nav content so the distortion never touches
          the (crisp, on top) links/logo. Safari's SVG-filter +
          backdrop-filter combination is inconsistent, so this degrades
          to a plain frosted blur there rather than breaking. */}
      <div
        aria-hidden
        style={{
          filter: "url(#glass-distortion)",
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        }}
        className="pointer-events-none absolute inset-0 rounded-[inherit] backdrop-blur-[3px] opacity-100 transition-opacity duration-500"
      />
      <div
        aria-hidden
        style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
        className="pointer-events-none absolute inset-0 rounded-[inherit] bg-white/60 opacity-100 transition-opacity duration-500"
      />
      <div
        aria-hidden
        style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
        className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-lg shadow-gesitech-blue/10 ring-1 ring-white/40 ring-inset opacity-100 transition-opacity duration-500"
      />

      <nav
        style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
        className={`relative mx-auto grid w-full grid-cols-[auto_1fr_auto] items-center px-3 transition-[height] duration-500 xl:px-4 ${
          isScrolled ? "h-20" : "h-24"
        }`}
      >
        <a href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="relative block h-16 w-44 shrink-0">
          <Image
            src="/assets/images/logo.png"
            alt="Gesitech Solutions Africa"
            fill
            priority
            className="object-contain object-left"
          />
        </a>

        <div
          ref={navLinksRef}
          onMouseLeave={() => setHoverRect(null)}
          className="relative mx-auto hidden items-center justify-center lg:flex"
        >
          {/* One persistent highlight, measured off whichever link is
              hovered and animated via `animate` (not layoutId): a
              layoutId'd element that mounts fresh per-link unmounts
              whenever the pointer briefly has no target between two
              links (onMouseLeave firing before the next onMouseEnter is
              common), which kills the FLIP interpolation and makes it
              fade in at the new spot instead of sliding. This element
              never unmounts, so its position always animates smoothly. */}
          <span
            style={{
              opacity: hoverRect ? 1 : 0,
              left: (hoverRect ?? lastHoverRect)?.left,
              width: (hoverRect ?? lastHoverRect)?.width,
            }}
            className="bg-gesitech-blue/10 ring-1 ring-gesitech-blue/20 ring-inset pointer-events-none absolute top-0 left-0 z-0 h-10 rounded-full backdrop-blur-md transition-[left,width,opacity] duration-300 ease-out"
          />

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              ref={(el) => {
                linkRefs.current[link.href] = el;
              }}
              onMouseEnter={() => {
                const el = linkRefs.current[link.href];
                const container = navLinksRef.current;
                if (!el || !container) return;
                const elRect = el.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                const rect = {
                  left: elRect.left - containerRect.left,
                  width: elRect.width,
                };
                setHoverRect(rect);
                setLastHoverRect(rect);
              }}
              className="relative z-10 inline-flex h-10 items-center rounded-full px-1.5 text-[15px] font-medium text-gesitech-blue whitespace-nowrap transition-colors hover:text-gesitech-green xl:px-2.5 2xl:px-3 2xl:text-md"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center justify-self-end">
          <button
            type="button"
            onClick={openContact}
            className="hidden h-10 items-center rounded-full bg-gradient-to-r from-gesitech-blue to-gesitech-green px-3 text-sm font-semibold text-white whitespace-nowrap shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer lg:inline-flex xl:px-5 2xl:px-6 2xl:text-md"
          >
            Get Quote
          </button>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-gesitech-blue lg:hidden"
          >
            <span
              key={isOpen ? "close" : "open"}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Icon
                icon={isOpen ? "ci:close-big" : "ci:menu-alt-02"}
                width={32}
                height={32}
              />
            </span>
          </button>
        </div>
      </nav>
    </header>

    <MobileMenu
      isOpen={isOpen}
      onNavigate={() => setIsOpen(false)}
      topOffset={menuTop}
      onOpenContact={openContact}
    />

    <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </>
  );
}
