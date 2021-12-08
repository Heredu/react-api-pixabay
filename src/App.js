import { render } from "@testing-library/react";
import Browser from "./components/Browser";
import React, {Component} from "react";
import Answer from "./components/Answer";

class App extends Component {

  state = {
    input : '',
    images : []
  }

  requestApi = () => {
    if(this.state.input.length === 0) return null;
    const url = `https://pixabay.com/api/?key=24720149-4f8774de8cef92ef727b03996&q=${ this.state.input }`; 

    console.log(url);
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ images : resultado.hits}))
      //console.log(this.state.images)
  }

  valueBrowser = (input) => {
    this.setState({
      input
    }, () =>{
      //console.log(this.state.input);
      this.requestApi();
    })
  }

  render(){
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className =" lead text-center">Buscador de imagenes</p>
            <Browser
              valueBrowser={this.valueBrowser}
            />
        </div>
        <Answer
          images={this.state.images}
        />
      </div>
    );
  }
}

export default App;
