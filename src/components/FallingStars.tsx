import { useEffect, useState } from "react";

const FallingStars = () => {
  const [stars, setStars] = useState<any[]>([]);

  useEffect(() => {
    const numberOfStars = 30; // Number of stars to show
    const starsArray = [];

    // Create stars with randomized properties
    for (let i = 0; i < numberOfStars; i++) {
      const size = Math.random() * 2 + 3; // Random size between 1px and 3px
      const speed = Math.random() * 1 + 0.5; // Random speed between 0.5 and 1.5
      const positionX = Math.random() * 100; // Random horizontal position (percentage)
      const positionY = Math.random() * 100; // Random vertical position (percentage)
      const opacity = Math.random() * 0.5 + 0.3; // Random opacity between 0.3 and 0.8

      starsArray.push({
        id: i,
        size,
        speed,
        positionX,
        positionY,
        opacity,
      });
    }

    setStars(starsArray);

    // Animation via interval to simulate falling effect
    const interval = setInterval(() => {
      setStars((prevStars) => {
        return prevStars.map((star) => ({
          ...star,
          positionY: (star.positionY + star.speed) % 100, // Reset position when off-screen
        }));
      });
    }, 50);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute left-0 top-0 z-0 h-full w-full overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-black dark:bg-white"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.positionY}%`,
            left: `${star.positionX}%`,
            opacity: star.opacity,
            animation: `falling ${star.speed + 3}s linear infinite`, // Set a duration based on speed for variance
          }}
        ></div>
      ))}
    </div>
  );
};

export default FallingStars;
