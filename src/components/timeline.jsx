import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Senior Software Engineer @Emirates Group IT <span>2019-present</span></h2>
                        <p>I have joined the Emirates Airlines IT group  as a Senior Software Engineer in the Mobile web Team. 
                          My major part of the work has been into the  frontend as UI lead and i will take care of Tridion content 
                          creation and publishing to support i18N, as we follow Agile methodology  i work on tasks under the  stories
                           of the features by sprints, my role is to implement UI functionality by Angular Js/ React JS as given acceptance creteria and my activities in my current role list as follows 
                          collabrate with cross teams (Tesing team,Business,Support team),PR reviews,Mentoring juniors,given traings on React jS and AngularJS, implementation and UNIT testing , integration ,debugging, Bug fixing in SIT, UAT and most important responsible for quality and performance of application.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Education</h2>
                         <p> Master of Computer Applications(MCA)  from OSmania University( Hyderbad - INDIA)<span>2006-2009</span></p>
                        <p>Under-graduation (B.Sc) Bachalore of Science (Maths) from Andhra University (Vishakapatnam- INDIA) studied with S.K.B.R College Amalapuram.</p>
                        <p>Deploma in Computer Application (DCA) from NIIT 2006.</p>
                        <p>I have completed my higher secondary education with major subjects as Physics,Chemistry & Maths.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Hobbies & Strengths</h2>
                         <p>Playing Chesss, networking, technology, fitness, traveling, watching Movies, listining Music. </p>
                          <p>Proactive, talkitive, inter personal skills & Self motivative, good Presentation skills. </p>
                         
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
