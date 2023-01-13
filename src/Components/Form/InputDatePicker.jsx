import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createDateAsUTC } from "../../Util/helpers";
export default function InputDatePicker({
  value,
  onChange,
  maxDate,
  minDate,
  ...rest
}) {
  const [open, setOpen] = useState(false);

  return (
    <fieldset className={`form-group position-relative mb-0`}>
      <DatePicker
        selected={value}
        onChange={(date) => {
          onChange(date ? createDateAsUTC(date) : "");
        }}
        className="select-filter p-1"
        open={open}
        onInputClick={() => {
          setOpen(!open);
        }}
        onClickOutside={() => setOpen(false)}
        maxDate={maxDate}
        minDate={minDate}
        placeholderText="dd/mm/yyyy"
        {...rest}
      />
      <button
        className="btn view-btn position-absolute"
        onClick={(e) => {
          e.preventDefault();
          setOpen(!open);
        }}
        style={{ boxShadow: "none" }}
      >
        <i
          className="fa fa-calendar enter-icon right-icon"
          aria-hidden="true"
        ></i>
      </button>
    </fieldset>
  );
}
