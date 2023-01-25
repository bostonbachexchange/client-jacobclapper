import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Button, Form } from 'react-bootstrap';

export const ContactMe = (props) => {

    const parentElement = {
        backgroundColor: '#fff',
        height: '100vh', 
        width: '100vw', 
      }
 
    const inputTextarea = {
        size: '18px',
        padding: '5px',
        marginBottom: '2px',
        width: '100%',
        boxSizing: 'border-box',
        borderRadius: '5px',
    }

    const textLables = {
        size: '18px',
        padding: '6px',
        marginBottom: '2px',
        width: '100%',
    }
    const form = useRef();

    const sendEmail = (e) => {
        const { msgAlert } = props
        e.preventDefault();
        emailjs.sendForm("service_6ua4q8w", "template_jpg5dtl",  form.current, '38n3G7bbp-a_O5PNa')
            .then((response) => {
                msgAlert({
                    heading: 'Send Success',
                    message: 'Thanks!',
                    variant: 'info',
                });
                console.log(response);
                form.current.reset();
            })
            .catch((err) => {
                console.log("Error: ", err);
                msgAlert({
                    heading: 'Send Failure',
                    message: 'An error occured while sending the email. Please try again later',
                    variant: 'danger',
                });
            });
    };
    
    

  return (
    <div style={parentElement}>
        <div className='p-3'>
            <div >
				<h2 className="m-auto p-1 text-center rounded-pill border-top border-bottom" style={{width: '200px', boxShadow: '1px 1px 1px black', backgroundColor: 'white'}}>Contact</h2>
			</div>
            <p className='paragraphStyle pt-3' >Thank you for visiting my music website. I am a professional piano player and instructor available for piano lessons and gigs. Whether you're a beginner or experienced musician, I can help you improve your skills. If you're interested in scheduling a lesson or booking me for an event, please contact me and I will respond as soon as possible. Thank you for your interest in my services.</p>
        </div>
        <div className='formStyle'>
            <Form ref={form}  onSubmit={sendEmail}>
                <Form.Label style={textLables}><strong>Name</strong></Form.Label>
                <input 
                    type="text" 
                    required 
                    placeholder="Your name" 
                    style={inputTextarea} 
                    name="name" 
                    />
                <label style={textLables}><strong>Email</strong></label>
                <input 
                    type="email" 
                    required 
                    style={inputTextarea} 
                    placeholder="Your email" 
                    name="email" 
                    />
                <label style={textLables}><strong>Message</strong></label>
                <textarea 
                    name="message" 
                    required 
                    rows= '4'
                    placeholder="Your email" 
                    style={inputTextarea}
                    />
                <Button 
                    className='m-2'  
                    type="submit" 
                    value="Send" >Submit</Button>
            </Form>
        </div>
    </div>
  );
};


export default ContactMe