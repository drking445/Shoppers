import React from 'react';
import './home.css';
import jordan from './jordans.png';

const homeImg={
    width: 550,
    height: 450,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
};

class HomePage extends React.Component{
    render(){
        return(
          <html>
            <h1>Shoppers App</h1>
          <img src={jordan} className={"jordan"} style={homeImg}/>
          </html>
        );
    }


}

export default HomePage;