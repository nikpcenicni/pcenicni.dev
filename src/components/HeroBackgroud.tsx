import React, { useState, useRef, useEffect } from 'react';
import Particles from 'react-tsparticles'; // particle effect library

const HeroBackground = ({ backgroundColor, backgroundImage }) => {
    const [canvasReady, setCanvasReady] = useState(false);
  const canvasRef = useRef(null);

  // Configure the particle effect
  const particleOptions = {
    background: {
      color: {
        value: backgroundColor
      }
    },
    particles: {
      color: {
        value: '#ffffff'
      },
      shape: {
        type: 'circle'
      },
      move: {
        enable: true,
        speed: 3,
        direction: 'none',
        random: true,
        straight: false,
        outModes: {
          default: 'out'
        }
      },
      size: {
        value: 3,
        random: true
      },
      opacity: {
        value: 0.5,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: false
      }
    },
    detectRetina: true
  };

  useEffect(() => {
    if (canvasReady) {
      // Get the canvas element
      const canvas = canvasRef.current;

      // Set the canvas size to match the hero section
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      // Set the background image of the hero section
      canvas.style.backgroundImage = `url(${backgroundImage})`;
      canvas.style.backgroundSize = 'cover';

      // Animate the particle effect
      const particles = canvas.querySelector('.tsparticles-canvas-el');
      const particleEngine = particles.pJS;

      function animate() {
        particleEngine.fn.particlesRefresh();
        requestAnimationFrame(animate);
      }

      animate();
    }
  }, [canvasReady, backgroundImage]);

  return (
    <div style={{ backgroundColor: backgroundColor, position: 'relative' }}>
      <Particles
        options={particleOptions}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      />
      {canvasReady && (
        <canvas
          ref={canvasRef}
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            height: '100%'
          }}
        />
      )}
      {!canvasReady && (
        <canvas
          style={{ display: 'none' }}
          onLoad={() => setCanvasReady(true)}
        />
      )}
    </div>
  );
};

export default HeroBackground;
