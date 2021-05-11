import { BrowserRouter as Router, Route} from 'react-router-dom';
import PageRender from './pageRender';
import Login from './pages/login';
import Home from './pages/home';
import Notify from "./components/notify/Notify";

function App() {
  return (
    <Router>
      <Notify />
      <input type="checkbox" id="theme" />
      <div className="App">
        <div className="main">
         <Route exact path="/" component={Login} />
         <Route exact path="/:page" component={PageRender} />
         <Route exact path="/:page/:id" component={PageRender} />
        </div>
      </div>
    </Router>
  );
}

export default App;
