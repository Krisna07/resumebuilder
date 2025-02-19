import React from "react";

const FormLayout = ({ children, heading, subheading, handleSubmit }) => {
  return (
    <div className="w-full min-h-[400px] gap-4  shadow-md grid p-4 bg-gray-200 rounded-lg text-left">
      <div className="w-full h-fit">
        <h2 className="text-xl font-[600]">{heading}</h2>
        <p>{subheading} </p>
      </div>
      {children}
    </div>
  );
};

export default FormLayout;
