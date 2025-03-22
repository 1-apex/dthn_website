import React from "react";

export default function SponsorsSection() {
  const sponsors = [
    { name: "Google", logo: "/sponsors/google_logo.png" },
    { name: "Microsoft", logo: "/sponsors/microsoft.png" },
    { name: "Amazon", logo: "/sponsors/amazon.png" },
    { name: "Facebook", logo: "/sponsors/facebook.png" },
    { name: "IBM", logo: "/sponsors/ibm.png" },
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
