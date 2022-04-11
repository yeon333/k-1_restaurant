//import logo from './logo.svg';
import './App.css';
//import './Map';
function App() {
  return (
    <div className="App">
      <div className="orange-nav">
        <div>K-1 슐랭</div>
      </div>
      <span className="title" >K-1 chelin</span>
      <div class="search-container">
        <input class="search-bar" type="text" placeholder="식당/지역" />
        <button id="search">검색</button>
      </div>
    </div>
  );
}

export default App;
