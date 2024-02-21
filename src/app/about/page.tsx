import type { Metadata } from "next";
import Image from "next/image";

import { getSubpageTitle } from "~/utils/seo";

export const metadata: Metadata = {
  title: getSubpageTitle("About"),
};

export default function About() {
  return (
    <article className="flex flex-col gap-4">
      <header>
        <h1>about</h1>
      </header>

      <p>
        Hey, I&apos;m Bartek <i>(bar-teh•k)</i>. I work as a software engineer
        at an American InsurTech company, where I tightly collaborate with
        stakeholders, designers, and fellow engineers to craft high-quality
        products used by thousands. Specializing in the frontend, my mission is
        to make the web experience smooth and fast for all users.
      </p>

      <figure className="my-2 flex break-inside-avoid-column flex-col gap-2 self-center text-center">
        <Image
          src="/images/goofball.jpg"
          alt="Goofy photo of myself"
          width="210"
          height="280"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAANAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAwUGCP/EACIQAAEEAgMAAgMAAAAAAAAAAAECAwQFERIABgcIITFCof/EABQBAQAAAAAAAAAAAAAAAAAAAAb/xAAgEQEAAQMDBQAAAAAAAAAAAAABAgMRIQAEMQWBkaHR/9oADAMBAAIRAxEAPwAHZPRJqp99Km+mWPVpdaVsUNRGqi81MS2jYOvOqaU2suL2Guw0SBkg5PLGqtUWtXDtFsuIVMjtyCkfhJWkKx/eYx9J+RvrnTrPs3TK7syjHsZJfjvlJDkBlQwWWfvUJKQASQf2IxseNqf519rrKiDWyPPaCW7EjNMLfLrqC6pKQCvUHCckZwPoZ4Tj0+tZlEuPGT4e76X1d9RSMTCGcPPlv2DX/9k="
        />
        <figcaption className="text-xs italic text-gray-600">
          best one I could find
        </figcaption>
      </figure>

      <p>
        I&apos;m passionate about the web, however, my background spans across
        various technologies and domains. Before any of my commercial
        experiences, I polished my skills by working on numerous projects,
        either solo or together with two of my friends under the brand{" "}
        <a href="https://flatpixels.pl" target="_blank" rel="nofollow noopener">
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
          rel="nofollow noopener"
        >
          photo journal
        </a>{" "}
        where I posted my photos daily — almost 1700 days of my life are
        documented in everyday photos.
      </p>

      <section className="flex flex-col gap-3">
        <div className="mt-6 flex justify-evenly">
          <figure>
            <Image
              src="/images/warsaw.jpg"
              alt="Photo of Warsaw"
              width="220"
              height="275"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAAAAAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwUI/8QAJBAAAgEDAgYDAAAAAAAAAAAAAQIDBBEhAAUGBwgSMZETQWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAG/8QAHxEAAQMEAwEAAAAAAAAAAAAAAgEDEQAEBRIxYaHR/9oADAMBAAIRAxEAPwA34h6SZ6WdqISBJndjEhGWVRc+hqSOkPdrDx61r3nTvsg5kcFOtLGixVUscgQlflEsRGbYxb7Bv+aSRsVCoC9l7Y8DSi1y4ubCQJKLHiUWvcIbWhi4sEk89/Ir/9k="
            />
          </figure>

          <figure>
            <Image
              src="/images/mountains.jpg"
              alt="Photo of a mountain landscape in Morocco"
              width="220"
              height="275"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAAAAAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgcI/8QAIxAAAgEEAQMFAAAAAAAAAAAAAQMCBAUGEQASISIIEzFRwf/EABUBAQEAAAAAAAAAAAAAAAAAAAUG/8QAHBEAAQUAAwAAAAAAAAAAAAAAAgABAwUREjEy/9oADAMBAAIRAxEAPwCpVue2BNCqeN22xKWJR8qh0nlg6hHp8ABHZOtj8PBr8ty5j2MU6hhCUzKMV2aMogE9gJE7I+ieZcochyfJ7BaZUl/qLXc8fHvUlUkBi2K0dwcmXZpMgCJE6HkOk73wk31KZohs0uxrFHsXIxk2VE6JmQdGREXADfzoADkgEljLvA2fO0gVXWh6jX//2Q=="
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
