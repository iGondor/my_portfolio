import React, { Component } from "react"

const styles = {
  name: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
    fontFamily: ['Source Code Pro', 'monospace', 'monospace'],    
  },
}

class TitleLogo extends Component {
  titleClick() {
    if (this.props.showPage) {
      this.props.resetPage()
    }
  }
  render() {
    var titleId = "titleLogoDiv"
    //ugly but if showPage null then none of these
    titleId += this.props.showPage ? " titleLogoDiv-small" : ""
    titleId += this.props.showPage === false ? " titleLogoDiv-big" : ""
    return (
      <div  style={styles.wrapper} className={titleId} onClick={this.titleClick.bind(this)}>
        <h1 id="titleLogoH1">
          Jesse <span id="lastnameInTitleLogo">Baber</span>
        </h1>
      </div>
    )
  }
}

export default TitleLogo