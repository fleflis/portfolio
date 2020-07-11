import React, { Suspense, lazy } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

const Home = lazy( () => import('../pages/Index'));

export default function Routes() {
  return (
    <Router>
      <Suspense fallback={<h3>Carregando...</h3>}>
        <Switch>
          <Route exact path="/" component={Home} />

        </Switch>
      </Suspense>
    </Router>
  )
}
