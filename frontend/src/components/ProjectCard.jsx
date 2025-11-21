import { Flex, Grid } from "@radix-ui/themes";
import { MdArrowOutward } from "react-icons/md";
export default function ProjectCard() {
  return (
    <div className="my-15 md:flex md:flex-row md:gap-20 md:justify-center md:items-center md:mr-6 md:mt-25">
      <img
        className="rounded-xl mb-6 object-cover aspect-[16/9] md:w-[300px] md:h-[300px] md:object-contain bg-black md:ml-20"
        src="https://amirmousavi.netlify.app/nostalchive.png"
        alt="Project snap"
        style={{
          display: "block",

          backgroundColor: "black",
        }}
      />

      <div>
        <h3 className="font-[Inter] text-2xl mb-3 md:text-3xl md:mb-5">
          Netflix
        </h3>
        <p className="text-gray-400 md:text-xl">
          Netflix clone is a OTT platform made with MERN stack, where one can
          watch movies and series. Also can read details of content like rating,
          year of release etc. Only authenticated users can view the content.
        </p>

        <h6 className="my-3 text-gray-400 font-[Inter] text-lg md:text-xl mb-4 md:mt-5">
          Project Info
        </h6>
        <div className="border-b border-[#484848]"></div>
        <Grid>
          <Flex justify="between" className="py-3">
            <p className="text-gray-400 text-sm md:text-xl">Year</p>
            <p className="text-gray-400 text-sm md:text-xl">2024</p>
          </Flex>
          <div className="border-b border-[#484848]"></div>
          <Flex justify="between" className="py-3">
            <p className="text-gray-400 text-sm md:text-xl">Tool</p>
            <p className="text-gray-400 md:text-xl">MERN</p>
          </Flex>
          <div className="border-b border-[#484848]"></div>
        </Grid>
        <a
          href="https://amirmousavi.netlify.app/"
          className="inline-flex text-lime-300 underline decoration-lime-300 my-5 underline-offset-9 md:text-xl md:mt-10"
        >
          Source Code
          <MdArrowOutward size={24} className="text-lime-300 mx-1" />
        </a>
      </div>
    </div>
  );
}
