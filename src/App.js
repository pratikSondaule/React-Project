import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ShowData from './components/ShowData';
import ShowSummary from './components/ShowSummary';



function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowData />} />
        <Route path="/summary/:id" element={<ShowSummary />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
