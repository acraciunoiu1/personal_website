import { Star } from "lucide-react";
import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`flex flex-col gap-2 rounded-2xl bg-neutral-900 p-5 text-neutral-100 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] transition-all duration-200 sm:p-6 ${className}`}
    >
      {children}
    </section>
  );
}

export function CardHeader({
  icon,
  children,
  divider = false,
}: {
  icon: ReactNode;
  children: ReactNode;
  divider?: boolean;
}) {
  return (
    <h2
      className={`flex items-center gap-2 text-[15px] font-normal ${
        divider ? "-mx-5 mb-2 border-b border-white/10 px-5 pb-4 sm:-mx-6 sm:px-6" : "mb-2"
      }`}
    >
      <span className="text-neutral-300 [&>svg]:size-4">{icon}</span>
      {children}
    </h2>
  );
}

export function Chip({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-md bg-white/20 px-1 py-0.5 font-semibold text-white transition-colors hover:bg-white/30"
    >
      {children}
    </a>
  );
}

export function LinkButton({
  href,
  icon,
  children,
}: {
  href: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="mt-auto flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] py-2 text-sm text-neutral-200 transition-colors hover:bg-white/10 [&>svg]:size-4"
    >
      {icon}
      {children}
    </a>
  );
}

export function Stars({
  rating,
  showEmpty = true,
  className = "size-3.5",
}: {
  rating: number;
  showEmpty?: boolean;
  className?: string;
}) {
  const count = showEmpty ? 5 : Math.ceil(rating);
  return (
    <span className="inline-flex items-center gap-px" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => {
        const fill = Math.min(1, Math.max(0, rating - i));
        return (
          <span key={i} className={`relative inline-block ${className}`}>
            <Star className="absolute inset-0 size-full fill-white/15 text-transparent" />
            <span className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
              <Star className={`${className} fill-amber-400 text-transparent`} />
            </span>
          </span>
        );
      })}
    </span>
  );
}
