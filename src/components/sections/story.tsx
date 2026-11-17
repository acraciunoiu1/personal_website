import { Route } from "lucide-react";
import { story } from "@/config/site";
import { Card, CardHeader } from "@/components/ui";

export function Story() {
  return (
    <Card className="col-span-full">
      <CardHeader icon={<Route />} divider>
        My story
      </CardHeader>
      <ol className="relative flex flex-col gap-5 pl-6 before:absolute before:bottom-2 before:left-[5px] before:top-2 before:w-px before:bg-linear-to-b before:from-white/10 before:from-70% before:to-green-400/70">
        {story.map((s) => {
          const now = s.year === "Now";
          return (
            <li key={s.year} className="relative">
              {now ? (
                <span className="absolute -left-6 top-[5px] flex size-[11px]">
                  <span className="absolute inline-flex size-full rounded-full bg-green-400 opacity-75 motion-safe:animate-ping" />
                  <span className="relative inline-flex size-[11px] rounded-full bg-green-400 shadow-[0_0_10px_2px] shadow-green-400/60" />
                </span>
              ) : (
                <span className="absolute -left-6 top-[5px] size-[11px] rounded-full border-2 border-neutral-900 bg-neutral-500" />
              )}
              <p
                className={
                  now
                    ? "text-xs font-semibold uppercase tracking-wider text-green-400 [text-shadow:0_0_8px_rgb(74_222_128/0.7)] flicker"
                    : "text-xs font-medium uppercase tracking-wider text-neutral-500"
                }
              >
                {s.year}
              </p>
              <p className={`mt-0.5 text-[14.4px] leading-snug ${now ? "text-white" : "text-neutral-200"}`}>
                {s.text}
              </p>
            </li>
          );
        })}
      </ol>
    </Card>
  );
}
