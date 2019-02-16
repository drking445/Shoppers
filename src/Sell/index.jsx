import React from 'react';

const buttonStyle={
    background: "white"
};

const hiddenStyle={
    display: 'none'
}

class Search extends React.Component{

    render() {
        return (
            <div>
                <h1>Type in your shoe!</h1>
                <input type="text" placeholder="Search" />

            </div>
        );
    }
}


class Sell extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            showResults: false
        }
        this.onClick = this.onClick.bind(this)
    }

    onClick(){
        this.setState({showResults: true});
    }

    componentWillMount() {
        this.state = {
            showResults: false
        }
    }

        render(){

        return(
            <html>

            <body>
            {!this.state.showResults ?
                ( <div>
                <h1>Sell</h1>
                <button style={buttonStyle} onClick={this.onClick}>Sell your shoes</button>
            </div> ): (<Search/>)
            }
            </body>
            </html>
        );
    }


}

export default Sell;