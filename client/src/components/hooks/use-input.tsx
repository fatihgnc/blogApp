import React, { useState } from 'react';

const useInput = (
  validationMessage: string,
  initValue: string | boolean,
  validate: (input: string) => boolean
) => {
  const [enteredInput, setEnteredInput] = useState<boolean | string>(initValue);
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const valueIsValid = validate(enteredInput as string);

  const resetValue = (val: string | boolean) => {
    setEnteredInput(val);
    setIsTouched(false);
  };

  const blurHandler = () => {
    setIsTouched(true);
  };

  const hasError = !valueIsValid && isTouched;

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEnteredInput((prevState) => {
      if (typeof prevState === 'boolean') {
        return !prevState;
      }

      setIsTouched(true);

      return e.target.value;
    });

  return {
    inputValue: enteredInput,
    inputIsValid: valueIsValid || null,
    inputHasError: hasError,
    valMessage: validationMessage,
    onChange: changeHandler,
    onBlur: blurHandler,
    resetInput: resetValue,
  };
};

export default useInput;
