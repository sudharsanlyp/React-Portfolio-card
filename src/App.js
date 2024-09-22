import React from 'react';
import './App.css'; // Make sure to create an App.css file for styling

// Card component
const Card = ({ name, city, description, skills, online, image }) => {
  return (
    <div className='card'>
      <p className={online ? 'on' : 'off'}>{online ? 'Online' : 'Offline'}</p>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h3>{city}</h3>
      <p>{description}</p>
      <div className='button'>
        <button className='message'>Message</button>
        <button className='following'>Following</button>
      </div>
      <h6>Skills</h6>
      <div className='align'>
        <ul>
          {skills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// App component
function App() {
  const profiles = [
    {
      name: "Sudharsan N",
      city: "Namakkal",
      description: "Front-end developer",
      skills: ["UI/UX Designer", "Front-end developer", "HTML", "CSS", "JavaScript", "React.js", "Java", "MySQL"],
      online: true,
      image: "sudharsan.jpg", // Replace with actual image path
    },
    {
      name: "Arun Prasanth",
      city: "Coimbatore",
      description: "Back-end developer",
      skills: ["Node.js", "Express", "MongoDB", "Python", "HTML", "CSS", "JavaScript", "React.js", "Java", "MySQL"],
      offline: false,
      image: "arun.jpg", // Replace with actual image path
    },
    {
      name: "Tamil Mani",
      city: "Coimbatore",
      description: "Full-stack developer",
      skills: ["Node.js", "PostgreSQL", "HTML", "CSS", "JavaScript", "React.js", "Java", "MySQL"],
      online: true,
      image: "tamilmani.jpg", // Replace with actual image path
    },
  ];

  return (
    <div className='portfolio'>
      {profiles.map((profile, index) => (
        <Card
          key={index}
          name={profile.name}
          city={profile.city}
          description={profile.description}
          skills={profile.skills}
          online={profile.online}
          image={profile.image}
        />
      ))}
    </div>
  );
}

export default App;
