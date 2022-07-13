import './App.css'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Main from './components/main/Main'


function App() {
  return (
    <div className="App">
      <Header />
      <div className='content_wrap'>
          <Nav />
          <Main />
      </div>
    </div>
  );
}

export default App;
