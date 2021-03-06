import React, { Component } from "react"
import FontIcon from "@material-ui/core/FontIcon"
import DropDown from "./DropDown.js"
import About from "./pages/About"
import Contact from "./pages/Contact"

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { showThisPage: "" }
  }
  onFocus() {
    this.props.showDropDown()
  }
  hideDropDown() {
    this.props.hideDropDown()
  }
  handleClick() {
    this.refs.searchBar.focus()
    this.props.showDropDown()
  }
  showPage(page) {
    this.hideDropDown()
    this.setState({ showThisPage: page })
    this.props.showPage(true)
  }
  hidePage() {
    this.setState({ showThisPage: "" })
  }
  clearSearchBar() {
    this.refs.searchBar.value = ""
  }
  render() {
    return (
      <div>
        <div id="searchBarDiv">
          <div id="innerSearchBarDiv" onClick={this.handleClick.bind(this)}>
            <input
              ref="searchBar"
              key="searchBarKey"
              id="searchBar"
              onFocus={this.onFocus.bind(this)}
              type="text"
            />
          </div>
          <FontIcon className="material-icons" id="searchBarHamburgerMenuIcon">
            search
          </FontIcon>
          {this.props.dropDownState ? (
            <DropDown showPage={this.showPage.bind(this)} />
          ) : (
            ""
          )}
        </div>
        {this.state.showThisPage === "About" ? <About /> : ""}
        {this.state.showThisPage === "Contact" ? <Contact /> : ""}
      </div>
    )
  }
}
export default SearchBar
