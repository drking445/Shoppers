import React from 'react';
import './home.css';
import jordan from './jordans.png';
class HomePage extends React.Component{
    render(){
        return(
          <html>
            <h1>Shoppers App</h1>
          <img src={jordan} className={"jordan"}/>
          </html>
        );
    }


}

export default HomePage;