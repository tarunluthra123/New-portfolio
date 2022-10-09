import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { StaticQuery, graphql } from "gatsby";

const GithubIcon = ({ link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub className="text-4xl md:text-5xl dark:text-white hover:text-slate-700 dark:hover:text-slate-300" />
  </a>
);

const LinkedInIcon = ({ link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin className="text-4xl md:text-5xl dark:text-white hover:text-slate-700 dark:hover:text-slate-300" />
  </a>
);

const MailIcon = ({ link }) => (
  <a
    href={`mailto:${link}`}
  >
    <FaEnvelope className="text-4xl md:text-5xl dark:text-white hover:text-slate-700 dark:hover:text-slate-300" />
  </a>
);

function SocialIcons(data) {
  const { github, linkedin, mail } = data.allDataJson.nodes[0];

  return (
    <div className="flex gap-3 mt-5">
      <GithubIcon link={github} />
      <LinkedInIcon link={linkedin} />
      <MailIcon link={mail} />
    </div>
  )
}

const query = graphql`
{
  allDataJson {
    nodes {
      github
      linkedin
      mail
    }
  }
}
`;

export default function () {
  return <StaticQuery
    query={query}
    render={SocialIcons}
  />
}
