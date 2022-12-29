import React from "react";
import TypewriterComponent from "typewriter-effect";

function Type() {
    return(
        <TypewriterComponent
        options={{
            strings: [
                "Web Developer",
                "MERN Stack Developer",
                "Software Engineer",
                "Internet Freedom Advocate"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
        }}
        />
    )
}

export default Type