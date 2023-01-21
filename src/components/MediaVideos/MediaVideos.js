import Icon from '@mdi/react'
import { mdiCameraOutline } from '@mdi/js';
import { mdiMicrophone } from '@mdi/js';
import { mdiPiano } from '@mdi/js';

const MediaVideos = () => {

    const yujaColor = {
        color: '#A78B41',
    }
    
    const VideoDetails = () => {
        return (
            <footer className='m-1'>
                <div>
                    <Icon path={mdiPiano}
                            title="piano"
                            size={1}
                            style={{marginRight: '11px'}}
                            color="#3b5998"
                            />Roland RD-700GX
                </div>
                <div>
                    <Icon path={mdiCameraOutline}
                            title="camera"
                            size={1}
                            style={{marginRight: '11px'}}
                            color="#3b5998"
                            />Nikon, iPhone 12, Moto G Stylus
                </div>
                <div>
                    <Icon path={mdiMicrophone}
                            title="audio"
                            size={1}
                            style={{marginRight: '11px'}}
                            color="#3b5998"
                            />Midi
                </div>
            </footer>
            );
        }

    return (
        <>
        <div className='mediaPage' >
            <div className='mt-auto mb-auto' style={{flex: '6'}}>
                <iframe className='rounded videoWebStyle' src="https://www.youtube.com/embed/Retrm-5AqjQ" allowFullScreen></iframe>
            </div>
            <div className='discriptionWeb'>
                <h3 ><strong style={yujaColor}>Chopin</strong> | <em> Waltz, Opus 64 No. 2</em></h3>
                <VideoDetails/>
            </div>
        </div>

    <div className='mediaPage mediaReverse' >
        <div className='discriptionWeb'>
            <h3><strong style={yujaColor}>Coltrane</strong> | <em> A Love Supreme</em></h3>
            <p className="m-3 fs-5">"Acknowledgement" from A Love Supreme by John Coltrane
                <br></br>Arranged by Brent Edstrom
            </p>
                <VideoDetails/>
        </div>
        <div className='text-center' style={{flex: '6'}}>
            <iframe className='rounded videoWebStyle'  src="https://www.youtube.com/embed/ndA9TgJGlQs" allowFullScreen></iframe>
        </div>
    </div>
    <div className='mediaPage' >
        <div className='text-center mt-auto mb-auto' style={{flex: '6'}}>
            <iframe className='rounded videoWebStyle' src="https://www.youtube.com/embed/lFIsG5iaNCg" allowFullScreen></iframe>
        </div>
        <div className='discriptionWeb' >
            <h3><strong style={yujaColor}>Godowsky</strong> | <em>Alt Wien</em></h3>
            <p className="m-3 fs-5">  No. 11, "Old Vienna" from Triakontameron, <br></br>"Thirty Moods and Scenes"
            </p>
            <VideoDetails/>
        </div>
    </div>
    <div className='mediaPage mediaReverse' >
        <div className='discriptionWeb'>
            <h3><strong style={yujaColor}>Debussy</strong> | <em>La Fille Aux Cheu</em> </h3>
            <p className="m-3 fs-5"> Prelude Book 1 No. 8 <br></br> "The Girl with the Flaxen Hair"
            </p>
            <VideoDetails/>
        </div>
        <div className='text-center' style={{flex: '6'}}>
            <iframe className='rounded videoWebStyle'  src="https://www.youtube.com/embed/Hz8lPLmeaZc" allowFullScreen></iframe>
        </div>
    </div>
    </>

    )
}

export default MediaVideos