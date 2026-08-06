"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { nav } from "@/content/homepage";
import { site, whatsappUrl } from "@/content/site";
import { NavIcon } from "@/components/nav-icons";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

function useChatDrawerOpen(): boolean {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    function sync() {
      setOpen(root.classList.contains("chat-drawer-open"));
    }

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return open;
}

export function SiteNav() {
  const menuId = useId();
  const chatOpen = useChatDrawerOpen();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const drawerRef = useRef<HTMLElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (chatOpen) setMenuOpen(false);
  }, [chatOpen]);

  useEffect(() => {
    document.documentElement.classList.toggle("nav-menu-open", menuOpen);
    return () => {
      document.documentElement.classList.remove("nav-menu-open");
    };
  }, [menuOpen]);

  useEffect(() => {
    function onResize() {
      if (
        window.innerWidth > 760 &&
        !document.documentElement.classList.contains("chat-drawer-open")
      ) {
        setMenuOpen(false);
      }
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const selectInertTargets = () =>
      document.querySelectorAll<HTMLElement>(
        "main, .site-footer, .chat-root, .site-header",
      );

    if (!menuOpen) {
      selectInertTargets().forEach((el) => {
        el.inert = false;
      });
      return;
    }

    const inertTargets = selectInertTargets();
    inertTargets.forEach((el) => {
      el.inert = true;
    });

    const previouslyFocused =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const focusTimer = window.setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 0);

    function getFocusable(): HTMLElement[] {
      if (!drawerRef.current) return [];
      return Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      ).filter(
        (el) => !el.hasAttribute("disabled") && el.getAttribute("aria-hidden") !== "true",
      );
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = getFocusable();
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey) {
        if (active === first || !drawerRef.current?.contains(active)) {
          event.preventDefault();
          last.focus();
        }
      } else if (active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      inertTargets.forEach((el) => {
        el.inert = false;
      });
      previouslyFocused?.focus?.();
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
    burgerRef.current?.focus();
  }

  const drawer = (
    <>
      <div
        className={`nav-backdrop${menuOpen ? " is-open" : ""}`}
        aria-hidden="true"
        onClick={closeMenu}
      />

      <aside
        ref={drawerRef}
        className={`nav-drawer${menuOpen ? " is-open" : ""}`}
        id={menuId}
        role="dialog"
        aria-modal={menuOpen}
        aria-hidden={!menuOpen}
        aria-label="Site menu"
      >
        <div className="nav-drawer-perf" aria-hidden="true" />
        <div className="nav-drawer-inner">
          <div className="nav-drawer-head">
            <div>
              <p className="nav-drawer-eyebrow">Ticket · Menu</p>
              <p className="nav-drawer-brand">
                {site.name}
                <span>.</span>
              </p>
            </div>
            <button
              ref={closeBtnRef}
              type="button"
              className="nav-drawer-close"
              onClick={closeMenu}
              aria-label="Close menu"
              tabIndex={menuOpen ? 0 : -1}
            >
              Close
            </button>
          </div>

          <nav className="nav-drawer-links" aria-label="Site">
            {nav.links.map((link, index) => (
              <a
                key={link.href}
                className="nav-drawer-link"
                href={link.href}
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
              >
                <span className="nav-drawer-stub mono">
                  {String(index).padStart(2, "0")}
                </span>
                <span className="nav-drawer-label">{link.label}</span>
                <span className="nav-drawer-icon" aria-hidden="true">
                  <NavIcon id={link.icon} />
                </span>
              </a>
            ))}
          </nav>

          <a
            className="nav-drawer-wa"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
          >
            <span className="nav-drawer-icon nav-drawer-icon--wa" aria-hidden="true">
              <NavIcon id={nav.ctaIcon} />
            </span>
            {nav.cta}
          </a>
        </div>
        <div className="nav-drawer-tear" aria-hidden="true" />
      </aside>
    </>
  );

  return (
    <div className={`nav-right${menuOpen ? " is-menu-open" : ""}`}>
      <div className="nav-desktop">
        {nav.links.map((link) => (
          <a key={link.href} className="nav-link" href={link.href}>
            {link.label}
          </a>
        ))}
        <a
          className="nav-cta"
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
        >
          {nav.cta}
        </a>
      </div>

      <button
        ref={burgerRef}
        type="button"
        className="nav-burger"
        aria-expanded={menuOpen}
        aria-controls={menuId}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((value) => !value)}
      >
        <span className="nav-burger-lines" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      {mounted ? createPortal(drawer, document.body) : null}
    </div>
  );
}
