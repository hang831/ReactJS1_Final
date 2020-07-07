import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "../src/App"
import Timer from "../src/Timer"
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
<Timer />,
document.getElementById('time')
);

