import React from 'react'
import './App.css';
import Video from "./Video"

function App() {
  return (
    <div className="app">

      <div className="app__videos">
        <Video 
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        channel="gabbrielbakizz" 
        description="This is the description!" 
        song="Happy Song" 
        />
        <Video 
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        channel="gabbrielbakizz" 
        description="This is the description!" 
        song="Happy Song" 
        />
        <Video 
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        channel="gabbrielbakizz" 
        description="This is the description!" 
        song="Happy Song" 
        />
        <Video 
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        channel="gabbrielbakizz" 
        description="This is the description!" 
        song="Happy Song" 
        />
      </div>

        {/* app container */}
        {/* videos */}
        {/* <Video /> */}
        {/* <Video /> */}
        {/* <Video /> */}
    </div>
  );
}

export default App;
