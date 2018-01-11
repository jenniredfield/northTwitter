import React from "react";
import Nav from './nav.js';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav/> 
        <div className="grid">
            <div className="grid-1">
            </div>
            <div className="grid-2">
            </div>
            <div className="grid-3">
            </div>
        </div>  
      </div>
      );
  }
}

export default App;
