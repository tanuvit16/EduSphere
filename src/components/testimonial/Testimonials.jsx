import React, { useRef } from 'react'
import './testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
  const slider= useRef();
  let tx=0;

  const slideForward=()=>{
    if(tx>-50){
      tx-=25;
    }
    slider.current.style.transform= `translateX(${tx}%)`;
  }


  const slideBackward=()=>{
    if(tx<0){
      tx+=25;
    }
    slider.current.style.transform= `translateX(${tx}%)`;
  }


  return (
    <div className='Testimonials'>
      <img src={next_icon} className='next-btn' onClick={slideForward}></img>
      <img src={back_icon} className='back-btn' onClick={slideBackward}></img>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_1}></img>
                <div>
                  <h3>Sophia James</h3>
                  <span>Edusity, USA</span>
                </div>

              </div>

              <p>
              I chose Educity for its strong reputation in technology and innovation, and I can confidently say it exceeded my expectations. The computer science program is top-notch, with access to cutting-edge resources and real-world projects. The faculty are experts in their fields and always available to support students. I’ve learned more than I ever imagined and feel fully prepared to step into the tech industry.
              </p>

            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_2}></img>
                <div>
                  <h3>Ethan Patel</h3>
                  <span>Edusity, USA</span>
                </div>

              </div>

              <p>
              Attending Educity was a life-changing experience. The professors were not only highly knowledgeable but also genuinely invested in our success. The curriculum was challenging yet relevant to today’s business world, and the networking opportunities helped me land an internship that turned into a full-time job. Educity truly sets you up for success, both academically and professionally.
              </p>

            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_3}></img>
                <div>
                  <h3>Maria Silva</h3>
                  <span>Edusity, USA</span>
                </div>

              </div>

              <p>
              As an international student, I was nervous about adjusting to life in a new country, but Educity made the transition smooth and welcoming. The diverse student body and supportive community allowed me to thrive academically and socially. I’ve gained lifelong friendships and valuable skills that will help me in my global career. Educity truly feels like home!
</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_4}></img>
                <div>
                  <h3>Liam Thompson</h3>
                  <span>Edusity, USA</span>
                </div>

              </div>

              <p>
              Studying psychology at Educity has been an incredible journey. The program offers a perfect balance between theory and practical experience, with opportunities for hands-on research and internships. The professors are approachable, passionate about their subjects, and always encourage critical thinking. I feel well-prepared to pursue a career in mental health, thanks to the solid foundation Educity has provided me.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
