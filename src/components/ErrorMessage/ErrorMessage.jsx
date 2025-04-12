// import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ error }) => {
  return <p style={{ color: "red" }}>{error}</p>;
};
export default ErrorMessage;
