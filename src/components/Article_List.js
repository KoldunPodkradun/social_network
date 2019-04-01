import React from 'react'
import Article from './Article'

export default function Article_List({articles}) {
    const articleElements = articles.map(articles =>
        <li key = {articles.id} ><Article articles = {articles}/></li>
    )
    return(
        <ul>
            {articleElements}
        </ul>
    )
}