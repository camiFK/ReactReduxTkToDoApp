import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskItems from './components/TaskItems';
import AddTask from './components/AddTask';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskItems/>} />
          <Route path='/create' element={<AddTask/>} />
          <Route path='/edit/:id' element={<AddTask/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
