import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ArticleList() {
  const[articleList, setArticleList] = useState(null);
  useEffect(function () {
    axios
      .get("https://news-c309e-default-rtdb.firebaseio.com/articles.json")
      .then(({ data }) => {
        const newArticleList = Object.keys(data).map((id) => {
          return {
            id: id,
            ...data[id]
          };
        });
        setArticleList(newArticleList);
      });
   
  }, []);

  let output = "Loading...";
  if (articleList !== null) {
    output = articleList.map((article) => (
      <li key={article.id}>
       
      <Link  to={'/' + article.id}>   {article.title} </Link> 
      </li>
    ));
  }

  return ( 
    <ul className="ArticleList">
      {output}
    </ul>
   );
}

export default ArticleList;