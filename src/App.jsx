import React from "react";
import { About, Contact, Footer, Hero, Navbar, Supported } from "./components";

const App = () => {
  return (
    <div className="w-full h-screen bg-background px-6 md:px-16">
      <Navbar />
      <Hero />
      <Supported />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
