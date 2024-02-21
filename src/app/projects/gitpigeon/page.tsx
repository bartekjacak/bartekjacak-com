import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { getSubpageTitle } from "~/utils/seo";

export const metadata: Metadata = {
  title: getSubpageTitle("GitPigeon"),
};

export default function GitPigeonPost() {
  return (
    <article className="flex flex-col gap-4">
      <section className="flex flex-col gap-3">
        <Image
          src="/images/gitpigeon/logo.png"
          alt="GitPigeon application logo"
          width="106"
          height="106"
          className="ml-[-10px]"
        />
        <header>
          <h1 className="ml-[-1.8px]">GitPigeon</h1>
          <p className="text-[14px] text-gray-600">
            Launched on <time dateTime="2020-07">Jul 2020</time>
          </p>
        </header>
      </section>
      <p>
        <a
          href="https://gitpigeon.com/"
          target="_blank"
          rel="nofollow noopener"
        >
          GitPigeon
        </a>{" "}
        is an application I built with my friends under the brand{" "}
        <a href="https://flatpixels.pl" target="_blank" rel="nofollow noopener">
          flatpixels
        </a>
        . It sends you native Mac notifications about what&apos;s going on in
        your repositories. Currently owned and maintained by{" "}
        <a
          href="https://github.com/neonowy"
          target="_blank"
          rel="nofollow noopener"
        >
          Krzysztof Zbudniewek
        </a>{" "}
        — one of the original creators and the guy who came up with the idea.
      </p>

      <figure className="my-2 flex break-inside-avoid-column flex-col gap-1 self-center text-center">
        <Image
          src="/images/gitpigeon/slide.png"
          alt="Slide about GitPigeon"
          width="889"
          height="532"
          className="my-2 self-center"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAMAAADNLv/0AAAAVFBMVEXE782kzq2lpKC95sW34cCy27ufn6LB7MvA68m13b3Gvbupz7HPx8nZ0NOdqpySr5iDcW6PlIaSsJmXo5SNnZCRrpe8trO5urenhYS0sK2fgoKxrKoLJ4NyAAAAQElEQVQI1w3GxwHAIAwDQJkYLDrpbf89k3sdlt73DBiAEILbRCQTZ6m1eR8j4e5UmvqJgHuPtGrU/2M812wk7QNG2QJNcy+RrwAAAABJRU5ErkJggg=="
        />
        <figcaption className="text-xs italic text-gray-600">
          one of the marketing assets we prepared for the launch
        </figcaption>
      </figure>

      <p>
        The client part was written in Swift, the backend in Ruby on Rails, and
        the landing page was crafted using Gatsby. GitPigeon&apos;s official
        launch happened on ProductHunt, where it got 130 upvotes and over 300
        unique visitors on the launch day.
      </p>

      <a
        href="https://www.producthunt.com/posts/gitpigeon?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-gitpigeon"
        target="_blank"
        rel="nofollow noopener"
        className="my-2 self-center"
        data-hide-link-icon
      >
        <Image
          src="/images/gitpigeon/producthunt-badge.svg"
          alt="1440&#0032;Minutes&#0032;Left&#0032;Today - See&#0032;how&#0032;many&#0032;minutes&#0032;you&#0032;have&#0032;left&#0032;today&#0044;&#0032;right&#0032;in&#0032;menubar&#0032;⏰ | Product Hunt"
          width="250"
          height="54"
        />
      </a>

      <h2 className="mb-[-8px] mt-2">Genesis</h2>

      <p>
        While working on{" "}
        <a
          href="https://monofocus.app/"
          target="_blank"
          rel="nofollow noopener"
        >
          MonoFocus
        </a>
        , we lacked a tool that would send us <em>only the relevant</em> GitHub
        notifications. So we built one.
      </p>

      <p>
        Before, we were using either email or GitHub inbox. It wasn&apos;t
        ideal. It was hard to keep track of everything and navigate through the
        unwanted noise. Who needs a notification about a new unrelated comment
        under a PR that they already left a review on?
      </p>

      <p>
        GitPigeon was meant to be an opinionated tool that we&apos;d use
        ourselves. Additionally, having our previous experiences with{" "}
        <Link href="/projects/1440">1440</Link>, we knew that launching smaller
        side projects is a decent marketing strategy that works in the macOS
        realm. So we decided to give it a try.
      </p>

      <p className="my-4 xsm:my-2">
        <em>
          Over 420 people who came to GitPigeon, also signed up for MonoFocus
          beta list.
        </em>
      </p>

      <p>
        The project turned out to be quite successful. To date, it have sent
        hundreds of thousands of notifications to hundreds of users and
        organizations.
      </p>
    </article>
  );
}
