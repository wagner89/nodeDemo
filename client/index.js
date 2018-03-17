import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';

const App = () => {
  return <div>Hello, React world!</div>
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
