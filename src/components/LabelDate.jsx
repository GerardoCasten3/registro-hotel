import '../styles/LabelDate.css';
import React from "react";

export const LabelDate = ({ label, ...input }) => {
  return (
    <div className="label-date">
      <label>{label}:</label>
      <input type="date" {...input} />
    </div>
  );
};
