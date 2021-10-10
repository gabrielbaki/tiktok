import React, { useRef, useState } from 'react'
import "./Video.css";
import VideoFooter from "./VideoFooter"
import VideoSidebar from "./VideoSidebar"

function Video({url}) {
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
        <video 
        className="video__player"
        onClick={handleVideoPress}
        loop
        ref={videoRef}
        src={url}></video>
    <VideoFooter channel="gabbrielbakizz" description="This is the description!" song="Happy Song"/>
    <VideoSidebar likes={111} shares={222} messages={33}/>
    </div>
}

export default Video
