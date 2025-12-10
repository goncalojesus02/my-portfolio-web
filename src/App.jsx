import { Route, Switch } from "wouter";
import HomePage from "./components/HomePage";
import SplitPage from "./components/SplitPage";
import ProjectView from "./components/ProjectView";

function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/arquive/project/:id" component={SplitPage} />
    </Switch>
  );
}

export default App;
