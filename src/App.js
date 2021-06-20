import './App.css';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import Navi from './layout/Navi';
import Dashboard from './layout/Dashboard';


function App() {
  return (
    <div className="App">
      <Navi/>
      <Container className="main">
     <Dashboard/>
     </Container>
    </div>
  );
}

export default App;
