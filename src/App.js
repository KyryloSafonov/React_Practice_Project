import React, {Component} from 'react';
import {moviesService} from "./services";

moviesService.getMovies().then(console.log)
class App extends Component {
  render() {
    return (
        <div>
          
        </div>
    );
  }
}

export default App;
