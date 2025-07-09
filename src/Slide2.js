import React, { useEffect, useRef} from 'react';

const Slide2 = () => {
    return (
        <>
            <h1 style={{ marginBottom: "1.5rem" }}>About Me</h1>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "1rem", width: "100%", height: "100%" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height:"100%", width: "100%" }}>
                    <h3>Me</h3>
                    <img src="https://via.placeholder.com/150" alt="Profile" style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "1rem", height:"100%", width: "100%" }}>
                    <h3>Bio</h3>
                    <p>
                        I’m a Computer Science and Financial Engineering student at WashU,
                        passionate about building intelligent systems and creative experiences.
                        I blend technical expertise with a love for photography, fashion, and impactful design.
                    </p>
                </div>
                <div style={{ height: "100%", width: "100%" }}>
                    <h3>What I’ve Been Listening To</h3>
                    <iframe
                        style={{ borderRadius: '12px', width: "100%" }}
                        src="https://open.spotify.com/embed/playlist/37i9dQZF1EpvODjAAAmC4n?utm_source=generator"
                        height="200px"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        allowFullScreen
                        title="Spotify Playlist"
                    />
                    <p>Taking Recommendations!</p>
                </div>
                <div style={{ height: "100%", width: "100%" }}>
                    <h3>Hobbies</h3>
                    <ul>
                        <li>📸 Film photography: take a look 👀</li>
                        <li>🏋️‍♀️ Running & strength training</li>
                        <li>✈️ Traveling</li>
                    </ul>
                    <h3>Currently Reading 📖</h3>
                    <ul>
                        <li>Options, Futures, and Other Derivatives by John Hull</li>
                    </ul>
                </div>
                <div style={{ height: "100%", width: "100%" }}>
                    <h3>Tech Stack</h3>
                    <p>
                        Currently working with: <strong>React, GSAP, Python, Flask, MongoDB,</strong> and building options simulators.
                    </p>
                </div>
                <div style={{ height: "100%", width: "100%" }}>
                    <h3>What I'm Exploring Next</h3>
                    <p>
                        I'm diving deeper into algorithmic trading strategies using Monte Carlo simulations,
                        and integrating GenAI with command-line productivity tools.
                    </p>
                </div>
            </div>
        </>    
    );
};

export default Slide2;