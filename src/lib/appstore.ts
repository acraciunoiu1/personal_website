import { cacheLife } from "next/cache";

export type AppInfo = {
  id: string;
  name: string;
  icon: string;
  rating: number;
  ratingCount: number;
  url: string;
};

type LookupResult = {
  trackId: number;
  trackName: string;
  artworkUrl512: string;
  averageUserRating: number;
  userRatingCount: number;
  trackViewUrl: string;
};

export async function getApps(ids: string[]): Promise<AppInfo[]> {
  "use cache";
  cacheLife("hours");

  const res = await fetch(
    `https://itunes.apple.com/lookup?id=${ids.join(",")}&country=gb`,
  );
  if (!res.ok) return [];
  const { results } = (await res.json()) as { results: LookupResult[] };

  return results.map((r) => ({
    id: String(r.trackId),
    name: r.trackName,
    icon: r.artworkUrl512,
    rating: r.averageUserRating,
    ratingCount: r.userRatingCount,
    url: r.trackViewUrl.split("?")[0],
  }));
}
