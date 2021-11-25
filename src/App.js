import './App.css';



import { createClient } from 'pexels';
import React from 'react';





const client =createClient('563492ad6f91700001000001b5af10ca0a7d4280a6263b2630883c1a');
        
const query = 'Ocean';

let photo;

class App extends React.Component{
  
  constructor(props){
   
    super(props);
    this.state = {photo:'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg'};

    
  }
  getPhoto =()=> {
     
   client.photos.search({ query, per_page: 4 }).then(photos => {photo = photos; this.setState({ photo: photo.photos[0].src.medium}); });
    
    
  }

  render(){
    
    this.getPhoto();  
    return(
      
      <img src={this.state.photo}></img>    
      )
    
  }

  
}

export default App;
