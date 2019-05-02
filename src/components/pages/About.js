import React, { Component } from "react"
import Avatar from "@material-ui/core/Avatar"
import Paper from "@material-ui/core/Paper"
import Chip from "@material-ui/core/Chip"

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
            <h2>> hello</h2>
            <p>
              I am a quick-learning and flexible DevOps Engineer with a highly logical mind-set, excellent interpersonal skills, and a wealth of experience in customer-facing DevOps consultancy for leading global Cloud Service Providers, and the UK’s premier Microsoft Azure and Microsoft System Center specialists.
            </p>
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
        <Chip variant="outlined" style={styles.chip}>DevOps</Chip>
        <Chip variant="outlined" style={styles.chip}>Azure</Chip>
        <Chip variant="outlined" style={styles.chip}>AWS</Chip>
        <Chip variant="outlined" style={styles.chip}>Windows Server</Chip>
        <Chip variant="outlined" style={styles.chip}>Linux</Chip>
        <Chip variant="outlined" style={styles.chip}>git</Chip>
        <Chip variant="outlined" style={styles.chip}>CI/CD</Chip>
        <Chip variant="outlined" style={styles.chip}>SQL</Chip>
        <Chip variant="outlined" style={styles.chip}>Docker</Chip>
        <Chip variant="outlined" style={styles.chip}>OpenShift/OKD</Chip>
        <Chip variant="outlined" style={styles.chip}>Kubrenetes</Chip>
        <Chip variant="outlined" style={styles.chip}>System Center</Chip>
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
        <a href="https://www.linkedin.com/in/JesseBaber" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-square" aria-hidden="true" />
        </a>
        <a href="https://twitter.com/iGondor" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter-square" aria-hidden="true" />
        </a>
        <a href="https://github.com/iGondor" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github-square" aria-hidden="true" />
        </a>
      </div>
    )
  }
}
export default About
