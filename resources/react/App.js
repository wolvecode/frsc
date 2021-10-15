import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrPage from "./pages/ErrPage";
import MainMenu from "./pages/MainMenu";
import PrimaryInfo from "./pages/Register/Register";
import "./styles/style.scss";
import PageWrapper from "./components/PageWrapper";
import Scan from "./pages/Scan/Scan";
import ScanNotFound from "./pages/Scan/ScanNotFound";
import FingerPrint from "./components/FingerPrint";
import SearchMain from "./pages/Search/SearchMain";
import DashBoard from "./pages/Dashboard/DashBoard";
const App = () => {
  return (
    <Router>

        <Switch>
          <Route exact path="/home">
            <MainMenu />
          </Route>

          {/*<Route exact path="/errPage">*/}
          {/*  <ErrPage />*/}
          {/*</Route>*/}

          <Route path="/home/register">
            <PrimaryInfo />
          </Route>

          <Route exact path="/home/scan">
            <Scan />
          </Route>

          <Route exact path="/home/scanNotFound">
            <ScanNotFound />
          </Route>

          <Route exact path="/home/fingerPrint">
            <FingerPrint />
          </Route>

          <Route exact path="/home/searchMain">
            <SearchMain />
          </Route>

          <Route exact path="/home/dashboard">
            <DashBoard />
          </Route>

            <Route exact path="*">
                <ErrPage />
            </Route>

        </Switch>

    </Router>
  );
};

export default App;
