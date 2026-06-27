import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Gallery3DPage from './pages/Gallery3DPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gallery-3d" element={<Gallery3DPage />} />
    </Routes>
  );
}

export default App;
