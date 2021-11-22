import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NewsIndex from './NewsIndex';
import TopicSelector from "./TopicSelector";

ReactDOM.render(
  <React.StrictMode>
      <TopicSelector />
      <NewsIndex />
  </React.StrictMode>,
  document.getElementById('root')
);

