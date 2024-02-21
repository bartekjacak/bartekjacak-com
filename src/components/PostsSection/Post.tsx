import Link from "next/link";
import { usePosts } from "~/content/usePosts";
import { BaseItemType } from "../LimitedItemsList/LimitedItemsList";

type Props = ReturnType<typeof usePosts>[0] & BaseItemType;

export default function Post({ url, name, date, displayDate, opacity }: Props) {
  return (
    <li className="flex-start flex sm:flex-col">
      <time
        dateTime={date}
        className="text-text-secondary w-[128px] flex-shrink-0 whitespace-nowrap"
      >
        {displayDate}
      </time>
      <h3>
        <ProjectBody name={name} url={url} opacity={opacity} />
      </h3>
    </li>
  );
}

function ProjectBody({
  name,
  url,
  opacity,
}: Pick<Props, "name" | "url" | "opacity">) {
  if (!url) {
    return name;
  }

  if (url.startsWith("/")) {
    return (
      <Link
        href={url}
        style={{
          opacity,
        }}
      >
        {name}
      </Link>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="nofollow noopener"
      style={{
        opacity,
      }}
    >
      {name}
    </a>
  );
}
