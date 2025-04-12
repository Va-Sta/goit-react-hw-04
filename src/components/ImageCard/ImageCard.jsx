// import css from "./ImageCard.module.css";

const ImageCard = ({ imgURL, imgAlt }) => {
  return (
    <div>
      <img src={imgURL} alt={imgAlt} />
    </div>
  );
};
export default ImageCard;
