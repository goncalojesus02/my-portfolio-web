import { Route, Switch } from "wouter";
import PreHome from "./components/PreHome";
import HomePage from "./components/HomePage";



function App() {
  return (
    <Switch>
      <Route path="/" component={PreHome} />
      <Route path="/arquive/project/:id" component={HomePage} />
    </Switch>
  );
}

export default App;
