import { useEffect, useState } from "react";
import {
  ToDoItem,
  ToDoList,
  toDoListLocalStorageKey,
} from "../../../domains/toDoList";
import { CreateToDo } from "../../../components/createToDo";
import { ListItem } from "../../../components/listItem";
import styles from "./ListSection.module.css";

export function ListSection() {
  const [toDoList, setToDoList] = useState<ToDoList>(getToDoListInitialValue());

  const doneTasksLabel = `${toDoList.filter((toDo) => toDo.done).length} de ${
    toDoList.length
  }`;

  const handleItemSelect = (selectedItem: ToDoItem) => {
    setToDoList((toDoList) =>
      toDoList.map((currentItem) =>
        currentItem.id === selectedItem.id
          ? { ...currentItem, done: !currentItem.done }
          : currentItem
      )
    );
  };

  const handleItemDelete = (selectedItem: ToDoItem) => {
    setToDoList((toDoList) =>
      toDoList.filter((currentItem) => currentItem.id !== selectedItem.id)
    );
  };

  const handleAddItem = (itemDescription: string) => {
    setToDoList((toDoList: ToDoList) => {
      return [
        ...toDoList,
        { id: toDoList.length + 1, description: itemDescription, done: false },
      ] as ToDoList;
    });
  };

  useEffect(() => {
    updateLocalStorage(toDoList);
  }, [toDoList]);

  return (
    <section className={styles.listSection}>
      <CreateToDo handleAddItem={handleAddItem} />

      <section>
        <div className={styles.listHeader}>
          <h3 className={styles.createdTasks}>
            Tarefas criadas
            <span className={styles.taskSummaryLabel}>{toDoList.length}</span>
          </h3>
          <h3 className={styles.doneTasks}>
            Concluídas
            <span className={styles.taskSummaryLabel}>{doneTasksLabel}</span>
          </h3>
        </div>

        <div className={styles.listItensContainer}>
          {toDoList.map((toDoItem) => (
            <ListItem
              toDoItem={toDoItem}
              key={toDoItem.id}
              onItemSelect={handleItemSelect}
              onItemDelete={handleItemDelete}
            />
          ))}
        </div>
      </section>
    </section>
  );
}

const getToDoListInitialValue = () => {
  const localStorageValue = localStorage.getItem(toDoListLocalStorageKey);
  const initialValue = localStorageValue ? JSON.parse(localStorageValue) : [];
  return initialValue;
};

const updateLocalStorage = (toDoList: ToDoList) => {
  localStorage.setItem(toDoListLocalStorageKey, JSON.stringify(toDoList));
};
