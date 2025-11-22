import { Text } from "@radix-ui/themes";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  const techNewsDesc = `
Technews is a comprehensive news platform built with modern tech that aggregates the latest technology news from various sources. It offers users
a personalized experience by allowing them to customize their news feed based on their interests. 
`;


const netflixDesc = `
This Netflix Clone is a web application that replicates the core features of the popular streaming service, Netflix. 
It allows users to browse through a vast library of movies and TV shows, complete with detailed descriptions, ratings, and trailers.
`;

  return (
    <div id="projects" className="min-h-screen mx-3 p-2 my-15 xl:mx-40">
      <h1 className="font-[Oswald] mt-8 underline decoration-lime-300 underline-offset-9 text-3xl mb-4 md:mx-20 md:text-5xl">
        FEATURED PROJECTS
      </h1>
      <h1
        size="3"
        className="text-gray-400 my-15 text-justify text-lg font-[Inter] md:mx-20 md:text-xl"
      >
        Here are some of the selected projects that showcase my passion for
        Fullstack Development.
      </h1>
      <ProjectCard
        projectImgUrl="/technews.png"
        projName="Technews"
        projDesc={techNewsDesc}
        year={2022}
        tool="Python, Flask, SQLite"
        sourceCodeUrl="https://github.com/ABHI19092002/TechNews.git"
      />
      <div className="mx-auto border-b border-lime-300 md:w-3/4"></div>
      <ProjectCard
        projectImgUrl="/Netflix.png"
        projName="Netflix Clone"
        projDesc={netflixDesc}
        year={2024}
        tool="MERN, PostmanAPI, JWT"
        sourceCodeUrl="https://github.com/ABHI19092002/NetflixClone.git"
      />
      
    </div>
  );
}
