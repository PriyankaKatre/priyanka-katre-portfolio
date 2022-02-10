import React from 'react';

export const About = () => {
    return (
        <React.Fragment>
             <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                       Priyanka
                        <span className="text-primary"> Katre</span>
                    </h1>
                    <div className="subheading mb-5">
                        <i class="fa fa-phone text-primary"></i>
                        +44 743 841 9286   &nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="mailto:priyankack1707@gmail.com">
                        <i class="fa fa-envelope text-primary"></i> priyankack1707@gmail.com</a>
                    </div>
                    <p className="lead mb-5">Result oriented professional with 5+ years of corporate experience in the field of Web Development.
                        Well versed with key functions like Requirement Analysis, Front End Web Development, Back End Web Development, Testing, Database, SDLC, Agile Methodology.
                        Domain expertise in E-Commerce and Matrimonials.
                    </p>
                    <div className="social-icons">
                        <a className="social-icon" href="https://www.linkedin.com/in/priyanka-katre-949404134/"><i className="fab fa-linkedin-in"></i></a>
                        <a className="social-icon" href="https://github.com/PriyankaKatre"><i className="fab fa-github"></i></a>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
