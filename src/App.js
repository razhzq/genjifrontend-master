import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Gachapon from './pages/Gachapon/Gachapon';
import NewNavbar from './components/NewNavbar';
import GenjiMerch from './pages/GenjiMerch/GenjiMerch';
import TNC from './pages/TNC/Tnc';
import RoadMap from './pages/RoadMap/RoadMap'

function App() {

  

  return (
    <div className="App">
     <Router>
      
       <NewNavbar />
       <Switch>
         <Route path="/" component={Home} exact />
         <Route path="/gachapon" component={Gachapon} exact />
         <Route path="/genjimerch" component={GenjiMerch} exact />
         <Route path="/roadmap" component={RoadMap} exact />
         <Route path="/terms-and-conditions" component={TNC} exact />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
