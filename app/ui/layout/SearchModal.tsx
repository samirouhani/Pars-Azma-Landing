"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { PiMagnifyingGlass } from "react-icons/pi";
import { useLanguage } from "@/app/i18n/LanguageContext";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const { t } = useLanguage();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClose = useCallback(() => {
    setQuery("");
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    const frameId = requestAnimationFrame(() => {
      inputRef.current?.focus();
    });

    return () => {
      cancelAnimationFrame(frameId);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleClose]);

  const trimmedQuery = query.trim().toLowerCase();

  const matchingProducts = useMemo(() => {
    if (!trimmedQuery) return [];
    return t.productsPreview.items
      .filter(
        (item) =>
          item.title.toLowerCase().includes(trimmedQuery) ||
          item.category.toLowerCase().includes(trimmedQuery),
      )
      .slice(0, 4);
  }, [trimmedQuery, t.productsPreview.items]);

  const matchingArticles = useMemo(() => {
    if (!trimmedQuery) return [];
    return t.articles.items
      .filter((item) => item.title.toLowerCase().includes(trimmedQuery))
      .slice(0, 3);
  }, [trimmedQuery, t.articles.items]);

  const hasQuery = trimmedQuery.length > 0;
  const hasResults = matchingProducts.length > 0 || matchingArticles.length > 0;

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-50 ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Desktop dimmed & smoothly blurred backdrop */}
      <div
        onClick={handleClose}
        className={`hidden md:block absolute inset-0 transition-[background-color,backdrop-filter] duration-300 ease-out ${
          isOpen
            ? "bg-black-blue/35 backdrop-blur-sm"
            : "bg-black-blue/0 backdrop-blur-[0px]"
        }`}
        aria-hidden="true"
      />

      {/* Mobile full-white surface / Desktop upper-middle container */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t.navbar.search}
        className={`fixed inset-0 flex flex-col bg-white transition-opacity duration-200 md:static md:relative md:z-10 md:mx-auto md:flex md:h-auto md:w-full md:max-w-2xl md:bg-transparent md:px-6 md:pt-[16vh] md:transition-[opacity,transform] md:duration-250 md:ease-out ${
          isOpen
            ? "opacity-100 md:translate-y-0 md:scale-100"
            : "opacity-0 md:-translate-y-3 md:scale-[0.98]"
        }`}
      >
        {/* Top Input Row */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center gap-3 px-4 pt-4 pb-4 border-b border-border-gray md:p-0 md:border-none"
        >
          <div className="flex w-full items-center gap-3 rounded-full border border-border-gray bg-slightly-blue h-12 md:h-14 px-5 md:px-6 shadow-none md:shadow-xl focus-within:border-accent-blue transition-colors">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.searchModal.placeholder}
              tabIndex={isOpen ? 0 : -1}
              className="w-full bg-transparent text-body text-black-blue placeholder:text-secondary-text focus:outline-none"
            />
            {query.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  inputRef.current?.focus();
                }}
                aria-label={t.searchModal.clearAria}
                className="p-1 text-secondary-text hover:text-black-blue transition-colors cursor-pointer shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-4"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
            <PiMagnifyingGlass className="size-5 text-black-blue shrink-0" />
          </div>

          <button
            type="button"
            onClick={handleClose}
            aria-label={t.searchModal.closeAria}
            tabIndex={isOpen ? 0 : -1}
            className="md:hidden p-1.5 text-black-blue hover:text-accent-blue transition-colors cursor-pointer shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-6"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </form>

        {/* Demo Suggestions */}
        {hasQuery && (
          <div className="flex-1 overflow-y-auto px-5 py-4 bg-white md:flex-none md:mt-3 md:max-h-[55vh] md:border md:border-border-gray md:bg-white md:shadow-xl md:p-4">
            {!hasResults ? (
              <p className="text-body text-secondary-text py-2 text-center">
                {t.searchModal.noResults}
              </p>
            ) : (
              <div className="flex flex-col gap-5">
                {matchingProducts.length > 0 && (
                  <div>
                    <div className="text-uppercase-label text-secondary-text mb-2">
                      {t.searchModal.productsLabel}
                    </div>
                    <ul className="flex flex-col divide-y divide-border-gray/60">
                      {matchingProducts.map((product) => (
                        <li key={product.title}>
                          <Link
                            href="#"
                            onClick={handleClose}
                            className="flex items-center justify-between gap-3 py-2.5 text-sm font-medium text-black-blue hover:text-accent-blue transition-colors"
                          >
                            <span>{product.title}</span>
                            <span className="text-xs text-secondary-text shrink-0">
                              {product.category}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {matchingArticles.length > 0 && (
                  <div>
                    <div className="text-uppercase-label text-secondary-text mb-2">
                      {t.searchModal.articlesLabel}
                    </div>
                    <ul className="flex flex-col divide-y divide-border-gray/60">
                      {matchingArticles.map((article) => (
                        <li key={article.title}>
                          <Link
                            href="#"
                            onClick={handleClose}
                            className="block py-2.5 text-sm font-medium text-black-blue hover:text-accent-blue transition-colors"
                          >
                            {article.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
