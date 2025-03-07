import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import Trainer from './pages/trainer/Trainer';
import Questions from './questions/Questions';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/auth'>
          <AuthPage />
        </Route>
        <Route path='/profile'>
          <UserProfile />
        </Route>
        <Route path='/trainee'>
          <Questions />
        </Route>
        <Route path='/trainer'>
          <Trainer />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
