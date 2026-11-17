import Image from "next/image";
import { ArrowUpRight, Smartphone } from "lucide-react";
import { apps } from "@/config/site";
import { getApps } from "@/lib/appstore";
import { Card, CardHeader, Stars } from "@/components/ui";

const TINTS = {
  emerald: "bg-emerald-500/10 ring-emerald-400/20 hover:bg-emerald-500/15",
  violet: "bg-violet-500/10 ring-violet-400/20 hover:bg-violet-500/15",
} as const;

const AREA_TINTS = {
  emerald: "bg-emerald-500/5 ring-emerald-400/15 [&>span]:bg-emerald-400",
  violet: "bg-violet-500/5 ring-violet-400/15 [&>span]:bg-violet-400",
} as const;

export async function Apps() {
  const live = await getApps(apps.map((a) => a.id));

  return (
    <Card className="col-span-full gap-4">
      <CardHeader icon={<Smartphone />}>Apps I build</CardHeader>

      <div className="grid gap-x-3 gap-y-5 sm:grid-cols-2">
        {apps.map((app) => {
          const info = live.find((l) => l.id === app.id);
          const url = info?.url ?? `https://apps.apple.com/gb/app/id${app.id}`;
          return (
            <div key={app.id} className="flex flex-col gap-4">
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className={`group flex items-center gap-4 rounded-xl p-4 ring-1 ring-inset transition-colors ${TINTS[app.tint]}`}
              >
                {info?.icon ? (
                  <Image
                    src={info.icon}
                    alt={`${app.name} app icon`}
                    width={52}
                    height={52}
                    className="size-[52px] rounded-[12px] ring-1 ring-white/10"
                  />
                ) : (
                  <div className="size-[52px] rounded-[12px] bg-neutral-800" />
                )}
                <div className="min-w-0 flex-1">
                  <p className="text-[15px] font-semibold">{app.name}</p>
                  <p className="text-[13px] text-neutral-400">{app.blurb}</p>
                  {info && (
                    <p className="mt-1.5 flex flex-wrap items-center gap-x-1.5 text-[13px] text-neutral-300">
                      <Stars rating={info.rating} />
                      <span className="font-medium">{info.rating.toFixed(1)}</span>
                      <span className="whitespace-nowrap text-neutral-500">
                        · {info.ratingCount.toLocaleString("en-GB")} ratings
                      </span>
                    </p>
                  )}
                </div>
                <ArrowUpRight className="size-4 shrink-0 text-neutral-500 transition-colors group-hover:text-white" />
              </a>

              <div className="flex flex-col gap-2 px-1">
                <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                  What I worked on
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {app.areas.map((area) => (
                    <li
                      key={area}
                      className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12.5px] text-neutral-200 ring-1 ring-inset ${AREA_TINTS[app.tint]}`}
                    >
                      <span className="size-1.5 shrink-0 rounded-full" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
