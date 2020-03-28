import React from "react";

import Layout from "../components/layout";
import Projects from "../components/projects";

const Index = () => (
  <Layout>
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4 text-center">Bryce Mehring</h1>
        <p className="lead">
          I'm Bryce Mehring and I love developing video games that create
          meaningful experiences. These are games that I'm involved in.
        </p>
      </div>
    </div>
    <Projects />
  </Layout>
);

export default Index;
