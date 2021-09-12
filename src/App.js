import Header from "./containers/components/Header";
import  {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ProductList from "./containers/components/ProductList";
import ProductDetail from "./containers/components/ProductDetail";
function App() {
  return (
    <div className="App">
      <Router>
       <Header />
       <Switch>
       <Route path="/" exact component={ProductList}/>
       <Route path="/product/:productId" exact component={ProductDetail}/>
       <Route>404 Not Fount !</Route>
       </Switch>


       </Router>
    </div>
  );
}

export default App;
