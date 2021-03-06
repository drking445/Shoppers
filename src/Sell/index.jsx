import React from 'react';

const buttonStyle={
    background: "white"
};

const imgStyle={
    width: 300,
    height: 300,
    display: "inline-block",
    left: 0,
    paddingTop: 25
};

const formStyle={
    clear: "both"
};

const sellButton={
    float: "left",
    background:"white",
    paddingLeft: 45

};


class Search extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          array: [],
            image: null
        };
        this.handleClick = this.handleClick.bind(this);
        this.clearLast = this.clearLast.bind(this);
    }

    handleClick(event){
        var joined = this.state.array.concat(event.target.files[0]);
        this.setState({ array: joined });
        /*
        if (event.target.files && event.target.files[0]) {
            this.setState({
                image: URL.createObjectURL(event.target.files[0])
            });
        }
        */
    }

    clearLast = (e) => {
        e.preventDefault();
        this.setState({
            array: this.state.array.slice(0, -1)
        });
        console.log(this.state.array);
    };

    render() {
        return (
            <body>
            <div style={formStyle}>
                <h1>Upload images of your shoes!</h1>
                <form>
                    <input type="file" name="pic" accept="image" onChange={this.handleClick} multiple />
                    <input type="submit"/>
                    <button className={"clear"} onClick={this.clearLast}>Clear last image</button>
                </form>
            </div>
                <div style={formStyle}>
                    {this.state.array.map((item, i) =>
                            <img
                                style={imgStyle}
                                src={URL.createObjectURL(item)}
                                key={i} />
                    )}
                </div>

            </body>
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
                <button style={sellButton} style={buttonStyle} onClick={this.onClick}>Sell your shoes</button>
            </div> ): (<Search/>)
            }
            </body>
            </html>
        );
    }


}

export default Sell;