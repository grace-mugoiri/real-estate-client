import React, { Component } from 'react';
import img1 from '../assets/images/IMG-20190831-WA0007-2.jpg'
import img2 from '../assets/images/6f941074e3efc6bc11c7521593cbfab4.jpg'
import img3 from '../assets/images/images-3.jpg'
import '../assets/styles/Home.css'

export default class Home extends Component {

  render() {
    return (
			<div className="Home">
				<button></button>
					<img src={img1} alt="Img1" className="image1"></img>
					<img src={img2} alt="Img2" className="image2"></img>
					<img src={img3} alt="Img3" className="image3"></img>

      </div>
    );
  }
}
