import React, { useRef, useState } from 'react'
import "./Video.css";

function Video() {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        if  (playing) { // if vid play, stop playing
            videoRef.current.pause();
            setPlaying(false);
        } else { // if vid stop, play it
            videoRef.current.play();
            setPlaying(true);
        }
    };

    return <div className="video">
        <iframe 
        className="video__player"
        loop
        ref={videoRef}
        src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"></iframe>
    {/* VideoFooter */}
    {/* VideoSidebar */}
    </div>
}

export default Video
