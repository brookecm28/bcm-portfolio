import routes from './routes'
import './App.css';
import NavBar from './Components/NavBar'

function App() {
  //  https://bootcamp.rocketacademy.co/7-react/7.6-passing-data-between-sibling-components
  //  try what this article suggests halfway down the page re passing to siblings

  return (
    <div className="App scroll-smooth dark">
      <NavBar />
      {routes}
    </div>
  );
}

export default App;
