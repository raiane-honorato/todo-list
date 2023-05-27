import { InputHTMLAttributes } from "react";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  checked: boolean;
  onClick: () => void;
}
