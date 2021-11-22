import React from "react";

import Timeline from "./timeline"
import Welcome from "./welcome"
import "../public/styles/style.css";

function TimelinePage() {
  return (
      <div className="timelinepage">
        <Welcome title="TIMELINE" size={{fontSize: "12vw"}}/>
        <Timeline />
      </div>
      
  );
}

export default TimelinePage;