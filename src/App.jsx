import React, { useEffect } from "react";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import { gsap, Back } from "gsap";

const App = () => {
    useEffect(() => {
        class GlowCursor {
            constructor() {
                this.initCursor();
            }

            initCursor() {
                this.outerCursor = document.querySelector('.circle-cursor--outer');
                this.innerCursor = document.querySelector('.circle-cursor--inner');
                this.outerCursorBox = this.outerCursor.getBoundingClientRect();
                this.outerCursorSpeed = 0.2; // Increase speed (was 1)
                this.easing = Back.easeOut.config(1.7);
                this.clientX = -100;
                this.clientY = -100;
                this.showCursor = false;

                const unveilCursor = () => {
                    gsap.set(this.innerCursor, {
                        x: this.clientX,
                        y: this.clientY
                    });

                    gsap.set(this.outerCursor, {
                        x: this.clientX - this.outerCursorBox.width / 2,
                        y: this.clientY - this.outerCursorBox.height / 2
                    });

                    setTimeout(() => {
                        this.outerCursorSpeed = 0.1; // Reduce delay for faster response
                    }, 50);

                    this.showCursor = true;
                };

                document.addEventListener('mousemove', unveilCursor);

                document.addEventListener('mousemove', (e) => {
                    this.clientX = e.clientX;
                    this.clientY = e.clientY;
                });

                const render = () => {
                    gsap.set(this.innerCursor, {
                        x: this.clientX,
                        y: this.clientY
                    });

                    if (!this.isStuck) {
                        gsap.to(this.outerCursor, this.outerCursorSpeed, {
                            x: this.clientX - this.outerCursorBox.width / 2,
                            y: this.clientY - this.outerCursorBox.height / 2,
                            ease: this.easing
                        });
                    }
                    if (this.showCursor) {
                        document.removeEventListener("mousemove", unveilCursor);
                    }
                    requestAnimationFrame(render);
                };
                requestAnimationFrame(render);
            }
        }

        new GlowCursor();
    }, []);

    return (
        <div>
            <Nav />
            <Header />
            <About />
            <Experience />
            <Portfolio />
            <Contact />
            <Footer />
            {/* Your components here */}
            <div className="circle-cursor circle-cursor--inner"></div>
            <div className="circle-cursor circle-cursor--outer"></div>
        </div>
    );
};

export default App;
