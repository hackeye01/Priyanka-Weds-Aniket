import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./journey.css";

// Photo data structure
const journeyPhotos = [
  { id: 1, src: "/images/sample1.jpeg", caption: "The beginning of our joy", decade: "Childhood" },
  { id: 2, src: "/images/sample2.jpeg", caption: "Surrounded by love", decade: "Childhood" },
  // Add more photos as needed
];

export default function Journey() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const navigate = useNavigate();

  // Auto-advance photos every 4 seconds
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentPhoto((prev) => {
        if (prev >= journeyPhotos.length - 1) {
          clearInterval(timer);
          setTimeout(() => navigate("/wedding-details"), 3000);
          return prev;
        }
        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [isPlaying, navigate]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSkip = () => {
    navigate("/wedding-details");
  };

  return (
    <div className="journey-container">
      {/* Photo Display */}
      <div className="photo-container">
        {journeyPhotos.map((photo, index) => (
          <div
            key={photo.id}
            className={`photo-slide ${index === currentPhoto ? "active" : ""} ${
              index < currentPhoto ? "previous" : ""
            }`}
          >
            <img src={photo.src} alt={photo.caption} />
            <div className="photo-overlay">
              <div className="decade-badge">{photo.decade}</div>
              <div className="photo-caption">{photo.caption}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="progress-container">
        <div 
          className="progress-bar" 
          style={{ width: `${((currentPhoto + 1) / journeyPhotos.length) * 100}%` }}
        />
      </div>

      {/* Simplified Controls */}
      <div className="journey-controls">
        <button onClick={handlePlayPause}>
          {isPlaying ? "⏸️ Pause" : "▶️ Play"}
        </button>
        <button onClick={handleSkip}>Continue →</button>
      </div>

      {/* Timeline Indicator */}
      <div className="timeline">
        {journeyPhotos.map((_, index) => (
          <div
            key={index}
            className={`timeline-dot ${index <= currentPhoto ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}