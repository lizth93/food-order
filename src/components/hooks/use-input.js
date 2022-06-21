import { useState } from "react";

const useInput = (validate) => {
  const [isValidInput, setIsValidInput] = useState("");
  const [inputIsTouched, setIsTouchendInput] = useState(false);

  const inputIsValid = validate(isValidInput);
  const hasError = !inputIsValid && inputIsTouched;

  const inputChangeHandler = (event) => {
    setIsValidInput(event.target.value);
  };

  const inputOnBlurHandler = () => {
    setIsTouchendInput(true);
  };

  const reset = () => {
    setIsValidInput("");
    setIsTouchendInput(false);
  };

  return {
    value: isValidInput,
    isValid: inputIsValid,
    hasError,
    inputChangeHandler,
    inputOnBlurHandler,
    reset,
  };
};

export default useInput;
