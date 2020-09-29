import React, { Component } from "react";

// importing components
import SeasonDisplay from "./components/SeasonDisplay";

class App extends Component {
  state = { lat: null };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (error) => console.log(error)
    );
  }
  render() {
    return (
      <div>
        <SeasonDisplay lat={this.state.lat} />
      </div>
    );
  }
}

export default App;
