import React from "react";
import Booking from "./main/booking";
import Intro from "./main/intro";

function Main() {
  return (
    <main>
      <div className="main">
        <Intro />
        <Booking />
      </div>
    </main>
  );
}

export default Main;
