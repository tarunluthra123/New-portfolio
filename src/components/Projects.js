import React from "react";
import { graphql, StaticQuery } from "gatsby";

const Projects = (data) => {
  const projects = data.allProjectsJson.nodes;
  console.log("projects = ", projects)
  return <section>Projects section</section>;
};

export const query = graphql`
  {
    allProjectsJson {
      nodes {
        id
        title
        githubUrl
        description
        projectUrl
        technologies
      }
    }
  }
`;

export default function ProjectsWrapper() {
  return (
    <StaticQuery
      query={query}
      render={Projects}
    />
  );
}
