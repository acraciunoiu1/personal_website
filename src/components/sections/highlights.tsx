import { TrendingUp } from "lucide-react";
import { highlights } from "@/config/site";
import { Card, CardHeader } from "@/components/ui";

export function Highlights() {
  return (
    <Card className="bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-950">
      <CardHeader icon={<TrendingUp />} divider>
        By the numbers
      </CardHeader>
      <dl className="grid flex-1 grid-cols-2 gap-x-4 gap-y-6 py-2">
        {highlights.map((h) => (
          <div key={h.label} className="flex flex-col gap-1 last:odd:col-span-2">
            <dt className="order-2 text-[13px] leading-snug text-neutral-400">{h.label}</dt>
            <dd className="order-1 text-3xl font-bold tracking-tight">{h.value}</dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}
