import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ArticleList() {
    const [articles, setArticles] = useState(null);

    useEffect(function() {
        axios.get("https://news-c309e-default-rtdb.firebaseio.com/articles.json")
            .then(({ data }) => {
                setArticles(
                    Object.keys(data).map(id => ({ id, ...data[id] }))
                );
            });
    }, []);

    let output = "Loading...";
    if (articles !== null) {
        output = articles.map(article => (
            <li key={article.id}>
                <Link to={'/' + article.id}>{article.title}</Link>
            </li>
        ))
    }

    return (
        <ul className="ArticleList">
            {output}
        </ul>
    );
}

export default ArticleList;