import { Trash, CheckCircle } from "phosphor-react";
import { useState } from "react";
import { Checkbox } from "./CheckBox";
import styles from "./Task.module.css";

export function Task({ id, content, onDeleteTask, onChangeCheckBox }) {
  const [checked, setChecked] = useState(false);

  const currentBox = (!checked).toString();
  const label = checked.toString();

  const handleChange = () => {
    setChecked(!checked);
    onChangeCheckBox(currentBox, id);
  };

  function handleDeleteTask() {
    onDeleteTask(id);
  };

  return (
    <div className={styles.task}>
      <div className={styles.taskBox}>
        <div className={styles.taskContent}>
          <header>
            <Checkbox
              label={label}
              value={checked}
              onChange={handleChange}
            />

            <p>{content}</p>

            <button onClick={handleDeleteTask} title="Deletar Tarefa">
              <Trash size={24} />
            </button>
          </header>
        </div>
      </div>
    </div>
  );
}
