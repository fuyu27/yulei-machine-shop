import React, { useState } from 'react';
import './HamburgerMenu.css';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="menu-dropdown" onClick={() => setIsOpen(false)}>
          <div className="menu-content" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="menu-header">
              <h2>Yulei Fu</h2>
              <p className="menu-subtitle">Robotics Engineer & Software Developer</p>
            </div>

            {/* About Section */}
            <div className="menu-section">
              <h3>About Me</h3>
              <p>
                B.S. in Robotics Engineering and Computer Science<br />
                University of Michigan, Engineering Honors College<br />
                GPA: 3.40/4.00 | Expected Graduation: April 2027
              </p>
            </div>

            {/* Contact Section */}
            <div className="menu-section">
              <h3>Contact</h3>
              <p>
                📧 <a href="mailto:yuleifu@umich.edu">yuleifu@umich.edu</a><br />
                📱 <a href="tel:734-239-4771">734-239-4771</a>
              </p>
            </div>

            {/* Experience Section */}
            <div className="menu-section">
              <h3>Experience</h3>
              <ul>
                <li><strong>Amazon Robotics</strong> - Embedded Software Engineer Co-Op (Jan 2025 - June 2025)</li>
                <li><strong>U-M Robotics Institute</strong> - Teaching Assistant (Sept 2025 - Dec 2025)</li>
                <li><strong>Stirling Research Group</strong> - Software Intern (Nov 2024 - Jan 2025)</li>
                <li><strong>FIRST Robotics Team 3322</strong> - Team Captain (May 2021 - Jun 2023)</li>
              </ul>
            </div>

            {/* Skills Section */}
            <div className="menu-section">
              <h3>Skills</h3>
              <div className="skills-grid">
                <div>
                  <strong>Languages:</strong> C/C++, Python, JavaScript, Julia, MATLAB, Bash
                </div>
                <div>
                  <strong>Frameworks:</strong> ROS, scikit-learn, NumPy, React, Three.js
                </div>
                <div>
                  <strong>Technologies:</strong> AWS, IoT, MQTT, SLAM, Docker, Multithreading, Yocto, D-Bus
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="menu-section">
              <h3>Connect With Me</h3>
              <button 
                className="contact-form-button"
                onClick={() => {
                  setIsOpen(false);
                  window.dispatchEvent(new CustomEvent('openContactForm'));
                }}
              >
                📧 Send Me an Email
              </button>
              <div className="card">
                <a href="https://github.com/fuyu27" target="_blank" rel="noopener noreferrer" className="social-link1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor">
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/yulei-fu" target="_blank" rel="noopener noreferrer" className="social-link2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
                  </svg>
                </a>
                <a href="https://www.kaggle.com/fuyu027" target="_blank" rel="noopener noreferrer" className="social-link3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor">
                    <path d="M304.2 501.5L158.4 320.3 298.2 185c2.6-2.7 1.7-10.5-5.3-10.5h-69.2c-3.5 0-7 1.8-10.5 5.3L80.9 313.5V7.5q0-7.5-7.5-7.5H21.5Q14 0 14 7.5v497q0 7.5 7.5 7.5h51.9q7.5 0 7.5-7.5v-109l30.8-29.3 110.5 140.6c3 3.5 6.5 5.3 10.5 5.3h66.9q5.25 0 6-3z"/>
                  </svg>
                </a>
                <a href="mailto:yuleifu@umich.edu" className="social-link4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
