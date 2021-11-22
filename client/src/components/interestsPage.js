import React from "react";

import Interests from "./interests"
import Welcome from "./welcome"
import "../public/styles/style.css";

function InterestsPage() {
  return (
      <div className="interestspage">
        <Welcome title="INTERESTS" size={{fontSize: "11vw"}}/>
        <Interests />
      </div>
      
  );
}

export default InterestsPage;