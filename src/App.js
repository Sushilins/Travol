import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from './Comp/Footer';
import Home from './pages/Home';
import Maldives from './pages/Maldives'
import France from './pages/France'
import Canada from './pages/Canada' 
import Greece from './pages/Greece'
import Italy from './pages/Italy'
import Gallery from './pages/Gallery'
import Duration from './pages/Duration';
import Blog from './pages/Blog';
import Transportation from './pages/Transportation';
import Destinations from './pages/Destinations';

function App() {
  return (
    <>
     <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/maldives'>
          <Maldives/>
        </Route>
        <Route path='/france'>
          <France/>
        </Route>
        <Route path='/canada'>
          <Canada/>
        </Route>
        <Route path='/greece'>
          <Greece/>
        </Route>
        <Route path='/italy'>
          <Italy/>
        </Route>
        <Route path='/destinations'>
          <Destinations/>
        </Route>
        <Route path='/gallery'>
          <Gallery/>
        </Route>
        <Route path='/durations'>
          <Duration/>
        </Route>
        <Route path='/blog'>
          <Blog/>
        </Route>
        <Route path='/transportation'>
          <Transportation/>
        </Route>
      </Switch>
      <Footer/>
     </Router> 
    </>
  )
}

export default App

