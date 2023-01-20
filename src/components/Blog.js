import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import messages from './shared/AutoDismissAlert/messages'
import LoadingScreen from './shared/LoadingScreen'
import { getAllBlogs } from '../api/blog'
import dateFormat, { masks } from "dateformat";
const Blog = (props) => {
	// const { msgAlert, user } = props
	const { updatedBlogs } = props
	console.log('props in Blog', props)
	const [blogs, setBlogs] = useState(null)
	const [error, setError] = useState(false)
	const { msgAlert } = props

	const parentElement = {
        backgroundColor: '#eee',
        height: '100vh', 
        width: '100vw', 
      }

	useEffect(() => {
		getAllBlogs()
			.then(res => setBlogs(res.data.blogs))
			.catch(err => {
				msgAlert({
					heading: 'Error Getting Blog',
					message: messages.getSongsFailure,
					variant: 'danger',
				})
				setError(true)
			})
	}, [updatedBlogs])
	
	if (error) {
		return <p>Error!</p>
	}
	if (!blogs) {
		return <LoadingScreen />
	} else if (blogs.length === 0) {
		return <p className='text-center m-4'>No blogs yet. Check again soon.</p>
	}


	const blogItems = blogs.map(blog => 
		<>
			<div className="m-auto mt-4 mb-5 fs-5" 
				style={{
					width: '80%', 
					border: '3px solid #AD974F', 
					boxShadow: '3px 3px 3px grey', 
					position: 'relative', 
					borderRadius: '10px'}} 
					key={blog._id}>
				<div 
				style={{ 
					backgroundColor: '#212121', 
					color: '#AD974F', 
					borderTopRightRadius: '10px', 
					borderTopLeftRadius: '10px',
					display: 'flex'}}>
						<div style={{flex: 2}}>
							<p className="m-2"></p>
						</div>
					<div style={{
						flex: 8
						}}>
						<h1 className='text-center p-2' style={{alignItems: 'center', color: '#AD974F', fontFamily: 'Roboto', }}>{blog.title}</h1>
					</div>
					<div style={{flex: 2}}>
						<p className="m-2">{dateFormat(blog.date, "mmmm dS, yyyy")}</p>
					</div>
           		</div>
				<p className='text-center p-5 mb-0 mt-0 fs-4' style={{fontFamily: 'Rajdhani', fontSize: '20px', backgroundColor: 'whitesmoke', borderRadius: '11px', color: '#212121'}}>{blog.text.slice(0, 150) } ... </p>
				<div className='text-center' style={{position: 'absolute', width: '100%', bottom: '-15%', backgroundColor: 'transparent'}}>
					<Button className="p-3 text-center rounded-pill conRdgBorder" style={{ border: '3px solid #212121', backgroundColor: '#AD974F'}} >
						<Link to={`/blog/${blog._id}`} style={{color: 'black', textDecorationLine: 'none', fontSize: '20px', fontWeight: 'bold'}}><span className='conRdg'>Continue Reading</span></Link>
					</Button>
				</div>
			</div>
		</>
		)

	return (	
			<div style={parentElement}>
				<div className='p-3'>
					<h2 className="m-auto p-1 text-center rounded-pill border-top border-bottom" style={{width: '200px', boxShadow: '1px 1px 1px black', backgroundColor: 'white'}}>Blog</h2>
				</div>
				<div>
					{blogItems}
				</div>
			</div>
	)
}

export default Blog
