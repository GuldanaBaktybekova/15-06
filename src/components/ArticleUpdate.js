import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function ArticleUpdate() {

  const { id } = useParams();
  const [articleFull, setArticleFull] = useState({
    title: "",
    description: ""
  });

  useEffect(function () {
    axios
      .get(`https://news-c309e-default-rtdb.firebaseio.com/articles/${id}.json`)
      .then(({ data }) => setArticleFull(data));
  });
  function onFormSubmit(event) {
    event.preventDefault();


    const formData = new FormData(event.target);


    axios.put(`https://news-c309e-default-rtdb.firebaseio.com/articles/${id}.json`, Object.fromEntries(formData.entries())
    ).then(response => navigate(`/${id}`));
  }

  return (
    <form className="ArticleUpdate" onSubmit={onFormSubmit}>
      <div>
        <label>
          Title
          <input type="text" name="title" defaultValue={articleFull.title} required />
        </label>
      </div>
      <div>
        <label>
          Description
          <textarea name="description" defaultValue={articleFull.description} required></textarea>
        </label>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default ArticleUpdate;
