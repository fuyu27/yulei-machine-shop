import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../data/resumeContent';

export default function InfoPanel({ onClose, contentKey }) {
  const content = CONTENT[contentKey];
  const [fullscreenImage, setFullscreenImage] = useState(null);

  if (!content) return null;

  // Special handling for resume display
  if (content.isResume) {
    return (
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10000,
        }}
      >
        {/* Brown clipboard background */}
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            position: 'relative',
            backgroundColor: '#6F4D38',
            borderRadius: '8px',
            padding: '2rem 1.5rem 1.5rem 1.5rem',
            maxWidth: '800px',
            width: '90%',
            maxHeight: '90vh',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
          }}
        >
          {/* Metal clipboard clip at top */}
          <div style={{
            position: 'absolute',
            top: '-8px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100px',
            height: '28px',
            backgroundColor: '#8b8b8b',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
            border: '2px solid #6b6b6b',
            zIndex: 2,
          }} />

          {/* Close button — pinned to the clipboard, not the scrollable PDF frame below */}
          <div
            onClick={onClose}
            style={{
              position: 'absolute',
              right: '1.25rem',
              top: '0.75rem',
              zIndex: 3,
              color: '#233C67',
              fontSize: '0.8rem',
              fontWeight: '600',
              cursor: 'pointer',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              padding: '0.35rem 0.75rem',
              borderRadius: '20px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            }}
          >
            ✕ close
          </div>

          {/* Inner white paper */}
          <div style={{
            backgroundColor: '#fffef8',
            borderRadius: '4px',
            padding: '2rem',
            height: '82vh',
            boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.05)',
            border: '1px solid #e8e5d8',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
          }}
          >
            <h2 style={{
              color: '#1e293b', 
              fontSize: '2rem', 
              marginBottom: '1.5rem',
              fontWeight: '700',
              marginTop: '0.5rem'
            }}>
              {content.title}
            </h2>

            <div style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '1.5rem',
              flexWrap: 'wrap',
            }}>
              <a
                href={content.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#233C67',
                  color: 'white',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  border: 'none',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#1a2d4d'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#233C67'}
              >
                📄 View Resume
              </a>
              <a
                href={content.resumePath}
                download
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#f87171',
                  color: 'white',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  border: 'none',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#dc2626'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#f87171'}
              >
                💾 Download PDF
              </a>
            </div>

            <div style={{
              flex: 1,
              backgroundColor: '#f8fafc',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '2px solid #e2e8f0',
              minHeight: '500px',
            }}>
              <iframe
                src={content.resumePath}
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
                title="Resume PDF"
              />
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10000,
      }}
    >
      {/* Brown clipboard background */}
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          position: 'relative',
          backgroundColor: '#6F4D38',
          borderRadius: '8px',
          padding: '2rem 1.5rem 1.5rem 1.5rem',
          maxWidth: '700px',
          width: '90%',
          maxHeight: '90vh',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
        }}
      >
        {/* Metal clipboard clip at top */}
        <div style={{
          position: 'absolute',
          top: '-8px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100px',
          height: '28px',
          backgroundColor: '#8b8b8b',
          borderRadius: '8px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
          border: '2px solid #6b6b6b',
          zIndex: 2,
        }} />

        {/* Close button — pinned to the clipboard, not the scrollable paper below */}
        <div
          onClick={onClose}
          style={{
            position: 'absolute',
            right: '1.25rem',
            top: '0.75rem',
            zIndex: 3,
            color: '#233C67',
            fontSize: '0.8rem',
            fontWeight: '600',
            cursor: 'pointer',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '0.35rem 0.75rem',
            borderRadius: '20px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
          }}
        >
          ✕ close
        </div>

        {/* Inner white paper */}
        <div style={{
          backgroundColor: '#fffef8',
          borderRadius: '4px',
          padding: '2.5rem',
          maxHeight: '82vh',
          overflowY: 'auto',
          boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.05)',
          border: '1px solid #e8e5d8',
          position: 'relative',
        }}
        >
        <h2 style={{
          color: '#1e293b', 
          fontSize: '2rem', 
          marginBottom: '1.5rem',
          fontWeight: '700',
          marginTop: '0.5rem'
        }}>
          {content.title}
        </h2>
        
        {/* Headshot image */}
        {content.headshot && (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1.5rem'
          }}>
            <img
              src={content.headshot}
              alt="Headshot"
              style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '4px solid #233C67',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
              }}
            />
          </div>
        )}
        
        {content.sections.map((section, idx) => (
          <div key={idx} style={{ marginBottom: '1.5rem' }}>
            {section.heading && (
              <h3 style={{ 
                color: '#334155', 
                fontSize: '1.1rem', 
                marginBottom: '0.75rem',
                fontWeight: '600'
              }}>
                {section.heading}
              </h3>
            )}
            {section.intro && (
              <p style={{
                color: '#475569',
                lineHeight: '1.7',
                marginBottom: '1rem',
                fontWeight: '500',
                fontSize: '1rem'
              }}>
                {section.intro}
              </p>
            )}
            {section.bullets && (
              <ul style={{ 
                color: '#475569', 
                paddingLeft: '1.5rem',
                lineHeight: '1.7',
                listStyleType: 'disc'
              }}>
                {section.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} style={{ 
                    marginBottom: '0.5rem',
                    fontWeight: '400'
                  }}>
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
        
        {/* Photo Gallery */}
        {content.photos && content.photos.length > 0 && (
          <div style={{ 
            marginTop: '2rem',
            marginBottom: '1.5rem'
          }}>
            <h3 style={{ 
              color: '#334155', 
              fontSize: '1.1rem', 
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              Gallery
            </h3>
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
              gap: '0.75rem'
            }}>
              {content.photos.map((photo, photoIdx) => (
                <div
                  key={photoIdx}
                  onClick={() => setFullscreenImage(photo)}
                  style={{
                    cursor: 'pointer',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      paddingBottom: '100%',
                      position: 'relative',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px 8px 0 0',
                      overflow: 'hidden',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.borderColor = '#233C67';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.borderColor = '#e2e8f0';
                    }}
                  >
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div style={{
                    padding: '0.4rem 0.5rem',
                    fontSize: '0.75rem',
                    color: '#64748b',
                    textAlign: 'center',
                    fontWeight: '500',
                    backgroundColor: '#f8fafc',
                    borderRadius: '0 0 8px 8px'
                  }}>
                    {photo.caption}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {content.chips && (
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '0.5rem',
            marginTop: '1.5rem',
            paddingTop: '1rem',
            borderTop: '2px solid #e2e8f0'
          }}>
            {content.chips.map((chip, chipIdx) => (
              <span 
                key={chipIdx}
                style={{
                  backgroundColor: '#233C67',
                  color: '#ffffff',
                  padding: '0.4rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '500'
                }}
              >
                {chip}
              </span>
            ))}
          </div>
        )}
        </div>
      </motion.div>
      
      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            setFullscreenImage(null);
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
            cursor: 'pointer',
            padding: '2rem'
          }}
        >
          <img
            src={fullscreenImage.src}
            alt={fullscreenImage.caption}
            style={{
              maxWidth: '90%',
              maxHeight: '85%',
              objectFit: 'contain',
              borderRadius: '8px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
            }}
          />
          <div style={{
            marginTop: '1.5rem',
            color: 'white',
            fontSize: '1.2rem',
            fontWeight: '500',
            textAlign: 'center',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
          }}>
            {fullscreenImage.caption}
          </div>
        </div>
      )}
    </div>
  );
}
