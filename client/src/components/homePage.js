import React from "react";

import Home from "./home"
import Welcome from "./welcome"
import "../public/styles/style.css";

function HomePage() {
  return (
      <div className="homepage">
        <Welcome title="WELCOME" size={{fontSize: "14vw"}} />
        <Home />
      </div>
      
  );
}

export default HomePage;