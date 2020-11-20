import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Error from '@/404.tsx'
import RouteMenus from '@/routes/menu'
const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          {
            RouteMenus.map((list, index) => (
              <Route key={index} path={list.path} exact={list.exact} component={list.component}></Route>
            ))
          }
          <Route component={Error}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
