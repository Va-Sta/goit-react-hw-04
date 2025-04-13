import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, showImage }) => {
  return (
    <ul className={css.list}>
      {images.map((item) => (
        <li className={css.item} key={item.id}>
          <ImageCard
            imgURL={item.urls.small}
            imgAlt={item.alt_description}
            imgId={item.id}
            showImage={showImage}
          />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
