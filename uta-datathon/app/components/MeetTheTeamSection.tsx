import React from "react";

export default function MeetTheTeamSection() {
  const teams = [
    {
      name: "Development Team",
      members: [
        { name: "John Doe", role: "Lead Developer" },
        { name: "Jane Smith", role: "Backend Developer" },
        { name: "Bob Johnson", role: "Frontend Developer" },
        { name: "Alice Brown", role: "DevOps Engineer" },
        { name: "Mike Davis", role: "Quality Assurance" },
        { name: "Emily Taylor", role: "UX/UI Designer" },
      ],
    },
    {
      name: "Challenges Team",
      members: [
        { name: "Sarah Lee", role: "Challenge Coordinator" },
        { name: "David Kim", role: "Challenge Designer" },
        { name: "Olivia Martin", role: "Challenge Reviewer" },
        { name: "William White", role: "Challenge Mentor" },
        { name: "Sophia Patel", role: "Challenge Support" },
        { name: "Jackson Hall", role: "Challenge Judge" },
      ],
    },
    {
      name: "Creative Team",
      members: [
        { name: "Ethan Brooks", role: "Creative Director" },
        { name: "Lily Chen", role: "Graphic Designer" },
        { name: "Noah Kim", role: "Video Producer" },
        { name: "Ava Lee", role: "Social Media Manager" },
        { name: "Julian Sanchez", role: "Content Writer" },
        { name: "Isabella Garcia", role: "Photographer" },
      ],
    },
    {
      name: "Operations and Logistics Team",
      members: [
        { name: "Mia Thompson", role: "Operations Manager" },
        { name: "Alexander Gray", role: "Logistics Coordinator" },
        { name: "Sofia Rodriguez", role: "Venue Manager" },
        { name: "Elijah Brooks", role: "Catering Manager" },
        { name: "Charlotte Lewis", role: "Accommodations Manager" },
        { name: "Gabriel Martin", role: "Transportation Manager" },
      ],
    },
    {
      name: "Experience Team",
      members: [
        { name: "Abigail Hall", role: "Experience Manager" },
        { name: "Caleb Brown", role: "Event Coordinator" },
        { name: "Hannah Taylor", role: "Volunteer Manager" },
        { name: "Logan White", role: "Sponsorship Manager" },
        { name: "Madison Davis", role: "Community Manager" },
        { name: "Nathan Lee", role: "Feedback Manager" },
      ],
    },
  ];

  return (
    <div className="meet-the-team-section">
      {teams.map((team, index) => (
        <div key={index} className="team">
          <h2>{team.name}</h2>
          <div className="members">
            {team.members.map((member, memberIndex) => (
              <div key={memberIndex} className="member">
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}