import React, { useState, useEffect } from 'react';
import { Howl, Howler } from 'howler';
import PlayArrow from 'material-design-icons/av/svg/production/ic_play_arrow_48px.svg'
import Pause from 'material-design-icons/av/svg/production/ic_pause_48px.svg'
import SkipPrevious from 'material-design-icons/av/svg/production/ic_skip_previous_48px.svg'
import SkipNext from 'material-design-icons/av/svg/production/ic_skip_next_48px.svg'
import Volume from 'material-design-icons/av/svg/production/ic_volume_up_48px.svg'


const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  
  const AudioPlayer = (props) => {
    const { tracks } = props
    const [currentTrack, setCurrentTrack] = useState(tracks[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [player, setPlayer] = useState(null);
    const [volume, setVolume] = useState(1);

    tracks.forEach((track) => {
        const audio = new Audio(track.url);
        audio.addEventListener('loadedmetadata', () => {
        track.duration = audio.duration;
        });
    });

// console.log('props', props)
// console.log('player', player)
// console.log('Howler', Howler)

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    Howler.volume(e.target.value);
  };
  
  const handlePlay = () => {
    if (player) {
      player.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (player) {
      player.pause();
      setIsPlaying(false);
    }
  };

  const handleTrackClick = (track) => {
    setCurrentTrack(track);
    player.stop();
    setCurrentTime(0);
    setPlayer(new Howl({
      src: [track.url],
    }));
  };

  const handleNext = () => {
    const currentIndex = tracks.indexOf(currentTrack);
    const nextIndex = (currentIndex + 1) % tracks.length;
    player.unload();
    setCurrentTrack(tracks[nextIndex]);
    setCurrentTime(0);
    setPlayer(new Howl({
      src: [tracks[nextIndex].url],
      onend: () => {
        setIsPlaying(false);
        setCurrentTime(0);
      },
      onplay: () => setIsPlaying(true),
      onpause: () => setIsPlaying(false),
      onstop: () => setIsPlaying(false),
      onseek: () => setCurrentTime(player.seek()),
      ontimeupdate: () => setCurrentTime(player.seek())
    }));
  };

  const handlePrevious = () => {
    const currentIndex = tracks.indexOf(currentTrack);
    const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    player.unload();
    setCurrentTrack(tracks[prevIndex]);
    setPlayer(new Howl({
      src: [tracks[prevIndex].url],
      onend: () => {
        setIsPlaying(false);
        setCurrentTime(0);
      },
      onplay: () => {
        setIsPlaying(true);
      },
      onpause: () => setIsPlaying(false),
      onstop: () => setIsPlaying(false),
      onload: () => {
        setCurrentTime(0);
      },
      onseek: () => setCurrentTime(player.seek()),
      ontimeupdate: () => setCurrentTime(player.seek())
    }));
  };

  useEffect(() => {
    setPlayer(new Howl({
      src: [currentTrack.url],
      onend: () => {
        setIsPlaying(false);
        setCurrentTime(0);
      },
      onplay: () => setIsPlaying(true),
      onpause: () => setIsPlaying(false),
      onstop: () => setIsPlaying(false),
      onload: () => {
        setCurrentTime(0);
      },
      onseek: () => setCurrentTime(player.seek()),
      ontimeupdate: () => setCurrentTime(player.seek())
    }));
  }, [currentTrack]);
  
  useEffect(() => {
    if (player) {
      const interval = setInterval(() => {
        setCurrentTime(player.seek())
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [player, isPlaying]);


  const TrackList = ({tracks, handleTrackClick, isPlaying, currentTrack}) => (
    <ul style={{padding: '0'}}>
      {tracks.map((track, index) => (
        <li 
          key={track.title} 
          onClick={() => handleTrackClick(track)} 
          style={{ 
            listStyle: 'none', 
            fontSize: '14px',
            borderBottom: '1px solid lightblue',
            margin: '1px',
            borderRadius: '3px',
            width: '100%', 
            padding: '5px',
            display: 'flex'
          }}
        >
            <span style={{display:'flex', flex: 1}}>
            {isPlaying && track === currentTrack ?  
                <img src={Pause} 
                style={{filter: 'invert(100%)', width: '20px'}} 
                alt='Pause Icon' 
                onClick={handlePause} 
                /> 
                :  
                <span className='text-center' 
                style={{height: '20px', width: '20px'}} 
                onClick={handlePlay}
                >{index + 1}
                </span> 
                } 
            </span>
            <span style={{display:'flex', flex: 8, color: track === currentTrack ? '#A78B41' : 'white',}}>{track.title}, {track.composer}</span> 
            <span style={{display:'flex', flex: 1}}> {formatTime(track.duration)}</span>
        </li>
      ))}
    </ul>
  );
  
  const TrackInfo = ({ currentTrack }) => {
    return (
            <div>
                <h4 className="p-1" 
                    style={{
                        color: '#A78B41', 
                        fontSize: '18px'}}>
                    {currentTrack.title}<br></br> {currentTrack.performer}
                </h4> 
            </div>
        );
  };

  
  return (
    <div className="m-auto mb-3" 
            style={{width: '400px', border: '2px solid #A78B41', borderRadius: '20px', boxShadow: '4px 4px 4px black', backgroundColor: '#333333', color: 'white'}}>
        <TrackList 
            tracks={tracks} 
            handleTrackClick={handleTrackClick} 
            // handleTrackClick={setCurrentTrack} 
            isPlaying={isPlaying} 
            currentTrack={currentTrack} />
        <div className="text-center">
            <TrackInfo currentTrack={currentTrack} isPlaying={isPlaying}/>
        </div>
        <div className='text-center p-2' style={{display: 'flex'}}>
            <span className='' style={{flex: 2}}>
                {formatTime(currentTime)}
            </span>
            <progress
                max={currentTrack.duration}
                value={currentTime}
                style={{flex: 8}}
            />   
            <span style={{flex: 2}}>
                {formatTime(currentTrack.duration)}
            </span>
        </div>
        <div className='text-center pb-2'>
            <img src={SkipPrevious} style={{filter: 'invert(96%)'}} alt='Previous Icon' onClick={handlePrevious} />
            <span className='rounded-circle background-light'>
                {isPlaying ? <img src={Pause} style={{filter: 'invert(96%)'}} alt='Pause Icon' onClick={handlePause} /> : <img src={PlayArrow} style={{filter: 'invert(96%)'}} alt='Play Icon' onClick={handlePlay}/>}
            </span>     
            <img src={SkipNext} alt='Next Icon' style={{filter: 'invert(96%)'}} onClick={handleNext} />
        </div> 
        <div style={{display: 'flex'}}>
            <div className='mx-auto p-2' style={{display: 'flex', alignItems: 'center'}}>
            <img src={Volume} alt='Volume Icon' style={{filter: 'invert(96%)',height: '20px'}}/>
            <input type="range" min={0} max={1} step={0.01} value={volume} onChange={handleVolumeChange} />
            </div>
        </div>
    </div>
  );
};

export default AudioPlayer;

