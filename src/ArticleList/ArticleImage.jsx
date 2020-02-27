import React from "react";
import styles from './ArticleImage.module.css'

const ArticleImage = ({article}) => {
    return(
        <div>
            <img className={styles.img} src={article.image._url} alt={article.title}/>
        </div>
    )
}

export default ArticleImage;