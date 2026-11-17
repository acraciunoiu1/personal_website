import { MessageSquareText } from "lucide-react";
import { posts, profile } from "@/config/site";
import { XIcon } from "@/components/icons";
import { Card, CardHeader, LinkButton } from "@/components/ui";

export function Posts() {
  return (
    <Card>
      <CardHeader icon={<MessageSquareText />} divider>
        Latest posts
      </CardHeader>
      <ul className="mb-4 flex flex-col gap-4">
        {posts.map((p) => (
          <li key={p.text}>
            <a href={p.url} target="_blank" rel="noreferrer" className="group block">
              <p className="line-clamp-2 text-[14.4px] leading-snug text-neutral-200 group-hover:text-white">
                {p.text}
              </p>
              <p className="mt-1 text-xs text-neutral-500">{p.date}</p>
            </a>
          </li>
        ))}
      </ul>
      <LinkButton href={profile.links.x} icon={<XIcon />}>
        Follow
      </LinkButton>
    </Card>
  );
}
