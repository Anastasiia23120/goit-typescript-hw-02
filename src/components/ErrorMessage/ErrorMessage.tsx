import type React from "react";
import css from "./ErrorMessage.module.css";
import type { ErrorMessageProps } from "../../types/ErrorMessage.types";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <div className={css.errorMessage}>{message}</div>;
};

export default ErrorMessage;
