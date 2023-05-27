import { Checkbox } from "../checkbox";
import { DeleteButton } from "../deleteButton";
import styles from "./listItem.module.css";
import { ListItemProps } from "./listItem.types";

export function ListItem({
  toDoItem,
  onItemSelect,
  onItemDelete,
}: ListItemProps) {
  return (
    <div
      className={`${styles.listItemContainer} ${
        toDoItem.done ? styles.listItemContainerSelected : ""
      }`}
    >
      <Checkbox
        id={toDoItem.id}
        checked={toDoItem.done}
        onClick={() => onItemSelect(toDoItem)}
      />
      <label
        htmlFor={toDoItem.id}
        className={`${styles.listItemLabel} ${
          toDoItem.done ? styles.listItemLabelSelected : ""
        }`}
      >
        {toDoItem.description}
      </label>
      <DeleteButton onClick={() => onItemDelete(toDoItem)} />
    </div>
  );
}
