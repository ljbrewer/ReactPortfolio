import React from 'react';
import main from '../../assets/images/main.JPG'

// import '../../assets/css/style.css'

export default function Blog() {
  return (
    <div>
      <h1>Home Inventory Database</h1>
      <section class="row justify-center">
      <div class="project-column">
        <figure class="project box-project" class="project1">          
          <h2 class="project-header">Home Inventory Database</h2>
          <div class="project-body">
            <p>This website is designed for people who would like to keep track of their homes and assets. This provides a way to track all the possessions in one or more homes with information about the cost and value of each item. Home owner's insurance policy number can also be recorded. </p>
          </div>
          <picture>
              <img src={main} alt="picture of Home Inventory Website Main Page"></img>
          </picture>
      
          <p>            
          <a href="https://github.com/ljbrewer/HomeInventory">Home Inventory GitHub Repository</a>
          </p>
        </figure>
      </div>
      </section>
    </div>
  );
}
