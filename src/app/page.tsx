import { ExpandableProjectsSection } from "~/components/ExpandableProjectsSection";
import { useProjects } from "~/content/useProjects";

export default function Home() {
  const projects = useProjects();

  return (
    <>
      <ExpandableProjectsSection projects={projects} />
    </>
  );
}
