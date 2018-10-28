import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import "./styles.css";
import MainPage from "./pages/MainPage";
import blue from "@material-ui/core/colors/blue";
import pink from "@material-ui/core/colors/pink";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
const theme = createMuiTheme({
  palette: {
    primary: {
      main:'#05AAAC'
    },
    secondary: {
      main:'#05AAAC'
    }
  }
});
const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <MainPage />
      </MuiThemeProvider>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
