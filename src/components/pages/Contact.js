import React from 'react';
import lolopic from '../../assets/images/loloriding.jpg'
export default function Contact() {
  return (
    <div>
      <picture>
        <img src={lolopic} alt="Laura"></img>
      </picture>
      <article id="Contact">
        <h2>Contact Information</h2>
        <nav>
          <ul>
            <li>
              <a href="mailto: ljbrewer@pacbell.net" target="_blank">Send Email to ljbrewer@pacbell.net</a>
            </li>
            <li>
              Cell number: 707-372-1718
            </li>
            <li>
              <a href="http://www.linkedin.com/in/laura-brewer-457b643" target="_blank">www.linkedin.com/in/laura-brewer-457b643</a>
            </li>
            <li><a href="assets/Brewer_Laura_Res_Final.pdf">Laura's Current Resume</a></li>
          </ul>
        </nav>
      </article>
    </div>
  );
}
