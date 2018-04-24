import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import AppStyles from "./AppStyles";

class App extends Component {
  render() {
    return (
      <AppStyles>
        <div className="Body">
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Maecenas sed diam eget risus varius blandit sit amet non
          magna. Donec ullamcorper nulla non metus auctor fringilla. Nullam id
          dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a
          ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget
          urna mollis ornare vel eu leo.{" "}
          <div className="Link" data-tip data-for="nick" >
            Nick Mauss
          </div>{" "}
          commodo cursus magna, vel scelerisque nisl consectetur et. Nullam quis
          risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros. Curabitur blandit tempus
          porttitor. Nullam id dolor id nibh ultricies vehicula ut id elit.
          Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna
          mollis ornare vel eu leo.
        </div>

        <ReactTooltip
          className="custom"
          id="nick"
          type="light"
          delayShow={400}
          delayHide={2000}
          aria-haspopup="true"
          effect="solid"
        >
          <div className="Images">
            <img src="https://d32dm0rphc51dk.cloudfront.net/eYGNRMFqIirK-962fSOAsw/larger.jpg" />
            <img src="https://d32dm0rphc51dk.cloudfront.net/_lnI3nNFEo6D9TFqm2oM1w/larger.jpg" />
          </div>
          <div className="Info">
            <div className="Name">Nick Mauss</div>
            <div className="Follow">+ Follow</div>
            <div className="Nation">American, b. 1980</div>
            <div className="Bio">
              Nick Mauss makes drawings, prints, and paintings that often take
              on sculptural presence in their presentation; his 2012 large-scale
              series of silkscreen prints…{" "}
              <div className="ReadMore">Read More</div>
            </div>
          </div>
        </ReactTooltip>

      </AppStyles>
    );
  }
}

export default App;
