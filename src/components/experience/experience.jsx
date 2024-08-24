import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const experience = () => {
    return (
        <section id="experience">
            <div className="experience">
                <h1>Work Experience</h1>
                <div className="container experience__container">
                    <div className="experience__frontend">
                        <h3>Toolsets</h3>
                        <div className="experience__content">
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div><h4>HTML</h4></div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div><h4>CSS</h4></div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div><h4>JAVASCRIPT</h4></div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div><h4>Figma</h4></div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div><h4>React</h4></div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div><h4>Git</h4></div>
                            </article>
                        </div>
                    </div>
                    <div className="experience__backend">
                        <h3>Experience</h3>
                        <div className="experience__content">
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div><h4>JAVA EE</h4></div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div><h4>MySQL</h4></div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div><h4>PHP</h4></div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div><h4>SPRING BOOT</h4></div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div><h4>LARAVEL</h4></div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default experience;
