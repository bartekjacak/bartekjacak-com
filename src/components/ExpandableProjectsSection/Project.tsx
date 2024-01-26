import { useProjects } from "~/content/useProjects";
import { BaseItemType } from "../SectionWithExpandableList/SectionWithExpandableList";
import ProjectStatusIndicator from "./ProjectStatusIndicator";

type Props = ReturnType<typeof useProjects>[0] & BaseItemType;

export default function Project({ url, name, status, opacity }: Props) {
  return (
    <li className="relative flex items-start">
      <ProjectStatusIndicator status={status} />

      <h3 className="ml-[24px]">
        {url ? (
          <a
            className="text-balance"
            href={url}
            style={{
              opacity,
            }}
            target="_blank"
            rel="nofollow noopener"
          >
            {name}
          </a>
        ) : (
          name
        )}
      </h3>
    </li>
  );
}
