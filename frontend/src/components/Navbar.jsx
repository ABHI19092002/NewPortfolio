import React, { useState } from "react";
import { NavigationMenu } from "radix-ui";
import { Text } from "@radix-ui/themes";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <nav className="flex fixed justify-between items-center py-3 gap-6 w-full text-white z-50 bg-gray/40 backdrop-blur-xl border-b border-white/10 shadow-md">
        <div className="left-0">
          <Text className="font-[Inter] italic font-bold text-3xl px-5 md:px-10">
            ABHISHEK
          </Text>
        </div>

        {/* Desktop Nav */}
        <NavigationMenu.Root className="bg-gray/40 backdrop-blur-xl">
          <NavigationMenu.List className="hidden md:flex gap-6">
            <NavigationMenu.Item className="mx-6 ff text-2xl font-light">
              <NavigationMenu.Link href="#projects">
                Projects
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item className="text-2xl font-light ff">
              <NavigationMenu.Link href="#about">About</NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item className="mx-6 ff font-light text-2xl">
              <NavigationMenu.Link href="#skillset">Skills</NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item className="mr-5 ml-1 ff font-light text-2xl">
              <NavigationMenu.Link href="#contact">Contact</NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>

        {/* Hamburger */}
        <div className="md:hidden">
          <GiHamburgerMenu
            className="mx-3 cursor-pointer"
            size={32}
            onClick={() => setNavOpen(true)}
          />
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/60 backdrop-blur-md"
          >
            {/* Close Icon (inside overlay, top-right corner) */}
            <IoMdCloseCircleOutline
              className="absolute top-5 right-2 text-white cursor-pointer"
              size={36}
              onClick={() => setNavOpen(false)}
            />

            <NavigationMenu.Root>
              <NavigationMenu.List
                className="flex flex-col justify-center items-center gap-8 p-10 bg-white/10 border border-white/30
               rounded-lg"
              >
                <NavigationMenu.Item className="py-3 font-light text-white text-2xl">
                  <NavigationMenu.Link
                    onClick={() => setNavOpen(false)}
                    href="#projects"
                  >
                    Projects
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item className="text-2xl text-white font-light">
                  <NavigationMenu.Link
                    onClick={() => setNavOpen(false)}
                    href="#about"
                  >
                    About
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item className="py-3 text-2xl text-white font-light">
                  <NavigationMenu.Link
                    onClick={() => setNavOpen(false)}
                    href="#skillset"
                  >
                    Skills
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item className="py-3 text-2xl text-white font-light">
                  <NavigationMenu.Link
                    onClick={() => setNavOpen(false)}
                    href="#contact"
                  >
                    Contact
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              </NavigationMenu.List>
            </NavigationMenu.Root>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
