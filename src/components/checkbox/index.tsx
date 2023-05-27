import styles from "./checkbox.module.css";
import { Check } from "phosphor-react";
import { CheckboxProps } from "./checkbox.types";

export function Checkbox({
  id,
  checked,
  onClick,
  ...inputProps
}: CheckboxProps) {
  return (
    <>
      <div
        onClick={onClick}
        className={`${styles.customCheckbox} ${checked ? styles.checked : ""}`}
      >
        <input
          id={id}
          type="checkbox"
          className={styles.realCheckbox}
          checked={checked}
          onClick={(event) => {
            event.stopPropagation();
            onClick();
          }}
          {...inputProps}
        ></input>
        {checked && <Check width={"100%"} color="white" />}
      </div>
    </>
  );
}
