import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiDotnet } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { PiFileSql } from "react-icons/pi";
import { TbBrandTypescript } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { FcLinux } from "react-icons/fc";
import { IoLogoAngular } from "react-icons/io5";
import { SiRadixui } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { FaAws } from "react-icons/fa6";
import { SkillBadge } from "./SkillBadge";


export const Skillset = () => {
  return (
    <div id="skillset" className="mx-3 p-2 my-5 md:mx-20">
      <h1 className="font-[Oswald] underline decoration-lime-300 underline-offset-9 text-3xl pb-4 mt-4 mb-4 md:text-5xl">
        MY SKILLSET
      </h1>
      <h5 className="text-gray-400 text-sm font-[Inter] text-left mt-6 text-[17px] md:text-xl md:my-15">
        My skills: frequently patched, occasionally upgraded, always
        caffeinated.
      </h5>

      <h1 className="font-[Roboto Condensed] text-2xl mt-10 md:text-3xl md:mb-6">
        Frontend
      </h1>
      <div className="flex flex-wrap gap-3 mt-4">
        <SkillBadge iconName={FaReact} heading="React" />
        <SkillBadge iconName={SiMui} heading="MUI" />
        <SkillBadge iconName={RiTailwindCssFill} heading="Tailwind CSS" />
        <SkillBadge iconName={TbBrandTypescript} heading="Typesript" />
        <SkillBadge iconName={IoLogoJavascript} heading="Javascript" />
        <SkillBadge iconName={IoLogoAngular} heading="Angular" />
        <SkillBadge iconName={SiRadixui} heading="RadixUI" />
        <SkillBadge iconName={FaBootstrap} heading="Bootstrap" />
      </div>

      <h1 className="font-[Roboto Condensed] text-2xl mt-10 md:text-3xl md:mb-6">
        Backend
      </h1>
      <div className="flex flex-wrap gap-3 mt-4">
        <SkillBadge iconName={FaNode} heading="NodeJS" />
        <SkillBadge iconName={SiExpress} heading="Express" />
        <SkillBadge iconName={SiMongodb} heading="MongoDB" />
        <SkillBadge iconName={PiFileSql} heading="SQL" />
        <SkillBadge iconName={SiDotnet} heading="Dotnet" />
        <SkillBadge iconName={FaPython} heading="Python" />
      </div>

      <h1 className="font-[Roboto Condensed] text-2xl mt-10 md:text-3xl md:mb-6">
        DevOps
      </h1>
      <div className="flex flex-wrap gap-3 mt-4 md:mb-10">
        <SkillBadge iconName={FaDocker} heading="Docker" />
        <SkillBadge iconName={FaGitAlt} heading="Git" />
        <SkillBadge iconName={FcLinux} heading="Linux" />
        <SkillBadge iconName={SiPostman} heading="PostmanAPI" />
        <SkillBadge iconName={FaAws} heading="Aws" />
      </div>
    </div>
  );
};
