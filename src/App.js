import "./App.css";
import Video from "./Components/Video"
// Destructuring Way mein import Krna hai
// import {Video,Thumbnail} from './Components/Video'

function App() {
  return (
    <div className="App">
      <div className="App-header">Hello World
        <Video title="React JS"/>
        <Video title="Node JS"/>
        {/* <Thumbnail/> */}
      </div>
    </div>
  );
  
}

export default App;
