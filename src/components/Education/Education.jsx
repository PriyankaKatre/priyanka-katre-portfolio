import React from 'react';

export const Education = () => {
    return (
        <React.Fragment>
            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-4">
                        <div className="flex-grow-1">
                            <h3 className="mb-0 subheading">Bachelor of Electronics & Communication Engineering</h3>
                            <div> Rajiv Gandhi Proudyogiki Vishwavidyalaya Bhopal (India)</div>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-4">
                        <div className="flex-grow-1">
                            <h3 className="mb-0 subheading">Certification in Software Testing</h3>
                            <div>Pankaj Gandhi’s Academy Pune (India)</div>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0 subheading">Certification in Virtual Work Experience Program </h3>
                            <div>Cognizant (UK & Ireland) </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
