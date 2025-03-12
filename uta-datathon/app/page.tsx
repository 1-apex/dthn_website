import Background from './components/Background';
import GhostTrail from './components/GhostTrail';

export default function Home() {
  return (
    <div className="text-center">
      <Background />
      <h1>UTA DATATHON</h1>
      <GhostTrail/>
      <Background />
    </div>
  );
}