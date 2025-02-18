import React from 'react';
import MultiStepForm from './Components/Forms/MultiStepForm';
import Header from "./Components/Header"

const App = () => {
  return (
    <div className="w-full">
      <Header/>
      <MultiStepForm />
    </div>
  );
};

export default App;
