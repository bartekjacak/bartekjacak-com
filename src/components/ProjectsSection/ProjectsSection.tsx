import { useProjects } from "~/content/useProjects";

import { LimitedItemsList } from "../LimitedItemsList";

import Project from "./Project";

type Props = {
  projects: ReturnType<typeof useProjects>;
};

export default function ProjectsSection({ projects }: Props) {
  return (
    <LimitedItemsList
      title="projects"
      items={projects}
      itemRenderer={(props) => <Project key={props.url} {...props} />}
    />
  );
}
