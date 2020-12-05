import React from "react";
import { Switch, Route } from "react-router-dom";
import { Tweets, Homepage } from "./containers";
import Notification from './components/message/notification'

function App() {
  return (
    <>
      <Notification />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/tweet/:tweet" component={Tweets} />
      </Switch>
    </>
  );
}

export default App;
