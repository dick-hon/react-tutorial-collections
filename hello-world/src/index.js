import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // import the "App component from external .js"
import * as serviceWorker from './serviceWorker';

function Progress(){  // internal component
  const barWidth="50%";
  return(
      <div>
      <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
        <div className="progress-bar" style={{backgroundColor:"#fe5196",width:barWidth,height:"100%",borderRadius:"10px"}}></div>
      </div>
    </div>
  );
}

ReactDOM.render(
  <div>
    <App/>
    <Progress/>
    <Progress/>
    <Progress/>
    <App/>
    <App/>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
