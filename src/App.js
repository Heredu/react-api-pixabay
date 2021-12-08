import { render } from "@testing-library/react";
import Browser from "./components/Browser";
import React, {Component} from "react";

class App extends Component {

  state = {
    input : 'hola'
  }

  requestApi = () => {
    const url = `https://pixabay.com/api/?key=24720149-4f8774de8cef92ef727b03996&q=${ this.state.input } `; 

    console.log(url);
  }

  valueBrowser = (input) => {
    this.setState({
      input
    }, () =>{
      console.log(this.state.input);
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
      </div>
    );
  }
}

export default App;
