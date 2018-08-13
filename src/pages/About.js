import React, { Component } from 'react';

class About extends Component{
  render(){

    return(
      <section id="about" className="s-about target-section">

          <div className="row section-intro has-bottom-sep">
              <div className="col-six tab-full text-center">
                  <img src="images/profilepic.jpg" alt="Stillmen Vallian" />
              </div>

              <div className="col-six tab-full text-left">
                  <h3>About</h3>
                  <h1>More About Me</h1>
                  <p className="lead">A software engineer, photographer, video maker. Love to work in sadistic mode.</p>
              </div>
          </div>

          <div className="row about-content">

              <div className="col-six tab-full left">
                  <h3>Howdy!</h3>

                  <p>I'm fresh graduate from Parahyangan Catholic University majoring in Informatics Engineering. Apart from programming, I also love Photography. Photography is my hobby. I know photography since I was in high school (2010s) and until now I'm still active in it. Some of my experiences such as documenting some campus events, concerts, endorsement shot, beauty & casual shot. Not only photo, I also making several videos. The videos that I made, usually an 'after movie' (every activity held) an events. I'm already familiar with some editing software like Adobe Photoshop, Premiere and Lightroom.</p>

                  <p>As a graduate in Informatics Engineering, I can use programming language like Java, PHP and HTML. Recently, I'm learning React.js (front-end framework) for self improvement. I made this website using React.js. For more information, you can visit my other resume page (link on the top right).</p>
              </div>

              <div className="col-six tab-full right">
                <h3>I have Got Some skills.</h3>

                <ul className="skill-bars">
                    <li>
                    <div className="progress percent75"><span>75%</span></div>
                    <strong>Photographer</strong>
                    </li>
                    <li>
                    <div className="progress percent70"><span>70%</span></div>
                    <strong>Videographer</strong>
                    </li>
                </ul>

                <h3>I have Got Some editing skills.</h3>

                <ul className="skill-bars">
                    <li>
                    <div className="progress percent80"><span>80%</span></div>
                    <strong>Adobe Photoshop</strong>
                    </li>
                    <li>
                    <div className="progress percent90"><span>90%</span></div>
                    <strong>Adobe Lightroom</strong>
                    </li>
                    <li>
                    <div className="progress percent75"><span>75%</span></div>
                    <strong>Adobe Premiere</strong>
                    </li>
                </ul>
              </div>

          </div>

          <div className="row about-content about-content--buttons">

              <div className="col-full tab-full left">
                  <a href="#0" className="btn btn--primary full-width">Download My CV (Not Available)</a>
              </div>

          </div>

          <div className="row about-content about-content--timeline">
            <div className="col-six">
              <div className="col-full text-center">
                  <h3>Education</h3>
              </div>

              <div className="col-full tab-full left">
                  <div className="timeline">

                      <div className="timeline__block">
                          <div className="timeline__bullet"></div>
                          <div className="timeline__header">
                              <p className="timeline__timeframe">2014 - 2018</p>
                              <h3>Parahyangan Catholic University</h3>
                              <h5>Bachelor's degree, Information Technology</h5>
                          </div>
                          <div className="timeline__desc">
                              <p>I took my Bachelor's of Information Technology at Parahyangan Catholic University and achieved a much more thorough education in the underlying theory, concepts, and science behind more complex programming. It was here that I discovered many new technologies to create application programming (web and mobile).</p>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-full text-center">
                  <h3>Organization</h3>
              </div>

              <div className="col-full tab-full left">
                  <div className="timeline">

                    <div className="timeline__block">
                        <div className="timeline__bullet"></div>
                        <div className="timeline__header">
                            <p className="timeline__timeframe">2016</p>
                            <h3>Pemilu PM UNPAR 2016 </h3>
                            <h5>IT Expert Team</h5>
                        </div>
                    </div>

                    <div className="timeline__block">
                        <div className="timeline__bullet"></div>
                        <div className="timeline__header">
                            <p className="timeline__timeframe">2015 - 2016</p>
                            <h3>Unpar Apps Team</h3>
                            <h5>Unpar Apps Promotion Manager</h5>
                        </div>
                    </div>

                      <div className="timeline__block">
                          <div className="timeline__bullet"></div>
                          <div className="timeline__header">
                              <p className="timeline__timeframe">2015 - 2016</p>
                              <h3>Lembaga Kepresidenan Mahasiswa (LKM) UNPAR 2015 - 2016</h3>
                              <h5>Staff Directorate General Informatics Technology</h5>
                          </div>
                      </div>

                      <div className="timeline__block">
                          <div className="timeline__bullet"></div>
                          <div className="timeline__header">
                              <p className="timeline__timeframe">2015 - 2016</p>
                              <h3>POTRET Organization</h3>
                              <h5>Vice Coordinator Media Division</h5>
                          </div>
                      </div>
                  </div>
              </div>
            </div>

            <div className="col-six">
              <div className="col-full text-center">
                  <h3>My Photography Experience</h3>
              </div>

              <div className="col-full tab-full right">
                  <div className="timeline">

                      <div className="timeline__block">
                          <div className="timeline__bullet"></div>
                          <div className="timeline__header">
                              <p className="timeline__timeframe">September 2015</p>
                              <h3>Anime Festival Asia (AFA) 2015</h3>
                              <h5>Photographer (Professional Job)</h5>
                          </div>
                          <div className="timeline__desc">
                              <p>Working under an event organizer named SOZO with a photographer job. Documenting the event for 3 days in the form of photos and videos.</p>
                          </div>
                      </div>

                      <div className="timeline__block">
                          <div className="timeline__bullet"></div>
                          <div className="timeline__header">
                              <p className="timeline__timeframe">May 2018</p>
                              <h3>DIES FTIS XXV</h3>
                              <h5>Documentation Staff</h5>
                          </div>
                          <div className="timeline__desc">
                              <p>FTIS (Fakultas Teknologi Informasi dan Sains) 25th anniversary.</p>
                          </div>
                      </div>

                      <div className="timeline__block">
                          <div className="timeline__bullet"></div>
                          <div className="timeline__header">
                              <p className="timeline__timeframe">November 2017</p>
                              <h3>Workshop Pembelajaran Sains Integratif berbasis STEAM & IOT </h3>
                              <h5>Documentation Staff</h5>
                          </div>
                          <div className="timeline__desc">
                              <p>STEAM & IOT workshop held by Rumah Edukasi.</p>
                          </div>
                      </div>

                      <div className="timeline__block">
                          <div className="timeline__bullet"></div>
                          <div className="timeline__header">
                              <p className="timeline__timeframe">September 2017</p>
                              <h3>CHIPS Teknik Informatika 2017</h3>
                              <h5>Documentation Staff</h5>
                          </div>
                          <div className="timeline__desc">
                              <p>Programming competition in order to commemorate the anniversary of the department.</p>
                          </div>
                      </div>

                      <div className="timeline__block">
                          <div className="timeline__bullet"></div>
                          <div className="timeline__header">
                              <p className="timeline__timeframe">May 2017</p>
                              <h3>DIES FTIS XXIV</h3>
                              <h5>Documentation Staff</h5>
                          </div>
                          <div className="timeline__desc">
                              <p>FTIS (Fakultas Teknologi Informasi dan Sains) 24th anniversary.</p>
                          </div>
                      </div>

                      <div className="timeline__block">
                          <div className="timeline__bullet"></div>
                          <div className="timeline__header">
                              <p className="timeline__timeframe">September 2016</p>
                              <h3>DIES Teknik Informatika 20th 2016</h3>
                              <h5>Documentation Staff</h5>
                          </div>
                          <div className="timeline__desc">
                              <p>Department 20th anniversary.</p>
                          </div>
                      </div>

                      <div className="timeline__block">
                          <div className="timeline__bullet"></div>
                          <div className="timeline__header">
                              <p className="timeline__timeframe">May 2016</p>
                              <h3>Parahyangan Fair 2016 </h3>
                              <h5>Documentation Staff</h5>
                          </div>
                          <div className="timeline__desc">
                              <p>Last event held by LKM (Lembaga Kepresidenan Mahasiswa) UNPAR 2015 / 2016.</p>
                          </div>
                      </div>

                      <div className="timeline__block">
                          <div className="timeline__bullet"></div>
                          <div className="timeline__header">
                              <p className="timeline__timeframe">April 2016</p>
                              <h3>Malam Penghargaan UNPAR 2016 </h3>
                              <h5>Documentation & Publication Staff</h5>
                          </div>
                          <div className="timeline__desc">
                              <p>Event held by LKM (Lembaga Kepresidenan Mahasiswa) UNPAR 2015 / 2016.</p>
                          </div>
                      </div>

                      <div className="timeline__block">
                          <div className="timeline__bullet"></div>
                          <div className="timeline__header">
                              <p className="timeline__timeframe">March 2016</p>
                              <h3>Demosnesia 2016 </h3>
                              <h5>Documentation  Staff</h5>
                          </div>
                          <div className="timeline__desc">
                              <p>Event held by LKM (Lembaga Kepresidenan Mahasiswa) UNPAR 2015 / 2016.</p>
                          </div>
                      </div>

                      <div className="timeline__block">
                          <div className="timeline__bullet"></div>
                          <div className="timeline__header">
                              <p className="timeline__timeframe">February 2016</p>
                              <h3>Parahyangan Alumni Day 2016</h3>
                              <h5>Documentation & Publication Staff</h5>
                          </div>
                          <div className="timeline__desc">
                              <p>Event held by LKM (Lembaga Kepresidenan Mahasiswa) UNPAR 2015 / 2016.</p>
                          </div>
                      </div>

                      <div className="timeline__block">
                          <div className="timeline__bullet"></div>
                          <div className="timeline__header">
                              <p className="timeline__timeframe">May 2015</p>
                              <h3>Parahyangan Fair 2015 </h3>
                              <h5>Documentation Staff</h5>
                          </div>
                          <div className="timeline__desc">
                              <p>Event held by LKM (Lembaga Kepresidenan Mahasiswa) UNPAR 2014 / 2015.</p>
                          </div>
                      </div>

                      <div className="timeline__block">
                          <div className="timeline__bullet"></div>
                          <div className="timeline__header">
                              <p className="timeline__timeframe">April 2015</p>
                              <h3>IXPO Unpar 2015</h3>
                              <h5>Documentation & Publication Staff</h5>
                          </div>
                          <div className="timeline__desc">
                              <p>Last event held by HMPSTIF (Himpunan Program Studi Teknik Informatika) UNPAR 2014 / 2015.</p>
                          </div>
                      </div>

                      <div className="timeline__block">
                          <div className="timeline__bullet"></div>
                          <div className="timeline__header">
                              <p className="timeline__timeframe">March 2015</p>
                              <h3>Parahyangan Sports Combat 2015</h3>
                              <h5>Documentation Staff</h5>
                          </div>
                          <div className="timeline__desc">
                              <p>Event held by LKM (Lembaga Kepresidenan Mahasiswa) UNPAR 2014 / 2015.</p>
                          </div>
                      </div>

                      <div className="timeline__block">
                          <div className="timeline__bullet"></div>
                          <div className="timeline__header">
                              <p className="timeline__timeframe">February 2015</p>
                              <h3>INITE 2014</h3>
                              <h5>Documentation Staff</h5>
                          </div>
                          <div className="timeline__desc">
                              <p>Event held by HMPSTIF (Himpunan Program Studi Teknik Informatika) UNPAR 2014 / 2015.</p>
                          </div>
                      </div>
                  </div>
              </div>
            </div>


          </div>

      </section>
    )
  }
}

export default About;
