import React from "react";
import TypewriterComponent from "typewriter-effect";

function Type() {
    return(
        <TypewriterComponent
        options={{
            strings: [
                "Software Engineer",
                "MERN Stack Developer",
                "Internet Freedom Advocate",
                "Communications Expert",
                "Web Developer"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
        }}
        />
    )
}

export default Type