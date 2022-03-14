import * as React from "react";
import "src/styles/global.css";
import Header from "src/components/Header";
import Hero from "src/components/Hero";
import { getTheme, setTheme } from "utils/theme";

const IndexPage = () => {
  React.useEffect(() => {
    const theme = getTheme();
    setTheme(theme);
  }, []);
  return (
    <div className="dark:bg-gray-700">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default IndexPage;
