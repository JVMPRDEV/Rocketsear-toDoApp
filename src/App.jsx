import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div className={styles.app}>
      <Header />

      <div className={styles.principalContent}>
        <TaskList />
      </div>
    </div>
  );
}
