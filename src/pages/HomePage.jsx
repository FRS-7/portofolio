import { useEffect, useRef, useCallback, useState } from 'react';
import Navbar from '../components/organisms/Navbar';
import Footer from '../components/organisms/Footer';
import HeroSection from '../components/organisms/HeroSection';
import AboutSection from '../components/organisms/AboutSection';
import SkillsSection from '../components/organisms/SkillsSection';
import ProjectsSection from '../components/organisms/ProjectsSection';
import CVSection from '../components/organisms/CVSection';
import ContactSection from '../components/organisms/ContactSection';
import ParticleBackground from '../components/atoms/ParticleBackground';
import SideNav from '../components/molecules/SideNav';

const SECTIONS = ['hero', 'about', 'skills', 'projects', 'cv', 'contact'];

function useFullPage() {
  const [current, setCurrent] = useState(0);
  const isAnimating = useRef(false);
  const containerRef = useRef(null);
  const touchStartY = useRef(null);

  const goTo = useCallback((index) => {
    if (index < 0 || index >= SECTIONS.length || isAnimating.current) return;
    isAnimating.current = true;
    setCurrent(index);
    setTimeout(() => { isAnimating.current = false; }, 900);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Wheel
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e) => {
      e.preventDefault();
      if (e.deltaY > 30) next();
      else if (e.deltaY < -30) prev();
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [next, prev]);

  // Touch
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onTouchStart = (e) => { touchStartY.current = e.touches[0].clientY; };
    const onTouchEnd = (e) => {
      if (touchStartY.current === null) return;
      const delta = touchStartY.current - e.changedTouches[0].clientY;
      if (delta > 40) next();
      else if (delta < -40) prev();
      touchStartY.current = null;
    };
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, [next, prev]);

  // Keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); next(); }
      if (e.key === 'ArrowUp' || e.key === 'PageUp') { e.preventDefault(); prev(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  return { current, goTo, containerRef };
}

export default function HomePage() {
  const { current, goTo, containerRef } = useFullPage();

  return (
    <div
      ref={containerRef}
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <ParticleBackground />
      <Navbar currentSection={SECTIONS[current]} onNavClick={(id) => goTo(SECTIONS.indexOf(id))} />
      <SideNav sections={SECTIONS} current={current} goTo={goTo} />

      {/* Sliding Panels */}
      <div
        style={{
          width: '100%',
          height: '100%',
          transform: `translateY(-${current * 100}%)`,
          transition: 'transform 0.85s cubic-bezier(0.77, 0, 0.175, 1)',
          willChange: 'transform',
        }}
      >
        <div style={{ height: '100vh', overflow: 'hidden', position: 'relative' }}><HeroSection /></div>
        <div style={{ height: '100vh', overflow: 'hidden auto', position: 'relative' }}><AboutSection /></div>
        <div style={{ height: '100vh', overflow: 'hidden auto', position: 'relative' }}><SkillsSection /></div>
        <div style={{ height: '100vh', overflow: 'hidden auto', position: 'relative' }}><ProjectsSection /></div>
        <div style={{ height: '100vh', overflow: 'hidden', position: 'relative' }}><CVSection /></div>
        <div style={{ height: '100vh', overflow: 'hidden', position: 'relative' }}><ContactSection /><Footer /></div>
      </div>

      {/* Page progress indicator bottom */}
      <div style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '8px',
        zIndex: 100,
      }}>
        {SECTIONS.map((s, i) => (
          <button
            key={s}
            onClick={() => goTo(i)}
            style={{
              width: i === current ? '28px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: i === current ? '#c9a84c' : 'rgba(201,168,76,0.25)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              boxShadow: i === current ? '0 0 10px rgba(201,168,76,0.7)' : 'none',
              padding: 0,
            }}
            aria-label={`Go to ${s}`}
          />
        ))}
      </div>
    </div>
  );
}
