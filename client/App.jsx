import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '@/view/Home'
import HappyLive from '@/view/happyLive'
import Instroduction from '@/view/Instroduction'
import Error from '@/404.tsx'
const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/happyLive' component={HappyLive}></Route>
          <Route path='/instroduction' component={Instroduction}></Route>
          <Route component={Error}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
