import React from "react";
import MultiStepForm from "./Components/Forms/MultiStepForm";
import Header from "./Components/Header";
import GenerateContext from "./Components/Aiactions/generate";

const App = () => {
  GenerateContext();

  return (
    <div className="w-full p-0 m-[0_auto]">
      <Header />
      <MultiStepForm />
    </div>
  );
};

export default App;
