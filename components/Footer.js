import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className=" bg-slate-800 py-12">
      <div className=" container mx-auto">
        <div className="flex flex-col items-center">
          {/* Socials */}
          <Socials
            containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4'
            iconsStyles='text-primary dark:text-white/70 text-[20px] 
            hover:text-white dark:hover:text-primary trasition-all' />
          {/* Copyright */}
          <div className="text-muted-foreground">
            Copyright &copy; StanleyStudio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}