import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, RotateCw, ZoomIn, Info } from 'lucide-react';
import { models3D } from '../data/portfolioData';
import ModelViewer from '../components/molecules/ModelViewer';
import styles from './Gallery3DPage.module.css';

export default function Gallery3DPage() {
  const [selectedModel, setSelectedModel] = useState(models3D[0]);
  const navigate = useNavigate();

  // Sync state if models3D changes (useful for HMR during development)
  React.useEffect(() => {
    if (!models3D.find(m => m.id === selectedModel.id)) {
      setSelectedModel(models3D[0]);
    }
  }, [models3D, selectedModel]);

  return (
    <div className={styles.page}>
      <div className="rune-bg" aria-hidden="true" />

      {/* Header HUD */}
      <header className={styles.header}>
        <button className={styles.backBtn} onClick={() => navigate('/')}>
          <ChevronLeft size={16} />
          <span>Return to Sanctuary</span>
        </button>
        <div className={styles.logo}>
          <span className={styles.logoText}>ARCHIVES</span>
          <span className={styles.logoSub}>.3D</span>
        </div>
      </header>

      {/* Main Layout */}
      <div className={styles.container}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className="corner-bracket tl" />
          <div className="corner-bracket bl" />
          
          <div className={styles.sidebarHeader}>
            <h2 className={styles.sidebarTitle}>Blender Artifacts</h2>
            <p className={styles.sidebarDesc}>Select an object from the reliquary to inspect in real-time.</p>
          </div>

          <div className={styles.modelList}>
            {models3D.map((model) => (
              <button
                key={model.id}
                className={`${styles.modelItem} ${selectedModel.id === model.id ? styles.activeItem : ''}`}
                onClick={() => setSelectedModel(model)}
              >
                <span className={styles.itemIcon}>⬡</span>
                <div className={styles.itemInfo}>
                  <span className={styles.itemName}>{model.name}</span>
                  <span className={styles.itemDesc}>{model.description}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Interactive Help Card */}
          <div className={styles.helpCard}>
            <h4 className={styles.helpTitle}>
              <Info size={14} />
              <span>Inspection Controls</span>
            </h4>
            <ul className={styles.helpList}>
              <li>
                <RotateCw size={12} />
                <span>Drag to rotate the artifact</span>
              </li>
              <li>
                <ZoomIn size={12} />
                <span>Scroll wheel to magnify / zoom</span>
              </li>
            </ul>
          </div>
        </aside>

        {/* 3D Viewport Panel */}
        <main className={styles.viewportPanel}>
          <div className="corner-bracket tl" />
          <div className="corner-bracket tr" />
          <div className="corner-bracket bl" />
          <div className="corner-bracket br" />

          {/* HUD details inside viewport */}
          <div className={styles.viewportHeader}>
            <span className={styles.statusDot}>●</span>
            <span className={styles.modelStatus}>Artifact: {selectedModel.name}</span>
          </div>

          {/* Model Display */}
          <div className={styles.canvasContainer}>
              <ModelViewer 
                modelUrl={selectedModel.file} 
                name={selectedModel.name} 
                transform={selectedModel}
              />
          </div>

          <div className={styles.viewportFooter}>
            <p className={styles.modelDetailDesc}>{selectedModel.description}</p>
          </div>
        </main>
      </div>
    </div>
  );
}
