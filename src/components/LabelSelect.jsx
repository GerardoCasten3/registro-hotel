import '../styles/LabelSelect.css';
import React from 'react';

export const LabelSelect = ({ label, options = [], ...select }) => {
  return (
    <div className="label-select">
      <label>{label}:</label>
      <select {...select}>
        <option value="">Seleccione una opción</option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
};