import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume, skill1, skill2, skill3, skill4, skill5, } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container className="about-wrapper">
      <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
        <Title title="About Me" />
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree}
                </p>
                <li className="about-wrapper__info-skill">
                  {skill1}
                </li>
                <li className="about-wrapper__info-skill">
                  {skill2}
                </li>
                <li className="about-wrapper__info-skill">
                  {skill3}
                </li>
                <li className="about-wrapper__info-skill">
                  {skill4}
                </li>
                <li className="about-wrapper__info-skill">
                  {skill5}
                </li>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
      </Container>
    </section>
  );
};

export default About;
