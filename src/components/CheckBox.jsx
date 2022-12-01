import styles from './CheckBox.module.css'

export const Checkbox = ({ label, value, onChange }) => {
    return (
      <label>
        <input type="checkbox" checked={value} onChange={onChange} />
        <span>{label}</span>

      </label>
    );
  };