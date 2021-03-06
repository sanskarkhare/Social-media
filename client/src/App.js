import { useEffect } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import PageRender from './customRouter/pageRender';
import Login from './pages/login';
import Home from './pages/home';
import Alert from "./components/alert/Alert";
import { refreshToken } from './redux/actions/authActions'
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/header/Header';
import StatusModal from './components/StatusModal';


function App() {

  const { auth, status } = useSelector(state => state)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken())
    
  }, [dispatch])

  return (
    <Router>
      <Alert />
      <input type="checkbox" id="theme" />
      <div className="App">
        <div className="main">
         {auth.token && <Header />}
         {status && <StatusModal />}
         <Route exact path="/" component={auth.token ? Home : Login} />
         <Route exact path="/:page" component={PageRender} />
         <Route exact path="/:page/:id" component={PageRender} />
        </div>
      </div>
    </Router>
  );
}

export default App;
