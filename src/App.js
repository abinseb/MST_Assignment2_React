import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import TodoAppUpdate from './component/TodoAppUpdate';
import Todo from './component/Todo';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Todo/> */}
      <TodoAppUpdate/>
    </div>
  );
}

export default App;
