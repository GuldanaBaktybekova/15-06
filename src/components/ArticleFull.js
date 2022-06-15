import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function ArticleFull() {
  const { id } = useParams();
  const [articleFull, setArticleFull] = useState({});

  useEffect(function () {
    axios
      .get(`https://news-c309e-default-rtdb.firebaseio.com/articles/${id}.json`)
      .then(({ data }) => setArticleFull(data));
  });

  let output = "Loading...";
  if (articleFull !== null) {
    output = (
      <>
        <h1> {articleFull.title}</h1>
        <p> {articleFull.description}</p>
        <Link to={`/update/${id}`}>Update</Link>
        <Link to={`/delet/${id}`}>Delete</Link>
      </>
    );
  }

  return <article className="ArticleFull">{output}</article>;
}

export default ArticleFull;
