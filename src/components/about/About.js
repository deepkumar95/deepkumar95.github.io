import React from 'react';
import './about.css';
import aboutImage from '../../assets/about-me.png';
import {FaAward} from 'react-icons/fa';
import {FiUser} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
            <div className="about_me-image">
              <img src={aboutImage} height="400" width="400" alt="About Image" />
            </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon"/>
              <h5>Experience</h5>
              <small>3+ year working</small>
            </article>
            <article className="about_card">
              <FiUser className="about_icon"/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon"/>
              <h5>Project</h5>
              <small>15+ Completed</small>
            </article>
          </div>
          <p>Deserunt veniam proident ex officia quis culpa consectetur dolore magna laborum amet irure nisi.
            Consectetur mollit est in Lorem aliquip aliqua eiusmod sint ad amet exercitation consectetur eiusmod.
             Pariatur dolore labore ut magna excepteur sunt culpa commodo occaecat.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About