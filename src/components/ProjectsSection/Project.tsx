import Link from "next/link";
import { useProjects } from "~/content/useProjects";
import { BaseItemType } from "../LimitedItemsList/LimitedItemsList";
import ProjectStatusIndicator from "./ProjectStatusIndicator";

type Props = ReturnType<typeof useProjects>[0] & BaseItemType;

export default function Project({ url, name, status, opacity }: Props) {
  return (
    <li className="relative flex items-start">
      <ProjectStatusIndicator status={status} />
      <h3 className="ml-[24px]">
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
