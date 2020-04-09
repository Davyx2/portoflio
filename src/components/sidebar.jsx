import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons';

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/29.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">David SEIDOU</a></h1>
              <span className="email"><i className="icon-mail"></i> seidoudavid97@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Porfolio</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><SocialIcon url="https://www.facebook.com/dav.Godson" style={{height: 25, width: 25 }} /></li>
                <li><SocialIcon url="https://www.linkedin.com/in/david-seidou-a4781b17b/" style={{height: 25, width: 25 }} /></li>
                <li><SocialIcon url="https://github.com/Davyx2"  style={{height: 25, width: 25 }} /></li>
                <li><SocialIcon url="https://medium.com/@seidoudavid97" style={{height: 25, width: 25 }} /></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  When we need assistant <br></br>
                  I'm<a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">available</a> all time  
              </small></p>
              <p><small>
              Passionate about IT and everything that goes with it .
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
