import React, { Component } from 'react';
import ArticleData from './category/articleData';
import MiniArticle from './category/miniArticle';

function ArticleMap() {
   const articleComponents = ArticleData.map(article => <MiniArticle key={article.id} title={article.title}  
                                writers={article.writers} postTime={article.time} readTime={article.read} />)

                                return (
                                    <div>
                                        {articleComponents}
                                    </div>
                                )
}

export default ArticleMap;