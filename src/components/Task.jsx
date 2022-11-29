import { Trash, CheckCircle } from "phosphor-react";
import { useState } from "react";
import styles from "./Task.module.css";

export function Task({ content, onDeleteTask, onMarkTask }) {

  function handleDeleteTask() {
    onDeleteTask(content);
  }

  function handleMarkTask() {
    onMarkTask(content);
  }

  return (
    <div className={styles.task}>
      <div className={styles.taskBox}>
        <div className={styles.taskContent}>
          <header>
            <button onClick={handleMarkTask}>
              <CheckCircle size={24} className={styles.checklCircle} />
            </button>

            <p>
              {content}
            </p>

            <button onClick={handleDeleteTask} title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>
        </div>
      </div>
    </div>
  );
}
