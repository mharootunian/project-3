import React, { Component } from "react";
import Component from "./login.component";

class Login extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }


  import Video from "react-native-video";
  <Video
source={require("./../assets/video1.mp4")}
style={styles.backgroundVideo}
muted={true}
repeat={true}
resizeMode={"cover"}
rate={1.0}
ignoreSilentSwitch={"obey"}
/>