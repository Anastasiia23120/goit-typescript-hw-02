"use client";

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
    <div className={css.imageCard} onClick={onClick}>
      <img
        className={css.imageItem}
        src={image !== null ? image : "/placeholder.svg"}
        alt={alt ?? "Image"}
      />
      <div className={css.infoContainer}>
        <p className={css.userName}>{userName}</p>
        <p className={css.likes}>
          <span className={css.heartIcon}>♥</span> {likes}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
