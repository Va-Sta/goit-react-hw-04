import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const inputValue = form.elements.input.value.trim();
    if (inputValue === "") {
      toast.error("Enter text for image search");
      return;
    }
    onSubmit(inputValue);
  };
  return (
    <header className={css.header}>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <form onSubmit={handleSubmit} className={css.form}>
        <button className={css.button} type="submit">
          <FiSearch className={css.icon} />
        </button>

        <input
          className={css.input}
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
export default SearchBar;
