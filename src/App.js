import React from "react";
import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import PricePage from "./Pages/PricePage";
import Mstock from "./components/Mstock";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Mstock />
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={PricePage} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
