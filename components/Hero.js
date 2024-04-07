import Link from "next/link"
import { Button } from "./ui/button"
import { Download, Send } from 'lucide-react'

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine
} from 'react-icons/ri'

//components


export default function Hero() {
  return (
    // Hero Section
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat
    bg-bottom bg-cover dark:bg-none">
      <div className=" container mx-auto">
        {/* text & imange container */}
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto space-y-6
          xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1">Hi, 我是<span className="inline-block">葉少芃</span> Stanley! </h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              希望透過這個網站 能夠讓您多了解我開發過的專案與專業技能
            </p>
            {/* button */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0
            mb-12">
              <Link href='/contact'>
                <Button className='gap-x-2'>
                  與我聯絡 <Send size={18} />
                </Button>
              </Link>
              <Button variant='secondary' className='gap-x-2'>
                Download CV <Download size={18} />
              </Button>
            </div>
          </div>
          {/* image */}
          <div className=" hidden md:flex relative">image</div>
        </div>
        {/* icon */}
        <div className=" hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className=" text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
}