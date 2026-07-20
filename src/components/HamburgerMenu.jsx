import React, { useState } from 'react';
import { LABELS } from '../data/resumeContent';
import './HamburgerMenu.css';

// Order of items in the dropdown; keys must match ix_ hotspot names in resumeContent.js.
const MENU_ITEMS = [
  'ix_yuleibot',
  'ix_resume',
  'ix_mbot',
  'ix_embedded',
  'ix_FRC',
  'ix_toolbench',
  'ix_progress_plant',
  'ix_frames',
];

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const openPanel = (key) => {
    setIsOpen(false);
    window.dispatchEvent(new CustomEvent('openInfoPanel', { detail: key }));
  };

  return (
    <>
      <div className="hamburger-container">
        <input
          type="checkbox"
          id="checkbox"
          checked={isOpen}
          onChange={(e) => setIsOpen(e.target.checked)}
        />
        <label htmlFor="checkbox" className="toggle">
          <div className="bars" id="bar1"></div>
          <div className="bars" id="bar2"></div>
          <div className="bars" id="bar3"></div>
        </label>
      </div>

      {isOpen && (
        <>
          <div className="menu-backdrop" onClick={() => setIsOpen(false)} />
          <nav className="menu-dropdown">
            {MENU_ITEMS.map((key) => (
              <button key={key} className="menu-item" onClick={() => openPanel(key)}>
                {LABELS[key]}
              </button>
            ))}
            <div className="menu-divider" />
            <button
              className="menu-item"
              onClick={() => {
                setIsOpen(false);
                window.dispatchEvent(new CustomEvent('openContactForm'));
              }}
            >
              Send Me an Email
            </button>
          </nav>
        </>
      )}
    </>
  );
}
