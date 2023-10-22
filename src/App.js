import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";

import Greenglance from "./Components/Greenglance";
import Profile from "./Components/formcomponents/Profile";
import Summary from "./Components/formcomponents/Summary";
import Skills from "./Components/formcomponents/Skills";
import Experience from "./Components/formcomponents/Experience";
import Education from "./Components/formcomponents/Education";

function App() {
  const [profile, setProfile] = useState({
    name: "",
    addrss: "",
    email: "",
    phone: "",
  });
  const [summary, setSummary] = useState("");

  return (
    <div className="w-full grid place-items-center">
      <Header />
      <div className="w-[1400px] grid grid-cols-2 place-items-center py-4 p-4">
        <div>
          <Profile setProfile={setProfile} />
          <Summary setSummary={setSummary} />
          <Skills />
          <Experience />
          <Education />
          <button
            type="submit"
            className="w-fit py-1 px-4 rounded-full bg-green-200">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
// <Greenglance />

export default App;
