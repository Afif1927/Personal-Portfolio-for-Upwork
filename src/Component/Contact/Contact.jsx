import React from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      id='contact'
      className='contact'
    >
      <div className='contact-title'>
        <h1>Get in touch</h1>
      </div>
      <div className='contact-section'>
        <motion.div
          className='contact-left'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: "easeOut",
          }}
          viewport={{ once: false }}
        >
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new
            projects, so feel free to send me a
            message about anything that you want
            me to work on. You can contact
            anytime.
          </p>
          <div className='contact-details'>
            <div className='contact-detail'>
              <img
                src={mail_icon}
                alt=''
              />{" "}
              <p>Gmail Address</p>
            </div>
            <div className='contact-detail'>
              <img
                src={call_icon}
                alt=''
              />{" "}
              <p>Number</p>
            </div>
            <div className='contact-detail'>
              <img
                src={location_icon}
                alt=''
              />{" "}
              <p>Dhaka,Bangladesh</p>
            </div>
          </div>
          <div className='platform'>
            <p>
              Visit my social profile & get
              connected:
            </p>
            <p>Profiles...</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: "easeOut",
          }}
          viewport={{ once: false }}
        >
          <form className='contact-right'>
            <label htmlFor=''>Your Name</label>
            <input
              type='text'
              placeholder='Enter your name'
              name='name'
            />
            <label htmlFor=''>Your Email</label>
            <input
              type='email'
              placeholder='Enter your email'
              name='email'
            />
            <label htmlFor=''>
              Write your message here
            </label>
            <textarea
              name='message'
              rows='8'
              placeholder='Enter your message'
            />
            <button
              type='submit'
              className='contact-button'
            >
              Submit now
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
