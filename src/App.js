import React, { useState, useEffect } from "react";
import "../src/assets/styles/App.css";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import { Header, Home, About, Projects, Skills, Contact, Footer } from "./pages";

const delay = 1.5;

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setLoading(true), delay * 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [loading]);

  return (
    <div className="app">
      {!loading ? (
        <Loader />
      ) : (
        <div className="portfolio">
          <Header />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
          <ScrollToTop />
        </div>
      )}
    </div>
  );
};

export default App;
