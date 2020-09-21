import React from "react";

import "./styles.css";

function Textarea({label, name, ...rest}) {
  return (
    <div className="input-block">
      <label htmlFor={label}>{label}</label>
      <textarea type="text" id={name} {...rest} />
    </div>
  );
}

export default Textarea;
