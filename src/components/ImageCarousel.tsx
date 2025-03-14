import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Default Carousel styles
import MyImage from "./MyImage";

interface ImageCarouselProps {
  images: string[]; // Array of image URLs
  height?: number | string; // Carousel height in pixels or percentage
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  height = "100%",
}) => {
  return (
    <div className="relative w-full">
      <Carousel
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        useKeyboardArrows
        emulateTouch
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              className="absolute left-3 top-1/2 z-10 h-8 w-8 -translate-y-1/2 transform rounded-full bg-black/40 p-3 py-1 text-white hover:bg-black sm:left-14 sm:h-12 sm:w-12 dark:bg-gray-800/30 dark:hover:bg-gray-900"
            >
              ❮
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              className="absolute right-3 top-1/2 z-10 h-8 w-8 -translate-y-1/2 transform rounded-full bg-black/40 p-3 py-1 text-white hover:bg-black sm:right-14 sm:h-12 sm:w-12 dark:bg-gray-800/30 dark:hover:bg-gray-900"
            >
              ❯
            </button>
          )
        }
      >
        {images.map((image, index) => (
          <div key={index} className="flex w-full object-contain sm:p-4">
            <MyImage
              index={index}
              image={image}
              className={`w-full object-contain ${
                typeof height === "string" ? `h-[${height}]` : `h-[${height}px]`
              }`}
            />
            {/* <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={`w-full object-contain ${
                typeof height === "string" ? `h-[${height}]` : `h-[${height}px]`
              }`}
              loading="lazy"
            /> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
