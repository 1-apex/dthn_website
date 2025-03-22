import React from "react";

export default function SpeakersSection() {
  const speakers = [
    {
      name: "John Smith",
      title: "CEO, ABC Corporation",
      description: "Expert in AI and Machine Learning",
      image: "/speakers/john-smith.jpg",
    },
    {
      name: "Jane Doe",
      title: "CTO, DEF Startups",
      description: "Specialist in Cloud Computing",
      image: "/speakers/jane-doe.jpg",
    },
    {
      name: "Bob Johnson",
      title: "Professor, XYZ University",
      description: "Renowned Data Scientist",
      image: "/speakers/bob-johnson.jpg",
    },
    {
      name: "Alice Brown",
      title: "Founder, GHI Ventures",
      description: "Innovator in Blockchain Technology",
      image: "/speakers/alice-brown.jpg",
    },
    {
      name: "Mike Davis",
      title: "Director, JKL Research",
      description: "Expert in Cybersecurity",
      image: "/speakers/mike-davis.jpg",
    },
  ];

  return (
    <div className="speakers-section">
      <div className="speakers">
        {speakers.map((speaker, index) => (
          <div key={index} className="speaker">
            <img src={speaker.image} alt={speaker.name} />
            <h4>{speaker.name}</h4>
            <p>{speaker.title}</p>
            <p>{speaker.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
