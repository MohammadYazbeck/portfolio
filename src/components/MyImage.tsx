import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface MyImageProps {
  image: string;
  index: number;
  className?: string;
}

const MyImage: React.FC<MyImageProps> = ({ image, index, className }) => {
  return (
    <LazyLoadImage
      alt={`Slide ${index + 1}`}
      effect="blur"
      className={className}
      src={image}
      visibleByDefault={false}
    />
  );
};

export default MyImage;
