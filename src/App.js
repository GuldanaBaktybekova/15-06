import { Route, Routes } from 'react-router-dom';
import ArticleCreate from './ArticleCreate';
import ArticleFull from './ArticleFull';
import ArticleList from './ArticleList';
import ArticleUpdate from './ArticleUpdate';
import ArticleDelete from './ArticleDelete';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/create" element={<ArticleCreate />} />
        <Route path="/:id" element={<ArticleFull />} />
        <Route path="/update/:id" element={<ArticleUpdate />} />
        <Route path="/delete/:id" element={<ArticleDelete />} />
      </Routes>
    </div>
  );
}

export default App;
