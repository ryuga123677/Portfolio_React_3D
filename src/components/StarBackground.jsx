import React, { useEffect, useRef } from "react";

// Renders a full-size blinking-star canvas that fills its parent.
// Parent element MUST be `position: relative` and control the height.
export const StarBackground = ({ heightClass = "h-full" }) => {
  const galaxyCanvasRef = useRef(null);

  useEffect(() => {
    const canvas = galaxyCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      const width = container?.offsetWidth || window.innerWidth;
      const height = container?.offsetHeight || window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resizeCanvas();

    const stars = [];
    let numStars;
    const isMobile = /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
    if (isMobile) {
      numStars = 100;
    } else {
      numStars = 600;
    }

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        baseOpacity: Math.random() * 0.8 + 0.2,
        blinkSpeed: Math.random() * 2 + 0.5,
        blinkPhase: Math.random() * Math.PI * 2,
        brightness: Math.random() * 0.5 + 0.5,
      });
    }

    let animationId;
    let animationTime = 0;
    let lastTime = performance.now();

    const animate = () => {
      const now = performance.now();
      const deltaTime = (now - lastTime) / 1000;
      lastTime = now;
      animationTime += deltaTime;

      // Handle resize
      const container = canvas.parentElement;
      const currentWidth = container?.offsetWidth || window.innerWidth;
      const currentHeight = container?.offsetHeight || window.innerHeight;
      if (canvas.width !== currentWidth || canvas.height !== currentHeight) {
        canvas.width = currentWidth;
        canvas.height = currentHeight;
        stars.forEach((star) => {
          star.x = Math.random() * currentWidth;
          star.y = Math.random() * currentHeight;
        });
      }

      // Clear background
      ctx.fillStyle = "#000011";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach((star) => {
        const blinkValue =
          (Math.sin(animationTime * star.blinkSpeed + star.blinkPhase) + 1) /
          2;
        const currentBrightness = 0.2 + blinkValue * 0.8;
        const opacity = star.baseOpacity * currentBrightness * star.brightness;

        ctx.globalAlpha = opacity;
        ctx.fillStyle = "#ffffff";
        ctx.shadowBlur = star.size > 1.5 ? 3 : 1;
        ctx.shadowColor = "#ffffff";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      animationId = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={galaxyCanvasRef}
      className={`absolute inset-0 w-full ${heightClass}`}
      style={{ backgroundColor: "#000011" }}
    />
  );
};

