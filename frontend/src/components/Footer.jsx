
import { RiCopyrightLine } from "react-icons/ri";

export const Footer = () => {
  const formattedDate = new Date().toLocaleString();
  const currentYear = formattedDate.slice(6, 10);

  return (
    <div className="text-center mt-4 py-6">
      <p className="block text-md text-gray-400 text-center font-[Inter] md:text-2xl">
        <RiCopyrightLine className="inline-block mr-1 text-[20px] md:text-[24px]" />
        Copyright {currentYear} Abhishek Gaikwad
      </p>
      <p className="block text-md text-gray-400 text-center font-[Inter] my-2 py-10 md:text-2xl">
        Made with <span className="animate-pulse">💗</span>
      </p>
    </div>
  );
};
