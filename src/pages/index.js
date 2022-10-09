import * as React from "react";
import "src/styles/global.css";
import Header from "src/components/Header";
import Hero from "src/components/Hero";
import { getTheme, setTheme } from "utils/theme";
import Skills from "src/components/Skills";
import Projects from "src/components/Projects";

const IndexPage = () => {
  React.useEffect(() => {
    const theme = getTheme();
    setTheme(theme);
  }, []);
  return (
    <div className="dark:bg-slate-900 min-h-screen">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
    </div>
  );
};

export default IndexPage;
