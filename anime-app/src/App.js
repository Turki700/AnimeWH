import React from 'react'
import Anime from './components/anime';
import Header from './components/header';
import TrendingA from './components/trendingA';
import TrendingB from './components/trendingM';

function App() {

  return (
    <div className="App">
      <Header />
      <TrendingA />
      <TrendingB />
      <Anime />
    </div>
  );
}

export default App;
