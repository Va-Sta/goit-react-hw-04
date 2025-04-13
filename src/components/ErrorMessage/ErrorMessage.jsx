import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ error }) => {
  return <p className={css.message}>{error}</p>;
};
export default ErrorMessage;
