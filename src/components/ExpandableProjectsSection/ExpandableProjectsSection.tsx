import { useProjects } from "~/content/useProjects";
import ExternalLinkIcon from "~/icons/ExternalLinkIcon";

import SectionWithExpandableList, {
  BaseItemType,
} from "../SectionWithExpandableList/SectionWithExpandableList";

type Props = {
  projects: ReturnType<typeof useProjects>;
};

export default function ExpandableProjectsSection({ projects }: Props) {
  return (
    <SectionWithExpandableList
      title="projects"
      items={projects}
      itemRenderer={(props) => <Project key={props.url} {...props} />}
    />
  );
}

function Project({
  url,
  name,
  opacity,
}: ReturnType<typeof useProjects>[0] & BaseItemType) {
  return (
    <li className="flex justify-between gap-4">
      <a
        href={url}
        className="flex gap-1 text-gray-900 no-underline"
        style={{
          opacity,
        }}
        target="_blank"
        rel="noopener"
      >
        <h3 className="underline">{name}</h3>
        <span className="mt-[3px]">
          <ExternalLinkIcon />
        </span>
      </a>
    </li>
  );
}
