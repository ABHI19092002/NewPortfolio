import { Text } from "@radix-ui/themes";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  return (
    <div id="projects" className="min-h-screen mx-3 p-2 my-5">
      <h1 className="font-[Oswald] mt-8 underline decoration-lime-300 underline-offset-9 text-3xl mb-4 md:mx-20 md:text-5xl">
        FEATURED PROJECTS
      </h1>
      <h1
        size="3"
        className="text-gray-400 mt-10 text-justify text-lg font-[Inter] md:mx-20"
      >
        Here are some of the selected projects that showcase my passion for
        Fullstack Development.
      </h1>
      <ProjectCard />
    </div>
  );
}
