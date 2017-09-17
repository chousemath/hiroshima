import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Day1 from './pages/day1/day1';
import Day2 from './pages/day2/day2';
import NotFound from './pages/notfound/notfound';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <div>
    <HashRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/1' component={Day1} />
        <Route path='/2' component={Day2} />
        <Route path="*" component={NotFound} />
      </Switch>
    </HashRouter>
  </div>
), document.getElementById('root'));
registerServiceWorker();


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
