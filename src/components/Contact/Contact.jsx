import React from 'react'
import './Contact.css'
import mes_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import loc_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {


  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6ec61bd2-3813-439c-a381-1ed6c8bca72c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }

  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a message
          <img src={mes_icon}/>
        </h3>
        <p>
        We'd love to hear from you! Whether you have questions about our services, need assistance, or simply want to share your feedback, we're here to help. Our team is committed to providing prompt and thoughtful responses to all inquiries. Feel free to reach out via the contact form, email, or phone. We look forward to connecting with you and 
        ensuring your experience with us is nothing short of exceptional.
        </p>
        <ul>
          <li><img src={phone_icon}/>+1 (555) 123-4567</li>
          <li><img src={mail_icon}/>contact@educityuniversity.com</li>
          <li><img src={loc_icon}/>1234 Educity Avenue, Suite 101<br/>Cityville, State, 12345</li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type='text' name='name' placeholder='Enter your name..' required/>
          <label>Phone Number</label>
          <input type='tel' name='phone' placeholder='Enter your mobile number..' required/>
          <label>Write your message</label>
          <textarea name='message' rows="6" placeholder='Enter your message' required/>
          <button type='submit' className='btn dark-btn'>Submit Now
            <img src={white_arrow}/>
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
