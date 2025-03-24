import React from "react";

export default function MeetTheTeamSection() {
  const teams = [
    {
      name: "Development Team",
      members: [
        { name: "John Doe", role: "Lead Developer", image: "/team/man.png" },
        { name: "Jane Smith", role: "Backend Developer", image: "/team/man.png"  },
        { name: "Bob Johnson", role: "Frontend Developer", image: "/team/man.png"  },
        { name: "Alice Brown", role: "DevOps Engineer", image: "/team/man.png"  },
        { name: "Mike Davis", role: "Quality Assurance", image: "/team/man.png"  },
        { name: "Emily Taylor", role: "UX/UI Designer", image: "/team/man.png"  },
      ],
    },
    {
      name: "Challenges Team",
      members: [
        { name: "Sarah Lee", role: "Challenge Coordinator", image: "/team/man.png"  },
        { name: "David Kim", role: "Challenge Designer", image: "/team/man.png"  },
        { name: "Olivia Martin", role: "Challenge Reviewer", image: "/team/man.png"  },
        { name: "William White", role: "Challenge Mentor", image: "/team/man.png"  },
        { name: "Sophia Patel", role: "Challenge Support", image: "/team/man.png"  },
        { name: "Jackson Hall", role: "Challenge Judge", image: "/team/man.png"  },
      ],
    },
    {
      name: "Creative Team",
      members: [
        { name: "Ethan Brooks", role: "Creative Director", image: "/team/man.png"  },
        { name: "Lily Chen", role: "Graphic Designer", image: "/team/man.png"  },
        { name: "Noah Kim", role: "Video Producer", image: "/team/man.png"  },
        { name: "Ava Lee", role: "Social Media Manager", image: "/team/man.png"  },
        { name: "Julian Sanchez", role: "Content Writer", image: "/team/man.png"  },
        { name: "Isabella Garcia", role: "Photographer", image: "/team/man.png"  },
      ],
    },
    {
      name: "Operations and Logistics Team",
      members: [
        { name: "Mia Thompson", role: "Operations Manager", image: "/team/man.png"  },
        { name: "Alexander Gray", role: "Logistics Coordinator", image: "/team/man.png"  },
        { name: "Sofia Rodriguez", role: "Venue Manager", image: "/team/man.png"  },
        { name: "Elijah Brooks", role: "Catering Manager", image: "/team/man.png"  },
        { name: "Charlotte Lewis", role: "Accommodations Manager", image: "/team/man.png"  },
        { name: "Gabriel Martin", role: "Transportation Manager", image: "/team/man.png"  },
      ],
    },
    {
      name: "Experience Team",
      members: [
        { name: "Abigail Hall", role: "Experience Manager", image: "/team/man.png"  },
        { name: "Caleb Brown", role: "Event Coordinator", image: "/team/man.png"  },
        { name: "Hannah Taylor", role: "Volunteer Manager", image: "/team/man.png"  },
        { name: "Logan White", role: "Sponsorship Manager", image: "/team/man.png"  },
        { name: "Madison Davis", role: "Community Manager", image: "/team/man.png"  },
        { name: "Nathan Lee", role: "Feedback Manager", image: "/team/man.png"  },
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
                <img src={member.image} alt={member.name} className="member-image" />
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