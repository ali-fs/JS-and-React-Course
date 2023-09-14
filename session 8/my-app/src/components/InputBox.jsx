import React, { forwardRef } from "react";
import { useId } from "react";

// forwardRef
// HOF
// HOC

// const InputBox = forwardRef((props, ref)=>{})
const InputBox = forwardRef((props, ref) => {
  const { label, type, placeholder, value, onChange } = props;
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        ref={ref}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
});

export default InputBox;
