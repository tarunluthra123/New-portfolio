import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import SocialIcons from "src/components/SocialIcons";

const Hero = () => {
  return (
    <div className="px-10 py-10 flex justify-around items-end">
      <div>
        <h1 className="font-bold dark:text-white text-4xl md:text-5xl mb-3">
          <span className="text-secondaryColor dark:text-secondaryDarkColor">Hello, </span>
          there
        </h1>
        <h1 className="font-bold text-2xl md:text-3xl dark:text-white">
            I am
            <span className="text-secondaryColor dark:text-secondaryDarkColor"> Tarun Luthra</span>
        </h1>
        <p className="dark:text-white text-md md:text-lg mt-6">
          <span className="hidden dark:inline">
            Gamer. Otaku. Nerd.
          </span>
          <span className="dark:hidden">
            Fullstack Developer. Instructor.
          </span>
          <br />
          My addictions are {` `}
          <span className="hidden dark:inline">
            animes, books and games.
          </span>
          <span className="dark:hidden">
            coding, teaching and learning.
          </span>
        </p>
        <SocialIcons />
      </div>
      <StaticImage
        src="../images/programming.svg"
        className="max-w-xs animate-[bounce_2s_ease-in-out_infinite] dark:hidden"
      />
      <StaticImage
        src="../images/hacker.svg"
        className="max-w-xs animate-[bounce_2s_ease-in-out_infinite] hidden dark:block"
      />
    </div>
  );
};

export default Hero;
