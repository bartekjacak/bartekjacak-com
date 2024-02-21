import { PostsSection } from "~/components/PostsSection";
import { ProjectsSection } from "~/components/ProjectsSection";
import { usePosts } from "~/content/usePosts";
import { useProjects } from "~/content/useProjects";

export default function Home() {
  const projects = useProjects();
  const posts = usePosts();

  return (
    <div className="flex flex-col gap-10">
      <ProjectsSection projects={projects} />
      <PostsSection posts={posts} />
    </div>
  );
}
