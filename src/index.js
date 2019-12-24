import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'

import './css/index.css'
import './css/muiz.css'
import './css/font.css'
import './css/iconfont.css'

import App from './App';
import Navarea from './components/navarea'
import Contact from './components/contact'
import Portfolio from './components/portfolio'
import About from './components/about'


const routing = (<Router>
    <div className="width-content-area">
      <Navarea />
      <div className="next-to-nav">
        <div className="name-nav">Abdul-Muiz Yusuff</div>
        <div className="content-area">
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
        </div>
      </div>
    </div>
  </Router>);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
