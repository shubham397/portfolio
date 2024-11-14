import React from "react";
import "./home.css";

function Home() {
  const SkillCard = ({ skillName, skillIcon }) => {
    return (
      <div className="skill-card">
        <img
          width="50px"
          height="50px"
          src={skillIcon}
          alt={skillName}
          className="skill-icon"
        />
        <p className="skill-name">{skillName}</p>
      </div>
    );
  };

  return (
    <>
      <h1 className="heading">About Me</h1>
      <div className="container">
        <section className="objective">
          <h2>
            I have 6+ years of experience with 3 years of remote experience.
            Enjoy building powerful web applications, learning new technologies,
            and improving overall knowledge.
          </h2>
        </section>
        <section className="overview">
          <h2>
            <ul>
              <li>Experience working with Remote Company.</li>
              <li>Handled all development work (BackEnd, FrontEnd, DevOps).</li>
              <li>Experience with Cloud-based deployment.</li>
              <li>
                Working Experience of MERN (MongoDB, Express, React, NodeJS)
                JavaScript, Redux, NextJs, Git.
              </li>
            </ul>
          </h2>
        </section>
        <section className="technical-proficiency">
          <h1>FrontEnd</h1>
          <div className="skill-card-container">
            <SkillCard
              skillName="JavaScript"
              skillIcon={`/icons/javascript.svg`}
            />
            <SkillCard
              skillName="TypeScript"
              skillIcon={`/icons/typescript.svg`}
            />
            <SkillCard skillName="JQuery" skillIcon={`/icons/jquery.svg`} />
            <SkillCard skillName="React" skillIcon={`/icons/react.svg`} />
            <SkillCard skillName="NextJs" skillIcon={`/icons/nextjs.svg`} />
            <SkillCard skillName="Redux" skillIcon={`/icons/redux.svg`} />
          </div>
          <div className="skill-card-container">
            <SkillCard skillName="HTML" skillIcon={`/icons/html.svg`} />
            <SkillCard skillName="CSS" skillIcon={`/icons/css.svg`} />
            <SkillCard
              skillName="BootStrap"
              skillIcon={`/icons/bootstrap.svg`}
            />
          </div>
          <h1>BackEnd</h1>
          <div className="skill-card-container">
            <SkillCard skillName="NodeJs" skillIcon={`/icons/nodejs.svg`} />
            <SkillCard skillName="Express" skillIcon={`/icons/express.svg`} />
            <SkillCard skillName="NestJs" skillIcon={`/icons/nestjs.svg`} />
          </div>
          <div className="skill-card-container">
            <SkillCard skillName="Docker" skillIcon={`/icons/docker.svg`} />
            <SkillCard skillName="Git/GitHub" skillIcon={`/icons/git.svg`} />
          </div>
          <h1>Database</h1>
          <div className="skill-card-container">
            <SkillCard skillName="MySQL" skillIcon={`/icons/mysql.svg`} />
            <SkillCard skillName="MongoDB" skillIcon={`/icons/mongodb.svg`} />
          </div>
          <h1>Cloud</h1>
          <div className="skill-card-container">
            <SkillCard skillName="AWS" skillIcon={`/icons/aws.svg`} />
            <SkillCard skillName="GCP" skillIcon={`/icons/gcp.svg`} />
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
