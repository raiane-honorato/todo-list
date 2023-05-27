export interface ToDoItem {
  id: string;
  description: string;
  done: boolean;
}

export type ToDoList = Array<ToDoItem>;

export const toDoListLocalStorageKey = "toDoList";
