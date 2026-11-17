import { BookOpen } from "lucide-react";
import { handles } from "@/config/site";
import { getBooks } from "@/lib/literal";
import { Card, CardHeader, LinkButton } from "@/components/ui";
import { FannedStack } from "@/components/fanned-stack";

export async function Reading() {
  const reading = await getBooks(handles.literal, "IS_READING");
  const books = reading.length ? reading : await getBooks(handles.literal, "FINISHED");

  return (
    <Card>
      <CardHeader icon={<BookOpen />}>
        {reading.length ? "Currently reading" : "Recently read"}
      </CardHeader>
      {books.length ? (
        <FannedStack
          items={books.map((b) => ({
            key: b.url,
            href: b.url,
            title: b.title,
            subtitle: b.author,
            image: b.cover,
          }))}
        />
      ) : (
        <p className="my-auto py-16 text-center text-sm text-neutral-500">Nothing on the shelf yet.</p>
      )}
      <LinkButton href={`https://literal.club/${handles.literal}`} icon={<BookOpen />}>
        Follow on Literal
      </LinkButton>
    </Card>
  );
}
