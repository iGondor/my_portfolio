import React, { Component } from "react"

class Contact extends Component {
  render() {
    return (
      <div id="contactContent">
        <div id="contactdiv">
          <h2>
            <a id="mailtag" href="mailto:hello@jessebaber.uk">
              hello@jessebaber.uk
            </a>
          </h2>
          <span id="SocialMediaSpan">
            <SocialMedia />
          </span>
        </div>
      </div>
    )
  }
}
class SocialMedia extends Component {
  render() {
    return (
      <div id="socialMediaContact">
        <a
          href="https://www.linkedin.com/in/jessebaber"
          target="_blank"
        >
          <i className="fa fa-linkedin-square" aria-hidden="true" />
        </a>
        <a href="https://twitter.com/@iGondor" target="_blank">
          <i className="fa fa-twitter-square" aria-hidden="true" />
        </a>
      </div>
    )
  }
}
export default Contact
