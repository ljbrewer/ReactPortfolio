import React from 'react';
//import Card from '../Card';
import './Main.css'
import mainsmall from './assets/images/mainsmall.jpg';
import animalpics from './assets/images/mainpage70.png';
import dayplanner from './assets/images/DayPlanner70.png';
import passwordg from './assets/images/03-javascript-homework-demo50.png';



<main id="Projects">
    <section class="row justify-center">
        <div class="project-column">
            <figure class="project box-project" >
                <h2 class="project-header justify-center">Home Inventory Database</h2>
                <div class="project-body">
                    <p>This website is designed for people who would like to keep track of their homes and assets. This provides a way to track all the possessions in one or more homes with information about the cost and value of each item. Home owner's insurance policy number can also be recored. </p>
                </div>
                <img src={mainsmall} alt="picture of Home Inventory Website Main Page" >
                <a href="https://github.com/ljbrewer/HomeInventory">Home Inventory Repository</a>
            </figure>
        </div>
        <div class="project-column">
            <figure class="project box-project" class="project1">
                <h2 class="project-header">Animal Adoptions</h2>
                <div class="project-body">
                    <p>This website is designed for people who would like to adopt an animal - dogs, cats, or foxes. Once they choose an animal they can fill out the Adoption Form to be considered a pet parent.
                    </p>
                </div>
                <img src={animalpics} alt="picture of Animal Adoption Website Main Page" >
                <a href="https://ljbrewer.github.io/AnimalAdoptions/">Animal Adoptions</a>
            </figure>
        </div>
        <div class="project-column">
            <figure class="project box-project">
                <h2 class="project-header">Day Planner</h2>
                <div class="project-body">
                    <p>This Day Planner is for the current day. You can fill it in with items on your schedule to help keep you on track for your day. If you close the page, when you reopen it the data you entered will still be on the page.
                    </p>
                </div>
                <img src={dayplanner} alt="picture of DayPlanner" >
                <a href="https://ljbrewer.github.io/DayPlanner/">DayPlanner</a>
            </figure>
        </div>
        <div class="project-column">
            <figure class="project box-project">
                <h2 class="project-header">Password Generator</h2>
                <div class="project-body">
                    <p>The Password Generator lets the user decide which type of characters they want in their password and they choose the length as well. Once the items have been chosen then it presents the user with a new password.</p>
                </div>
                <img src={passwordg} alt="Password Generator" >
                <a href="https://ljbrewer.github.io/PasswordGenerator/">Link to Password Generator</a>
            </figure>
        </div>
    </section>

    <article id="Contact">
        <h2>Contact Information:</h2>
        <nav>
            <ul>
                <li>
                    <a href="mailto: ljbrewer@pacbell.net" target="_blank">Send Email to ljbrewer@pacbell.net</a>
                </li>
                <li>
                    Phone number: 707-372-1718
                </li>
                <li>
                    <a href="http://www.linkedin.com/in/laura-brewer-457b643" target="_blank">www.linkedin.com/in/laura-brewer-457b643</a>
                </li>
            </ul>
        </nav>
    </article>
</main>