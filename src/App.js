import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import AddUser from "./Components/AddUser"
import DisplayUser from "./Components/DisplayUser"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/add-user" element={<AddUser></AddUser>}></Route>
        <Route path="/" element={<DisplayUser></DisplayUser>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
