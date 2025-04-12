// import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const inputValue = form.elements.input.value;
    if (inputValue === "") {
      console.log(1);
      toast.error("Enter text for image search");
      return;
    }
    onSubmit(inputValue);
  };
  return (
    <header>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};
export default SearchBar;
