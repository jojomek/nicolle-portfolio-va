import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type PreviewItem =
  | { kind: "image"; src: string; title: string }
  | { kind: "pdf"; src: string; title: string };

interface Ctx {
  current: PreviewItem | null;
  open: (item: PreviewItem) => void;
  close: () => void;
}

const PreviewCtx = createContext<Ctx | null>(null);

export function PreviewProvider({ children }: { children: ReactNode }) {
  const [current, setCurrent] = useState<PreviewItem | null>(null);

  const open = useCallback((item: PreviewItem) => setCurrent(item), []);
  const close = useCallback(() => setCurrent(null), []);

  useEffect(() => {
    if (!current) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [current, close]);

  return (
    <PreviewCtx.Provider value={{ current, open, close }}>
      {children}
      {current && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex flex-col animate-in fade-in duration-200"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
        >
          {/* Top bar with title + close */}
          <div
            className="flex items-center justify-between gap-4 px-6 py-4 border-b border-white/10 bg-black/60"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="min-w-0">
              <div className="text-[0.65rem] tracking-[0.25em] uppercase text-white/50">
                Preview
              </div>
              <div className="font-display text-lg text-white truncate">
                {current.title}
              </div>
            </div>
            <button
              onClick={close}
              aria-label="Close preview"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-black hover:bg-white/90 transition-colors text-sm font-medium shadow-2xl"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M1 1l12 12M13 1L1 13" />
              </svg>
              <span>Close</span>
            </button>
          </div>

          {/* Content */}
          <div
            className="flex-1 flex items-center justify-center p-4 sm:p-8 overflow-auto"
            onClick={close}
          >
            {current.kind === "image" ? (
              <img
                src={current.src}
                alt={current.title}
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
                onClick={(e) => e.stopPropagation()}
                className="max-h-full max-w-full object-contain border border-white/10 shadow-2xl select-none"
              />
            ) : (
              <iframe
                src={current.src}
                title={current.title}
                onClick={(e) => e.stopPropagation()}
                className="w-full h-full max-w-5xl bg-white border border-white/10 shadow-2xl"
                style={{ minHeight: "70vh" }}
              />
            )}
          </div>
        </div>
      )}
    </PreviewCtx.Provider>
  );
}

export function usePreview() {
  const ctx = useContext(PreviewCtx);
  if (!ctx) throw new Error("usePreview must be used within PreviewProvider");
  return ctx;
}
