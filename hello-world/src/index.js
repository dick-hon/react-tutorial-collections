import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // import the "App component from external .js"
import Layout from './Layout';
import * as serviceWorker from './serviceWorker';

const printMessage=()=>{
  document.getElementById('show-area').innerHTML="我被按到了";
}

ReactDOM.render(
  <div>
    <Layout>
      <App> 在index.js中設定文字 </App>
    </Layout>
    </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
