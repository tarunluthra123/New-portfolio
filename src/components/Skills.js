import * as React from "react";
import { graphql } from "gatsby";

const Skills = ({ data }) => {
  return <section>Skills</section>;
};

export const query = graphql`
  {
    allSkillsJson {
      edges {
        node {
          name
          image
          id
        }
      }
    }
  }
`;

export default Skills;
