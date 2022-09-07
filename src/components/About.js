import React, { Component } from 'react';
export default class About extends Component {
   render() {
      let resumeData = this.props.resumeData;
      return (
         <section id="about">
            <div className="row">

               <div className="three columns">

                  <img className="profile-pic" src="images/profilepic.jpg" alt="" />

               </div>

               <div className="nine columns main-col">

                  <h2>About Me</h2>
                  <p>
                     {
                        resumeData.aboutme
                     }
                  </p>

                  <div className="row">

                     <div className="columns contact-details">

                        <h2>Contact Details</h2>
                        <p className="address">
                           <span><i class="fa fa-envelope-o" aria-hidden="true"></i>
                              <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJNqKqsThkgSFlmccQGJmzFNFKcbqTXKxgcvPTqrscqcdQjXtvrmPRcQWbvjjKCgzLJhmjq'>   ujjawal64ud@gmail.com</a>
                           </span>
                           <br></br>
                           <span><i class="fa fa-map-marker" aria-hidden="true"></i>
                              <a href='https://www.google.com/maps/place/Delhi/@28.6923329,76.9480463,11z/data=!3m1!4b1!4m5!3m4!1s0x390d047309fff32f:0xfc5606ed1b5d46c3!8m2!3d28.6862738!4d77.2217831'>   {resumeData.address}</a>
                           </span>
                           <br></br><i class="fa fa-twitter" aria-hidden="true"></i>
                           <span><a href='https://twitter.com/Ujjawald07'> {resumeData.twitter}</a></span>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}