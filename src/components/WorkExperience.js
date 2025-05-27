import experiences from "../data/experience";

const WorkExperience = () => {
    return (
        <section className="experience" id="experience">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="experience-bx wow fadeIn">
                            <h2>Work Experience</h2>
                            <p className="text-center">Roles I’ve held in my career, contributing to impactful products</p>

                            <div className="timeline">
                                {experiences.map((exp, index) => (
                                    <div className="timeline-item" key={index}>
                                        <div className="timeline-dot" />
                                        <div className="timeline-card shadow-sm">
                                            <h5 className="role">{exp.role}</h5>
                                            <h6 className="company">{exp.company}</h6>
                                            <span className="duration">{exp.duration}</span>
                                            <ul className="highlights">
                                                {exp.responsibilities.map((point, idx) => (
                                                    <li key={idx}>{point}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;