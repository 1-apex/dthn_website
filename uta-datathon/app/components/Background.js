"use client";
import { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createDots();
    };

    const dots = [];
    const createDots = () => {
      dots.length = 0; // Clear existing dots
      const dotCount = Math.floor((canvas.width * canvas.height) / 5000); // Adjust dot density
      for (let i = 0; i < dotCount; i++) {
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3,
          speed: Math.random() * 1 + 0.2,
        });
      }
    };

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((dot) => {
        const distanceFromCenter = Math.abs(dot.y - canvas.height / 2);
        const brightness = Math.max(
          0,
          1 - distanceFromCenter / (canvas.height / 2)
        );
        const opacity = brightness * 0.8 + 0.2;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();

        dot.y += dot.speed;
        if (dot.y > canvas.height) dot.y = 0;
      });
      requestAnimationFrame(drawDots);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    drawDots();

    const handleWheel = (event) => {
      const scrollDelta = event.deltaY * 0.1;
      dots.forEach((dot) => {
        dot.y += scrollDelta;
        if (dot.y > canvas.height) dot.y = 0;
        if (dot.y < 0) dot.y = canvas.height;
      });
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed w-full h-full -z-10" />
  );
}