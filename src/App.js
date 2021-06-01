import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/Home/NotFound/NotFound';
import ClubDetail from './components/ClubDetail/ClubDetail';

function App() {
  return (
    <Router>
     <Switch>
       <Route path='/home'>
       <Home/>
       </Route>
       <Route exact path='/'>
         <Home/>
       </Route>
       <Route path ='/team/:teamId'>
         <ClubDetail/>
       </Route>
       <Route path='*'>
         <NotFound/>
       </Route>
     </Switch>
    </Router>
  );
}

export default App;
