import React from "react";
import JSMpeg from "@cycjimmy/jsmpeg-player";
import "./Main.css";

class Main extends React.Component {
  render() {
    return (
      <main className="Main">
        <div className="Main--content">
          <div className="Main--text">Birb Cam</div>
          <div className="Main--stream">
            <div className="jsmpeg"></div>
          </div>
        </div>
      </main>
    );
  }

  componentDidMount() {
    new JSMpeg.VideoElement(".jsmpeg", "ws://subhobo.ddns.net:9999", {
      autoplay: true,
    });
  }
}

export default Main;
