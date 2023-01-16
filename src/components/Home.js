import profilepic from '../assets/images/profileNMtreeJPG.JPG'
import nmbkg from '../assets/images/nmbkg.jpg'
const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)
const pageStyle = {
	display: 'flex',
}
const divStyle = {
	background: `url(${nmbkg}) no-repeat center center`,
  };
  
  
	return (
		<>
			<div style={divStyle} className=''>
			<div className='p-3' style={{opacity: '1.0'}}>
			<i class="fa fa-google" aria-hidden="true" position='absolute'></i>
				<h2 className="m-auto p-1 text-center rounded-pill border-top border-bottom" style={{width: '200px', boxShadow: '1px 1px 1px black', backgroundColor: 'white'}}>Biography</h2>
			</div>
			<div class='bioPage'>
				<div style={{flex: '6'}}>
					<img className='m-4 mt-5' src={profilepic} style={{width: '95%', border: '2px solid white', borderRadius: '10px'}}></img>
				</div>
				<div style={{flex: '6', color: 'white', backgroundColor: ''}}>
					<p className="m-4 mt-5 fs-5" style={{}}>Jacob Clapper current serves as music director for the Unitarian Universalist All Souls Church in Braintree, where he has worked since 2015. Jacob Clapper has been a Collaborative Pianist pianist for Curry College from 2016 to 2020, and he taught Private Music Instruction courses at the college from 2018 to 2020. He was also a collaborative pianist for Duxbury Public Schools from 2014 until 2019. He performed with Duxbury High School Chamber Singers in concerts at Strathmore Hall, Carnegie Hall and Disney. 
					He teaches piano lessons in Duxbury, Braintree, and Melrose. 
					<br></br>
					<br></br>
					In 2011, Jacob received his Bachelor of Arts from Texas A&M University-Commerce, and was awarded a Graduate Assistantship at the University of Florida. While on Graduate Assistantship, he taught undergraduate courses in piano skills and accompanied the Men’s Glee Club. In 2013, he graduated from the University of Florida with a Master’s of Music degree and a concentration in piano performance. 
					<br></br>
					<br></br>
					Jacob has received piano instruction from distinguished teachers and artists such as Luis Sanchez, and Kevin Orr. He has also participated in the University of Florida International Piano Festival, and performed in an Honors Recital at Steinway Hall in Plano, Texas. 
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
		</>
	)
}

export default Home
