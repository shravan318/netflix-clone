const APIkey ="401d6343c3ba69f553beb8a29a71978e"

const requests = {
    fetchNetflixOriginals: `/discover/tv?api_key=${APIkey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_networks=213&include_null_first_air_dates=false` ,
    fetchNetflixTopAction: `/discover/tv?api_key=${APIkey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10759&with_networks=213&include_null_first_air_dates=false` ,
    fetchNetflixTopComedy: `/discover/tv?api_key=${APIkey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=35&with_networks=213&include_null_first_air_dates=false` ,
    fetchNetflixTopCrime: `/discover/tv?api_key=${APIkey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=80&with_networks=213&include_null_first_air_dates=false` ,
    fetchNetflixTopDrama: `/discover/tv?api_key=${APIkey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=18&with_networks=213&include_null_first_air_dates=false` ,
    fetchNetflixTopFamily: `/discover/tv?api_key=${APIkey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10751&with_networks=213&include_null_first_air_dates=false` ,
    fetchNetflixTopAnimation: `/discover/tv?api_key=${APIkey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=16&with_networks=213&include_null_first_air_dates=false` ,
    fetchNetflixTopKids: `/discover/tv?api_key=${APIkey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10762&with_networks=213&include_null_first_air_dates=false` ,
    fetchNetflixTopMystery: `/discover/tv?api_key=${APIkey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=9648&with_networks=213&include_null_first_air_dates=false` ,
    fetchNetflixTopSciFi: `/discover/tv?api_key=${APIkey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10765&with_networks=213&include_null_first_air_dates=false` ,
    fetchNetflixTopSoap: `/discover/tv?api_key=${APIkey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10766&with_networks=213&include_null_first_air_dates=false` ,
    fetchNetflixTopTalk: `/discover/tv?api_key=${APIkey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10767&with_networks=213&include_null_first_air_dates=false` ,
    fetchNetflixTopWar: `/discover/tv?api_key=${APIkey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10768&with_networks=213&include_null_first_air_dates=false` ,
    fetchNetflixTopWestern: `/discover/tv?api_key=${APIkey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=37&with_networks=213&include_null_first_air_dates=false` ,
}
export default requests