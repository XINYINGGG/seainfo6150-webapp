import React from "react";
import PropTypes from 'prop-types'
import ArticleListItem from './ArticleListItem'
import styles from './ArticleList.module.css'

const ArticleList = props => {
  return (
    <ul>
    {props.articles.map(article => (
      <li className={styles.li} key={article.slug}>
        <h2 className = {styles.h2}>{article.title}</h2>
        <p className = {styles.p}>{article.shortText}</p>
        <ArticleListItem art = {article}/>
      </li>
    ))}
  </ul> 
    
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleList;