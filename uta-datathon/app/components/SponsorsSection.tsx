import React from "react";

export default function SponsorsSection() {
  const sponsors = [
    { name: "Google", logo: "/sponsors/google_logo.png" },
    { name: "Microsoft", logo: "/sponsors/google_logo.png" },
    { name: "Amazon", logo: "/sponsors/google_logo.png" },
    { name: "Facebook", logo: "/sponsors/google_logo.png" },
    { name: "IBM", logo: "/sponsors/google_logo.png" },
  ];

  return (
    <div className="sponsors-section">
      <div className="sponsors">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="sponsor">
            <img src={sponsor.logo} alt={sponsor.name} />
            <p>{sponsor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
