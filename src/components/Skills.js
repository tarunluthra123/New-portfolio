import * as React from "react";
import { StaticQuery, graphql } from "gatsby";

const Skills = (data) => {
  console.log("skills = ", data)
  return <section>Skills</section>;
};

export default function () {
  return <StaticQuery
    query={graphql`
    {
      allSkillsJson {
        nodes {
          name
          image
          id
        }
      }
    }
    `}
    render={Skills}
  />
}
