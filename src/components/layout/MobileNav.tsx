"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, PlusCircle, Heart, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/browse", label: "Browse", icon: Search },
  { href: "/sell", label: "Sell", icon: PlusCircle },
  { href: "/saved", label: "Saved", icon: Heart },
  { href: "/account", label: "Account", icon: User },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-border pb-safe shadow-[0_-2px_10px_rgba(0,0,0,0.05)]" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-0.5 w-16 h-full rounded-lg transition-colors",
                isActive
                  ? "text-accent"
                  : "text-text-tertiary hover:text-text-secondary"
              )}
            >
              <Icon
                className={cn("w-6 h-6", item.href === "/sell" && "w-7 h-7")}
                strokeWidth={isActive ? 2.5 : 1.5}
              />
              <span className="text-[10px] font-medium leading-none">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
