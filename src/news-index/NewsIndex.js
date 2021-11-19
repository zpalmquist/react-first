import React, { useState, useEffect } from "react";
import { getRandomElm } from "./utils";

const topics = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine',
    'movies', 'nyregion', 'obituaries', 'opinion', 'politics',
    'realestate', 'science', 'sports', 'sundayreview',
    'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world']
export default function NewsIndex() {
    const [articleState, setArticle] = useState({})
    useEffect(async () => {
        setArticle(await fetchArticles())
    }, []);

    async function fetchArticles(articleTopic) {
        const topic = articleTopic || getRandomElm(topics)
        const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=YAugppSe9yGtXkyjgPogc3tFGIxWgYdz`)
            .then(response => (response.json()))
        return res
    }

    return (
        <div class='App-header'>
            <h2>Articles Found:</h2>
            <ul className='newsLink'>
                {articleState.results?.map((article) => (
                    <li className='articleUri'>
                        <a href={article.url}>{article.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}