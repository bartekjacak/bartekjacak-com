import type { Metadata } from "next";
import Image from "next/image";

import { getSubpageTitle } from "~/utils/seo";

export const metadata: Metadata = {
  title: getSubpageTitle("About"),
};

export default function About() {
  return (
    <section className="flex flex-col gap-4 pb-20">
      <h2>about</h2>
      <p>
        Hey, I&apos;m Bartek <i>(bar-teh•k)</i>. I work as a software engineer
        at an American InsurTech company, where I tightly collaborate with
        stakeholders, designers and fellow engineers to craft high-quality
        products used by thousands. Specializing in frontend, my mission is to
        make the web experience smooth and fast for all the users.
      </p>
      <figure className="my-2 flex break-inside-avoid-column flex-col gap-1 self-center text-center">
        <Image
          src="/images/goofball.jpg"
          alt="Goofy photo of myself"
          width="220"
          height="300"
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
        <a href="https://flatpixels.pl" target="_blank" rel="noopener">
          flatpixels
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
        >
          photojournal
        </a>{" "}
        where I posted my photos daily — almost 1700 days of my life are
        documented on everyday photos.
      </p>
      <div className="mt-6 flex justify-evenly">
        <Image
          src="/images/warsaw.jpg"
          alt="Goofy photo of myself"
          width="220"
          height="300"
        />

        <Image
          src="/images/desert.jpg"
          alt="Goofy photo of myself"
          width="220"
          height="300"
        />
      </div>

      <figcaption className="self-center text-xs italic text-gray-600">
        had I mention my love for vertical photos?
      </figcaption>
    </section>
  );
}
