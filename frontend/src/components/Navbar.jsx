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
      <nav className="flex justify-between items-center py-3 gap-6 w-full text-white">
        <div className="left-0">
          <Text className="font-[Inter] italic font-bold text-3xl px-10 md:px-10">
            ABHISHEK
          </Text>
        </div>

        {/* Desktop Nav */}
        <NavigationMenu.Root>
          <NavigationMenu.List className="hidden md:flex gap-6">
            <NavigationMenu.Item className="mx-6 ff text-2xl font-light">
              <NavigationMenu.Link href="#">Work</NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item className="text-2xl font-light ff">
              <NavigationMenu.Link href="#">Contact</NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item className="mx-6 ff font-light text-2xl">
              <NavigationMenu.Link href="#">About</NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>

        {/* Hamburger */}
        <div className="md:hidden">
          {navOpen ? (
            <IoMdCloseCircleOutline
              className="mx-3 cursor-pointer"
              size={32}
              onClick={() => setNavOpen(false)}
            />
          ) : (
            <GiHamburgerMenu
              className="mx-3 cursor-pointer"
              size={32}
              onClick={() => setNavOpen(true)}
            />
          )}
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ y: -50, opacity: 0 }} // start lower + hidden
            animate={{ y: 0, opacity: 1 }} // slide up + fade in
            exit={{ y: -50, opacity: 0 }} // slide down + fade out
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <NavigationMenu.Root>
              <NavigationMenu.List className="flex ff flex-col justify-center items-center gap-5 backdrop-blur-md bg-white/30 border border-white/20">
                <NavigationMenu.Item className="py-3 font-light text-white text-2xl">
                  <NavigationMenu.Link href="#">Work</NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item className="text-2xl ff text-white font-light">
                  <NavigationMenu.Link href="#">Contact</NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item className="py-3  ff text-2xl text-white font-light">
                  <NavigationMenu.Link href="#">About</NavigationMenu.Link>
                </NavigationMenu.Item>
              </NavigationMenu.List>
            </NavigationMenu.Root>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
