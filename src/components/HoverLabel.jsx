import React from 'react';

export default function HoverLabel({ text, x, y }) {
  return (
    <div
      style={{
        position: 'fixed',
        left: `${x + 15}px`,
        top: `${y - 10}px`,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        color: '#233C67',
        padding: '0.5rem 1rem',
        borderRadius: '8px',
        fontSize: '0.9rem',
        fontWeight: '600',
        pointerEvents: 'none',
        zIndex: 9000,
        boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)',
        border: '2px solid #ffffff',
        whiteSpace: 'nowrap'
      }}
    >
      {text}
    </div>
  );
}
