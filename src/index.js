import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter,Route,Switch, } from 'react-router-dom'
import Project from './components/Project';
const routing = (
   
       
          <HashRouter>
           
              <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/projects" component={Project} />
                {/* <Route path="/contact" component={Contact} /> */}
                {/* <Route component={NoPageFound} /> */}
              </Switch>
            
          </HashRouter>
      

  )

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
