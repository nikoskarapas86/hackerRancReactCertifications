import 'h8k-components';
import React, { useState } from 'react';
import './App.css';

import Articles from './components/Articles';

const title = 'Sorting Articles';

function App({ articles }) {
  const [updatedArticles, setUpdatedArticles] = useState(articles);
  const getDescendingArticles = () => {
    let ar = articles.slice();
    ar.sort((a, b) => b.upvotes - a.upvotes);
    setUpdatedArticles(ar);
  };
  const getRecentDatesArticles = () => {
    let ar = articles.slice();
    ar.sort((a, b) => new Date(b.date) - new Date(a.date));
    setUpdatedArticles(ar);
  };
  return (
    <div className='App'>
      <h8k-navbar header={title}></h8k-navbar>
      <div className='layout-row align-items-center justify-content-center my-20 navigation'>
        <label className='form-hint mb-0 text-uppercase font-weight-light'>
          Sort By
        </label>
        <button
          data-testid='most-upvoted-link'
          onClick={getDescendingArticles}
          className='small'
        >
          Most Upvoted
        </button>
        <button
          data-testid='most-recent-link'
          className='small'
          onClick={getRecentDatesArticles}
        >
          Most Recent
        </button>
      </div>
      <Articles articles={updatedArticles} />
    </div>
  );
}

export default App;
