import React, { Component } from "react"
import Menu from "./components/Menu.js"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
   typography: {
    useNextVariants: true,
  }, 
  props:{
    MuiTabs:{
      centered: true,
      variant: "standard",
      indicator: { display: "none" },
    },
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application 💣!
      disableTouchRipple: true,
    },    

  }
});

class Index extends Component {
  render() {
    return (
      <div id="app">
        <div id="content">
          <div ref="searchBarDivRef">
            <Menu />
          </div>
        </div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Index />
      </MuiThemeProvider>
    )
  }
}
export default App