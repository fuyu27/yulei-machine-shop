import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import ModelViewer from './components/ModelViewer';
import './App.css';

function App() {
  return (
    <div>
      <ModelViewer />
      <Analytics />
    </div>
  );
}

export default App;
