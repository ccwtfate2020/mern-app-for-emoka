import React from 'react'
import "./CSS/Contact.css"

const Contact = () => {
  return (
    <div className='contact'>
        <h2>Contact Me</h2>
        <p>Welcome for any business cooperation!</p>
        <input type="text" placeholder='Your Name' maxlength='80' required/>
        <input type="email" placeholder='Your Email' maxlength='320' required/>
        <textarea rows="8" placeholder='Type your message...' required></textarea>
        <button>Send Message</button>
    </div>
  )
}

export default Contact