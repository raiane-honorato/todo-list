import { ToDoItem } from "../../domains/toDoList";

export interface ListItemProps {
  toDoItem: ToDoItem;
  onItemSelect: (toDoItem: ToDoItem) => void;
  onItemDelete: (toDoItem: ToDoItem) => void;
}
