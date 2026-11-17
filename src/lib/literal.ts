import { cacheLife } from "next/cache";

export type Book = {
  title: string;
  author: string;
  cover: string | null;
  url: string;
};

const ENDPOINT = "https://literal.club/graphql/";

async function gql<T>(query: string, variables: Record<string, unknown>): Promise<T | null> {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) return null;
  const json = (await res.json()) as { data?: T };
  return json.data ?? null;
}

type RawBook = {
  slug: string;
  title: string;
  cover: string | null;
  authors: { name: string }[];
};

export async function getBooks(
  handle: string,
  status: "IS_READING" | "FINISHED",
  limit = 3,
): Promise<Book[]> {
  "use cache";
  cacheLife("hours");

  const profile = await gql<{ profile: { id: string } | null }>(
    `query($h: String!) { profile(where: { handle: $h }) { id } }`,
    { h: handle },
  );
  if (!profile?.profile) return [];

  const data = await gql<{ booksByReadingStateAndProfile: RawBook[] }>(
    `query($p: String!, $s: ReadingStatus!, $l: Int!) {
      booksByReadingStateAndProfile(limit: $l, offset: 0, readingStatus: $s, profileId: $p) {
        slug title cover authors { name }
      }
    }`,
    { p: profile.profile.id, s: status, l: limit },
  );

  return (data?.booksByReadingStateAndProfile ?? []).map((b) => ({
    title: b.title,
    author: b.authors.map((a) => a.name).join(", "),
    cover: b.cover?.replace(/^http:/, "https:") ?? null,
    url: `https://literal.club/book/${b.slug}`,
  }));
}
