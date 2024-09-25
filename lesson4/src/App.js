import './App.css';
import MainPage from "./pages/mainPage/MainPage";
import "bootstrap/dist/css/bootstrap.min.css"
import UsersPage from "./pages/usersPage/UsersPage";
import CounterPage from "./pages/counterPage/CounterPage";
function App() {
  return (
      <div className="App">
          {/*<MainPage/>*/}
          {/*<UsersPage/>*/}
          <CounterPage/>
      </div>
  );
}

export default App;
