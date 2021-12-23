import './App.css';
import React from 'react'
import { Player } from '@remotion/player/dist/Player';
import { PlayerComp } from './PlayerComp';

function App() {
  return (
    <div className='container'>
      <div>
        <title>Remotion video player</title>
        <meta name="name" content="content" />
        <link rel="icon" href="/favicon.ico" />
      </div>

        <Player
          className="player"
          component={PlayerComp}
          styles={{ width: '100%' }}
          durationInFrames={2700}
          compositionWidth={640}
          compositionHeight={480}
          controls={true}
          fps={30}
          autoPlay={false}
        />

    </div>
  );
}

export default App;
