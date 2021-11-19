import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NewsIndex from './NewsIndex';
import NewsIndex from './news-index/NewsIndex'

ReactDOM.render(
  <React.StrictMode>
          <NewsIndex />
      {/*<NewsIndex/>*/}
  </React.StrictMode>,
  document.getElementById('root')
);

