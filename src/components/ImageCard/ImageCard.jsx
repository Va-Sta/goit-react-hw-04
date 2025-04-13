import css from "./ImageCard.module.css";

const ImageCard = ({ imgURL, imgAlt, imgId, showImage }) => {
  return (
    <img
      className={css.image}
      src={imgURL}
      alt={imgAlt}
      onClick={() => {
        showImage(imgId);
      }}
    />
  );
};
export default ImageCard;
