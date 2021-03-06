import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import YtDownloader from './Pages/ytDownloader';
import RequestTools from './Pages/requestTools';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/yt' component={YtDownloader}/>
        <Route path='/request' component={RequestTools}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
