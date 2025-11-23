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

  const farmDesc = `
Farm Financer is a digital platform that simplifies and automates the loan application process for farmers,
 enabling them to apply for loans, track application status, and share feedback easily. It also provides administrators
  with tools to manage, approve or reject applications, and monitor feedback effectively.
`;

  const socioDesc = `
Socio Animal is a social media application inspired by Facebook, offering users the ability to create posts, like, 
comment, and connect with friends. The platform features real-time notifications, user profiles, and a dynamic news
 feed, providing an engaging and interactive social experience similar to major social networks.
`;

  return (
    <div
      id="projects"
      className="min-h-screen mx-3 p-2 my-15 xl:ml-20 xl:mr-10 2xl:mr-60"
    >
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
        projectImgUrl="/Netflix.png"
        projName="Netflix Clone"
        projDesc={netflixDesc}
        tool="MERN"
        sourceCodeUrl="https://github.com/ABHI19092002/NetflixClone.git"
      />
      <div className="mx-auto border-b border-lime-300 md:w-3/4"></div>
      <ProjectCard
        projectImgUrl="/socio.png"
        projName="Socio Animal"
        projDesc={socioDesc}
        tool="MERN"
        sourceCodeUrl="https://github.com/ABHI19092002/Socio-Animal.git"
      />
      <div className="mx-auto border-b border-lime-300 md:w-3/4"></div>
      <ProjectCard
        projectImgUrl="/farm.png"
        projName="Farm Finance Management System"
        projDesc={farmDesc}
        tool=".NET, Angular, SQL"
        sourceCodeUrl="https://github.com/ABHI19092002/FarmFinancer.git"
      />
      <div className="mx-auto border-b border-lime-300 md:w-3/4"></div>
      <ProjectCard
        projectImgUrl="/technews.png"
        projName="Technews"
        projDesc={techNewsDesc}
        tool="Python, Flask, SQLite"
        sourceCodeUrl="https://github.com/ABHI19092002/TechNews.git"
      />
    </div>
  );
}
