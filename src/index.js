import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Res from "./components/Res";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Example from "./components/Example";
import mainHomePageRes from "./components/mainHomePageRes";
ReactDOM.render(
  <React.StrictMode>

    <Example/>

    <mainHomePageRes/>

      <BrowserRouter>
          <Route path="/partners" component={Res}></Route>
          <Route path="/main" component={mainHomePageRes}></Route>
      </BrowserRouter>




  {/*<SectionTwo/>*/}

      {/*<MediaQuery/>*/}

      {/*<Res></Res>*/}


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
