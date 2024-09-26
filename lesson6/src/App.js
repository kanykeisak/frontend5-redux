import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import AddTask from "./components/AddTask";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";
function App() {
  return (
      <div className="App">
          <h1>Список задач</h1>
          <AddTask/>
          <TaskFilter/>
          <TaskList/>
      </div>
  );
}

export default App;
