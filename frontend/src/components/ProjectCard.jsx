import { Box, Flex, Grid, Inset, Text } from "@radix-ui/themes";
import { MdArrowOutward } from "react-icons/md";
export default function ProjectCard() {
  return (
    <div className="my-15 md:flex md:flex-row md:gap-40 md:justify-center md:items-center md:mx-20">
      <div className="md:mx-2">
        <img
          className="rounded-xl mb-6 aspect-[16/9] md:w-full md:h-170 md:object-contain bg-black"
          src="https://amirmousavi.netlify.app/nostalchive.png"
          alt="Project snap"
          style={{
            display: "block",
            objectFit: "cover",
            width: "100%",
            backgroundColor: "black",
          }}
        />
      </div>
      <div className="md:mx-3">
        <h3 className="font-[Inter] text-2xl mb-3">Netflix</h3>
        <Text className="text-gray-400" as="p" size="3">
          Netflix clone is a OTT platform made with MERN stack, where one can
          watch movies and series. Also can read details of content like rating,
          year of release etc. Only authenticated users can view the content.
        </Text>

        <h6 className="my-3 text-gray-400 font-[Inter] text-lg mb-4">
          Project Info
        </h6>
        <div className="border-b border-[#484848]"></div>
        <Grid>
          <Flex justify="between" className="py-3">
            <Text className="text-gray-400 text-sm" as="p" size="3">
              Year
            </Text>
            <Text className="text-gray-400 text-sm" as="p" size="3">
              2024
            </Text>
          </Flex>
          <div className="border-b border-[#484848]"></div>
          <Flex justify="between" className="py-3">
            <Text className="text-gray-400 text-sm" as="p" size="3">
              Tool
            </Text>
            <Text className="text-gray-400" as="p" size="3">
              MERN stack, JWT, PostmanAPI
            </Text>
          </Flex>
          <div className="border-b border-[#484848]"></div>
        </Grid>
        <a
          href="https://amirmousavi.netlify.app/"
          className="inline-flex text-lime-300 underline decoration-lime-300 my-5 underline-offset-9"
        >
          Source Code
          <MdArrowOutward size={24} className="text-lime-300 mx-1" />
        </a>
      </div>
    </div>
  );
}
