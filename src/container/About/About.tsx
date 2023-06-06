import { useEffect } from "react";
// import { motion } from "framer-motion";

// import { urlFor, client } from "../../client";

import "@/styles/About.css";
import { images } from "@/constants";

const About = () => {
  // const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    // const query = '*[_type=="about"]';
    // client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <div className="app__profile-item">
        <div className="app__profile-img">
          <img src={images["aboutme"]} alt="profile" />
        </div>
        <div className="app__profile-content">
          <h1>About me</h1>
          <div className="p-text">
            Hello, my name is{" "}
            <span className="text-plus">Selim JEAN-BAPTISTE-SIMONE</span>, a{" "}
            <span className="text-plus">passionate and creative</span> fullstack
            web developer currently working at RICOH FRANCE.
            <br />
            <p>
              With several years of experience, I specialize in building robust
              and scalable web applications. I have expertise in various
              technologies, including{" "}
              <span className="text-plus">
                PHP, ReactJS, NextJS, Typescript, GraphQL, MongoDB, MySQL,
                Angular, Node.js, and Express
              </span>
              .
              <br />
              My approach to development focuses on creating{" "}
              <span className="text-plus">seamless and intuitive</span> user
              experiences. I strongly believe in following best development
              practices, resulting in{" "}
              <span className="text-plus">
                clean, well-structured, and maintainable code
              </span>
              .
              <br />
              Throughout my career, I have had the opportunity to work on{" "}
              <span className="text-plus">
                multiple <a href="#skills">projects</a>
              </span>
              , ranging from dynamic website design to complex web applications.
              I have gained valuable experience in managing the entire
              development lifecycle, from{" "}
              <span className="text-plus">
                initial design to production deployment and maintenance
              </span>
            </p>
            .<br />
            <p>
              I take great pride in my achievements and the value I bring to my
              clients. I pay meticulous attention to detail and always strive to
              deliver{" "}
              <span className="text-plus">
                high-quality technical solutions
              </span>
              . I have worked on diverse projects, including enterprise website
              development and custom applications tailored to meet specific
              client needs.
            </p>
            <br />
            <p>
              I am constantly staying{" "}
              <span className="text-plus">
                up-to-date with the latest trends
              </span>{" "}
              and technologies in the web development field. Continuous learning
              is a priority for me to ensure that I maintain my skills and
              provide the best solutions to my clients.
            </p>
            <br />
            <p>
              I invite you to explore my portfolio to discover some of the
              <span className="text-plus"> exciting projects</span> I have
              worked on. You will find{" "}
              <span className="text-plus go-to">
                <a href="#work">demonstrations</a> of my technical skills
              </span>{" "}
              and
              <span className="text-plus go-to">
                {" "}
                my <a href="#contact">contact</a> information
              </span>{" "}
              for any inquiries or professional opportunities. I am enthusiastic
              about taking on new challenges and contributing to innovative
              projects. <br />
              Feel free to contact me to discuss your ideas and web development
              needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
