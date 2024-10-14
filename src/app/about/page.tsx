import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Frdi Frmn<span>Your Expertise</span>
                  </h2>
                  <p>
                   Hello! I am a novice programmer with a passion for technology and innovation. I started this thing just by myself around mid-2021. Currently, I am exploring the world of coding, looking to learn and develop my skills in software development. I am passionate about [name specific area of ​​interest, such as web development, mobile app development, etc.], and I am dedicated to honing my skills through hands-on projects and collaborations with others in the technology community. 
                   
                   As I begin this journey, I hope to connect with fellow developers, share knowledge, and contribute to interesting projects. Thank you for visiting my profile!
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website : <span>dcodefrmn.vercel.app</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>frmnnzx@gmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>SSC</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+1 941 931 8284</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Banjarmasin</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Freelance : <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/assets/docs/resume.pdf"
                        target="_target"
                        className="btn"
                      >
                        Download CV
                      </a>
                      <a
                        href="#contact"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>Html5</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Css3</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "60%" }} />
                        <div className="skill-percent">60%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Javascript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "50%" }} />
                        <div className="skill-percent">50%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Bootstrap</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2021 — 2024
                          </h6>
                          <h4 className="timeline-title">
                            Senior High School
                          </h4>
                          <p className="timeline-text">
                            Here, I learn many things, from general lessons to extra-curricular activities that make us more creative. Maybe this is the most boring period of education, there is nothing interesting apart from extracurriculars and several competitions. Honestly, there arent many fond memories here!
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2018 — 2021
                          </h6>
                          <h4 className="timeline-title">
                            Junior High School
                          </h4>
                          <p className="timeline-text">
                            Middle school is an important transition period! Here, I started to meet many new friends and learn more serious things. Apart from lessons, we also often have exciting activities such as scouting and competitions. Really makes the school experience memorable! 🎉
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2016 — 2018
                          </h6>
                          <h4 className="timeline-title">
                            Banjarmasin Islamic College
                          </h4>
                          <p className="timeline-text">
                            At Islamic School, I learned a lot about religion and life values. Apart from general lessons, we are taught to become better and more moral individuals. The atmosphere at this school is calm and full of togetherness, making us feel comfortable and supportive of each other. And, it makes your heart cool! 🌟
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2021 — Present
                          </h6>
                          <h4 className="timeline-title">Whatsapp Bot Development</h4>
                          <p className="timeline-text">
                            I learned several programming languages ​​to support my abilities in developing WhatsApp bot projects in the future.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2022 — Present
                          </h6>
                          <h4 className="timeline-title">Open Source Contributor</h4>
                          <p className="timeline-text">
                            Contribute to open source projects by adding new features and fixing bugs. Improve project compatibility with the latest version of the framework used.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2022 — Present
                          </h6>
                          <h4 className="timeline-title">Web Designer</h4>
                          <p className="timeline-text">
                            Since 2022 I started to learn Coding. I have learn
                            Html, Css, Sass, JavaScript, Bootstrap. Now I am a
                            Professional Web Designer.{" "}
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
