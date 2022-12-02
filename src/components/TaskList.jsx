import { useState } from "react";

import { PlusCircle } from "phosphor-react";
import styles from "./TaskList.module.css";

import { Task } from "./Task";
import { VoidList } from "./VoidList";

export function TaskList() {
  const [tasks, setTasks] = useState(["Lavar roupas"]);

  const [newTaskText, setNewTaskText] = useState("");

  const [checkedBoxes, setCheckedBox] = useState(0);

  function handleCreateNewTask() {
    event?.preventDefault();

    setTasks([...tasks, newTaskText]);
    setNewTaskText("");
  }

  function handleNewTaskChange() {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid() {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function deleteTask(taskToDelete) {
    const tasksWithoutDeletedOne = tasks.filter((id) => {
      return id != taskToDelete;
    });

    setTasks(tasksWithoutDeletedOne);
    
    if (boxToChange === "false" && checkedBoxes > 0) {
      setCheckedBox(checkedBoxes - 1);
    }
  }

  function EmptyList() {
    const isEmptyList = taskQuantity;

    if (isEmptyList === 0) {
      return <VoidList />;
    }
  }

  function changeCheckBox(boxToChange) {
    if (boxToChange === "true") {
      setCheckedBox(checkedBoxes + 1);
    } else if (boxToChange === "false" && checkedBoxes > 0) {
      setCheckedBox(checkedBoxes - 1);
    }
  }

  const isNewTaskEmpty = newTaskText.length === 0;

  const taskQuantity = tasks.length;

  return (
    <div>
      <form onSubmit={handleCreateNewTask} className={styles.searchForm}>
        <input
          name="content"
          placeholder="Adicione uma nova tarefa"
          value={newTaskText}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />

        <button type="submit" disabled={isNewTaskEmpty}>
          Criar
          <PlusCircle size={16} className={styles.plusCircle} />
        </button>
      </form>

      <div className={styles.taskList}>
        <div className={styles.checkList}>
          <header>
            <div>
              <strong className={styles.checkListTitle}>Tarefas criadas</strong>
              <span>{taskQuantity}</span>
            </div>

            <div>
              <strong className={styles.checkListTitle2}>Concluidas</strong>
              <span>
                {checkedBoxes} de {taskQuantity}
              </span>
            </div>
          </header>

          <main>
            <EmptyList isEmptyList={taskQuantity} />

            {tasks.map((task) => {
              return (
                <Task
                  key={task}
                  id={task}
                  content={task}
                  onDeleteTask={deleteTask}
                  onChangeCheckBox={changeCheckBox}
                />
              );
            })}
          </main>
        </div>
      </div>
    </div>
  );
}
