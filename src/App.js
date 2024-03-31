import React, { useState } from "react";
import "./styles/App.css";
import SubmitIcon from "./assets/images/icon-arrow.svg";
import FormInput from "./Components/FormInput";
import AgeOutput from "./Components/AgeOutput";

const App = () => {
  document.body.style.backgroundColor = "hsl(0, 0%, 94%)";
  document.body.style.transition = ".5s ease-in";

  window.onload = () => {
    setTimeout(() => {
      alert(
        "Hi 😁, This date calculator is about 95% accurate & gives you a rough estimate of timelines. \nThank You 😎"
      );
    }, 5000);
  };

  // State
  const [input, setInput] = useState({
    day: {val: 0, isValid: true, isRequired: false},
    month: {val: 0, isValid: true, isRequired: false},
    year: {val: 0, isValid: true, isRequired: false},
  });
  const [ageData, setAgeData] = useState({
    years: null,
    months: null,
    days: null,
  });

  // Handlers
  const handleSubmitDates = (e) => {
    e.preventDefault();

    // Check if data is valid and required
    if (!input.day.isValid || !input.month.isValid || !input.year.isValid) return
    if (input.day.isRequired || input.month.isRequired || input.year.isRequired) return

    let now = new Date();
    let then = new Date(input.year.val, input.month.val - 1, input.day.val - 1);
    let diff = now - then;
    let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    let months = Math.abs(
      Math.floor((diff / (1000 * 60 * 60 * 24 * 365.25)) * 12) - Math.floor(years * 12)
    );
    let days = Math.floor(diff / (1000 * 60 * 60 * 24)) - Math.floor(years * 365.25);

    setAgeData({
      days,
      months,
      years,
    });
  };

  return (
    <div className="dateCalculator-Container flex justify-center items-center h-screen">
      <div
        className="w-11/12 sm:w-3/4 md:w-7/12 lg:w-1/2 p-5 md:p-7 py-14 bg-white rounded-3xl drop-shadow-xl"
        style={{ borderBottomRightRadius: "150px" }}
      >
        <form onSubmit={handleSubmitDates}>
          {/* Form Inputs */}
          <div className="formInputContainer flex justify-between mt-10">
            <FormInput input={input} setInput={setInput} label="day" />
            <FormInput input={input} setInput={setInput} label="month" />
            <FormInput input={input} setInput={setInput} label="year" />
          </div>

          {/* Form Submit Button */}
          <div className="actionButtonContainer mt-12 flex relative items-center justify-center sm:justify-end">
            <div
              style={{ height: "1px" }}
              className="absolute sm:block z-0 w-full bg-gray-300"
            />
            <button
              type="submit"
              className="mt-5 sm:mt-0 z-10 bg-gray-800 hover:bg-primary transition-all ease-in w-fit rounded-full"
            >
              <img src={SubmitIcon} className="w-20" alt="submit-icon" />
            </button>
          </div>

          {/* Form Output(Date Calculated) */}
          <div className="formOutput mt-5">
            <AgeOutput ageData={ageData} output="days" />
            <AgeOutput ageData={ageData} output="months" />
            <AgeOutput ageData={ageData} output="years" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
