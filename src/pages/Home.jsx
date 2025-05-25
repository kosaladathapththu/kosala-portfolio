import React from 'react';
import './Home.css';
import kosalaImg from '../assets/kosala.jpg';

function Home() {
  return (
    <div className="home-container">
      <div className="home-text">
        <h2>Hi, I’m Kosala Daneshwara Athapaththu 🙋‍♂️</h2>
        <p>🎓 Software Engineering Undergraduate at NIBM, Colombo</p>
        <p>📍 Colombo | 🗓️ Born on June 22, 2001</p>
        <p>💡 Passionate about Web Development, React, and UI/UX</p>
        <a href="/Kosala_CV.pdf" download className="download-btn">📄 Download CV</a>
      </div>
      <div className="home-img">
        <img src={kosalaImg} alt="Kosala Daneshwara" />
      </div>
    </div>
  );
}

export default Home;