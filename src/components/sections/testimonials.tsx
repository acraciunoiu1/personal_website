import { Quote } from "lucide-react";
import { testimonials } from "@/config/site";
import { Card, CardHeader } from "@/components/ui";

export function Testimonials() {
  return (
    <Card className="col-span-full bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-950">
      <CardHeader icon={<Quote />}>Kind words</CardHeader>
      <div className="grid gap-4 sm:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col justify-between gap-4 rounded-xl bg-white/[0.03] p-4 ring-1 ring-inset ring-white/5"
          >
            <blockquote className="text-[13.5px] leading-relaxed text-neutral-300">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption>
              <p className="text-[13px] font-semibold">{t.name}</p>
              <p className="text-xs text-neutral-500">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Card>
  );
}
