import { useState } from "react";
import AudioPlayer from "./AudioPlayer"
import MediaVideos from "./MediaVideos/MediaVideos";
// import track1 from '../assets/recordings/Footprints-in-the-Snow.mp3';
// import track2 from '../assets/recordings/For-the-Flowers.mp3';
import track3 from '../assets/recordings/Freundliche-Landschaft.mp3';
import track4 from '../assets/recordings/Jobim-MP3.mp3';
import track5 from '../assets/recordings/Abschied.mp3';
// import track6 from '../assets/recordings/Blue-in-Green.mp3';
// import track7 from '../assets/recordings/christmas-time.mp3';
// import track8 from '../assets/recordings/Consolation.mp3';
// import track9 from '../assets/recordings/For-the-Flowers.mp3';
// import track10 from '../assets/recordings/Debussy-Prelude-I.mp3';
// import track11 from '../assets/recordings/Gnossienne-No-1.mp3';
// import track12 from '../assets/recordings/Gnossienne-No-2.mp3';
// import track13 from '../assets/recordings/Gnossienne-No-3.mp3';
// import track14 from '../assets/recordings/Greensleeves.mp3';
import track15 from '../assets/recordings/Herberge_1.mp3';
// import track16 from '../assets/recordings/Lonnies-Lament.mp3';
// import track17 from '../assets/recordings/My-Favorite-Things.mp3';
// import track18 from '../assets/recordings/scarlatti-a-minor.mp3';
// import track19 from '../assets/recordings/scarlatti-f-minor.mp3';
// import track20 from '../assets/recordings/O-Tannenbaum.mp3';
// import track21 from '../assets/recordings/Traumerei.mp3';

const album1 = [
  { title: 'Abschied', url: track5, duration: null, composer: 'Robert Schuman', performer: 'Jacob Clapper' },
  { title: 'Freundliche Landschaft', url: track3, duration: null, composer: 'Robert Schumann', performer: 'Jacob Clapper' },
  { title: 'Herberge', url: track15, duration: null, composer: 'Robert Schumann', performer: 'Jacob Clapper' },

//   { title: 'Track 2', url: track2, duration: null, composer: 'John Smith', performer: 'Jane Smith' },
];
const jazzAblum = [
	{ title: 'Quiet Nights of Quiet Stars', url: track4, duration: null, composer: 'Jobim', performer: 'Jacob Clapper' },
  { title: 'Freundliche Landschaft', url: track3, duration: null, composer: 'Schumann', performer: 'Jacob Clapper' },
  { title: 'Quiet Nights of Quiet Stars', url: track4, duration: null, composer: 'Jobim', performer: 'Jacob Clapper' },

];

// const album2 = [

//   { title: 'Track 3', url: track3, duration: null, composer: 'John Lee', performer: 'Jane Lee' },
//   { title: 'Track 4', url: track4, duration: null, composer: 'John Lee', performer: 'Jane Lee' },
// ];

const parentElement = {
	backgroundColor: '#eee',
	height: '100vh', 
	width: '100vw', 
  }

const Media = () => {
	const [list1, setAlbum1] = useState(album1);
	// const [list2, setAblum2] = useState(album2);
    const yujaColor = {
        color: '#A78B41',
    }
	
	return (
		<div className='mb-0 pb-2' style={parentElement}>
			<div className='p-3'>
				<h2 className="m-auto p-1 text-center rounded-pill border-top border-bottom" 
					style={{width: '200px', 
					boxShadow: '1px 1px 1px black', 
					backgroundColor: 'white'}}
					>Media</h2>
			</div>
			<div className='mediaPage mediaReverse' >
					<div className='discriptionWeb'>
						<h3><strong style={yujaColor}>Schumann</strong> | <em>Waldszenen Opus 82</em> </h3>
						<p className="m-3 fs-5">"Forest Scenes"
						</p>
					</div>
					<div className='text-center' style={{flex: '6'}}>
						<AudioPlayer tracks={list1}></AudioPlayer>
					</div>
				</div>
			<div >
				<MediaVideos/>
			</div>
		</div>
	)
}

export default Media
