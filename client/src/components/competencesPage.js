import React from "react";

import Competences from "./competences"
import Knowledge from "./knowledge"
import Welcome from "./welcome"
import "../public/styles/style.css";

function CompetencesPage() {
  return (
      <div className="competencespage">
        <Welcome title="COMPETENCES" size={{fontSize: "9vw"}}/>
        <Competences/>
        <Welcome title="KNOWLEDGE" size={{fontSize: "11vw"}}/>
        <Knowledge/>
      </div>
      
  );
}

export default CompetencesPage;