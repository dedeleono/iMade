/*import './App.css';*/
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
          <Route path="/landing" component={Landing}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/" exact={true} component={Shop}/>
          <Route path="/*" component={NotFound} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
