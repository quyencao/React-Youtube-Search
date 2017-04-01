import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD-V1jxPP1NsEgvV7Lcr-d5sfL7SwnHpHE';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

ReactDOM.render(<App/>, document.querySelector('.container'));
