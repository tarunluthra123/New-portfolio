import { graphql } from "gatsby";
import React from "react";

const Projects = ({ data }) => {
  console.log(data);
  return <div>Projects section</div>;
};

export const query = graphql`
  {
    allProjectsJson {
      edges {
        node {
          id
          technologies
          title
          projectUrl
          imageUrl
          githubUrl
          description
        }
      }
    }
  }
`;

export default Projects;
