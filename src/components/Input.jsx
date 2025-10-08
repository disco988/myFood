import React from "react";

const Input = ({ id, label, ...props }) => {
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} type="text" required {...props} />
    </p>
  );
};

export default Input;
