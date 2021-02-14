import Users from "./Components/UserList";

import { Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">
        <div>
      <Switch>
        <Route exact path="/" render={() => <Users />} />
        </Switch>
    </div>
        </span>
      </div>
    </div>
  );
}

export default App;
