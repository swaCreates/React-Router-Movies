import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />

      <Route path='/' component={MovieList} />
      <Route path='/movies/:id' component={Movie} />
      {/* Need to make sure this is correct for step 2 of part 1 */}
    </div>
  );
};

export default App;
