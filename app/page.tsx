"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Command } from "lucide-react";
import { CommandMenu } from "@/app/components/command-menu";
import { useEffect, useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="bg-[#1d1d1d] w-full h-[100vh] overflow-y-hidden relative">
       <div className="bg-animation absolute top-0 left-0 w-full h-full">
        <div className="bg-circle-1 w-[600px] h-[600px] rounded-full "></div>
        <div className="bg-circle-2 w-[400px] h-[400px] rounded-full"></div>
        <div className="bg-circle-3 w-[200px] h-[200px] rounded-full"></div>

       </div>
       <div className="search-bar absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="gradient-border">
            <Input 
              placeholder="Search the app" 
              className="bg-[#242424] border-none text-white w-[350px] lg:w-[400px] h-[60px] px-4 lg:px-6 rounded-[20px] placeholder:text-[#666666] text-[#666666] placeholder:text-lg placeholder:font-light placeholder:hidden lg:block"    
            />
            <div className="icons absolute top-1/2 right-4 transform -translate-y-1/2 flex">
              <div className="icon bg-[#3d3d3d] rounded-md p-2 flex items-center justify-center w-8 h-8 mr-2">
                <Command className="text-white text-xl w-4 h-4" />
              </div>
              <div className="icon bg-[#3d3d3d] rounded-md p-2 flex items-center justify-center w-8 h-8">
                <span className="text-white text-xs">K</span>
              </div>
            </div>
          </div>
          <CommandMenu isOpen={isOpen} setIsOpen={setIsOpen} />
       </div>
    </div>
  );
}
