import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./wedding-details.css";

export default function WeddingDetails() {
  const navigate = useNavigate();
const preWeddingEvents = [
    {
      id: 1,
      name: "Haldi Ceremony",
      icon: "🟡",
      description: "Turmeric blessings and golden moments",
      driveLink: "https://drive.google.com/drive/folders/YOUR_HALDI_FOLDER_ID",
      color: "#FFD700",
      image: "/images/haldi-preview.jpg"
    },
    {
      id: 2,
      name: "Mehndi Night",
      icon: "🌺",
      description: "Intricate henna and vibrant celebrations",
      driveLink: "https://drive.google.com/drive/folders/YOUR_MEHNDI_FOLDER_ID", 
      color: "#E91E63",
      image: "/images/mehndi-preview.jpg"
    },
    {
      id: 3,
      name: "Sangeet",
      icon: "💃",
      description: "Music, dance and joyful performances",
      driveLink: "https://drive.google.com/drive/folders/YOUR_SANGEET_FOLDER_ID",
      color: "#9C27B0",
      image: "/images/sangeet-preview.jpg"
    },
    {
      id: 5,
      name: "Engagement",
      icon: "💍",
      description: "The beginning of our promise",
      driveLink: "https://drive.google.com/drive/folders/1KLwsVkWX0wKm5GzRybK1RoSg14DQastU",
      color: "#FF9800",
      image: "/images/YJP_7163.JPG"
    },
    {
      id: 6,
      name: "Pooja & Rituals",
      icon: "🕉️",
      description: "Sacred ceremonies and family blessings",
      driveLink: "https://drive.google.com/drive/folders/1dNcPE63nB3NM5wWu31BOkIQN_gQPCkDr?usp=drive_link",
      color: "#4CAF50",
      image: "YJP_5464.jpg"
    }
  ];

  const handleDriveClick = (link: string, eventName: string) => {
    // Open in new tab
    window.open(link, '_blank');
    
    // Optional: Add analytics or tracking here
    console.log(`Opening ${eventName} gallery`);
  };

  return (
    <motion.div
      className="wedding-premium-container"
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      
      
      
      {/* Back Button */}
      <button className="premium-back-btn" onClick={() => navigate("/journey")}>
        <span>‹</span> Back to Journey
      </button>

      {/* Main Content */}
      <div className="premium-card">
        {/* Hero Section with Couple Photo */}
        <div className="hero-section">
          <div className="couple-photo-frame">
            <img 
              src="/images/couple.jpg" 
              alt="Priyanka & Aniket" 
              className="couple-photo"
            />
            <div className="photo-glow"></div>
          </div>
          <div className="hero-text">
            <div className="wedding-badge">Wedding Celebration</div>
            <h1 className="premium-title">
              Priyanka <span className="gold-heart">💫</span> Aniket
            </h1>
            <div className="wedding-date-glow">
              <span className="date-number">02</span>
              <span className="date-rest">December 2025</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline-section">
          <div className="section-header">
            <div className="section-icon">⏳</div>
            <h2>Celebration Timeline</h2>
          </div>
          
          <div className="premium-timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-time">11:30 AM</div>
                <div className="timeline-event">Baraat Procession</div>
                <div className="timeline-desc">Grand entrance with traditional music</div>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-time">12:00 PM</div>
                <div className="timeline-event">Vivah Ceremony</div>
                <div className="timeline-desc">Sacred wedding rituals & pheras</div>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-time">01:30 PM</div>
                <div className="timeline-event">Wedding Lunch</div>
                <div className="timeline-desc">Grand reception with family & friends</div>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-time">04:00 PM</div>
                <div className="timeline-event">Vidaai Ceremony</div>
                <div className="timeline-desc">Emotional farewell with blessings</div>
              </div>
            </div>
          </div>
        </div>

        {/* Venue Section */}
        <div className="venue-section">
          <div className="section-header">
            <div className="section-icon">🏰</div>
            <h2>The Venue</h2>
          </div>
          
          <div className="venue-card">
            <div className="venue-image">
              <img src="/images/venue.jpeg" alt="Wedding Venue" />
              <div className="venue-overlay">
                <div className="venue-name">Baramati Club</div>
                <div className="venue-address">
                  Bhigwan Road<br />
                  Baramati, Maharashtra 413133
                </div>
              </div>
            </div>
            
            <div className="venue-features">
              <div className="feature">
                <span className="feature-icon">🎯</span>
                <span>Central Location</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🅿️</span>
                <span>Ample Parking</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🌿</span>
                <span>Garden Area</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🎪</span>
                <span>Grand Setup</span>
              </div>
            </div>
          </div>
        </div>

        {/* NEW: Pre-Wedding Gallery Section */}
        <div className="gallery-section">
          <div className="section-header">
            <div className="section-icon">🖼️</div>
            <h2>Pre-Wedding Celebrations</h2>
          </div>
          
          <p className="gallery-intro">
            Relive the beautiful moments from our pre-wedding functions. 
            Click on any event to view the complete photo gallery.
          </p>

          <div className="events-grid">
            {preWeddingEvents.map((event) => (
              <div 
                key={event.id}
                className="event-card"
                onClick={() => handleDriveClick(event.driveLink, event.name)}
                style={{ '--event-color': event.color } as React.CSSProperties}
              >
                <div className="event-image">
                  <img src={event.image} alt={event.name} />
                  <div className="event-overlay">
                    <div className="event-icon">{event.icon}</div>
                    <div className="view-gallery">
                      <span>View Gallery</span>
                      <div className="arrow">→</div>
                    </div>
                  </div>
                </div>
                
                <div className="event-content">
                  <h3 className="event-name">{event.name}</h3>
                  <p className="event-desc">{event.description}</p>
                  <div className="event-badge" style={{ backgroundColor: event.color }}>
                    Google Drive Gallery
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="drive-notice">
            <div className="notice-icon">📁</div>
            <p>
              All photos are hosted on Google Drive. You can view, download, 
              and share your favorite moments from each function.
            </p>
          </div>
        </div>


        {/* Final Blessing */}
        <div className="blessing-section">
          <div className="blessing-content">
            <div className="blessing-icon">✨</div>
            <h3>Our hearts overflow with joy as we invite you to witness the beginning of our forever</h3>
            <p className="blessing-names">
                
              <span className="signature-names">Priyanka & Aniket</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}