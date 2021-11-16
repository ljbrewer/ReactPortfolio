import React from 'react';
import './Header.css'
import lolopic from './assets/images/lolopic.png';

function Header() {

    return (
        <header>
            <picture>
                <img src={lolopic} alt="Picture of Laura"></img>
            </picture>

            <h1 class="page-title">
                Laura Brewer's Portfolio
            </h1>
            <nav>
                <ul>
                    <li>
                        <a href="#Aboutme">About Me</a>
                    </li>
                    <li>
                        <a href="#Projects">Projects</a>
                    </li>
                    <li>
                        <a href="#Contact">Contact</a>
                    </li>
                    <li>
                        <a href="assets/Brewer_Laura_Res_Final.pdf">Resume</a>
                    </li>
                </ul>
            </nav>
            <h2 id="About Me">About Me:</h2>
            <p>
                Accomplished IT professional with expertise in diverse technologies within multiple industry settings. Demonstrated success managing Networking, Software Engineering, QA, Change Management, Service Delivery, Information Security, and Technical Support. Effective in implementing standards and processes that improve business functionality. Innovative leader and technology advocate able to integrate systems and application services to maximize efficiency and performance.  Currently, working on Web Design.
            </p>
            <p>
                <strong>Areas of Expertise: </strong>Incident Management | Project Management | Data Center & Server Support | Process Improvement | DHCP| Business Analysis | Team Leadership | Business Intelligence | Network Administration | Information & Network Security
                Data Migration & Analysis | Mailbox Migration | Business Continuity | Disaster Recovery | Metrics | HTML | CSS | JavaScript | MongoDB | React | NodeJS | Express |  Handlebars
            </p>
        </header>
    );
}

export default Header;