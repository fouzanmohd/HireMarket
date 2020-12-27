import "./App.css";
import { Homepage } from "./containers/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CustomerAccessPage } from './components/customerAccessPage/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage}/>
          <Route path='/customer' exact component={CustomerAccessPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
