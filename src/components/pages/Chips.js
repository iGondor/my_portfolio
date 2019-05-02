import React, { Component } from "react"
import Avatar from "@material-ui/core/Avatar"
import Paper from "@material-ui/core/Paper"
import Chip from "@material-ui/core/Chip"

class About extends Component {
  render() {
    return (
      <div id="aboutContentDiv">
        <Paper id="paperContent" zDepth={2}>
        <span className="desktopOnly">
          <Paper id="paperAvatar" zDepth={4} circle={true}>
            <Avatar id="avatarImage" src="images/head.png" />
          </Paper>
          </span>
          <div id="aboutTextDiv">
            <h2>> hello</h2>
            <p>
              I am a quick-learning and flexible DevOps Engineer with a highly logical mind-set, excellent interpersonal skills, and a wealth of experience in customer-facing DevOps consultancy for leading global Cloud Service Providers, and the UK’s premier Microsoft Azure and Microsoft System Center specialists.
            </p>
            <Chips />
            <SocialMediaDesktop />
            <SocialMediaPhone />
          </div>
        </Paper>
      </div>
    )
  }
}
const styles = {
  chip: {
    margin: 15
  },
  wrapper: {
    display: "flex",
    justifyContent: 'center',
    flexWrap: "wrap"
  }
}
class Chips extends Component {
  render() {
    return (
      <div id="listAbout">
        <h3>Skills / Knowledge</h3>
        <div style={styles.wrapper}>
        <Chip label="DevOps" className={classes.chip} variant="outlined" style={styles.chip}/>
        <Chip label="Azure" className={classes.chip} variant="outlined" style={styles.chip}/>
        <Chip label="AWS" className={classes.chip} variant="outlined" style={styles.chip}/>
        <Chip label="Windows Server" className={classes.chip} variant="outlined" style={styles.chip}/>
        <Chip label="Linux" className={classes.chip} variant="outlined" style={styles.chip}/>
        <Chip label="git" className={classes.chip} variant="outlined" style={styles.chip}/>
        <Chip label="CI/CD" className={classes.chip} variant="outlined" style={styles.chip}/>
        <Chip label="SQL" className={classes.chip} variant="outlined" style={styles.chip}/>
        <Chip label="Docker" className={classes.chip} variant="outlined" style={styles.chip}/>
        <Chip label="OpenShift/OKD" className={classes.chip} variant="outlined" style={styles.chip}/>
        <Chip label="Kubrenetes" className={classes.chip} variant="outlined" style={styles.chip}/>
        <Chip label="System Center" className={classes.chip} variant="outlined" style={styles.chip}/>
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
          <i class="fab fa-linkedin-square" aria-hidden="true" />
        </a>
        <a href="https://twitter.com/iGondor" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-twitter-square" aria-hidden="true" />
        </a>
        <a href="https://github.com/iGondor" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github-square" aria-hidden="true" />
        </a>
      </div>
    )
  }
}
export default About
