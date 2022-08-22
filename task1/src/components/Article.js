import React from 'react';

function Article({ article }) {
  return (
    <tr data-testid='article' key={article.upvotes}>
      <td data-testid='article-title'>{article.title}</td>
      <td data-testid='article-upvotes'>{article.upvotes}</td>
      <td data-testid='article-date'>{article.date}</td>
    </tr>
  );
}

export default Article;
