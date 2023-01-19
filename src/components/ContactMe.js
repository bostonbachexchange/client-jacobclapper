import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


export const ContactMe = () => {

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
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_6ua4q8w", "template_jpg5dtl",  form.current, '38n3G7bbp-a_O5PNa')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='mb-0 pb-2' style={{backgroundColor: 'lightblue'}}>
        <div className='p-3' style={{opacity: '1.0'}}>
            <div className="">
				<h2 className="m-auto p-1 text-center rounded-pill border-top border-bottom" style={{width: '200px', boxShadow: '1px 1px 1px black', backgroundColor: 'white'}}>Contact</h2>
			</div>
            <p className="m-3">Thank you for visiting my music website! I am a professional piano player and instructor, and I am available for both piano lessons and gigs. Whether you're a beginner looking to learn the basics or an experienced musician looking to take your skills to the next level, I am here to help. If you're interested in scheduling a lesson or booking me for an event, please don't hesitate to contact me. I will respond to your message as soon as possible. Thank you again for your interest in my services!</p>
        </div>
            <form ref={form} style={formStyle} onSubmit={sendEmail}>
            {/* <label>Name</label> */}
            <input type="text" required placeholder="Your name" style={inputTextarea} name="name" />
            {/* <label>Email</label> */}
            <input type="email" required style={inputTextarea} placeholder="Your email" name="email" />
            {/* <label>Message</label> */}
            <textarea name="message" required placeholder="Your email" style={inputTextarea}/>
            <input type="submit" value="Send" />
            </form>
    </div>
  );
};


export default ContactMe