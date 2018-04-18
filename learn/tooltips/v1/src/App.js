import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import { Body, Link } from "./AppStyles";

class App extends Component {
  render() {
    return (
      <div>
        <Body>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Maecenas sed diam eget risus varius blandit sit amet non
          magna. Donec ullamcorper nulla non metus auctor fringilla. Nullam id
          dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a
          ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget
          urna mollis ornare vel eu leo.{" "}
          <Link data-tip data-for="nick">
            Nick Mauss
          </Link>{" "}
          commodo cursus magna, vel scelerisque nisl consectetur et. Nullam quis
          risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros. Curabitur blandit tempus
          porttitor. Nullam id dolor id nibh ultricies vehicula ut id elit.
          Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna
          mollis ornare vel eu leo.
        </Body>

        <ReactTooltip id="nick" aria-haspopup="true" effect='solid'>
          <p>This is a global react component tooltip</p>
          <p>You can put every thing here</p>
          <ul>
            <li>Word</li>
            <li>Chart</li>
            <li>Else</li>
          </ul>
        </ReactTooltip>
      </div>
    );
  }
}

export default App;
