import React from "react";
import "./AgeOutput.css";

const AgeOutput = ({ output, ageData }) => {
  let res;
  if (output === "days") {
    res = ageData.days;
  } else if (output === "months") {
    res = ageData.months;
  } else if (output === "years") {
    res = ageData.years;
  }
  return (
    <div className="flex">
      <p className="text-primary font-bold italic text-5xl sm:text-7xl md:text-8xl mr-2 transition-all ease-in">
        {res || "--"}
      </p>
      <h1 className="text-gray-900 font-bold italic text-5xl sm:text-7xl md:text-8xl transition-all ease-in">
        {res === 1 ? output.slice(0, -1) : output}
      </h1>
    </div>
  );
};

export default AgeOutput;
