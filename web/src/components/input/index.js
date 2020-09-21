import React from 'react';

import './styles.css';

function input({label, name, ...rest}) {
  return (
      <div className="input-block">
          <label htmlFor={label}>
              {label}
          </label>
          <input type="text" id={name} {...rest}/>
      </div>
  )
}

export default input;