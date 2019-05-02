import React, { Component } from "react"
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import SwipeableViews from "react-swipeable-views"
import About from "./pages/About"
import Contact from "./pages/Contact"

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
    fontFamily: ['Source Code Pro', 'monospace', 'monospace'],    
  },
  tab: {
    fontSize: 24,
    backgroundColor: "#FAFAFE",
    color: "#ffa7c4",
    fontColor: "#ffa7c4",
    fontFamily: ['Source Code Pro', 'monospace', 'monospace'],
    textTransform: 'none'
  },
  activeTab: {
    fontSize: 24,
    backgroundColor: "#FAFAFE",
    color: "#ffa7c4",
    textDecoration: "none",
    fontFamily: ['Source Code Pro', 'monospace', 'monospace'],

  },
  tabs: {
    backgroundColor: "#FAFAFE",
    justifyContent: "center",
    fontFamily: 'Source Code Pro',
    textTransform: 'none'
  },
  displayNone: {
    display: "none"
  }
}



class DropDown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      animateTransitions: false
    }
}
handleChange = value => {
  if (this.state.slideIndex === 0 || value === 0) {
    this.setState({ animateTransitions: false })
  }
  this.setState({
    slideIndex: value
  })
  this.props.showPage()
}
onTransitionEnd() {
  if (this.state.slideIndex !== 0) {
    this.setState({ animateTransitions: true })
  } else {
    this.props.resetPage()
}
}

  render() {
    const { index } = this.state;

    return (
      <div>
        <Tabs style={styles.tabs} value={index} onChange={this.handleChange}>
          <Tab style={styles.displayNone} value={0} />
          <Tab style={styles.tab} value={1} label="> me"/>
          <Tab style={styles.tab} value={2} label="> about" />
        </Tabs>
        <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex} animateTransitions={this.state.animateTransitions}>
          <div />
          <div style={Object.assign({},styles.slide)} value={1}><About/></div>
          <div style={Object.assign({},styles.slide)} value={2}><Contact/></div>
        </SwipeableViews>
      </div>
    );
  }
}

export default DropDown;