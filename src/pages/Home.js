import React, { Component } from 'react';

class Home extends Component{
  render(){
    if(this.props.data){
        var name = this.props.data.main.name;
        var occupation= this.props.data.main.occupation;
        var description= this.props.data.main.description;
        var city= this.props.data.main.address.city;
    }

    return(
      <section id="home" className="s-home page-hero target-section" data-parallax="scroll" data-image-src="images/wallpaper.jpg" data-natural-width="3000" data-natural-height="2000" data-position-y="center">

           <div className="overlay"></div>
           <div className="shadow-overlay"></div>

           <div className="home-content">

               <div className="row home-content__main">

                   <h3>Hello There</h3>

                   <h1>
                       I'm {name}. <br/>
                       I'm a {occupation} <br/>
                       based in {city}.
                   </h1>

                   <div className="home-content__buttons">
                       <a href="#works" className="smoothscroll btn btn--stroke">
                           Latest Projects
                       </a>
                       <a href="#about" className="smoothscroll btn btn--stroke">
                           More About Me
                       </a>
                   </div>

                   <div className="home-content__scroll">
                       <a href="#about" className="scroll-link smoothscroll">
                           <span>Scroll Down</span>
                       </a>
                   </div>

               </div>

           </div>

           <ul className="home-social">
               <li>
                   <a href="https://www.facebook.com/stillmen.vallian"><i className="im im-facebook" aria-hidden="true"></i><span>Facebook</span></a>
               </li>
               <li>
                   <a href="https://twitter.com/stillmenvallian"><i className="im im-twitter" aria-hidden="true"></i><span>Twiiter</span></a>
               </li>
               <li>
                   <a href="http://instagram.com/stillmen_jr"><i className="im im-instagram" aria-hidden="true"></i><span>Instagram</span></a>
               </li>
               <li>
                   <a href="https://github.com/ayenz/"><i className="im im-github" aria-hidden="true"></i><span>GitHub</span></a>
               </li>
               <li>
                   <a href="https://www.linkedin.com/in/stillmen-vallian/"><i className="im im-linkedin" aria-hidden="true"></i><span>Linkedin</span></a>
               </li>
           </ul>

       </section>
    )
  }
}

export default Home;
