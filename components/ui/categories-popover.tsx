"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, LayoutGrid, Sparkles } from "lucide-react";
import { Category } from "@/types";
import { cn } from "@/lib/utils";

interface CategoriesPopoverProps {
  categories?: Category[]; // Made optional with default []
}

const CategoriesPopover: React.FC<CategoriesPopoverProps> = ({
  categories = [],
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={popoverRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        type="button"
        className={cn(
          "flex items-center gap-x-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border shadow-sm",
          isOpen
            ? "bg-slate-900 text-white border-slate-900"
            : "bg-white text-slate-800 border-slate-200 hover:bg-slate-50"
        )}
      >
        <LayoutGrid size={16} className={isOpen ? "text-emerald-400" : "text-emerald-600"} />
        <span>All Categories</span>
        <ChevronDown
          size={15}
          className={cn(
            "transition-transform duration-200 text-slate-500",
            isOpen && "rotate-180 text-white"
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2.5 w-64 sm:w-72 rounded-2xl bg-white p-2 text-slate-900 shadow-xl border border-slate-200 z-50">
          <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Browse Collections
            </span>
            <Sparkles size={14} className="text-emerald-500" />
          </div>

          <div className="py-1.5 max-h-[320px] overflow-y-auto space-y-0.5">
            {!categories || categories.length === 0 ? (
              <div className="px-3 py-4 text-center text-xs text-slate-500">
                No categories available.
              </div>
            ) : (
              categories.map((category) => {
                const isActive = pathname === `/category/${category.id}`;
                return (
                  <Link
                    key={category.id}
                    href={`/category/${category.id}`}
                    className={cn(
                      "flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
                      isActive
                        ? "bg-emerald-50 text-emerald-700 font-semibold"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    )}
                  >
                    <span>{category.name}</span>
                    {isActive && (
                      <span className="h-2 w-2 rounded-full bg-emerald-600" />
                    )}
                  </Link>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoriesPopover;