import { Flex, Grid, Separator, Text } from "@radix-ui/themes";
import { FaCircle } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { CiCircleChevDown } from "react-icons/ci";

export default function HomeSection({ onExploreClick }) {
  return (
    <Grid>
      <Flex
        justify="center"
        className="relative flex-col mx-2 min-h-screen xl:gap-32 justify-start items-center gap-5 lg:mx-40 md:mx-10 md:h-screen md:flex-row"
      >
        <div className="p-5">
          <div>
            <h1 className="mb-5 font-[Manrope] font-bold text-3xl lg:text-[5rem] leading-[1] md:text-[4.5rem]">
              HII, I'M
            </h1>

            <h1 className="mb-5 font-[Manrope] font-bold italic text-3xl lg:text-[5rem] leading-[1] md:text-[4.5rem]">
              ABHISHEK GAIKWAD.
            </h1>
            <p className="text-gray-400 text-[16px] md:text-2xl text-left text-sm font-[Inter]">
              An India based Fullstack web developer passionate about building
              accessible, responsive and user friendly websites.
            </p>
          </div>
          <Flex className="gap-4 mt-8">
            <a
              href="#contact"
              className="flex mt-2 sm:mt-0 w-auto h-10 px-5 text-lg md:text-2xl text-black font-[Inter] font-bold bg-lime-300 items-center justify-center md:w-50 md:h-17 rounded-4xl"
            >
              Contact Me <FaCircle className="ml-3" size={8} />
            </a>

            <a
              href="https://www.linkedin.com/in/abhishek-gaikwad-8a177321b/"
              className="flex items-center justify-center h-14 w-auto sm:w-20 sm:h-17 rounded-full sm:bg-gray-800 text-lime-300 "
            >
              <FaLinkedinIn size={40} />
            </a>

            <a
              href="https://github.com/ABHI19092002"
              className="flex items-center justify-center h-14 w-auto sm:h-17 sm:w-20 rounded-full sm:bg-gray-800 text-lime-300"
            >
              <FaGithub size={40} />
            </a>
          </Flex>
        </div>
        <div>
          <img
            className="hidden rounded-2xl sm:h-1/3 md:h-125 md:flex lg:h-150 xl:h-185 xl:w-auto md:w-7xl"
            alt="pic"
            src="/my-pic.jpeg"
          />
        </div>
        <a
          onClick={onExploreClick}
          className="absolute bottom-10 left-1/3 animate-bounce inline-flex text-lime-300 items-center gap-1 text-xl p-2 md:hidden"
        >
          Explore
          <CiCircleChevDown size={30} />
        </a>
      </Flex>
    </Grid>
  );
}
