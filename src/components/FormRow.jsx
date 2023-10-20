const FormRow = ({ type, name, value, handleChange, label }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {label || name}
      </label>
      <input
        onChange={handleChange}
        type={type}
        name={name}
        className="form-input"
      />
    </div>
  );
};

export default FormRow;
