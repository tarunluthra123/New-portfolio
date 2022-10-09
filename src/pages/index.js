import React from "react";
import "src/styles/global.css";
import Header from "src/components/Header";
import Hero from "src/components/Hero";
import Projects from "src/components/Projects";
import { getTheme, setTheme } from 'utils/theme';

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
        <Projects />
      </main>
    </div>
  );
};

export default IndexPage;
