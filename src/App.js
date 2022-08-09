import "./App.css";
import { Route, Switch } from "react-router-dom";
import Cadastro from "./pages/cadastro";
import Logado from "./pages/logado";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cadastro">
            <Cadastro />
          </Route>
          <Route exact path="/login/:id">
            <Logado />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
