// import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map((item) => (
        <li key={item.id}>
          <ImageCard imgURL={item.urls.small} imgAlt={item.alt_description} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
