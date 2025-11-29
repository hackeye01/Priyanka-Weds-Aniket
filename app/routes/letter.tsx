import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./letter.css";

export default function LetterPage() {
  const [showToast, setShowToast] = useState(true);  // 🔔 alert visible at start
  const [isOpen, setIsOpen] = useState(false);       // envelope open/closed
  const navigate = useNavigate();

  const handleEnvelopeButtonClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      navigate("/journey");
    }
  };

  const handleToastOk = () => {
    setShowToast(false);
  };

  // build classes for wrapper based on state
  const wrapperClasses = [
    "envelope-wrapper",
    showToast ? "envelope-wrapper--hidden" : "envelope-wrapper--show",
    isOpen && "envelope-wrapper--open",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`letter-page ${isOpen ? "letter-page--open" : ""}`}>
      {/* ✅ CENTER TOAST / ALERT */}
      {showToast && (
        <div className="letter-toast">
          <div className="letter-toast-icon">⚠️</div>
          <div className="letter-toast-text">
            <div className="toast-main">Before we begin, there is a message…</div>
          </div>
          <button className="toast-btn" onClick={handleToastOk}>
            OK
          </button>
        </div>
      )}

      {/* ✉️ ENVELOPE + LETTER */}
      <div className={wrapperClasses}>
        <div className="envelope-3d">
          <div className="envelope-back" />
          <div className="envelope-flap" />
          <div className="envelope-front" />
          <div className="wax-seal">P&amp;A</div>

          <div className="envelope-letter">
            <div className="letter-body">
              <span className="letter-line letter-line1">दीदी,</span>
              <span className="letter-line letter-line2">
                तुझं हसणं, तुझी माया, तुझी काळजी…
              </span>
              <span className="letter-line letter-line3">
                हे आपल्या घरात नेहमी प्रेम आणि आपुलकी होती.
              </span>
              <span className="letter-line letter-line4">
                आता ते कुणाच्या आयुष्याची सोबत बनणार आहे.
              </span>
            </div>
          </div>

          <div className="letter-photo-card">
            <img src="/images/siblings.jpg" alt="Siblings together" />
          </div>
        </div>
      </div>

      {/* 🔘 MAIN BUTTON */}
      <button className="envelope-btn" onClick={handleEnvelopeButtonClick}>
        {isOpen ? "📖 Begin the Story" : "💌 Open the Letter"}
      </button>
    </div>
  );
}
