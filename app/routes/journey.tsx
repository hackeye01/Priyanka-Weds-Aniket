import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./journey.css";

// Photo data structure
// Childhood photos are real; later stages are placeholders you can update with final images
const journeyPhotos = [
  // Childhood – real journey of Priya
  {
    id: 1,
    src: "/images/Priya didi Journey/1.jpg", 
    caption: "Tiny Priya, held close in everyone’s arms – the beginning of a beautiful story.",
    
  },
  {
    id: 2,
    src: "/images/Priya didi Journey/2.jpg", 
    caption: "Innocent smiles, playful eyes and a home filled with her laughter.",
    
  },
  {
    id: 3,
    src: "/images/Priya didi Journey/3.JPG", 
    caption: "Little moments, big memories – the family’s princess growing day by day.",
    
  },
  {
    id: 4,
    src: "/images/Priya didi Journey/4.JPG",
    caption: "School days, tiny bag and big dreams – Priya stepping out into the world.",
    
  },
  {
    id: 5,
    src: "/images/Priya didi Journey/5.jpg",
    caption: "All dressed up for family functions, stealing the show with her innocent charm.",
    
  },
  {
    id: 6,
    src: "/images/Priya didi Journey/6.jpg",
    caption: "From a little princess to a graceful young girl – every year adding more memories.",
    
  },

  // College – placeholder (update src later)
  {
    id: 101,
    src: "/images/placeholder-college.jpg", 
    caption: "From a shy daughter to a confident young woman, building her own dreams.",
    
  },

  // Engagement – placeholder (update src later)
  {
    id: 201,
    src: "/images/YJP_7163.JPG", // TODO: change to engagement photo of Priya & Aniket
    caption: "Two hearts, one promise – the day Priya and Aniket chose each other forever.",
    
  },

  // Wedding – placeholder (update src later)
  {
    id: 301,
    src: "/images/couple1.jpg", // TODO: change to Priya's wedding day photo
    caption: "All the love, prayers and years of memories leading to her grand bridal entry.",
    
  },
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