import emailjs from 'emailjs-com';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const formStyle = {
    padding: '20px',
    margin: '0 auto',
    width: '80%',
 }
 
 const inputTextarea = {
    size: '18px',
    padding: '10px',
    marginBottom: '20px',
    width: '100%',
    boxSizing: 'border-box',
 }
 
const ContactMe = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
 
    const handleNameChange = (e) => {
       setName(e.target.value);
    }
 
    const handleEmailChange = (e) => {
       setEmail(e.target.value);
    }
 
    const handleMessageChange = (e) => {
       setMessage(e.target.value);
    }
 
    const sendEmail = () => {
       emailjs.send("YOUR_EMAIL_SERVICE_ID", "YOUR_TEMPLATE_ID", {name, email, message});
    }


    return (
        <> 
            <div className="m-3">
                <h1 className="text-center ls-3 mt-4">Contact</h1>
                <p className="m-3">Thank you for visiting my music website! I am a professional piano player and instructor, and I am available for both piano lessons and gigs. Whether you're a beginner looking to learn the basics or an experienced musician looking to take your skills to the next level, I am here to help. If you're interested in scheduling a lesson or booking me for an event, please don't hesitate to contact me. I will respond to your message as soon as possible. Thank you again for your interest in my services!</p>
            </div>
            <form style={formStyle}>
                <input type="text" required value={name} onChange={handleNameChange} placeholder="Your name" style={inputTextarea}/>
                <input type="email" required value={email} onChange={handleEmailChange} placeholder="Your email" style={inputTextarea}/>
                <textarea value={message} required onChange={handleMessageChange} placeholder="Your message" style={inputTextarea}></textarea>
                <Button type="submit" onClick={sendEmail}>Send</Button>
            </form>


        </>

    )
}

export default ContactMe