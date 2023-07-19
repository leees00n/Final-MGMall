import React from "react";
import "./ImageButton.css"; // 스타일 파일 (선택사항)

interface ImageButtonProps {
  onClick: () => void;
  imageSrc: string;
  altText: string;
}

const ImageButton: React.FC<ImageButtonProps> = ({ onClick, imageSrc, altText }) => {
  return (
    <button className="image-button" onClick={onClick}>
      <img src={imageSrc} alt={altText} className="image-button-image" />
    </button>
  );
};
