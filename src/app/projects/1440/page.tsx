import type { Metadata } from "next";
import Image from "next/image";

import { getSubpageTitle } from "~/utils/seo";

export const metadata: Metadata = {
  title: getSubpageTitle("1440 for macOS"),
};

export default function OneOneFourFourPost() {
  return (
    <article className="flex flex-col gap-4">
      <section className="flex flex-col gap-3">
        <Image
          src="/images/1440/logo.png"
          alt="1440 application logo"
          width="120"
          height="108"
          className="ml-[-10px]"
        />
        <header>
          <h1 className="ml-[-1.8px]">1440 for macOS</h1>
          <p className="text-[14px] text-gray-600">
            Launched on <time dateTime="2019-10">Oct 2019</time>
          </p>
        </header>
      </section>

      <p>
        <a href="https://1440app.com" target="_blank" rel="nofollow noopener">
          1440
        </a>{" "}
        is a tiny side-project I built with my friends under the brand{" "}
        <a href="https://flatpixels.pl" target="_blank" rel="nofollow noopener">
          flatpixels
        </a>
        . It&apos;s a macOS menubar application that shows how many minutes are
        left till the end of the day.
      </p>

      <Image
        src="/images/1440/app_screenshot.png"
        alt="Screenshot from the 1440 application"
        width="879"
        height="242"
        className="my-2 self-center"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAADBAMAAABYE4NGAAAAIVBMVEWfobLr7f6+wM99fou1t8V5haKQkp+HiJfW1+aJlbOOkJ199ezpAAAAGElEQVQI12NgYOAMNmYQFBTKKgCSEipOABGMAj56BGdjAAAAAElFTkSuQmCC"
      />

      <p>
        It was written in Swift, while the landing page was created with Gatsby
        and hosted on Netlify. 1440 was <em>the 12th product of the day</em> on
        ProductHunt, getting 190 upvotes and 1k unique visitors on the launch
        day.
      </p>

      <a
        href="https://www.producthunt.com/posts/1440-minutes-left-today?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-1440&#0045;minutes&#0045;left&#0045;today"
        target="_blank"
        className="my-2 self-center"
      >
        <Image
          src="/images/1440/producthunt-badge.svg"
          alt="1440&#0032;Minutes&#0032;Left&#0032;Today - See&#0032;how&#0032;many&#0032;minutes&#0032;you&#0032;have&#0032;left&#0032;today&#0044;&#0032;right&#0032;in&#0032;menubar&#0032;⏰ | Product Hunt"
          width="250"
          height="54"
        />
      </a>

      <p>
        The app is available on the Mac App Store. Since the launch it had over
        3k unique downloads. We aren&apos;t actively working on it anymore, but
        it&apos;s as simple as it gets, so it&apos;s still working fine.
      </p>

      <figure className="my-2 flex break-inside-avoid-column flex-col items-center gap-2 self-center text-center">
        <a
          href="https://apps.apple.com/us/app/1440/id1483764819"
          target="_blank"
          rel="nofollow noopener"
          className="self-center"
          data-hide-link-icon
        >
          <Image
            src="/images/1440/appstore_download.svg"
            alt="Download on the App Store"
            width="203"
            height="52"
          />
        </a>
        <figcaption className="text-xs italic text-gray-600">
          you can get it from the App Store for free
        </figcaption>
      </figure>

      <h2 className="mb-[-8px] mt-2">Genesis</h2>

      <p>
        The idea was born while working on{" "}
        <a href="https://flatpixels.pl" target="_blank" rel="nofollow noopener">
          MonoFocus
        </a>{" "}
        — our main project at the time. We were close to burnout, and at the
        same time, were on the lookout for some new ways of marketing.
      </p>

      <p>
        Taking a break from the main project and having fun launching something
        small, effectively boosted our motivation, and got us some some new
        people coming to MonoFocus.
      </p>

      <p className="my-4 xsm:my-2">
        <em>
          Over 330 people who came to 1440, also signed up for MonoFocus beta
          list.
        </em>
      </p>

      <p>
        The whole project, from idea, through designing, coding and creating
        marketing assets, to the final product launch, took us 2 weeks to
        complete.
      </p>
    </article>
  );
}
