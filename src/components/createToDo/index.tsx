import { PlusCircle } from "phosphor-react";
import styles from "./createToDo.module.css";
import { useState } from "react";
import { CreateToDoProps } from "./createToDo.types";

export function CreateToDo({ handleAddItem }: CreateToDoProps) {
  const [taskDescription, setTaskDescription] = useState("");
  return (
    <form
      className={styles.createToDoContainer}
      onSubmit={(event) => {
        event.preventDefault();
        handleAddItem(taskDescription);
        setTaskDescription("");
      }}
    >
      <input
        className={styles.input}
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={taskDescription}
        onChange={(event) => setTaskDescription(event.target.value)}
      ></input>
      <button className={styles.button} type="submit">
        <span>Criar</span>
        <PlusCircle size={16} />
      </button>
    </form>
  );
}
