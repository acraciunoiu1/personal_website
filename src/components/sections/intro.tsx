import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { companies, profile } from "@/config/site";
import { LinkedInIcon, XIcon } from "@/components/icons";
import { Chip } from "@/components/ui";

export function Intro() {
  return (
    <section className="col-span-full flex flex-col gap-2 rounded-2xl p-3 text-neutral-100 sm:border sm:border-neutral-800 sm:p-6">
      <div className="mb-4 flex items-center gap-4">
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={72}
          height={72}
          priority
          className="size-[72px] shrink-0 rounded-full ring-1 ring-white/10"
        />
        <div className="flex flex-col gap-0.5">
          <h1 className="text-[15px] font-semibold">{profile.name}</h1>
          <p className="text-[14.4px] text-neutral-400">{profile.tagline}</p>
          <div className="mt-0.5 flex items-center gap-2 text-[13px] text-neutral-400">
            <span className="flex items-center gap-1">
              <MapPin className="size-3.5" /> {profile.location}
            </span>
            <span aria-hidden>·</span>
            <a href={profile.links.x} target="_blank" rel="noreferrer" aria-label="X" className="hover:text-white">
              <XIcon />
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white">
              <LinkedInIcon />
            </a>
            <a href={profile.links.email} aria-label="Email" className="hover:text-white">
              <Mail className="size-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 text-[15.2px] leading-[1.5]">
        <p className="text-lg font-semibold leading-snug text-white">
          Probably the best product leader you haven&apos;t heard of (yet).
        </p>
        <p>
          I lead product at <Chip href={companies.smarkets}>Smarkets</Chip> and{" "}
          <Chip href={companies.sbk}>SBK</Chip>, a prediction market and a sports betting app used by 1m
          people.
        </p>
        <p>
          Before that I launched <Chip href={companies.oddsIndex}>OddsIndex</Chip> in the US, and spent
          four years at <Chip href={companies.kambi}>Kambi</Chip> taking sportsbooks into 20+ regulated
          markets.
        </p>
        <p>
          I studied entrepreneurship &amp; economics at{" "}
          <Chip href={companies.upb}>Politehnica Bucharest</Chip>, with a detour to play poker
          professionally.
        </p>
      </div>
    </section>
  );
}
