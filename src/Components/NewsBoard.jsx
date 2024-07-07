import React from "react";
import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import './NewsBoard.css';

const NewsBoard = ({ category, country }) => {
  const [articles, setArticles] = useState([]);
  const [trending, setTrending] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
      let response = await fetch(url);
      let data = await response.json();
      setArticles(data.articles);
    };

    const fetchTrendingNews = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=general&apiKey=${import.meta.env.VITE_API_KEY}`;
      let response = await fetch(url);
      let data = await response.json();
      setTrending(data.articles[Math.floor(Math.random() * data.articles.length)]);
    };

    fetchNews();
    fetchTrendingNews();
  }, [category, country]);

  return (
    <div className="news-board">
      {trending && (
        <div className="hero-section card bg-dark text-light mb-4 p-4">
          <h2 className="card-title">{trending.title}</h2>
          <p className="card-text">{trending.description}</p>
          <a href={trending.url} className="btn btn-primary">Read more</a>
        </div>
      )}
      <h2 className="text-center my-4">Latest <span className="badge bg-danger">News</span></h2>
      <div className="d-flex flex-wrap justify-content-center">
        {articles.map((news, index) => (
          <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        ))}
      </div>
    </div>
  )
}

export default NewsBoard
