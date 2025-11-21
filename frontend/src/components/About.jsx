import { Text } from "@radix-ui/themes";
import { FaCircle } from "react-icons/fa6";
import { MdOutlineCloudDownload } from "react-icons/md";

export const About = () => {
  return (
    <div id="about" className="mx-3 p-2 my-5 md:mx-20 my-15">
      <h1 className="font-[Oswald] text-3xl underline decoration-lime-300 underline-offset-9 pb-4 mt-4 mb-4 md:text-5xl">
        ABOUT ME
      </h1>
      <div className="my-10">
        <p
          size="5"
          className="text-white tsize font-[Inter] block text-left text-lg md:text-2xl"
        >
          I am a Fullstack Developer based in Pune. Particularly proficient in
          MERN and .NET.
        </p>
      </div>
      <h5 className="text-gray-400 text-sm font-[Inter] text-justify mt-6 text-[17px] md:text-xl">
        Hi there! I’m a 20-year-old frontend developer from Shiraz, studying IT.
        I pay close attention to details and always try to deliver the best
        results. Solving problems excites me, and I’m always motivated to learn
        new things. When I’m not coding, I enjoy playing chess, watching
        football, and catching up on movies and TV shows. Feel free to reach out
        if you’d like to collaborate on something great!
      </h5>

      <a
        href="../public/AbhishekGaikwadResume.pdf"
        className="flex my-10 sm:mt-0 w-auto h-10 px-5 text-lg text-black font-[Manrope] font-bold bg-lime-300 items-center justify-center
        rounded-4xl md:mt-12"
      >
        Download Resume{" "}
        <MdOutlineCloudDownload className="ml-3 animate-bounce" size={29} />
      </a>
    </div>
  );
};
