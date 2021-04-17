import axios from 'axios';
import React, { useEffect, useState } from 'react';
import News from '../News/News';


const TopHeadlines = () => {
    const [articles,setArticles] = useState([])
    // useEffect(()=>{
    //     fetch('https://newsapi.org/v2/everything?q=apple&from=2021-04-14&to=2021-04-14&sortBy=popularity&apiKey=2509d080ed9b4c1f84e7f746595a9d67')
    //     .then(res=>res.json())
    //     .then(data=>setArticles(data.articles))
    // },[])
    useEffect(()=>{
        const url = 'https://newsapi.org/v2/everything?q=apple&from=2021-04-14&to=2021-04-14&sortBy=popularity&apiKey=2509d080ed9b4c1f84e7f746595a9d67'
        axios(url)
        .then(data=>setArticles(data.data.articles))
    },[])

    return (
        <div>
            <h3>This is news : {articles.length}</h3>
            {
                articles.map(article=><News article={article.title}></News>)
            }  
        </div>
    );
};

export default TopHeadlines;