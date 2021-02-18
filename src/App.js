import './App.css';
import Layout from './containers/Layout';
import Shop from './components/Shop/Shop';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NotFound from './components/404/NotFound';
import Landing from './components/Landing/Landing';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route component={NotFound}>404</Route>
          <Route path="/landing" component={Landing}>Landing</Route>
          <Route path="/about" component={About}>About/Instagram</Route>
          <Route path="/contact" component={Contact}>Contact</Route>
          <Route path="/" exact component={Shop}>Shop</Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
