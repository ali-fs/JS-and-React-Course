import React, { forwardRef } from "react";
import { useId } from "react";

// forwardRef
// HOF
// HOC

// const InputBox = forwardRef((props, ref)=>{})
const InputBox = forwardRef((props, ref) => {
  const { label, type, name, placeholder, value, onChange, error } = props;
  const id = useId();

  return (
    <div>
      <label htmlFor={id} className="mr-4">
        {label}
      </label>
      <input
        ref={ref}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        // value={value}
        onChange={onChange}
        className="border rounded px-2"
      />
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
});

export default InputBox;
