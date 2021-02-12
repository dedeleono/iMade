import './App.css';
import Layout from './containers/Layout';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path component>Landing</Route>
          <Route path component>404</Route>
          <Route path component>About/Instagram</Route>
          <Route path component>Contact</Route>
          <Route path component>Shop</Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
