import React, { Component } from "react"
import Avatar from "@material-ui/core/Avatar"
import Paper from "@material-ui/core/Paper"
import MyChips from "./Chips"

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
            <MyChips />
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
