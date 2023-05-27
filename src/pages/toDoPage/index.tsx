import todoIcon from "../../assets/todoIcon.svg";
import { ListSection } from "./ListSection";
import styles from "./toDoPage.module.css";

export function ToDoPage() {
  return (
    <>
      <header className={styles.header}>
        <h1 aria-describedby="todo-icon">
          <img id="todo-icon" src={todoIcon} alt="Todo List - ignite#1" />
        </h1>
      </header>
      <body>
        <ListSection />
      </body>
    </>
  );
}
