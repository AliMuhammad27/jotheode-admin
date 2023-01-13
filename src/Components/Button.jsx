import React from "react";

export default function Button({
  type = "button",
  disabled,
  loading,
  children,
  onClick,
  className,
  style,
}) {
  if (loading)
    return (
      <button
        type={type}
        className={className}
        style={{ ...style, cursor: "wait" }}
        disabled={disabled || loading ? true : false}
      >
        <i className="fas fa-spinner fa-pulse"></i>
      </button>
    );

  return (
    <button type={type} className={className} onClick={onClick} style={style}>
      {children}
    </button>
  );
}
