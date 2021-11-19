import React from 'react';
import lolopic from '../../assets/images/Lolosm.jpg'

export default function About() {
  return (
    <div>
      <picture class="justify-center">
        <img src={lolopic} alt="Picture of Laura"></img>
      </picture>
      <h2 id="About Me">About Me:</h2>
      <h1>Laura Brewer</h1>
      <section class="row justify-center">
        <div class="project-column">
          <figure class="project box-project" class="project2">
            <h2 class="project-header">Accomplished IT Professional</h2>
            <div class="project-body">
              <p>
                <strong>Areas of Expertise: </strong>Incident Management | Project Management | Data Center & Server Support | Process Improvement | DHCP| Business Analysis | Team Leadership | Business Intelligence | Network Administration | Information & Network Security
                Data Migration & Analysis | Mailbox Migration | Business Continuity | Disaster Recovery | Metrics | HTML | CSS | JavaScript
              </p>
            </div>
          </figure>
        </div>
      </section >
    </div >
  );
}
