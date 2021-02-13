import routes from './routes'
import './App.css';
import NavBar from './Components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      {routes}
    </div>
  );
}

export default App;
