import React from "react";
import defaultNewsImage from "../assets/my_news_image.jpg";
import "./NewsItem.css";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card news-item mb-3 mx-3 px-2 py-2">
      <img src={src ? src : defaultNewsImage} className="card-img-top" alt="News" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <a href={url} className="btn btn-success read-more">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;