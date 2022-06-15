import axios from "axios";
function ArticleCreate() {
  function onFormSubmit(event) {
    event.preventDefault();


    const formData = new FormData(event.target);


    axios.post('https://news-c309e-default-rtdb.firebaseio.com/articles.json', Object.fromEntries(formData.entries()));
  }

  return (
    <form className="ArticleCreate" onSubmit={onFormSubmit}>
      <div>
        <label>
          Title
          <input type="text" name="title" required />
        </label>
      </div>
      <div>
        <label>
          Description
          <textarea name="description" required></textarea>
        </label>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default ArticleCreate;
