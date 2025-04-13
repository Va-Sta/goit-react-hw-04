import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import { searchUnsplash } from "./services/api.js";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(0);
  const [error, setError] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [info, setInfo] = useState({});

  const changeQuery = (newQuery) => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setResults([]);
    setPage(1);
  };
  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  const showImage = (imgId) => {
    const img = results.filter((item) => item.id === imgId)[0];
    const imgURL = img.urls.regular;
    const info = {
      author: img.user.first_name || "unknown",
      description: img.alt_description || "",
    };
    setModalImage(imgURL);
    setInfo(info);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
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
        setError("Нічо не вийшло, спробуй попізже");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [query, page]);

  return (
    <>
      <SearchBar onSubmit={changeQuery} />
      {results.length > 0 && (
        <ImageGallery images={results} showImage={showImage} />
      )}
      {error !== "" && <ErrorMessage error={error} />}
      <div className="loaderContainer">
        <Loader loading={loading} />
        {results.length > 0 && pages > page && !loading && (
          <LoadMoreBtn nextPage={nextPage} />
        )}
      </div>
      <ImageModal
        modalIsOpen={modalIsOpen}
        src={modalImage}
        closeModal={closeModal}
        info={info}
      />
    </>
  );
};

export default App;
