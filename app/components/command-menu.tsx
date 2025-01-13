"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BadgeEuro, Dribbble, FigmaIcon, GithubIcon, SlackIcon } from "lucide-react";
import { useEffect, useState } from "react";

const menuItems = [
  { id: 1, title: "Slack", shortcut: "4 Messages" , icon: <SlackIcon className="w-4 h-4 text-[#aa2424]" />},
  { id: 2, title: "Binance", shortcut: "4 Updates" , icon: <BadgeEuro className="w-4 h-4 text-[#3b29a1]" />},
  { id: 3, title: "Dribble", shortcut: "4 Updates" , icon: <Dribbble className="w-4 h-4 text-[#1e9428]" />},
  { id: 4, title: "Figma", shortcut: "4 Comments" , icon: <FigmaIcon className="w-4 h-4 text-[#a52338]" />},
  { id: 5, title: "Github", shortcut: "4 Comments " , icon: <GithubIcon className="w-4 h-4 text-[#23a2a7]" />},
];

export function CommandMenu({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className=""
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[70px]  transform -translate-x-1/2 w-[350px] lg:w-[410px]  rounded-2xl overflow-hidden z-50 after:bg-gradient-to-b after:from-[#27272700] after:to-[#1d1d1d] after:border after:border-[1px] after:border-[#3d3d3d]  after:rounded-[15px] after:cursor-pointer after:mb-2.5 after:w-full after:absolute after:bottom-0 after:h-[300px] after:border-none"
          >
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex justify-between items-center px-0 py-0"
            >
                <span className="text-[#666666] text-sm font-light px-4 py-2">Recent search</span>
                <span className="text-[#666666] text-sm font-light px-4 py-2 cursor-pointer hover:text-[#ffffff]">Clear All</span>
            </motion.div>
                <div className="p-2">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between px-4 py-4 bg-gradient-to-b from-[#272727] to-[#1f1f1f] border border-[1px] border-[#3d3d3d] hover:bg-[#3d3d3d] rounded-[15px] cursor-pointer mb-2.5"
                >

                  <span className="text-[#666666] text-sm flex gap-2 items-center">
                    <span>
                        {item.icon}
                    </span>
                    <strong className="text-[#666666] text-sm">
                        {item.title}
                    </strong>
                    </span>
                  <span className="text-[#666666] text-xs  px-0 py-1 rounded flex items-center gap-2 w-[115px]">
                    <div className="green-dot w-2 h-2 rounded-full bg-[#00ff00]"></div>
                    {item.shortcut}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 