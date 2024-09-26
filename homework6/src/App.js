import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import TodoForm from "./components /TodoForm";
import TodoFilter from "./components /TodoFilter";
import TodoList from "./components /TodoList";


function App() {
  return (
      <div className="App">
          <h1>Приоритеты</h1>
          <TodoForm/>
          <TodoFilter/>
          <TodoList/>
      </div>
  );
}

export default App;
