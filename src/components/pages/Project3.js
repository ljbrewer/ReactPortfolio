import React from 'react';
import DayPlanner from '../../assets/images/DayPlanner.png'

export default function Blog() {
  return (
    <div>
      <h1>Day Planner</h1>
      <section class="row justify-center">
      <div class="project-column">
        <figure class="project box-project" class="project3">
          <h2 class="project-header">Day Planner</h2>
         <div class="project-body">
          <p>This Day Planner is for the current day. You can fill it in with items on your schedule to help keep you on track for your day. If you close the page, when you reopen it the data you entered will still be on the page.
          </p>
        </div>
        <img src={DayPlanner} alt="picture of DayPlanner"></img>
        <p>
        <a href="https://ljbrewer.github.io/DayPlanner/">DayPlanner GitHub Repository</a>
        </p>
      </figure>
    </div>
    </section>
  </div>
  );
}
