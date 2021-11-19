import React from 'react';
import mainpage from '../../assets/images/mainpage.png'

export default function Blog() {
  return (
    <div>
      <h1>Animal Adoptions</h1>
       <section class="row justify-center">
      <div class="project-column">
        <figure class="project box-project" class="project2">
          <h2 class="project-header">Animal Adoptions</h2>
          <div class="project-body">
            <p>This website is designed for people who would like to adopt an animal - dogs, cats, or foxes. Once they choose an animal they can fill out the Adoption Form to be considered a pet parent. </p>
          </div>
          <img src={mainpage} alt="picture of Animal Adoption Website Main Page"></img>
          <p>
          <a href="https://ljbrewer.github.io/AnimalAdoptions/">Animal Adoptions GitHub Respository</a>
          </p>
        </figure>
      </div>
      </section>
    </div>
  );
}
