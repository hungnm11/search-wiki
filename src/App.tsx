import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import NotFound from './pages/NotFound';
import SearchPage from './pages/Search';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
