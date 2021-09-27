import { useEffect, useState } from "react";
import { useValidation } from "./useValidation";

export const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);

  const valid = useValidation(value, validations);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    if (e.target.value.length > 0) {
      setDirty(true);
    }
  };

  useEffect(() => {
    return function() {
      setValue('');
    }
  }, [])

  return {
    value,
    setValue,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};
