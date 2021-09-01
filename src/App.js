import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddCafe from "./pages/addList.js";
import ViewList from "./pages/viewList.js";
import Navbar from "./components/navBar";

function App() {
  return (
    <div className="App">
      {/* <AddCafe /> */}
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={AddCafe} exact />
          <Route path="/cafes" component={ViewList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
