import { motion } from "framer-motion";
import "./About.css";
import about_img from "../../assets/afifimg2.jpg";
const About = () => {
  return (
    <div
      id='about'
      className='about'
    >
      <div className='about-title'>
        <h1>About Me</h1>
      </div>
      <div className='about-section'>
        <motion.div
          className='about-left'
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        >
          <img
            src={about_img}
            alt=''
          />
        </motion.div>

        <motion.div
          className='about-right'
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <h1>
            Hi There! <span>I'M</span> Mohammad
            Afif
          </h1>
          <h4>Web Developer</h4>
          <p>
            I’m a highly skilled React developer
            with over 4 years of experience,
            specializing in crafting responsive
            and dynamic front-end applications.
            With a strong command of JavaScript,
            HTML, and CSS, along with expertise in
            APIs, Tailwind CSS, Node.js, and
            Framer Motion for animations, I bring
            designs to life with clean code and
            seamless, intuitive user experiences.
            My attention to detail and
            collaborative approach ensure
            high-quality solutions that meet
            business goals and exceed user
            expectations.
          </p>
          <div className='about-intro'>
            <p>
              From{" "}
              <span>: Dhaka, Bangladesh</span>
            </p>
            <p>
              Language{" "}
              <span>: English, Bangla</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
