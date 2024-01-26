import { useProjects } from "~/content/useProjects";

import SectionWithExpandableList from "../SectionWithExpandableList/SectionWithExpandableList";

import Project from "./Project";

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
