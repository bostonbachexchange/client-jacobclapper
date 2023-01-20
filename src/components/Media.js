import { useState } from "react";
import AudioPlayer from "./AudioPlayer"

import track1 from '../assets/recordings/Footprints-in-the-Snow.mp3';
import track2 from '../assets/recordings/For-the-Flowers.mp3';
import track3 from '../assets/recordings/Freundliche-Landschaft.mp3';
import track4 from '../assets/recordings/Jobim-MP3.mp3';

const album1 = [
  { title: 'Footprints in the Snow', url: track1, duration: null, composer: 'Debussy', performer: 'Jacob Clapper' },
  { title: 'Freundliche Landschaft', url: track3, duration: null, composer: 'Schumann', performer: 'Jacob Clapper' },
  { title: 'Quiet Nights of Quiet Stars', url: track4, duration: null, composer: 'Jobim', performer: 'Jacob Clapper' },
//   { title: 'Track 2', url: track2, duration: null, composer: 'John Smith', performer: 'Jane Smith' },
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

	return (
		<div className='mb-0 pb-2' style={parentElement}>
			<div className='p-3'>
				<h2 className="m-auto p-1 text-center rounded-pill border-top border-bottom" style={{width: '200px', boxShadow: '1px 1px 1px black', backgroundColor: 'white'}}>Media</h2>
			</div>
			<div className="">
				<div className="m-auto mb-3" style={{width: '400px', border: '2px solid #A78B41', borderRadius: '20px', boxShadow: '4px 4px 4px black', backgroundColor: '#333333', color: 'white'}}>
					<AudioPlayer tracks={list1}></AudioPlayer>
				</div>
				{/* <div className="m-auto pb-3" style={{width: '400px', border: '2px solid #A78B41', borderRadius: '20px', boxShadow: '4px 4px 4px black', backgroundColor: '#333333', color: 'white'}}>
					<AudioPlayer  tracks={list2}></AudioPlayer>
				</div> */}
			</div>
		</div>
	)
}

export default Media
