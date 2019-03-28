import React, { Component } from "react"
import Avatar from "material-ui/Avatar"
import Paper from "material-ui/Paper"
import Chip from "material-ui/Chip"

class About extends Component {
  constructor(props) {
    super(props)
    this.state = { secondsSinceMyBirth: 0, yearsSinceMyBirth: 0 }
  }
  render() {
    return (
      <div id="aboutContentDiv">
        <Paper id="paperContent" zDepth={2}>
        <span className="desktopOnly">
          <Paper id="paperAvatar" zDepth={4} circle={true}>
            <Avatar id="avatarImage" src="images/JesseBaber.jpg" />
          </Paper>
          </span>
          <div id="aboutTextDiv">
            <h2>Hello World!</h2>
            <p>
              Hi I'm Jesse 2
            </p>
<center>
<h2>its not all about you - it's all about me</h2>
</center>
            <Chips />
            <SocialMediaPhone />
          </div>
          <SocialMediaDesktop />
        </Paper>
      </div>
    )
  }
}
const styles = {
  chip: {
    margin: 10
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap"
  }
}
class Chips extends Component {
  render() {
    return (
      <div id="listAbout">
        <h3>Skills / Knowledge</h3>
        <div style={styles.wrapper}>
        <Chip style={styles.chip}>DevOps</Chip>
        <Chip style={styles.chip}>etc</Chip>
        </div>
      </div>
    )
  }
}
class SocialMediaPhone extends Component {
  render() {
    return (
      <span className="mobileOnly">
        <SocialMedia />
      </span>
    )
  }
}
class SocialMediaDesktop extends Component {
  render() {
    return (
      <span className="desktopOnly">
        <SocialMedia />
      </span>
    )
  }
}
class SocialMedia extends Component {
  render() {
    return (
      <div id="socialMediaAbout">
        <a
          href="https://www.linkedin.com/in/JesseBaber"
          target="_blank"
        >
          <i className="fa fa-linkedin-square" aria-hidden="true" />
        </a>
        <a href="https://twitter.com/iGondor" target="_blank">
          <i className="fa fa-twitter-square" aria-hidden="true" />
        </a>
        <a href="https://github.com/iGondor" target="_blank">
          <i className="fa fa-github-square" aria-hidden="true" />
        </a>
      </div>
    )
  }
}
export default About
