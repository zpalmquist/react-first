import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NewsIndex from './news-index/NewsIndex'

ReactDOM.render(
  <React.StrictMode>
          <NewsIndex />
      {/*<App/>*/}
  </React.StrictMode>,
  document.getElementById('root')
);

