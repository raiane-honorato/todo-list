import { Trash } from "phosphor-react";
import styles from "./deleteButton.module.css";
import { DeleteButtonProps } from "./deleteButton.types";
export function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      <Trash className={styles.icon} size={24} />
    </button>
  );
}
