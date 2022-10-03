import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    
    return (
      <section id="portfolio">
      <div className="row">
       <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href={item.url1} target="_blank">
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <button type="button" className='portfolio-button'><a href={item.url1}>Code/Demo</a></button>
                </div>
                
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}