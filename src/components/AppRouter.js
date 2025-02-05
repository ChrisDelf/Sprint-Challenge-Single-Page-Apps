import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import WelcomePage from './WelcomePage';
import LocationsList from './LocationsList';
import EpisodesList from './EpisodesList';
import SearchForm from './SearchForm';
export default function AppRouter() {
  return (
    <div className="page-view ui bottom attached segment active tab">
      <Switch>
        <Route path="/characters" component={CharacterList} />
        <Route path="/locations" component={LocationsList} />

        <Route exact path="/episodes" component={EpisodesList} />
        <Route exact path="/search" component={SearchForm} />

        <Route path="/" component={WelcomePage} />
      </Switch>
    </div>
  );
}
