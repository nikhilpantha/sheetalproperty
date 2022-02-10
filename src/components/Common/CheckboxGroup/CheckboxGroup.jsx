import React, { useState } from "react";
import Checkbox from "./Checkbox/Checkbox";

const CheckboxGroup = (props) => {
  const { values = [], options, onChange, label, validationError } = props;
  const [selectedOptions, setSelectedOptions] = useState(values);

  const handleChange = (option) => {
    let newValues = selectedOptions;

    const exists = !!selectedOptions.find((o) => o.value === option.value)
      ?.value;

    if (exists) {
      newValues = newValues.filter((o) => o.value !== option.value);
    } else {
      newValues = [...newValues, option];
    }

    setSelectedOptions(newValues);

    if (onChange && typeof onChange === "function") {
      onChange(newValues);
    }
  };

  return (
    <div>
      {label && (
        <span className="block text-sm font-medium text-gray-700">{label}</span>
      )}
      {options.map((option) => {
        const checked = selectedOptions.find(
          (o) => o.value === option.value
        )?.value;
        const handleCheck = () => {
          handleChange(option);
        };
        return (
          <Checkbox key={option.key} onChange={handleCheck} checked={!!checked}>
            {option.label}
          </Checkbox>
        );
      })}
      {validationError && (
        <p className="mt-1 text-sm text-red-600">{validationError}</p>
      )}
    </div>
  );
};

export default CheckboxGroup;
