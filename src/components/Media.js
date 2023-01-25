import { useState } from "react";
import AudioPlayer from "./AudioPlayer"
import MediaVideos from "./MediaVideos/MediaVideos";
// import track1 from '../assets/recordings/Footprints-in-the-Snow.mp3';
// import track2 from '../assets/recordings/For-the-Flowers.mp3';
import track1 from '../assets/recordings/Eintritt.mp3';
import track2 from '../assets/recordings/Jager-auf-def-Lauer.mp3';
import track3 from '../assets/recordings/Einsame-Blumen.mp3';
import track4 from '../assets/recordings/Verrufene-Stelle.mp3';
import track5 from '../assets/recordings/Freundliche-Landschaft.mp3';
import track6 from '../assets/recordings/Herberge.mp3';
import track7 from '../assets/recordings/Vogel-als-Prophet.mp3';
import track8 from '../assets/recordings/Jagdlied.mp3';
import track9 from '../assets/recordings/Abschied.mp3';
import track10 from '../assets/recordings/Jobim-MP3.mp3';
// import track6 from '../assets/recordings/Blue-in-Green.mp3';
// import track7 from '../assets/recordings/christmas-time.mp3';
// import track8 from '../assets/recordings/Consolation.mp3';
// import track9 from '../assets/recordings/For-the-Flowers.mp3';
// import track10 from '../assets/recordings/Debussy-Prelude-I.mp3';
// import track11 from '../assets/recordings/Gnossienne-No-1.mp3';
// import track12 from '../assets/recordings/Gnossienne-No-2.mp3';
// import track13 from '../assets/recordings/Gnossienne-No-3.mp3';
// import track14 from '../assets/recordings/Greensleeves.mp3';
// import track16 from '../assets/recordings/Lonnies-Lament.mp3';
// import track17 from '../assets/recordings/My-Favorite-Things.mp3';
// import track18 from '../assets/recordings/scarlatti-a-minor.mp3';
// import track19 from '../assets/recordings/scarlatti-f-minor.mp3';
// import track20 from '../assets/recordings/O-Tannenbaum.mp3';
// import track21 from '../assets/recordings/Traumerei.mp3';

const album1 = [
  { title: 'Eintritt', url: track1, duration: null, composer: 'Robert Schuman', performer: 'Jacob Clapper' },
  { title: 'Jager auf der Lauer', url: track2, duration: null, composer: 'Robert Schumann', performer: 'Jacob Clapper' },
  { title: 'Einsame Blumen', url: track3, duration: null, composer: 'Robert Schumann', performer: 'Jacob Clapper' },
  { title: 'Verrufene Stelle', url: track4, duration: null, composer: 'Robert Schumann', performer: 'Jacob Clapper' },
  { title: 'Freundliche Landschaft', url: track5, duration: null, composer: 'Robert Schumann', performer: 'Jacob Clapper' },
  { title: 'Herberge', url: track6, duration: null, composer: 'Robert Schumann', performer: 'Jacob Clapper' },
  { title: 'Vogel als Prophet', url: track7, duration: null, composer: 'Robert Schumann', performer: 'Jacob Clapper' },
  { title: 'Jagdlied', url: track8, duration: null, composer: 'Robert Schumann', performer: 'Jacob Clapper' },
  { title: 'Abschied', url: track9, duration: null, composer: 'Robert Schumann', performer: 'Jacob Clapper' },

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
						<p className="m-3 fs-5">Waldszenen Opus 82, also known as "Forest Scenes," is a set of nine piano pieces composed by Robert Schumann in 1848-1849. The pieces are meant to evoke the feeling of being in a forest, with each piece having its own unique character and atmosphere.
						<ol style={{textAlign: 'left', fontSize: '0.7em'}} className='m-4'>
							<li >Eintritt (Entrance)</li>
							<li>Jäger auf der Lauer (Hunter on the Lookout)</li>
							<li>Einsame Blumen (Lonely Flowers)</li>
							<li>Verrufene Stelle (Haunted Place)</li>
							<li>Freundliche Landschaft (Friendly Landscape)</li>
							<li>Herberge (Wayside Inn)</li>
							<li>Vogel als Prophet (Bird as Prophet)</li>
							<li>Jagdlied (Hunting Song)</li>
							<li>Abschied (Farewell)</li>
						</ol>
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
