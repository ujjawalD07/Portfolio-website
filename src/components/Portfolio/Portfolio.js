// import React, { Component } from 'react';
// export default class Porfolio extends Component {
//   render() {
//     let resumeData = this.props.resumeData;
    
//     return (
//       <section id="portfolio">
//       <div className="row">
//        <div className="twelve columns collapsed">
//           <h1>Check Out Some of My Works.</h1>
//           <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
//           {
//             resumeData.portfolio && resumeData.portfolio.map((item)=>{
//               return(
//                 <div className="columns portfolio-item">
//                   <div className="item-wrap">
//                     <a href={item.url1} target="_blank">
//                       <img src={`${item.imgurl}`} className="item-img"/>
//                       <div className="overlay">
//                         <div className="portfolio-item-meta">
//                           <p>{item.description}</p>
//                         </div>
//                       </div>
//                     </a>
//                   </div>
//                   <button type="button" className='portfolio-button'><a href={item.url1}>Code/Demo</a></button>
//                 </div>
                
//               )
//             })
//           }
//           </div>
//         </div>
//       </div>
//   </section> 
//         );
//   }
// }
import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item"
import "./portfolio.css";
import "./data"

const breakPoints = [
  { width: 1, itemsToShow:1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow:4 },
];

  const items=[
      { id:1, title:"Stores API(back-end)",src:"images/portfolio/project1.png",
      description:"This is an API for an inventory store developed using NodeJS, ExpressJS and mongoDB",
      href:"https://github.com/ujjawalD07/Stores-api"},
      { id:2, title:"To-do list(full stack)",src:"images/project2.jpg",
      description:"This is a To-Do list web application developed using EJS, NodeJS, ExpressJS, mongoDB",
      href:"https://github.com/ujjawalD07/To-do-list-using-MongoDB"},
      { id:3, title:"Meme generator",src:"images/portfolio/project3.jpg",
      description:"Make your own funny memes with this meme generator developed using React and JavaScript",
      href:"https://codesandbox.io/s/meme-generator-forked-5oevpb?file=/src/components/App.jsx"},
      { id:4, title:"NASA APOD",src:"images/portfolio/project4.jpg",
      description:"This application uses the NASA api to display a picture of the day from NASA satellites",
      href:"https://codesandbox.io/s/nasa-apod-tlguun?file=/src/components/Ap"},
      { id:5, title:"Simon game",src:"images/portfolio/project5.jpg",
      description:"The famous simon game developed using JavaScript, HTML and CSS",
      href:"https://github.com/ujjawalD07/Simon-game"},
      // { id:6, title:"Static CV",src:"images/project6.jpg",
      // description:"This was my first CV website made using HTML and CSS",
      // href:"https://ujjawald07.github.io/CV/"},
      // { id:7, title:"picture1",src:"images/portfolio/project1.png"},
      // { id:8, title:"picture1",src:"images/portfolio/project1.png"},
    ];
  



function Portfolio() {
// let {items} = this.state;
  return (
    <>
      <h1 style={{ textAlign: "center" }} className="h1">Check out some of my works</h1>
      <div className="portfolio">
        <Carousel breakPoints={breakPoints}>
          {items.map(item=>
          <a href={item.href} className="portfolio-images" key={item.id}>
            <img src={item.src} className="img"></img>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </a>
          )}
        </Carousel>
      </div>
    </>
  );
}

export default Portfolio;