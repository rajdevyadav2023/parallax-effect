
import './App.css';
import ImageOne from './components/ImageOne'
import ImageThree from './components/ImageThree';
import ImageTwo from './components/ImageTwo';
import TextBox from './components/TextBox';
function App() {
  return (
    <div className="App">
      <TextBox />
      <ImageOne />
      <TextBox />
      <ImageTwo />
      <TextBox />
      <ImageThree />
      <TextBox />
    </div>
  );
}

export default App;
