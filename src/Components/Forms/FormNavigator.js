import React from "react";
import Button from "../Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const FormNavigator = ({ handleSubmit }) => {
  return (
    <div className="w-full flex items-center justify-between pt-2">
      <Button type="submit" size={"small"} variant="secondary" disabled>
        <FaChevronLeft /> Back
      </Button>
      <Button
        type="submit"
        size={"small"}
        variant="primary"
        onClick={handleSubmit}
      >
        Next <FaChevronRight />
      </Button>
    </div>
  );
};

export default FormNavigator;
