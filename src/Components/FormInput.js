import React from "react";

const FormInput = ({ label, onChange, input, setInput }) => {
  let isNotValid;
  let isRequired;
  const handleDataAndValidate = (e) => {
    const val = Number(e.target.value);
    if (label.toLowerCase() === "day") {
      CheckRequiredValidity(val, "day");
    } else if (label.toLowerCase() === "month") {
      CheckRequiredValidity(val, "month");
    } else if (label.toLowerCase() === "year") {
      CheckRequiredValidity(val, "year");
    }
  };
  const CheckRequiredValidity = async (val, type) => {
    if (type === "day") {
      if (val === 0 || val === undefined || val === null) {
        setInput({
          ...input,
          day: { isValid: true, isRequired: true, val: val },
        });
      } else if (val > 0 && val <= 31) {
        setInput({
          ...input,
          day: { isValid: true, isRequired: false, val: val },
        });
      } else {
        setInput({
          ...input,
          day: { isValid: false, isRequired: false, val: val },
        });
      }
    } else if (type === "month") {
      if (val === 0 || val === undefined || val === null) {
        setInput({
          ...input,
          month: { isValid: true, isRequired: true, val: val },
        });
      } else if (val > 0 && val <= 12) {
        setInput({
          ...input,
          month: { isValid: true, isRequired: false, val: val },
        });
      } else {
        setInput({
          ...input,
          month: { isValid: false, isRequired: false, val: val },
        });
      }
    } else if (type === "year") {
      if (val === 0 || val === undefined || val === null) {
        setInput({
          ...input,
          year: { isValid: true, isRequired: true, val: val },
        });
      } else if (val >= 1000 && val <= new Date().getFullYear()) {
        setInput({
          ...input,
          year: { isValid: true, isRequired: false, val: val },
        });
      } else {
        setInput({
          ...input,
          year: { isValid: false, isRequired: false, val: val },
        });
      }
    }
  };

  let placeholder;
  if (label.toLowerCase() === "day") {
    placeholder = "DD";
    isNotValid = !input.day.isValid;
    isRequired = input.day.isRequired;
  } else if (label.toLowerCase() === "month") {
    placeholder = "MM";
    isNotValid = !input.month.isValid;
    isRequired = input.month.isRequired;
  } else if (label.toLowerCase() === "year") {
    placeholder = "YYYY";
    isNotValid = !input.year.isValid;
    isRequired = input.year.isRequired;
  }

  return (
    <>
      <div className="formInput h-12 mr-2 md:mr-5 flex flex-col justify-evenly items-start">
        <label
          htmlFor={label}
          className="text-xs text-gray-500 font-bold mb-1 tracking-widest"
        >
          {label.charAt(0).toUpperCase() + label.slice(1)}
        </label>
        <input
          onChange={(e) => {
            handleDataAndValidate(e);
          }}
          type="number"
          required
          name={label}
          id={label}
          placeholder={placeholder}
          className={
            isNotValid || isRequired
              ? "placeholder:font-bold p-3 w-20 md:w-full outline-none border border-secondary rounded-lg text-2xl font-bold text-gray-800"
              : "placeholder:font-bold p-3 w-20 md:w-full outline-none border border-gray-400 rounded-lg text-2xl font-bold text-gray-800"
          }
        />
        {isRequired && (
          <p className="font-light italic text-secondary text-xs mt-1">
            This field is required
          </p>
        )}
        {isNotValid && (
          <p className="font-light italic text-secondary text-xs mt-1">
            Must be a valid {label}
          </p>
        )}
      </div>
    </>
  );
};

export default FormInput;
