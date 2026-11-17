import { Intro } from "@/components/sections/intro";
import { Apps } from "@/components/sections/apps";
import { Highlights } from "@/components/sections/highlights";
import { Reading } from "@/components/sections/reading";
import { Posts } from "@/components/sections/posts";
import { Films } from "@/components/sections/films";
import { Story } from "@/components/sections/story";
import { Testimonials } from "@/components/sections/testimonials";
import { profile } from "@/config/site";

export default function Home() {
  return (
    <main className="mx-auto grid max-w-[888px] grid-cols-1 gap-6 px-4 py-6 sm:grid-cols-2 sm:px-6 sm:py-12">
      <Intro />
      <Story />
      <Apps />
      <Highlights />
      <Reading />
      <Posts />
      <Films />
      <Testimonials />
      <footer className="col-span-full pb-6 pt-2 text-center text-xs text-neutral-600">
        {profile.name} · {profile.location}
      </footer>
    </main>
  );
}
