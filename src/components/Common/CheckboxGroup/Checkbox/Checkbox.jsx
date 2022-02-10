import React, { ChangeEventHandler, useState } from "react";

const Checkbox = (props) => {
  const { children, onChange, checked: initialChecked } = props;
  const [checked, setChecked] = useState(initialChecked);

  const handleChange = () => {
    setChecked(!checked);
    if (onChange && typeof onChange === "function") {
      onChange(checked);
    }
  };

  return (
    <div key={children} className="text-gray-500 flex items-center py-1">
      <input
        id={children}
        type="checkbox"
        checked={checked}
        key={`${checked}`}
        onChange={handleChange}
        className="text-primary focus:ring-primary bg-gray-50 border-gray-300 rounded"
      />
      <label
        htmlFor={children}
        className="ml-2 text-sm select-none font-medium text-gray-900"
      >
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
