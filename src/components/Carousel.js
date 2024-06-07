import React, { useEffect, useState } from 'react';
import './Carousel.css';

// Example: Correct image paths for public folder
const images = [
  'IMG_4054.jpg',
  'IMG_4071.jpg',
  'IMG_4091.jpg',
  'IMG_4116.jpg',
  'IMG_4165.jpg',
  'IMG_4338.jpg',
  'IMG_4094.jpg'
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Carousel ${index}`}
          className={`carousel-image ${currentImageIndex === index ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default Carousel;
