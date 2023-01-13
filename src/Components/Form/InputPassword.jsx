import React, { useState } from "react";

export default function InputPassword({
  value,
  onChange,
  disabled,
  max,
  name,
  placeholder,
  className,
}) {
  const [show_password, setShowPassword] = useState(false);

  return (
    <fieldset className={`form-group position-relative mb-0`}>
      <input
        required
        type={show_password ? "text" : "password"}
        className={className}
        id="basicInput"
        name={name}
        value={value}
        onChange={(e) => {
          if (max ? e.target.value.length <= max : true)
            onChange && onChange(e);
        }}
        disabled={disabled}
        placeholder={placeholder}
      />
      <div
        className="passDisplay"
        onClick={(e) => {
          e.preventDefault();
          setShowPassword(!show_password);
        }}
      >
        {show_password ? (
          <i
            className="fa fa-eye enter-icon   right-icon"
            aria-hidden="true"
          ></i>
        ) : (
          <i className="far fa-eye-slash confirm-icon  right-icon"></i>
        )}
      </div>
    </fieldset>
  );
}
