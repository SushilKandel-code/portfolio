import React from "react";
import "../styles/about.css";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const About =() => {
    return (
        <section id="about" className="section1">
            <section className="timeline-section">
                {/* Work Experience */}
                <h2 className="timeline-heading"><FaBriefcase /> Work Experience</h2>
                <div className="timeline">
                    <div className="timeline-container left">
                        <div className="content">
                            <h3>IT Support</h3>
                            <span className="time">May 2024 – Present | Howatson + Company, Australia</span>
                            <ul>
                                <li>Diagnosed and resolved issues</li>
                                <li>Assisted in Office 365 administration (setup, password, licensing).</li>
                                <li>Assisted in Adobe License, Google Workspace.</li>
                                <li>Handled Level 1 & 2 support, escalation, and incident prioritization.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="timeline-container right">
                        <div className="content">
                            <h3>IT Support Specialist</h3>
                            <span className="time">Aug 2023 – Nov 2024 | Cloudwize, Australia</span>
                            <ul>
                                <li>Diagnosed and resolved issues via FreshService ticketing system.</li>
                                <li>Assisted in Office 365 administration (setup, password, licensing).</li>
                                <li>Handled Level 1 & 2 support, escalation, and incident prioritization.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Education */}
                <h2 className="timeline-heading"><FaGraduationCap /> Education</h2>
                <div className="timeline">

                    <div className="timeline-container left">
                        <div className="content">
                            <h3>Master of Information Technology</h3>
                            <span className="time">2022 – 2024 | University of New England, Australia</span>
                        </div>
                    </div>
                    <div className="timeline-container right">
                        <div className="content">
                            <h3>Bachelor of Information Technology</h3>
                            <span className="time">2018 – 2021 | Informatic College, Pokhara, Nepal</span>
                        </div>
                    </div>
                </div>
                {/** Certification */}
                <h2 className="timeline-heading"><FaGraduationCap /> Certification</h2>
                <div className="timeline">

                    <div className="timeline-container left">
                        <div className="content">
                            <a href="https://ude.my/UC-dda0cf46-d129-4e08-af28-1807dd2a5cc9">
                                <h3>Complete Full Stack Web Development Bootcamp </h3>
                            </a>
                            <span className="time">2025 | Udemy</span>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default About;