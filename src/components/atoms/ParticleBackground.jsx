import { useEffect, useRef } from 'react';
import styles from './ParticleBackground.module.css';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animFrame;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 10;
        this.size = Math.random() * 2 + 0.5;
        this.speedY = -(Math.random() * 1.2 + 0.3);
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.6 + 0.2;
        // Amber / Ember colors
        this.color = Math.random() > 0.3
          ? `rgba(255, 140, 0, ${this.opacity})` // Orange/Amber
          : `rgba(201, 168, 76, ${this.opacity})`; // Gold
        this.life = 0;
        this.maxLife = Math.random() * 400 + 300;
      }
      update() {
        this.x += this.speedX + (Math.sin(this.life * 0.02) * 0.2); // Wavy drift
        this.y += this.speedY;
        this.life++;
        if (this.life > this.maxLife || this.y < -10) this.reset();
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.life < 50
          ? this.life / 50
          : this.life > this.maxLife - 50
            ? (this.maxLife - this.life) / 50
            : 1;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    resize();
    for (let i = 0; i < 60; i++) {
      const p = new Particle();
      p.y = Math.random() * canvas.height; // Initial spread
      p.life = Math.floor(Math.random() * p.maxLife);
      particles.push(p);
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      animFrame = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className={styles.bgWrapper}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.gridOverlay} />
      <div className={styles.vignetteRadial} />
      <div className={styles.vignetteTop} />
      <div className={styles.vignetteBottom} />
    </div>
  );
}
