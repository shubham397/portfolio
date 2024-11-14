import React from "react";

import "./work.css";

function Work() {
  function renderWorkCard() {
    return (
      <>
        <div className="card-container">
        <div className="card">
            <h3>Synechron, Bengaluru</h3>
            <p>Senior Software Engineer</p>
            <p>June 24 – Present</p>
            <p>My contributions includes:</p>
            <ul>
              <li>Transaction Banking POC :
Implemented a role-based transaction system with three roles: Admin, Maker, and
Authorizer. Makers are responsible for creating transactions, while Authorizers handle
transaction approvals. Admins oversee user management, including the creation and role
assignment of Makers and Authorizers, ensuring secure and efficient transaction workflows.</li>
            </ul>
          </div>
          <div className="card">
            <h3>CodeCraft technology Pvt. Ltd., Remote</h3>
            <p>Senior Software Engineer</p>
            <p>April 23 – May 24</p>
            <p>My contributions includes:</p>
            <ul>
              <li>iGoalZero :
Researched and explored incremental refresh strategies to enhance data retrieval efficiency
for IGZ OData services</li>
<br />
              <li>Montefiore Nurture :
Worked on a website where doctors and providers can manage patients details and update
medications.</li>
            </ul>
          </div>
          <div className="card">
            <h3>GermanTownTechnology Pvt. Ltd., Remote</h3>
            <p>Software Engineer</p>
            <p>May 22 – March 23</p>
            <p>My contributions includes:</p>
            <ul>
              <li>
                <a href="https://harmonycares.com" target="_blank">
                  Harmonycares
                </a>
                : Build Dashboard for a team of doctors, nurses, patients, and social workers. Using this
dashboard caregivers can connect with the team 24/7 for care without replacing the patient’s
current doctor or therapists. Harmonycares acts as another layer of support to keep the
patients healthy.
              </li>
            </ul>
          </div>
          <div className="card">
            <h3>Teasit, Remote</h3>
            <p>Software Engineer</p>
            <p>March 21 – May 22</p>
            <p>My contributions includes:</p>
            <ul>
              <li>
                <a href="https://teasit.com" target="_blank">
                  Teasit
                </a>
                : Working on building the payment System, Notification with the
                help of Realtime Database, Implement Lambda.
              </li>
            </ul>
          </div>
          <div className="card">
            <h3>91Social, Bengaluru</h3>
            <p>Software Engineer</p>
            <p>November 2019 – March 21</p>
            <p>My contributions includes:</p>
            <ul>
              <li>
                <a href="https://careers.cred.club" target="_blank">
                  CRED career Site
                </a>
                : Worked on building the complete career site for CRED.
              </li>
              <li>
                BBP, Kinetica: Worked on building the complete Dashboard for
                BBP.
              </li>
            </ul>
          </div>
          <div className="card">
            <h3>Marmeto, Bengaluru</h3>
            <p>MEAN Stack Developer</p>
            <p>August 2018 – August 2019</p>
            <p>My contributions includes:</p>
            <ul>
              <li>Public App for Shopify – Salesify, OrderEase, DevTools</li>
              <li>E-Commerce website - DailyDeals for SR Store</li>
              <li>
                Report management Systems– TheMessycorner, MordiallocFlorist
              </li>
              <li>Pincode Verification at checkout for wonderChef</li>
              <li>Content Management System for Sukkhi Android Application</li>
            </ul>
          </div>
          <div className="card">
            <h3>DialUrSearch Pvt. Ltd., Dhanbad</h3>
            <p>Software Engineer</p>
            <p>November 2017 – April 2018</p>
            <p>My contributions includes:</p>
            <ul>
              <li>
                <a href="http://dpsdhanbad.edu.in" target="_blank">
                  Delhi Public School, Dhanbad
                </a>
                : Worked on building the whole website, which is currently in production and is being used by
thousands of people.
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <h1 className="heading">Work Experiences</h1>
      {renderWorkCard()}
    </>
  );
}

export default Work;
