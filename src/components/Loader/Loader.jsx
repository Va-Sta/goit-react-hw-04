// import css from "./Loader.module.css";
import { CSSProperties } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

const Loader = ({ loading }) => {
  return <PropagateLoader loading={loading} />;
};
export default Loader;
