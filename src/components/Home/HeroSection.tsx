import Link from "next/link";
import { Spotlight } from "../ui/Spotlight";
import { Button } from "../ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto mt-10 sm:mt-0 md:h-[40rem] w-full ">
      <div className="p-4 relative z-10 w-full h-full flex flex-col justify-center items-center text-center">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the Art of Music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into comprehensive music lessons and resources. Learn at your own
          pace and unlock your musical potential. Be inspired by the power of
          music.
        </p>

        <div className="mt-4">
          <Link href={"/courses"}>
            <Button
              borderRadius="2rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
