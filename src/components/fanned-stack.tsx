import Image from "next/image";
import type { ReactNode } from "react";

export type StackItem = {
  key: string;
  href: string;
  title: string;
  subtitle?: string;
  image: string | null;
  badge?: ReactNode;
};

const LAYOUTS: Record<number, string[]> = {
  1: ["z-20 -translate-y-1"],
  2: [
    "z-10 -translate-x-[55%] rotate-[-6deg] translate-y-3",
    "z-20 translate-x-[55%] rotate-[6deg]",
  ],
  3: [
    "z-10 -translate-x-[72%] sm:-translate-x-[90%] rotate-[-8deg] translate-y-6",
    "z-20 -translate-y-2",
    "z-10 translate-x-[72%] sm:translate-x-[90%] rotate-[8deg] translate-y-8",
  ],
  4: [
    "z-10 -translate-x-[70%] sm:-translate-x-[96%] rotate-[-10deg] translate-y-8",
    "z-20 -translate-x-[26%] sm:-translate-x-[33%] rotate-[-3deg] translate-y-0",
    "z-20 translate-x-[26%] sm:translate-x-[33%] rotate-[3deg] translate-y-1",
    "z-10 translate-x-[70%] sm:translate-x-[96%] rotate-[10deg] translate-y-9",
  ],
};

export function FannedStack({ items }: { items: StackItem[] }) {
  const shown = items.slice(0, 4);
  const layout = LAYOUTS[shown.length] ?? [];

  return (
    <div className="relative mx-auto my-auto mb-3 h-[250px] w-full">
      {shown.map((item, i) => (
        <a
          key={item.key}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          title={item.subtitle ? `${item.title} · ${item.subtitle}` : item.title}
          className={`absolute left-1/2 top-1/2 -ml-[62px] -mt-[93px] block aspect-[2/3] w-[124px] overflow-hidden rounded-lg bg-neutral-800 shadow-[0_10px_30px_rgba(0,0,0,0.6)] ring-1 ring-white/10 transition-transform duration-300 hover:z-30 hover:scale-105 ${layout[i]}`}
        >
          {item.image ? (
            <Image
              src={item.image}
              alt={item.title}
              fill
              unoptimized
              className="object-cover"
            />
          ) : (
            <div className="flex h-full flex-col justify-end bg-gradient-to-br from-neutral-700 to-neutral-900 p-3">
              <p className="text-[13px] font-semibold leading-tight">{item.title}</p>
              {item.subtitle && (
                <p className="mt-1 text-[11px] text-neutral-400">{item.subtitle}</p>
              )}
            </div>
          )}
          {item.badge && (
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-2 pb-1.5 pt-6 text-center text-xs text-neutral-200">
              {item.badge}
            </div>
          )}
        </a>
      ))}
    </div>
  );
}
