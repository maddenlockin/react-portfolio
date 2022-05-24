import React from 'react'

export default function Projects() {
  return (
    <>
      <h3>Projects</h3>
      <div className="project-container outlier">
        <h4 className="project-title">OUTLIER</h4>
        <p className="project-timeline">
          Ten Day Sprint, Three Engineers, Remote
        </p>
        <p className="project-tech-stack">
          React, PostgreSQL, Three.js,React Three Fiber
        </p>
        <div className="project-description">
          A geometric data visualization app created to give the user a new way
          to gain knowledge in order to advocate for funding, access services,
          and enhance safety. The user selects states and demographics of
          interest and a three-dimensional graph is rendered with the
          appropriate data. 
          I orchestrated the connection from a third-party API
          to our SQL database using cross-fetch. I utilized context and handler
          functions on the front-end so that user selection of states and
          population directly correlates to the fetch of statistics from the
          back-end.
        </div>
      </div>
      <div className="project-container hands-of-fate">
        <h4 className="project-title">Hands of Fate</h4>
        <p className="project-timeline">
          Five Day Sprint, Four Engineers, Remote
        </p>
        <p className="project-tech-stack">React, PostgreSQL, CSS</p>
        <div className="project-description">
          A tarot-inspired deck fighter game where the user plays as The Fool to fight against the enigmatic Will of Fate. Collect one of 78 cards with each victory and get your fortune read with an in-app tarot reading. 
          I spearheaded the functionality for sign-up, log-in, and updating a player's game status with back-end routes in express.js. In the front-end, I built the combat functionality - the logic for damage to the enemy, drawing new hands, and the affliction damage.
        </div>
      </div>
      <div className="project-container roomdate">
        <h4 className="project-title">RoomDate</h4>
        <p className="project-timeline">
          Five Day Sprint, Four Engineers, Remote
        </p>
        <p className="project-tech-stack">PostgreSQL, Node.js, Express</p>
        <div className="project-description">
          Search your area for your next place to live with this server-side
          application for finding the best roommate for you. Match with your
          dream roomie after selecting your roommate preferences, whether you
          are offering housing or searching for it. 
          I built out the post, put,
          and delete routes to create, update, and remove all of the user's
          personal information and preferences. In addition, I created the OAuth and logout route. and led the initial organization and planning to streamline our team's development of this app.
        </div>
      </div>
    </>
  );
}
