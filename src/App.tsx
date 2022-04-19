import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import Posts from './components/pages/Posts/Posts';
import PostItemPage from './components/pages/PostItemPage/PostItemPage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostItemPage />} />
        {/* default route */}
        <Route
          path="*"
          element={<Navigate to="/posts" />}
        />
      </Routes>
    </div>

  );
}

export default App;
