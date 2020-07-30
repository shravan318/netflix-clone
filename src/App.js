import React from 'react';
import './App.css';
import Row from "./Row"
import requests from "./requests";

function App() {
  return (
       <div className="App__container">
         <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isVertical={true} />
         <Row title="Crime - Top Rated" fetchUrl={requests.fetchNetflixTopCrime} />
         <Row title="Action - Top Rated" fetchUrl={requests.fetchNetflixTopAction} />
         <Row title="Comedy - Top Rated" fetchUrl={requests.fetchNetflixTopComedy} />
         <Row title="Drama - Top Rated" fetchUrl={requests.fetchNetflixTopDrama} />
         <Row title="Family - Top Rated" fetchUrl={requests.fetchNetflixTopFamily} />
         <Row title="Animation - Top Rated" fetchUrl={requests.fetchNetflixTopAnimation} />
         <Row title="Kids - Top Rated" fetchUrl={requests.fetchNetflixTopKids} />
         <Row title="Mystery - Top Rated" fetchUrl={requests.fetchNetflixTopMystery} />
         <Row title="Sci-fi - Top Rated" fetchUrl={requests.fetchNetflixTopSciFi} />
         <Row title="Soap - Top Rated" fetchUrl={requests.fetchNetflixTopSoap} />
         <Row title="Talk - Top Rated" fetchUrl={requests.fetchNetflixTopTalk} />
         <Row title="War - Top Rated" fetchUrl={requests.fetchNetflixTopWar} />
         <Row title="Western - Top Rated" fetchUrl={requests.fetchNetflixTopWestern} />
       </div>     
  );
}

export default App;
