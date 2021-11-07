import React from "react";
import { GithubIcon, MailIcon, LinkedInIcon } from "../images/Social-Icons";

const Hero = () => {
  return (
    <div className="h-85vh px-10 py-10">
      <h1 className="text-center text-4xl">
        Hey, I'm <span>Tarun</span>
      </h1>
      <p>
        I am a fullstack developer who loves to create new web apps and teach
        people to code. PS: I love chai.
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
