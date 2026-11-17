import { Popcorn } from "lucide-react";
import { favouriteFilms, handles } from "@/config/site";
import { getRecentFilms } from "@/lib/letterboxd";
import { Card, CardHeader, LinkButton, Stars } from "@/components/ui";
import { FannedStack } from "@/components/fanned-stack";

export async function Films() {
  const recent = await getRecentFilms(handles.letterboxd);
  const profileUrl = `https://letterboxd.com/${handles.letterboxd}/`;

  const items = recent.length
    ? recent.map((f) => ({
        key: f.url,
        href: f.url,
        title: f.title,
        subtitle: f.year,
        image: f.poster,
        badge: f.rating ? <Stars rating={f.rating} showEmpty={false} className="size-3" /> : undefined,
      }))
    : favouriteFilms.map((f) => ({
        key: f.slug,
        href: `https://letterboxd.com/film/${f.slug}/`,
        title: f.title,
        subtitle: String(f.year),
        image: f.poster,
      }));

  return (
    <Card>
      <CardHeader icon={<Popcorn />}>
        {recent.length ? "Last films I've watched" : "All-time favourites"}
      </CardHeader>
      <FannedStack items={items} />
      <LinkButton href={profileUrl} icon={<Popcorn />}>
        Follow on Letterboxd
      </LinkButton>
    </Card>
  );
}
