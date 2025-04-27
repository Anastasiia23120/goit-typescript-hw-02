import type React from "react";
import css from "./ImageCard.module.css";
import type { ImageCardProps } from "../../types/ImageCard.types";

const ImageCard: React.FC<ImageCardProps> = ({
  image,
  alt,
  likes,
  userName,
  onClick,
}) => {
  return (
    <div className={css.imageCard}>
      <img
        className={css.imageItem}
        src={image || "/placeholder.svg"}
        alt={alt}
        onClick={onClick}
      />
      <div className={css.infoContainer}>
        <p className={css.info}>Likes: {likes}</p>
        <p className={css.info}>Uploaded by: {userName}</p>
      </div>
    </div>
  );
};

export default ImageCard;
