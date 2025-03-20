"use client";
import { useState, useEffect } from "react";
import Background from "./components/Background";
import Header from "./components/Header";
import CountdownTimer from "./components/CountdownTimer";
import GhostTrail from "./components/GhostTrail";
import RevealContent from "./components/RevealContent";

export default function Home() {
  const [showEventDetails, setShowEventDetails] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 3) {
        setShowEventDetails(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home-container">
      <GhostTrail/>
      <Background />
      <div className="content">
        <div className="text-center">
          <Header />
          <h1 className="centered-title">UTA DATATHON</h1>
          <h2 className="centered-title">2025</h2>
          <div className="bottom-content">
            <div className="countdown">
              <h2>Countdown to the Datathon</h2>
              <CountdownTimer targetDate="2025-04-12T00:00:00Z" />
            </div>
            <div className="buttons">
              <button className="apply-btn">Apply</button>
              <button className="discord-btn">Discord</button>
              <button className="devpost-btn">Dev Post</button>
            </div>
          </div>
        </div>
      </div>

      <RevealContent>
        <h4>Details</h4>
        <p>Voluptatibus placeat pariatur rerum sunt reprehenderit.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          explicabo voluptates neque id sapiente eos omnis, ut minus tempora.
        </p>
      </RevealContent>
    </div>
  );
}
