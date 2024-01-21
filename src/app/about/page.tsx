import type { Metadata } from "next";
import Image from "next/image";
import ExternalLinkIcon from "~/icons/ExternalLinkIcon";

import { getSubpageTitle } from "~/utils/seo";

export const metadata: Metadata = {
  title: getSubpageTitle("About"),
};

export default function About() {
  return (
    <article className="flex flex-col gap-4 pb-20">
      <header>
        <h1>about</h1>
      </header>

      <p>
        Hey, I&apos;m Bartek <i>(bar-teh•k)</i>. I work as a software engineer
        at an American InsurTech company, where I tightly collaborate with
        stakeholders, designers and fellow engineers to craft high-quality
        products used by thousands. Specializing in frontend, my mission is to
        make the web experience smooth and fast for all the users.
      </p>

      <figure className="my-2 flex break-inside-avoid-column flex-col gap-2 self-center text-center">
        <Image
          src="/images/goofball.jpg"
          alt="Goofy photo of myself"
          width="220"
          height="300"
          placeholder="blur"
        />
        <figcaption className="text-xs italic text-gray-600">
          best one I could find
        </figcaption>
      </figure>

      <p>
        I&apos;m passionate about the web, however my background spans across
        various technologies and domains. Before any of my commercial
        experiences, I polished my skills working on numerous projects, either
        solo or together with two of my friends under the brand{" "}
        <a
          href="https://flatpixels.pl"
          target="_blank"
          rel="noopener"
          className="inline-flex gap-1"
        >
          flatpixels
          <span className="mt-[3px]">
            <ExternalLinkIcon />
          </span>
        </a>
        . From Unity games, through blog themes and Mac apps, we&apos;ve tried
        it all.
      </p>
      <p>
        I live in Warsaw, Poland. After work, I enjoy artistic pursuits such as
        photography and music. In the past, I worked as a semi-professional
        photographer and maintained a{" "}
        <a
          href="https://tookapic.com/bartlomiej"
          target="_blank"
          rel="noopener"
          className="inline-flex gap-1"
        >
          photojournal
          <span className="mt-[3px]">
            <ExternalLinkIcon />
          </span>
        </a>{" "}
        where I posted my photos daily — almost 1700 days of my life are
        documented on everyday photos.
      </p>

      <section className="flex flex-col gap-3">
        <div className="mt-6 flex justify-evenly">
          <figure>
            <Image
              src="/images/warsaw.jpg"
              alt="Photo of Warsaw"
              width="220"
              height="300"
              placeholder="blur"
            />
          </figure>

          <figure>
            <Image
              src="/images/mountains.jpg"
              alt="Photo of a mountain landscape in Morocco"
              width="220"
              height="300"
              placeholder="blur"
            />
          </figure>
        </div>

        <footer className="self-center text-xs italic text-gray-600">
          had I mentioned my love for vertical photos?
        </footer>
      </section>
    </article>
  );
}
