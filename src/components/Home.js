import profilepic from '../assets/images/profileNMtreeJPG.JPG'
import nmbkg from '../assets/images/nmbkg.jpg'

const Home = (props) => {
	console.log('props in home', props)

const divStyle = {
	background: `url(${nmbkg}) no-repeat center center`,
	backgroundSize: 'cover',    
  };
  
	return (
		
			<div style={divStyle}>
				<div className='p-3' style={{opacity: '1.0'}}>
					<h2 className="m-auto p-1 text-center rounded-pill border-top border-bottom" style={{width: '200px', boxShadow: '1px 1px 1px black', backgroundColor: 'white'}}>Biography</h2>
				</div>
				<div class='bioPage'>
					<div className='image-container' style={{flex: '6'}}>
						<img className="mt-5" src={profilepic} style={{display: 'flex', maxWidth: '95%', maxHeight: '95%', border: '2px solid white', borderRadius: '10px', margin: 'auto'}}></img>
					</div>
					<div style={{flex: '6', color: 'white'}}>
						<p className="m-4 mt-5 fs-5">
						Jacob Clapper is a highly accomplished pianist and music instructor, who has had a successful career in various roles in the music industry. He currently serves as the Music Director for the Unitarian Universalist All Souls Church in Braintree, where he has been working since 2015. He has also worked as a Collaborative Pianist for Curry College from 2016 to 2020 and taught private music instruction courses there from 2018 to 2020.
						<br></br>
						<br></br>
						He has an extensive experience as a collaborative pianist, having worked with Duxbury Public Schools from 2014 until 2019, where he performed with the Duxbury High School Chamber Singers in concerts at Strathmore Hall, Carnegie Hall, and Disney. He currently teaches piano lessons in Duxbury, Braintree, and Melrose.
						<br></br>
						<br></br>
						Jacob Clapper received his Bachelor of Arts from Texas A&M University-Commerce in 2011 and was awarded a Graduate Assistantship at the University of Florida. During his time as a Graduate Assistant, he taught undergraduate courses in piano skills and accompanied the Men’s Glee Club. He graduated from the University of Florida with a Master’s of Music degree and a concentration in piano performance in 2013.
						<br></br>
						<br></br>
						Throughout his career, Jacob has received piano instruction from distinguished teachers and artists such as Luis Sanchez and Kevin Orr. He has also participated in the University of Florida International Piano Festival and performed in an Honors Recital at Steinway Hall in Plano, Texas.
						<br></br>
						<br></br>	
						</p>
					</div>
				</div>
				<div className='w-100 p-2' style={{border: '2px solid black', color: 'black', backgroundColor: '#EAEAEA' }}>
					<address className="m-2"><strong>Reach me: </strong> 
					<a href="mailto:clapperpianist@gmail.com">clapperpianist@gmail.com</a>
					</address>
				</div>
			</div>
		
	)
}

export default Home
