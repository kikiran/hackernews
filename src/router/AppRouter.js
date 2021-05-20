import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ShowStories from '../components/ShowStories';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="container">
      <h1>Hacker News Stories</h1>
      <Switch>
          <Route path="/" render={() => <Redirect to="/top" />} exact={true} />
          <Route
            path="/:type"
            render={({ match }) => {
              const { type } = match.params;
              if (!['top', 'new', 'best'].includes(type)) {
                return <Redirect to="/" />;
              }
              return <ShowStories type={type} />;
            }}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
