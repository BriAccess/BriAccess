import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Pictograph from "./pages/Pictograph";
import MedicalPage from "./pages/MedicalPage";
import EditMedicalPage from "./pages/EditMedicalPage";
import Conversation from "./pages/texting/Conversation";
import TeamPage from "./pages/TeamPage";

import PrivacyPolicy from "./pages/PrivacyPolicy";

import AllConversations from "./pages/texting/AllConversations";

import QRLoader from "./components/QRLoader";

import CookieConsent from "react-cookie-consent";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/convos/:name" component={Conversation}/>
          <Route exact path="/load/:data" component={QRLoader} />
          <Route exact path="/convos" component={AllConversations}/>
          <Route exact path="/medical/edit">
            <EditMedicalPage />
          </Route>
          <Route exact path="/medical">
            <MedicalPage />
          </Route>
          <Route exact path="/team">
            <TeamPage />
          </Route>
          <Route exact path="/fire">
            <Pictograph gridName="fire" />
          </Route>
          <Route exact path="/ems">
            <Pictograph gridName="ems" />
          </Route>
          <Route exact path="/police">
            <Pictograph gridName="police" />
          </Route>
          <Route exact path="/help">
            <Pictograph gridName="help" />
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/privacypolicy">
            <PrivacyPolicy />
          </Route>
        </Switch>
      </Router>
      <CookieConsent>
        This application uses cookies to enhance the user experience. &nbsp;
        &nbsp;
        <a href="/privacypolicy" style={{ color: "yellow" }}>
          Read Policy
        </a>
      </CookieConsent>
    </div>
  );
};

export default App;
