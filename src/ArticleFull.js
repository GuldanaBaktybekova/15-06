import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ArticleFull() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(function() {
        axios.get(`https://news-c309e-default-rtdb.firebaseio.com/articles/${id}.json`)
            .then(({ data }) => setArticle(data));
    }, []);

    let output = "Loading...";
    if (article !== null) {
        output = (
            <>
                <h1>{article.title}</h1>
                <p>{article.description}</p>

                <Link to={`/update/${id}`}>Update</Link>
                <Link to={`/delete/${id}`}>Delete</Link>
            </>
        )
    }

    return (
        <article className="ArticleFull">
            {output}
        </article>
    );
}

export default ArticleFull;