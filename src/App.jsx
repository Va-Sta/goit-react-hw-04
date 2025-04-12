import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import { searchUnsplash } from "./services/api.js";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

const App = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(0);
  const [error, setError] = useState("");
  const changeQuery = (query) => {
    setQuery(query);
    setResults([]);
    setPage(1);
  };
  const nextPage = () => {
    setPage((prev) => prev + 1);
  };
  useEffect(() => {
    if (query === "") return;
    const getData = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await searchUnsplash(query, page);
        // console.log(response);
        setResults((prev) => [...prev, ...response.data.results]);
        setPages(response.data.total_pages);
      } catch (e) {
        console.log(e);
        setError("Нічо не вийшло, спробуй ще");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [query, page]);

  return (
    <>
      <SearchBar onSubmit={changeQuery} />
      {results.length > 0 ? <ImageGallery images={results} /> : <></>}
      {error !== "" ? <ErrorMessage error={error} /> : <></>}
      <Loader loading={loading} />
      {results.length > 0 && pages > page ? (
        <LoadMoreBtn nextPage={nextPage} />
      ) : (
        <></>
      )}
    </>
  );
};

export default App;
