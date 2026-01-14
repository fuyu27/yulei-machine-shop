import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './TutorialOverlay.css';

const TutorialOverlay = ({ isVisible, onDismiss }) => {
  const handleDismiss = () => {
    onDismiss();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="tutorial-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleDismiss}
        >
          <motion.div
            className="tutorial-card"
            initial={{ scale: 0.9, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="tutorial-sections">
              {/* Mouse Section */}
              <div className="tutorial-section">
                <div className="tutorial-header">
                  <div className="mouse-icon">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="14" y="8" width="20" height="32" rx="10" stroke="#1f2937" strokeWidth="2" fill="#f8fafc"/>
                      <line x1="24" y1="8" x2="24" y2="40" stroke="#e5e7eb" strokeWidth="2"/>
                      <circle cx="24" cy="18" r="3" fill="#9ca3af"/>
                      <path d="M24 18V24" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3 className="tutorial-title">Mouse</h3>
                </div>
                <div className="tutorial-body">
                  <div className="tutorial-item">
                    <span className="tutorial-label">Rotate:</span>
                    <span className="tutorial-value">Left-click + drag</span>
                  </div>
                  <div className="tutorial-item">
                    <span className="tutorial-label">Pan:</span>
                    <span className="tutorial-value">Right-click + drag</span>
                  </div>
                  <div className="tutorial-item">
                    <span className="tutorial-label">Zoom:</span>
                    <span className="tutorial-value">Scroll</span>
                  </div>
                </div>
              </div>

              {/* Trackpad Section */}
              <div className="tutorial-section">
                <div className="tutorial-header">
                  <div className="trackpad-icon">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="10" y="14" width="28" height="20" rx="2" stroke="#1f2937" strokeWidth="2" fill="#f8fafc"/>
                      <line x1="24" y1="14" x2="24" y2="34" stroke="#e5e7eb" strokeWidth="1.5"/>
                      <circle cx="18" cy="24" r="2" fill="#9ca3af"/>
                      <circle cx="30" cy="24" r="2" fill="#9ca3af"/>
                    </svg>
                  </div>
                  <h3 className="tutorial-title">Trackpad</h3>
                </div>
                <div className="tutorial-body">
                  <div className="tutorial-item">
                    <span className="tutorial-label">Rotate:</span>
                    <span className="tutorial-value">Hold + drag</span>
                  </div>
                  <div className="tutorial-item">
                    <span className="tutorial-label">Pan:</span>
                    <span className="tutorial-value">Two fingers + drag</span>
                  </div>
                  <div className="tutorial-item">
                    <span className="tutorial-label">Zoom:</span>
                    <span className="tutorial-value">Pinch or scroll</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="tutorial-footer">
              Click anywhere to dismiss
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TutorialOverlay;
