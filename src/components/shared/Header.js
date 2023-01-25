import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faYoutube} from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Icon from '@mdi/react'
import { mdiGoogle } from '@mdi/js'
import { mdiFacebook } from '@mdi/js';
import { mdiYoutube } from '@mdi/js';
import { mdiInstagram } from '@mdi/js';

library.add(faEnvelope, faYoutube)

console.log('faEnvelope', faEnvelope)

const linkStyle = {
	color: 'whitesmoke',
	textDecoration: 'none',
	fontSize: '24px',
	justifyContent: 'space-between',
	marginLeft: '12px',
	marginRight: '12px',
  }
const authStyle = {
	color: 'black',
	textDecoration: 'none',
	fontSize: '24px',
	justifyContent: 'space-between',
	marginLeft: '12px',
	marginRight: '12px',
  }
  
const brandStyle = {
    color: 'white',
	padding: '0px',
    textDecoration: 'none',
	justifyContent: 'center',
	fontSize: '28px',
	fontWeight: '700'
}
const authenticatedOptions = (
	<>
		<Nav.Item className='m-2'>
			<Link to='update-blog' style={authStyle}>
				<span className='hoverClass1'>Update Blog</span>
			</Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
			<Link to='update-calendar' style={authStyle}>
				Update Calendar
			</Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
			<Link to='change-password' style={authStyle}>
				Change Password
			</Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
			<Link to='sign-out' style={authStyle}>
				Log Out
			</Link>
		</Nav.Item>
	</>
)

// const unauthenticatedOptions = (
// 	<>
//         <Nav.Item className='m-2'>
// 		    <Link to='sign-up' style={linkStyle}>Sign Up</Link>
//         </Nav.Item>
//         <Nav.Item className='m-2'>
// 		    <Link to='sign-in' style={linkStyle}>Sign In</Link>
//         </Nav.Item>
// 	</>
// )

const alwaysOptions = (
	<>
		<Fragment>
				<>
					<Nav.Item className='m-auto'>
						<Link to='/' style={linkStyle}>
						<span className='HoverClass1'>Home</span>
						</Link>
					</Nav.Item>
				</>
				<>
					<Nav.Item className='m-auto'>
						<Link to='/media' style={linkStyle}>
						<span className='HoverClass1'>Media</span>
						</Link>
					</Nav.Item>
				</>
				<>
					<Navbar.Brand className='m-auto'>
						<Link to='/' style={brandStyle}>
							Jacob Clapper</Link>
					</Navbar.Brand>
				</>
				<>
					<Nav.Item className='m-auto'>
						<Link to='/blog' style={linkStyle}>
						<span className='HoverClass1'>Blog</span>
						</Link>
					</Nav.Item>
				</>
				<>
					<Nav.Item className='m-auto'>
						<Link to='/contact' style={linkStyle}>
						<span className='HoverClass1'>Contact</span>
						</Link>
					</Nav.Item>
				</>
				{/* <>
					<Nav.Item className='m-auto'>
						<Link to='/calendar' style={linkStyle}>
						<span className='HoverClass1'>Calendar</span>
						</Link>
					</Nav.Item>
				</> */}
		</Fragment>
		
	</>
)

const Header = ({ user }) => (
	<>
			<Navbar bg='dark' variant='dark' expand='md' className='border-bottom border-3 mb-0 linkptile p-2'>
				<Navbar.Toggle aria-controls='basic-navbar-nav'/>
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='m-auto'>
						{/* {user && (
							<span className='navbar-text mr-2'>Welcome, {user.email}</span>
						)} */}
						{alwaysOptions}
						{/* {user ? authenticatedOptions : unauthenticatedOptions} */}
					</Nav>
				</Navbar.Collapse>
				{/* <a href="/" target="_blank">
					<FontAwesomeIcon icon={faYoutube} className='m-1 border border-4 shadow rounded' size="lg" color="darkred" />
				</a> */}
				{/* <a href="mailto:eid2107@columbia.edu" target="_blank">
					<FontAwesomeIcon icon={faEnvelope} className='m-1 border border-4 shadow rounded' size="lg" color="darkblue" />
				</a> */}
				<div className='m-3' style={{position: 'absolute', top: '0', right: '0'}}>
					<a href='https://www.facebook.com/jacobrclapper'>
				      <Icon path={mdiFacebook}
							title="User Profile"
							size={1}
							style={{marginRight: '11px'}}
							// horizontal
							// vertical
							// rotate={90}
							color="#3b5998"
							/>
					</a>
					<a href='mailto:clapperpianist@gmail.com'>
				      <Icon path={mdiGoogle}
							title="User Profile"
							size={1}
							style={{marginRight: '11px'}}
							// horizontal
							// vertical
							// rotate={90}
							color="rgb(80,199,199)"
							/>
					</a>
					<a href='https://www.instagram.com/clapperpianist/'>
				      <Icon path={mdiInstagram}
							title="User Profile"
							size={1}
							style={{marginRight: '11px'}}
							// horizontal
							// vertical
							// rotate={90}
							color="#cd486b"
							/>
					</a>
					<a href='https://www.youtube.com/channel/UCZdJrUGgra3dvMQdsDrOJ0g'>
				      <Icon path={mdiYoutube}
							title="User Profile"
							size={1}
							style={{marginRight: '11px'}}
							// horizontal
							// vertical
							// rotate={90}
							color="#c4302b"
							/>
					</a>
			</div>
			</Navbar>
			{user && 
			<Navbar bg='light' variant='dark' expand='md' className='border-bottom border-3'>
				<Nav className='m-auto'>
					{user ? authenticatedOptions : null}
				</Nav>
			</Navbar>}
	</>
)

export default Header
