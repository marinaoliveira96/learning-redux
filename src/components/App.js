import { HashRouter as Router, Route } from 'react-router-dom';

import Home from '../routes/Home';
import Details from '../routes/Details';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
      <Route path="/:id" exact component={Details}></Route>
    </Router>
  );
}

export default App;
