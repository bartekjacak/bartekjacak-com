import { useProjects } from "~/content/useProjects";

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
    <li>
      <h3>
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
      </h3>
    </li>
  );
}
