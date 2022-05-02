import {Component} from 'react'
import {MdMenuOpen} from 'react-icons/md'
import {FaLinkedinIn, FaGithub, FaMailBulk, FaYoutube} from 'react-icons/fa'

import './index.css'

class Home extends Component {
  state = {
    showMenu: false,
  }

  onClickMenu = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu,
    }))
  }

  render() {
    const {showMenu} = this.state
    return (
      <>
        <div className="app-container">
          <div className="app-card-container">
            <nav className="nav-container">
              <div className="nav-elements-container">
                <img
                  src="https://cdn.wallpapersafari.com/60/74/pXBREg.jpg"
                  className="app-logo"
                  alt="website logo"
                />
                <ul className="list-items">
                <li className="pop-heading"><a className='anchor'  href="#Home">Home</a></li>
                    <li className="pop-heading">
                      <a className='anchor'  href="#About">About</a>
                    </li>
                    <li className="pop-heading"><a className='anchor' href="#Education">Education</a></li>
                    <li className="pop-heading"><a  className='anchor' href="#Skills">Skills</a></li>
                    <li className="pop-heading"><a  className='anchor' href="#Projects">Projects</a></li>
                    <li className="pop-heading"><a  className='anchor' href="#Contact">Contact</a></li>
                </ul>
                <MdMenuOpen
                  color="red"
                  size={45}
                  className="menu-icon"
                  onClick={this.onClickMenu}
                />
              </div>
              {showMenu && (
                <div>
                  <ul className="list-mini">
                  <li className="pop-heading"><a className='anchor'  href="#Home">Home</a></li>
                    <li className="pop-heading">
                      <a className='anchor'  href="#About">About</a>
                    </li>
                    <li className="pop-heading"><a className='anchor' href="#Education">Education</a></li>
                    <li className="pop-heading"><a  className='anchor' href="#Skills">Skills</a></li>
                    <li className="pop-heading"><a  className='anchor' href="#Projects">Projects</a></li>
                    <li className="pop-heading"><a  className='anchor' href="#Contact">Contact</a></li>
                  </ul>
                </div>
              )} 
            </nav>
            <div id="Home"><div className="card-container">
              <div>
                <h1 className="heading">Hello Stranger !</h1>
                <h1 className="heading">
                  I'm <br />
                  <br />
                  <span className="name">VAMSHIKRISHNA MARRI</span>
                </h1>
                <p className="tag">A Full Stack Developer</p>
                <div className="buttons-container">
                  <button className="button1"><a className='anchor1' href="https://docs.google.com/document/d/1xIbqnTWcUDzz6Q0uS7Kfa1VJQ3AI1U-KAXrBJQRgSGE/edit?usp=drivesdk" target="_blank">Resume</a></button>
                  <button className="button"><a className='anchor' href="#Contact">Let's Talk</a></button>
                </div>
              </div>
              <img
                src="https://res.cloudinary.com/dps34f4by/image/upload/v1651400995/profile-pic_jddbbc.png"
                className="image"
              />
            </div></div>
            <div id="About">
              <div className="about-container">
                <h1 className="about-heading">About</h1>
                <div className="about">
                  <p className="about">
                    There arrent many people out there who grew up dreaming of
                    writing code .I definitely didnt.I wanted to design cars &
                    bikes. But somehow i ended up being a Developer.
                    <br />
                    <br />
                    I graduated from Kakatiya University Warangal in 2020 from
                    the stream of Mechanical Engineering. We had a name of
                    Corona batch although we had completed our class room
                    sessions from college.
                    <br />
                    <br />
                    Before Covid i have a plan of getting a good job in core
                    company but due to covid outbreak my plans got failed its
                    not only my problem its our problem who passed in year of
                    2020.
                    <br />
                    <br />
                    After Lockdown tried giving interviews to core company at
                    the time many of companies didnt showed intrest in
                    recruiting people from Online only few companies came
                    forward in which some got selected me and offered low
                    packages as the locations were unconfortable to me as covid
                    outbreak.
                    <br />
                    <br />
                    Staying at home watching and exploring mobiles, tv made me
                    to realise my interest on Software feild.Inspired by youtube
                    videos and friend suggested, guided me to become Developer.
                    <br />
                    <br />
                    Joined in NXT Wave gained skills and i have done many
                    Projects on.
                    <br/><br/>
                    Apart from academics and programming, Iam passionate about Photography & Memes.
                  </p>
                </div>
              </div>
            </div>
            <div id="Education">
              <div className="about-container">
                <h1 className="about-heading">Education</h1>
                <div className="education">
                  <p className="course">Full Stack Development 2021-Ongoing</p>
                  <p className="college">Nxt Wave Disruptive Technologies</p>
                </div>
                <div className="education">
                  <p className="course">Auto CAD Mechanical(2D&3D)</p>
                  <p className="college">
                    CAD Center, Warangal
                  </p>
                </div>
                <div className="education">
                  <p className="course">B.Tech Mechanical Engineering-2020</p>
                  <p className="college">
                    Chaitanya Institute of Technology and Science(KU), Warangal
                  </p>
                </div>
                <div className="education">
                  <p className="course">InterMediate M.P.C-2016</p>
                  <p className="college">
                    Pavitra Juniour College, Bhupalpally
                  </p>
                </div>
                <div className="education">
                  <p className="course">SSC 2014</p>
                  <p className="college">ZPHS School, Kompally</p>
                </div>
              </div>
            </div>
            <div id="Skills">
              <div className="about-container">
                <h1 className="about-heading">Skills</h1>
                <div className="card-container">
                  <div className="skills-card-container">
                    <img
                      src="https://res.cloudinary.com/dps34f4by/image/upload/v1651463657/pngwing.com_8_yqhblh.png"
                      className="skill-card"
                      alt="skill"
                    />
                    <p className="skill">HTML 5</p>
                  </div>
                  <div className="skills-card-container">
                    <img
                      src="https://res.cloudinary.com/dps34f4by/image/upload/v1651463205/pngwing.com_7_stmw3m.png"
                      className="skill-card"
                      alt="skill"
                    />
                    <p className="skill">CSS3</p>
                  </div>
                  <div className="skills-card-container">
                    <img
                      src="https://res.cloudinary.com/dps34f4by/image/upload/v1651463140/pngwing.com_1_iwgoau.png"
                      className="skill-card"
                      alt="skill"
                    />
                    <p className="skill">BOOTSTRAP</p>
                  </div>
                  <div className="skills-card-container">
                    <img
                      src="https://res.cloudinary.com/dps34f4by/image/upload/v1651463140/pngwing.com_2_ute0bq.png"
                      className="skill-card"
                      alt="skill"
                    />
                    <p className="skill">JAVASCRIPT</p>
                  </div>
                  <div className="skills-card-container">
                    <img
                      src="https://res.cloudinary.com/dps34f4by/image/upload/v1651463141/pngwing.com_5_of61hg.png"
                      className="skill-card"
                      alt="skill"
                    />
                    <p className="skill">PYTHON</p>
                  </div>
                  <div className="skills-card-container">
                    <img
                      src="https://res.cloudinary.com/dps34f4by/image/upload/v1651463142/pngwing.com_4_knznla.png"
                      className="skill-card"
                      alt="skill"
                    />
                    <p className="skill">NODE JS</p>
                  </div>
                  <div className="skills-card-container">
                    <img
                      src="https://res.cloudinary.com/dps34f4by/image/upload/v1651463140/pngwing.com_3_xrpzbv.png"
                      className="skill-card"
                      alt="skill"
                    />
                    <p className="skill">REACT JS</p>
                  </div>
                </div>
              </div>
            </div>
            <div id='Projects'>
              <div className='about-container'>
                <h1 className='about-heading'>My Works</h1>
                  <div className='project-container'>
                    <div className="flip-box">
                      <div className="flip-box-inner">
                        <div className="flip-box-front">
                          <img src="https://res.cloudinary.com/dps34f4by/image/upload/v1646985280/Group_7399_1_rs0qmy.png" className='flip-card-logo'/>
                        </div>
                        <div className="flip-box-back">
                          <p className='back-details'>Movies App</p>
                          <button type="button" className='card-button'><a className='anchor' href="https://vmcmoviesapp.ccbp.tech/" target="_blank">Site</a></button>
                          <button type="button" className='card-button1'><a className='anchor' href="https://github.com/VamshiKrishnaMarri/newMoviesApp.git" target="_blank">Code</a></button>    
                        </div>
                      </div>
                    </div>
                    <div className="flip-box">
                      <div className="flip-box-inner">
                        <div className="flip-box-front">
                          <img src="https://res.cloudinary.com/dps34f4by/image/upload/v1651476804/pngwing.com_9_want7n.png" />
                          <p className='logo-tag'>NXT Watch</p>
                        </div>
                        <div className="flip-box-back">
                        <p className='back-details1'>NXT Watch Video Streaming</p>
                          <button type="button" className='card-button'><a className='anchor' href="https://vmcnxtwatch.ccbp.tech/" target="_blank">Site</a></button>
                          <button type="button" className='card-button1'><a className='anchor' href="https://github.com/VamshiKrishnaMarri/NxtWatch.git" target="_blank">Code</a></button>
                        </div>
                      </div>
                    </div>
                    <div className="flip-box">
                      <div className="flip-box-inner">
                        <div className="flip-box-front">
                          <img src="https://res.cloudinary.com/dps34f4by/image/upload/v1651477444/5a225639481bb3.0715875515121997372954_com5u3.png" />
                          <p className='logo-tag'>NXT Jobs</p>
                        </div>
                        <div className="flip-box-back">
                        <p className='back-details'>Job Search Application</p>
                          <button type="button" className='card-button'><a className='anchor' href="https://jobbyappvmc.ccbp.tech/" target="_blank">Site</a></button>
                          <button type="button" className='card-button1'><a className='anchor' href="https://github.com/VamshiKrishnaMarri/JobbyApp.git" target="_blank">Code</a></button>
                        </div>
                      </div>
                    </div>
                    <div className="flip-box">
                      <div className="flip-box-inner">
                        <div className="flip-box-front">
                          <img src="https://res.cloudinary.com/dps34f4by/image/upload/v1651477506/pngwing.com_11_iuibts.png" />
                          <p className='logo-tag'>NXT Trends</p>
                        </div>
                        <div className="flip-box-back">
                        <p className='back-details'>Trending Clothing</p>
                          <button type="button" className='card-button'><a href="" target="_blank">Site</a></button>
                          <button type="button" className='card-button1'><a href="" target="_blank">Code</a></button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className='skill'>Credentials: Username-rahul Password-rahul@2021 </p>
              </div>
            </div>
            <div id="Contact">
              <div className="about-container">
                <h1 className="about-heading">Let's Talk</h1>
                <div className='responsive'>
                <form className="contact-container">
                  <h1 className='tag'>Feedback and Complaints </h1>
                  <input type="text" placeholder="Name" className="box"/>
                  <input type="email" placeholder="Enter email" className="box"/>
                  <textarea cols="30" rows="6" className="message-box" placeholder="Your Message"></textarea>
                  <div className="button-container">
                    <button type="submit" className="submit-button"> SUBMIT <i class="ml-2 fas fa-paper-plane"></i> </button>
                  </div>
                </form>
                <div className="contact-us-container">
                  <h1 className='tag1'>I'm open for Discussions.<br/>Mail me <a href="mailto:vamshikrishnamarri6@gmail.com" target="_blank">vamshikrishnamarri6@gmail.com</a></h1>
                    <div className="contact-icons-container">
                      <button type="button" className="icon-button" testid="searchButton">
                        <a href="https://www.linkedin.com/in/vamshikrishnamarri" target="_blank"><FaLinkedinIn className="contact-icon" /></a>
                      </button>
                      <button type="button" className="icon-button" testid="searchButton">
                        <a href="https://github.com/VamshiKrishnaMarri" target="_blank"><FaGithub className="contact-icon" /></a>
                      </button>
                      <button type="button" className="icon-button" testid="searchButton">
                        <a href="mailto:vamshikrishnamarri6@gmail.com" target="_blank"><FaMailBulk className="contact-icon" /></a>
                        
                      </button>
                      <button type="button" className="icon-button" testid="searchButton">
                        <FaYoutube className="contact-icon" />
                      </button>
                    </div>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home
