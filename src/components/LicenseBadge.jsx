import React from 'react';
import './LicenseBadge.css';

function LicenseBadge() {
  return (
    <div
      className="license-badge"
      title="Site code: MIT License. HDRI environment: Poly Haven, CC0. Font & DRACO decoder bundled with three.js: MIT License."
    >
      <span>© 2026 Yulei Fu</span>
      <span className="license-sep">·</span>
      <a
        href="https://github.com/fuyu27/yulei-machine-shop/blob/main/LICENSE"
        target="_blank"
        rel="noopener noreferrer"
      >
        MIT License
      </a>
    </div>
  );
}

export default LicenseBadge;
