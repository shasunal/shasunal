import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <header className="header">
  <img
    src="/websitephoto.JPG"
    alt="Shasuna Lin"
    className="profile-photo"
  />
  <h1>Shasuna Lin</h1>
  <nav>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#resume">Resume</a>
    <a href="#contact">Contact</a>
  </nav>
</header>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
        I’m a front end designer and developer focused on creating thoughtful, user centered experiences. With a background in Emerging Media, I bring a mix of design thinking, technical skill, and storytelling to everything I build. I enjoy turning ideas into interactive digital spaces that are both functional and visually engaging.
        </p>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <ul className="project-list">
          <li>
            <h3>Ant Fest</h3>
            <p>
            This project explored themes of scale and sensory detail through playful interface design and textured visual storytelling.
              Designed all assets in Photoshop and built an interactive picnic scene using p5.js and JavaScript, featuring hover-triggered micro-zooms and ambient nature sounds.
              <br></br>
              <a href="https://editor.p5js.org/Shasuna/sketches/FcfnCwh4Q" target="_blank">View Project</a>
        </p>
          </li>
          <li>
            <h3>Post A Pet</h3>
            <p>
            Collaborated in a team of two to develop Post a Pet, a public pet archive where users can upload and browse pet photos via a custom submission form with fields for name, caption, pet type, and image.
Built a dynamic gallery with pet type filters using MongoDB for data storage and Cloudinary for image hosting.

              <br></br>
              <a href="https://petspublic.onrender.com/" target="_blank">View Project</a>
        </p>
          </li>
          <li>
            <h3>AI in Action Hackathon - BlockWatch</h3>
            <p>Built the front-end of a public safety web app using React, HTML, and CSS with a team of 4 developers.
Integrated Mapbox GL to display and interact with a dynamic NYC crime data map.
Helped design the overall layout and user flow, contributing to a responsive and accessible interface.
</p>
            <br></br>
            <a href="https://hackathonsummer-1.onrender.com/" target="_blank">View Project</a>
          </li>
        </ul>
      </section>

      <section id="resume" className="section">
  <h2>Resume</h2>

  <div className="resume-columns">
    <div className="resume-column">
      <h3>Skills</h3>
      <ul>
        <li><strong>Design & Prototyping:</strong> Figma, Photoshop, Illustrator</li>
        <li><strong>Web Development:</strong> HTML, CSS, JavaScript (intermediate), Git/GitHub</li>
        <li><strong>3D & Interactive Media:</strong> Blender, Unity, Adobe Substance 3D</li>
        <li><strong>Tools:</strong> Notion, Microsoft Office, Canva</li>
        <li><strong>Languages:</strong> Bilingual Mandarin/English</li>
      </ul>
    </div>

    <div className="resume-column">
      <h3>Education</h3>
      <p><strong>CUNY Hunter College</strong><br />
        BA in Emerging Media, Minor in Computer Science (Expected May 2027)<br />
        GPA: 3.7<br />
        Relevant Courses: Web Production, Creative Coding, Digital Design & Usability
      </p>
    </div>
  </div>

  <h3>Experience</h3>
  <p><strong>Web Design Intern & Freelance Developer</strong><br />
    Ron Shipmon LLC · Mar 2025 – Present<br />
    Designed and launched websites using Figma, JavaScript, Wix, Webflow, GitHub, and Netlify.<br />
    Improved content flow and SEO through metadata and CMS updates.
  </p>

  <p><strong>Robotics Instructor</strong><br />
    TekIntellect · Mar 2025 – Present<br />
    Taught STEM and Scratch coding to elementary school students through hands-on robotics workshops.<br />
    Boosted engagement using creative teaching strategies.
  </p>

  <p><strong>Team Member</strong><br />
    Whole Foods · Oct 2024 – Present<br />
    Maintained inventory records for 100+ items and supported food prep in a fast-paced team environment.
  </p>
</section>




<section id="contact" className="section">
  <h2>Contact</h2>
  <p>
    <a href="mailto:linshasuna@gmail.com">linshasuna@gmail.com</a>
  </p>
</section>

    </div>
  );
}

export default App;
