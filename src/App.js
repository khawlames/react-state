
import React, {Component}from "react";
import imagesr from './img.jpg';


class Profil extends Component {

state={fullname:"MESBEHI KHAWLA",bio:"react-js",profession:"developpeur", show:false, image:imagesr, count: 0};
  handeleIncrement=() =>{

this.setState({cont:this.state.cont+1});

  };
  handeleDecrement=() =>{
    this.setState.conun>0 && this.setState({cont:this.state.cont-1});}


    handleShow = () => {
      if (this.state.show) {
        this.setState({ show: false });
      } else {
        setInterval(() => {
          this.setState({ count: this.state.count + 1 });
        }, 1000);
        this.setState({ count: 0 });
        this.setState({ show: true });
      }
    };

render() {
  return (
    <div>
    { this.state.show && (
    <div>
      <h1>{this.state.fullname}</h1>
      <h1>{this.state.bio}</h1>
      <h1>{this.state.profession}</h1>
      <img src={this.state.image}/>
      <h1>{this.state.count}</h1>
    
    </div>
    )}
    <button onClick={this.handleShow}>show</button>
    </div>
     );
    }
  }
  


  export default Profil;


