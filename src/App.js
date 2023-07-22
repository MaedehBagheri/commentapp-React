
import {BrowserRouter,Route,Switch} from "react-router-dom"
import "./App.css";
import routes from "./routes";
import Layout from "./Layout/Layout";

function App() {
  return (
 <BrowserRouter>
    <div className="App">
      <Layout>
        <Switch>
          {routes.map((route) => (
            <Route {...route} />
          ))}
        </Switch>
      </Layout>
    </div>
 </BrowserRouter>
  );
}

export default App;
