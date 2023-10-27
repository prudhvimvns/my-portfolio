// import React from "react";
// import './HomePage.css';
// import { Navigate, Outlet } from 'react-router-dom';
// import { useEffect } from "react";

// const HomePage = () => {

//     useEffect(() => {
//         console.log('🔥🔥🔥🔥🔥🔥🔥🔥🔥');
//     });

//     return (
//         <div>
//             <div className="body">
//                 <h1>Hiiiii 🔥🔥🔥🔥🔥🔥🔥🔥🔥</h1>
//             </div>
//             <Outlet/>
//         </div>
//     )
// }

// export default HomePage;


import React from "react";
import { Outlet} from "react-router-dom";
// import {Routes, Route, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import './HomePage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useRef} from 'react';
import pdf from './Resume_.pdf';
// import resumePdf from '../Pages/Prudhvi-Resume.pdf';

const HomePage = () =>{
    const myref = useRef(null);
    const myref2 = useRef(null);
    const myref3 = useRef(null);
    const myref4 = useRef(null);


    useEffect(() => {
        // sessionStorage.clear();
        AOS.init({duration: 3000});
        console.log("🔥🔥🔥🔥🔥🔥🔥");
      });

      const handleClick = () => {
        myref.current?.scrollIntoView({behavior: 'smooth'});
      };

      const handleResumepdf = () =>{
        window.open(pdf);
      }

      const handleClick2 = () => {
        myref2.current?.scrollIntoView({behavior: 'smooth'});
      };

      const handleClick3 = () => {
        myref3.current?.scrollIntoView({behavior: 'smooth'});
      };

      const handleClick4 = () => {
        myref4.current?.scrollIntoView({behavior: 'smooth'});
      };

      const awsRedirect = () =>{
        window.location.href = 'https://www.coursera.org/account/accomplishments/certificate/EHUGNG8ENRU8';
      }

      const mlRedirect = () =>{
        window.location.href = 'https://www.coursera.org/account/accomplishments/certificate/GGGVLH6L57FH';
      }
      const GARedirect = () =>{
        window.location.href = 'https://analytics.google.com/analytics/academy/certificate/ObBKGYYbQ5-PBTl2z5AKIg';
      }
      
    return (
    <>
    <div className="body">

      <div className="Header container">
      <div className="row" style={{ paddingTop: '10px' }}>
          <div className="col-lg-2"></div>
          <div className="col-lg-2"></div>
          <div className="col-lg-8 menu-tabs">
            <span className="navbarTabs" onClick={handleClick}>About Me🙋‍♂️</span>
            <span className="navbarTabs" onClick={handleClick2}>Projects🏗️</span>
            <span className="navbarTabs" onClick={handleClick3}>Certificates🥇</span>
            <span className="navbarTabs" onClick={handleClick4}>Contact☎️</span>
            <span className="navbarTabs" onClick={handleResumepdf}>Resume📄</span>
          </div>
        </div>
      </div>

        <div data-aos="fade-left" className="Section1">
            <div className="container">

              <div className="row">
                <div className="col-lg-5">
                  <div className="xx"></div>
                </div>
                <div className="col-lg biotext">
                      <h2>Hey Hi <span className="wave">👋</span></h2>
                      <h2>I'm Prudhvi. A passionate <b className="gradient">Full Stack Developer</b> based in San Jose, CA. 📍</h2>
                      <div class="move">
                        <h2 onClick={handleClick}><b>Know Me👇</b></h2>
                      </div>
                </div>
              </div>

            </div>
        </div>

        {/* <div data-aos="fade-right" className="">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h1>Tech Skills   |</h1>
              </div>
              <div className="col-lg-6">
                <h1>Heyy</h1>
              </div>

            </div>
          </div>

        </div> */}

        <div ref={myref} data-aos="fade-up" data-aos-delay="300" data-aos-easing="ease" className="Section">
                <div className="boxLayout">
                <div className="container">

                    <div className="row">
                      <div className="col-lg-5">
                        <div className="xxx"></div>
                      </div>
                      <div className="col-lg">
                            <h1>About Me🙋‍♂️</h1>
                            <h5> I am a graduate student at <b className="gradient2">San Jose State University</b>🏫, pursuing Master's in Software Engineering🎓.
                                  I worked as a <b className="gradient4">Associate Software Engineer</b> at Abjayon.Inc👔, Hyderabad, India🇮🇳 from October, 2020 to June, 2022.
                                  I have graduated in 2020 as a <b className="gradient5">Bachelors of Technology (B.Tech)</b> in Computer Science and Engg 👨‍💻. from Sreenidhi Institute of Science and Technology, Telangana.
                                  In my last professional experience, my day to day activities majorly involved in understanding user stories from clients, developing applications according to wireframe models, regressive testing, working with raw data to analyze and visualize using Google Analytics📈 and Google Data Studio 📊, and developing important POCs for the organization. 
                            </h5>
                            <div className="move">
                                <h4 onClick={handleClick2}>Wanna See <b className="gradient5">Projects</b> that i worked on🤔?</h4>
                            </div>

                      </div>
                    </div>

                    </div>
                </div>
        </div>


        <div ref={myref2} data-aos="fade-right" data-aos-duration="2000" data-aos-easing="ease-out-cubic" className="Section">
          <h2>Projects 🏗️</h2>
          <div class="container">
                      <div class="row">
                        <div class="col-sm outerBox">
                          <div className="dbgpt"></div>
                            <h4 href="https://github.com/prudhvimvns/DB-GPT"><b>DB GPT</b></h4>
                            <p>This project uses streamlit, PyPDF2, OpenAI embedding, and FAISS to create chat interface that allows users to ask questions about DMV handbook using OpenAI.</p>
                          <div className="container">
                            <div className="row ">
                              <div className="col-sm">
                              <button className="btn btn-primary githubbtn"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    window.open('https://github.com/prudhvimvns/DB-GPT', '_blank');
                                  }}
                                >Github</button>
                                                              <button className="btn btn-primary githubbtn"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    window.open('https://db-gpt.streamlit.app/', '_blank');
                                  }}
                                >Demo</button>
                                {/* <a href="https://github.com/gopinathsjsu/team-project-team-four"><img src="./github-mark.png" alt="Github"></img></a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm outerBox">
                        <div className="dmvchat"></div>
                          <h4><b>DMV Chat 🚗💬</b></h4>
                          <p>This project uses streamlit, PyPDF2, OpenAI embedding, and FAISS to create chat interface that allows users to ask questions about DMV handbook using OpenAI.</p>
                          <div className="container">
                            <div className="row ">
                              <div className="col-sm">
                              <button className="btn btn-primary githubbtn"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    window.open('https://github.com/prudhvimvns/DMV-Chat', '_blank');
                                  }}
                                >Github</button>
                              <button className="btn btn-primary githubbtn"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    window.open('https://dmv-chat.streamlit.app/', '_blank');
                                  }}
                                >Demo</button>
                                {/* <a href="https://github.com/aman-kaur-11/cmpe255_group_gapv"><img src="./github-logo.png" alt="Githubb"></img></a> */}
                              </div>
                            </div>
                          </div>

                        </div>
                        <div class="col-sm outerBox">
                          <div className="pictalk"></div>
                          <h4><b>Pic Talk 🏞️🎙️</b></h4>
                          <p>This project uses artificial intelligence to automate the process of generating audio stories from images. It uses machine learning to extract the meaning of images and natural language processing to generate text in a natural and engaging way.</p>
                          <div className="container">
                            <div className="row ">
                              <div className="col-sm">
                              <button className="btn btn-primary"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    window.open('https://github.com/prudhvimvns/Image-2-Audio', '_blank');
                                  }}
                                >Github</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>

                <div class="container">
                      <div class="row">
                        <div class="col-sm outerBox">
                          <div className="pic"></div>
                            <h4 href="https://github.com/gopinathsjsu/team-project-team-four"><b>Airport Management System✈️</b></h4>
                            <p>Airport management website with user interface for flight information, employee login, admin management, baggage handling, gate and carousel assignments, hosted on AWS Elastic Compute Cloud with autoscaling load balancer.</p>
                          <div className="container">
                            <div className="row ">
                              <div className="col-sm">
                              <button className="btn btn-primary"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    window.open('https://github.com/gopinathsjsu/team-project-team-four', '_blank');
                                  }}
                                >Github</button>
                                {/* <a href="https://github.com/gopinathsjsu/team-project-team-four"><img src="./github-mark.png" alt="Github"></img></a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm outerBox">
                        <div className="twitter"></div>
                          <h4><b>Twitter Data Analysis📈</b></h4>
                          <p>Climate change tweet dataset with date, time, user ID, geo-coordinates, topics, sentiment, stance, gender, temperature, and aggression. Missing values and unrelated hashtags will be handled during preprocessing.</p>
                          <div className="container">
                            <div className="row ">
                              <div className="col-sm">
                              <button className="btn btn-primary"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    window.open('https://github.com/aman-kaur-11/cmpe255_group_gapv', '_blank');
                                  }}
                                >Github</button>
                                {/* <a href="https://github.com/aman-kaur-11/cmpe255_group_gapv"><img src="./github-logo.png" alt="Githubb"></img></a> */}
                              </div>
                            </div>
                          </div>

                        </div>
                        <div class="col-sm outerBox">
                          <div className="robo"></div>
                          <h4><b>Security Robot🤖</b></h4>
                          <p>Integrate AWS RoboMaker with a web app in EC2 with autoscaling load balancer for robot control.</p>
                          <div className="container">
                            <div className="row ">
                              <div className="col-sm">
                              <button className="btn btn-primary"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    window.open('https://github.com/prudhvimvns/security_robot', '_blank');
                                  }}
                                >Github</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
        </div>


        <div ref={myref3} data-aos="fade-left" data-aos-duration="2000" data-aos-easing="ease-out-cubic" className="Section">
          <h2>Certificates 🥇</h2>
                <div class="container">
                      <div class="row">
                        <div class="col-sm outerBox2">
                          <div className="aws" onClick={awsRedirect}></div>
                              <div className="col-sm">
                              <button className="btn btn-primary"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    window.open('https://www.coursera.org/account/accomplishments/certificate/EHUGNG8ENRU8', '_blank');
                                  }}
                                >View</button>
                                {/* <a href="https://www.coursera.org/account/accomplishments/certificate/EHUGNG8ENRU8"><img src="./aws.png" alt="AWS"></img></a> */}
                              </div>
                        </div>
                        <div class="col-sm outerBox2">
                        <div className="ml" onClick={mlRedirect}></div>
                          <div className="container">
                            <div className="row ">
                              <div className="col-sm">
                              <button className="btn btn-primary"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    window.open('https://www.coursera.org/account/accomplishments/certificate/GGGVLH6L57FH', '_blank');
                                  }}
                                >View</button>
                                {/* <a href="https://www.coursera.org/account/accomplishments/certificate/GGGVLH6L57FH"><img src="./ml.png" alt="ML"></img></a> */}
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>

                      <div class="row">
                        <div class="col-sm outerBox2">
                          <div className="GA" onClick={GARedirect}></div>
                                <div className="col-sm">
                                <button className="btn btn-primary"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    window.open('https://analytics.google.com/analytics/academy/certificate/ObBKGYYbQ5-PBTl2z5AKIg', '_blank');
                                  }}
                                >View</button>
                                    {/* <a href="https://analytics.google.com/analytics/academy/certificate/ObBKGYYbQ5-PBTl2z5AKIg"><img src="./GA.png" alt="Google Analytics Cerificate"></img></a> */}
                                </div>     
                         </div>
                        <div class="col-sm outerBox2">
                        </div>
                      </div>
                </div>
        </div>

        

        <div ref={myref4} data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="Section">
          <div className="contactDiv">
            <h1>Get In Touch👇</h1>
            <div className="contactPara">
              <p>Although I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
              </p>
              <a href="mailto:prudhvimokrala1@gmail.com">
                <button type="button" class="btn btn-primary btnclass">Say Hello!</button></a>

            </div>
          </div>
        </div>

    <Outlet/>
    </div>
    </>
    );
};

export default HomePage;