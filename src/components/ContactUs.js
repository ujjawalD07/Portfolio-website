import React, { Component } from 'react';
// import logo from "../assets/coffee-cup.gif"
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Let's have a chat!
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>Linked in :
                <a href='https://www.linkedin.com/in/ujjawal-dwivedi-23b5ba212/'>{resumeData.linkedinId}</a>
              </h4>
              <h4>Email :
                <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJNqKqsThkgSFlmccQGJmzFNFKcbqTXKxgcvPTqrscqcdQjXtvrmPRcQWbvjjKCgzLJhmjq'>{resumeData.email}</a>

              </h4>
              <h4>Twitter :
                <a href='https://twitter.com/Ujjawald07'>{resumeData.skypeid}</a>

              </h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}