
import './App.css';
import MemoPage from './memo/MemoPage';

function App() {
  return (
    <div className="App">
      <h1 className="bg-primary text-white display-4">What is a new vocabulary??</h1>
      <h1 className="mt-5">What's this site??</h1>
      <div className="container bg-light mt-5">
        <MemoPage />
      </div>
    </div>
  );
}

export default App;
