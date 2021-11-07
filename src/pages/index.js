import * as React from "react";
import "../styles/global.css";
import Header from "../components/Header";
import Hero from "../components/Hero";

const IndexPage = () => {
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
