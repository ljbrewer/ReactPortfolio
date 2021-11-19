import React from 'react';
import demo from '../../assets/images/demo.png'

export default function Blog() {
  return (
    <div>
      <h1>Password Generator</h1>
      <section class="row justify-center">
         <div class="project-column">
          <figure class="project box-project" class="project4">
          <div class="project-body">
            <h2 class="project-header">Password Generator</h2>
            <p>The Password Generator lets the user decide which type of characters they want in their password and they choose the length as well. Once the items have been chosen then it presents the user with a new password.</p>
          </div>
          <img src={demo} alt="Password Generator"></img>
          <p>
          <a href="https://ljbrewer.github.io/PasswordGenerator/">Password Generator Github Respository</a>
          </p>
        </figure>
      </div>
      </section>
    </div>
  );
}
