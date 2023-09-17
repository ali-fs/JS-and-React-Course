import React, { useEffect } from "react";

const Button = ({ title, onClick, disabled }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="bg-slate-300 my-4 px-2 mr-4 rounded-md hover:bg-slate-400 transition-all"
    >
      <span className="text-sm">{title}</span>
    </button>
  );
};

export default Button;
