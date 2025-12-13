import React from 'react';
import './SocialButtons.css';

function SocialButtons() {
  return (
    <div className="social-buttons-container">
      <div className="social-button">
        <a 
          href="https://linkedin.com/in/yulei-fu" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <button className="social-btn group">
            <div className="floater linkedin-floater"></div>
            <div className="icon linkedin-icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="social-path"
                  d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M8.5,19H6V10h2.5V19z M7.3,9 h-0.1C6.4,9,6,8.6,6,8.1V7.9c0-0.5,0.4-0.9,0.9-0.9h0.1C7.6,7,8,7.4,8,7.9v0.1C8,8.6,7.6,9,7.3,9z M19,19h-2.5v-4.9 c0-1.2-0.4-2-1.4-2c-0.8,0-1.3,0.6-1.5,1.2h-0.1V19H10V10h2.3v1.3h0C12.7,10.7,14,9.9,15.5,9.9c2.1,0,3.5,1.4,3.5,3.8V19z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </button>
        </a>
      </div>

      <div className="social-button">
        <a 
          href="https://github.com/fuyu27" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <button className="social-btn group">
            <div className="floater github-floater"></div>
            <div className="icon github-icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="social-path"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.17 6.839 9.481.5.092.683-.217.683-.481 0-.237-.009-.866-.013-1.699-2.782.603-3.37-1.338-3.37-1.338-.454-1.15-1.11-1.458-1.11-1.458-.906-.619.069-.606.069-.606 1.002.071 1.527 1.03 1.527 1.03.89 1.529 2.34 1.087 2.911.831.091-.645.348-1.087.634-1.338-2.22-.252-4.555-1.11-4.555-4.94 0-1.09.39-1.986 1.028-2.682-.103-.252-.446-1.268.098-2.642 0 0 .837-.268 2.75 1.024a9.563 9.563 0 012.496-.335 9.58 9.58 0 012.496.335c1.913-1.292 2.75-1.024 2.75-1.024.544 1.374.202 2.39.1 2.642.64.696 1.027 1.592 1.027 2.682 0 3.839-2.338 4.685-4.567 4.933.358.309.678.916.678 1.847 0 1.334-.012 2.412-.012 2.74 0 .267.18.577.688.481A12.01 12.01 0 0022 12c0-5.523-4.477-10-10-10z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </button>
        </a>
      </div>

      <div className="social-button">
        <a 
          href="https://www.kaggle.com/fuyu027" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <button className="social-btn group">
            <div className="floater kaggle-floater"></div>
            <div className="icon kaggle-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  className="social-path"
                  d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358"
                  fill="currentColor"
                />
              </svg>
            </div>
          </button>
        </a>
      </div>

      <div className="social-button">
        <a 
          href="mailto:yuleifu@umich.edu"
          className="social-link"
        >
          <button className="social-btn group">
            <div className="floater email-floater"></div>
            <div className="icon email-icon">
              <svg
                height="32"
                width="32"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="social-path"
                  d="M28 5H4c-1.104 0-2 .896-2 2v18c0 1.104.896 2 2 2h24c1.104 0 2-.896 2-2V7c0-1.104-.896-2-2-2zm0 4.879L16 18 4 9.879V7l12 8 12-8v2.879zM4 23V11.885l11.446 7.63c.269.18.594.274.921.274s.652-.094.92-.274L28 11.885V23H4z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
}

export default SocialButtons;
