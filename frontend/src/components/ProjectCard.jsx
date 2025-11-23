import { Flex, Grid } from "@radix-ui/themes";
import { MdArrowOutward } from "react-icons/md";
export default function ProjectCard({projectImgUrl, projName, projDesc, tool, sourceCodeUrl}) {
  return (
    <div className="my-15 md:flex md:flex-row md:gap-20 xl:gap-30 2xl:gap-50 md:justify-center md:items-center md:mr-6 md:mt-25">
      <img
        className="rounded-xl flex-1 mb-6 object-cover aspect-[16/9] xl:aspect-[4/3] 2xl:aspect-[15/9] md:w-[300px] xl:h-max xl:object-fill md:h-[300px] md:object-fill bg-black md:ml-20"
        src={projectImgUrl}
        alt="Project snap"
        style={{
          display: "block",
          backgroundColor: "black",
        }}
      />

      <div className="flex-1">
        <h3 className="font-[Inter] text-2xl mb-3 md:text-3xl md:mb-5">
          {projName}
        </h3>
        <p className="text-gray-400 md:text-xl">{projDesc}</p>

        <h6 className="my-3 text-gray-400 font-[Inter] text-lg md:text-xl mb-4 md:mt-5">
          Project Info
        </h6>
        <div className="border-b border-[#484848]"></div>
        <Grid>
          <div className="border-b border-[#484848]"></div>
          <Flex justify="between" className="py-3">
            <p className="text-gray-400 text-sm md:text-xl">Tech-stack</p>
            <p className="text-gray-400 md:text-xl">{tool}</p>
          </Flex>
          <div className="border-b border-[#484848]"></div>
        </Grid>
        <a
          href={sourceCodeUrl}
          className="inline-flex text-lime-300 underline decoration-lime-300 my-5 underline-offset-9 md:text-xl md:mt-10"
        >
          Source Code
          <MdArrowOutward size={24} className="text-lime-300 mx-1" />
        </a>
      </div>
    </div>
  );
}
