import React, { useEffect, useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

const Horizontal = () => {
    const scrollContainerRef = useRef();
    const pinSectionRef = useRef();

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        const pinSection = pinSectionRef.current;

        const createScrollTrigger = () => {
            const totalScrollWidth = scrollContainer.scrollWidth;
            const viewportWidth = window.innerWidth;

            ScrollTrigger.getAll().forEach(trigger => trigger.kill());

            gsap.to(scrollContainer, {
                x: () => `-${totalScrollWidth - viewportWidth}px`,
                ease: "none",
                scrollTrigger: {
                    trigger: pinSection,
                    start: "top top",
                    end: () => `+=${totalScrollWidth - viewportWidth}`,
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });
        };

        createScrollTrigger();

        const handleResize = () => {
            createScrollTrigger();
            ScrollTrigger.refresh();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section ref={pinSectionRef} style={{ height: "100vh", overflow: "hidden", position: "relative" }}>
            <div ref={scrollContainerRef} style={{ display: "flex", height: "100%", width: "max-content"}}>
                <div style={{ width: "100vw", background: "#FFD6A5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <h1>Slide 1</h1>
                </div>
                <div style={{ width: "100vw", background: "#FDFFB6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <h1>Slide 2</h1>
                </div>
                <div style={{ width: "100vw", background: "#CAFFBF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <h1>Slide 3</h1>
                </div>
                <div style={{ width: "100vw", background: "#9BF6FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <h1>Slide 4</h1>
                </div>
            </div>
        </section>
    );

};

export default Horizontal;