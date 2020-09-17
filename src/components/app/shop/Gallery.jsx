import React, { useState } from "react";

const Gallery = ({ item }) => {
  const [images, setImages] = useState([
    item.imageUrl,
    item.imageUrl,
    item.imageUrl,
    item.imageUrl,
  ]);
  const [mainImage, setMainImage] = useState(item.imageUrl);
  const [fadeClass, setFadeClass] = useState("");

  const onSetImage = (index) => {
    const copiedImages = images;
    const copiedMainImage = mainImage;
    copiedImages[index] = mainImage;
    setMainImage(copiedMainImage);
    setImages(copiedImages);
    setFadeClass("fade-in");
    setTimeout(() => setFadeClass(""), 500);
  };

  return (
    <div className="gallery-body">
      <div className="gallery-wrapper">
        <div className={`main-img ${fadeClass}`}>
          <img src={mainImage} alt="" id="current" />
        </div>
        <div className="imgs">
          {images.map((image, index) => (
            <img
              src={image}
              key={index}
              alt=""
              onClick={() => onSetImage(index)}
              className="pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
