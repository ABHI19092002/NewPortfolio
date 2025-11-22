import { MdOutlineCloudDownload } from "react-icons/md";

export const About = () => {
  return (
    <div id="about" className="mx-3 p-2 md:mx-20 my-15 xl:ml-40 2xl:mr-60">
      <div className="flex flex-col xl:flex-row xl:gap-50">
        <div className="flex-1">
          <h1 className="font-[Oswald] text-3xl underline decoration-lime-300 underline-offset-9 pb-4 mt-4 mb-4 md:text-5xl">
            ABOUT ME
          </h1>
        </div>
        <div className="my-3 xl:mt-4 flex-2">
          <p
            size="5"
            className="text-white tsize font-[Inter] block text-left text-lg md:text-2xl"
          >
            I am a Fullstack Developer based in Pune. Particularly proficient in
            MERN and .NET.
          </p>

          <h5 className="text-gray-400 text-sm font-[Inter] text-justify mt-6 text-[17px] md:text-xl">
            I am a proficient full-stack developer with a strong focus on the
            MERN stack and .NET MVC, passionate about building clean, efficient, and
            user-centered applications. I’m constantly exploring new
            technologies and best practices to expand my skill set and stay
            ahead in a fast-evolving tech landscape. Whether it’s designing
            intuitive front-end experiences or architecting scalable back-end
            systems, I enjoy turning ideas into real, impactful projects.
          </h5>

          <a
            href="https://drive.google.com/file/d/1EIa0rzXmIMb0P7EzSSXax8B36Zvej-dM/view?usp=drive_link"
            className="flex my-10 sm:mt-0 w-auto h-10 px-5 text-lg text-black font-[Manrope] font-bold bg-lime-300 items-center justify-center
          rounded-4xl md:mt-12"
          >
            Download Resume{" "}
            <MdOutlineCloudDownload className="ml-3 animate-bounce" size={29} />
          </a>
        </div>
      </div>
    </div>
  );
};
