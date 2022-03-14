import React from "react";
import { GithubIcon, MailIcon, LinkedInIcon } from "src/images/Social-Icons";

const Hero = () => {
  return (
    <div className="h-85vh px-10 py-10">
      <h1 className="text-center text-4xl text-secondaryColor dark:text-secondaryDarkColor">
        <strong>Tarun Luthra</strong>
      </h1>
      <p>
        Part-time fullstack developer. Fulltime gamer, otaku and chai addict.
      </p>
      <div className="flex">
        <GithubIcon />
        <LinkedInIcon />
        <MailIcon />
      </div>
    </div>
  );
};

export default Hero;
