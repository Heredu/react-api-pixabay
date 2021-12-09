import { render } from "@testing-library/react";
import Browser from "./components/Browser";
import React, {Component} from "react";
import Answer from "./components/Answer";

class App extends Component {

  state = {
    input : '',
    images : [],
    page : ''
  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  }

  previousPage = () => {
    //console.log('previous...')
    let page = this.state.page;
    if(page===1) return null;
    page--;
    this.setState({
      page
    }, () => {
      this.requestApi();
      this.scroll();
    });
    //console.log(page)
  }

  nextPage = () => {
    //console.log('next...')
    let page = this.state.page;
    //if(page===1) return null;
    page++;
    this.setState({
      page
    }, () => {
      this.requestApi();
      this.scroll();
    });
    //console.log(page)
  }

  requestApi = () => {
    if(this.state.input.length === 0) return null;
    const page = this.state.page;
    const url = `https://pixabay.com/api/?key=24720149-4f8774de8cef92ef727b03996&q=${ this.state.input }&page=${page}`; 

    console.log(url);
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ images : resultado.hits}))
      //console.log(this.state.images)
  }

  valueBrowser = (input) => {
    this.setState({
      input: input,
      page : 1
    }, () =>{
      //console.log(this.state.input);
      this.requestApi();
    })
  }

  render(){
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className ="lead text-center">image search engine</p>
            <Browser
              valueBrowser={this.valueBrowser}
            />
        </div>
        <div className="row justify-content-center">
          <Answer
            images={this.state.images}
            previousPage={this.previousPage}
            nextPage={this.nextPage}
          />
        </div>
      </div>
    );
  }
}

export default App;
