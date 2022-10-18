import './App.css';
import Nav from './components/Nav';
import Reviews from './components/Reviews';
import Average from './components/Average';
import Sentiment from './components/Sentiment';
import Visitors from './components/Visitors';

function App() {
  return (
    <div id='dashboard'>
      <Nav/>
      <div id='right'>
        <div id='top'>
          <Reviews />
          <Average />
          <Sentiment />
        </div>
        <Visitors/>
      </div>
    </div>
  );
}

export default App;
