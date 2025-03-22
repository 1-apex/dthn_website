"use client";
import Background from "./components/Background";
import Header from "./components/Header";
import CountdownTimer from "./components/CountdownTimer";
import GhostTrail from "./components/GhostTrail";
import DetailsSection from "./components/DetailsSection";
import FAQsSection from "./components/FAQsSection";
import MeetTheTeamSection from "./components/MeetTheTeamSection";
import SponsorsSection from "./components/SponsorsSection";
import SpeakersSection from "./components/SpeakersSection";


export default function Home() {
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

      <h2>Details</h2>
      <DetailsSection />
      <h2>Speakers</h2>
      <SpeakersSection />
      <h2>Frequently Asked Questions</h2>
      <FAQsSection />
      <h2>Meet the Team</h2>
      <MeetTheTeamSection />
      <h2>Sponsors</h2>
      <SponsorsSection />
    </div>
  );
}
