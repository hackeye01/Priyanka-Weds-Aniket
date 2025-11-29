import { useState } from "react";
import { useNavigate } from "react-router";
import "./blessings.css";

// Define the type for family members
type FamilyMember = {
  id: number;
  name: string;
  videoUrl: string;
  position: { top: string; left: string };
};

// We'll use placeholder data for now
const familyMembers: FamilyMember[] = [
  { id: 1, name: "Mother", videoUrl: "/videos/mother.mp4", position: { top: "20%", left: "30%" } },
  { id: 2, name: "Father", videoUrl: "/videos/father.mp4", position: { top: "25%", left: "70%" } },
  { id: 3, name: "Brother", videoUrl: "/videos/brother.mp4", position: { top: "60%", left: "20%" } },
  { id: 4, name: "Sister", videoUrl: "/videos/sister.mp4", position: { top: "55%", left: "80%" } },
];

export default function BlessingsTree() {
  const [selectedBlessing, setSelectedBlessing] = useState<FamilyMember | null>(null);
  const navigate = useNavigate();

  const handleBlessingClick = (member: FamilyMember) => {
    setSelectedBlessing(member);
  };

  const closeBlessing = () => {
    setSelectedBlessing(null);
  };

  return (
    <div className="blessings-container">
      {/* Starry Night Background */}
      <div className="starry-sky">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="star" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`
          }} />
        ))}
      </div>

      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate("/letter")}>
        ← Back
      </button>

      {/* Title */}
      <h1 className="blessings-title">Family Blessings</h1>

      {/* Tree Container */}
      <div className="tree-container">
        <div className="blessings-tree">
          {/* Tree will be here - we'll add SVG or image */}
          <div className="tree-trunk"></div>
          <div className="tree-canopy"></div>
          
          {/* Blessing Fruits */}
          {familyMembers.map((member) => (
            <div
              key={member.id}
              className="blessing-fruit"
              style={member.position}
              onClick={() => handleBlessingClick(member)}
            >
              <div className="fruit-glow"></div>
              <span className="fruit-name">{member.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedBlessing && (
        <div className="blessing-modal">
          <div className="modal-content">
            <button className="close-btn" onClick={closeBlessing}>×</button>
            <h3>{selectedBlessing.name}'s Blessing</h3>
            <div className="video-placeholder">
              <p>🎥 {selectedBlessing.name}'s video message will play here</p>
              <p>Replace with actual video: {selectedBlessing.videoUrl}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}