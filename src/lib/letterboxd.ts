import { cacheLife } from "next/cache";
import { XMLParser } from "fast-xml-parser";

export type Film = {
  title: string;
  year: string;
  rating: number | null;
  poster: string | null;
  url: string;
};

type RssItem = {
  link: string;
  description: string;
  "letterboxd:filmTitle"?: string;
  "letterboxd:filmYear"?: string | number;
  "letterboxd:memberRating"?: string | number;
};

export async function getRecentFilms(username: string, limit = 3): Promise<Film[]> {
  "use cache";
  cacheLife("hours");

  const res = await fetch(`https://letterboxd.com/${username}/rss/`, {
    headers: { "user-agent": "Mozilla/5.0 (personal site)" },
  });
  if (!res.ok) return [];

  const parsed = new XMLParser().parse(await res.text());
  const raw = parsed?.rss?.channel?.item;
  const items: RssItem[] = Array.isArray(raw) ? raw : raw ? [raw] : [];

  const seen = new Set<string>();
  return items
    .filter((i) => {
      const key = `${i["letterboxd:filmTitle"]}|${i["letterboxd:filmYear"]}`;
      if (!i["letterboxd:filmTitle"] || seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, limit)
    .map((i) => ({
      title: String(i["letterboxd:filmTitle"]),
      year: String(i["letterboxd:filmYear"] ?? ""),
      rating: i["letterboxd:memberRating"] ? Number(i["letterboxd:memberRating"]) : null,
      poster: i.description.match(/<img src="([^"]+)"/)?.[1] ?? null,
      url: i.link,
    }));
}
