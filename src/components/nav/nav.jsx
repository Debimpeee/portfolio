import React, { useState } from "react";
import "./nav.css";

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#");
    return (
        <div className="navCont">
            <div className="hexagon-border">
               {/* <h2><a href="#">FA</a></h2> */}
               <h2><a
                    href="#"
                    onClick={() => setActiveNav("#")}
                    className={activeNav === "#" ? "active" : ""}
                >
                    {" "}
                    FA{" "}
                </a></h2>
            </div>
            <nav>
                <a
                    href="/#about"
                    onClick={() => setActiveNav("#about")}
                    className={activeNav === "#about" ? "active" : ""}
                >
                    {" "}
                    About{" "}
                </a>
                <a
                    href="/#experience"
                    onClick={() => setActiveNav("#experience")}
                    className={activeNav === "#experience" ? "active" : ""}
                >
                    {" "}
                    Work{" "}
                </a>
                <a
                    href="/#portfolio"
                    onClick={() => setActiveNav("#portfolio")}
                    className={activeNav === "#portfolio" ? "active" : ""}
                >
                    {" "}
                    Projects{" "}
                </a>
                <a
                    href="/#contact"
                    onClick={() => setActiveNav("#contact")}
                    className={activeNav === "#contact" ? "active" : ""}
                >
                    {" "}
                    Contact{" "}
                </a>    
            </nav>
        </div>
    );
};

export default Nav;



























