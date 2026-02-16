import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ListItem from './pages/ListItem';
import NewItem from './pages/NewItem';
import OneItem from './pages/OneItem';
import UpdateItem from './pages/UpdateItem';

function App() {
  return (
    <Router>
      <div className='container py-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/list' element={<ListItem />} />
          <Route path='/new' element={<NewItem />} />
          <Route path='/item/:id' element={<OneItem />} />
          <Route path='/update/:id' element={<UpdateItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
