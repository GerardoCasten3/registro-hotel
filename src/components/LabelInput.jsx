import '../styles/LabelInput.css';
import React from 'react';

export const LabelInput = ({ label, ...input }) => {
  return (
    <div className="label-input">
      <label>{label}:</label>
      <input {...input} />
    </div>
  );
};
