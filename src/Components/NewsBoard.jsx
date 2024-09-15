import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import "./NewsBoard.css";

const NewsBoard = ({ query, category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      let url = `https://newsapi.org/v2/top-headlines?category=${category}&q=${query}&apiKey=${import.meta.env.VITE_API_KEY}`;
      let response = await fetch(url);
      let data = await response.json();
      setArticles(data.articles);
      setLoading(false);
    };

    fetchNews();
  }, [query, category]);

  return (
    <div className="news-board">
      <h2 className="text-center my-4">
        <span className="badge bg-success">Latest News</span>
      </h2>
      <div className="d-flex flex-wrap justify-content-center">
        {loading ? (
          <p>Loading...</p>
        ) : articles && articles.length > 0 ? (
          articles.map((news, index) => (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          ))
        ) : (
          <p>Request limit exceeded.</p>
        )}
      </div>
    </div>
  );
};

export default NewsBoard;