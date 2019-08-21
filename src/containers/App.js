import React from 'react';
import SearchBar from '../components/SearchBar';
import VideoList from './VideoList';
import VideoDetail from '../components/VideoDetail';
import axios from 'axios';

const API_END_POINT = 'https://api.themoviedb.org/3/';
const POPULAR_MOVIES_URL =
  'discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images';
const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movieList: {}, currentMovie: {} };
  }

  UNSAFE_componentWillMount() {
    this.initMovie();
  }

  initMovie = () => {
    axios
      .get(`${API_END_POINT}${POPULAR_MOVIES_URL}&api_key=${API_KEY}`)
      .then(res => {
        this.setState({
          movieList: res.data.results.slice(1, 6),
          currentMovie: res.data.results[0]
        });
        // console.log(this.state.movieList, this.state.currentMovie);
      });
  };

  render() {
    return (
      <div>
        <SearchBar />
        {this.state.movieList.length <= 5 ? (
          <VideoList movieList={this.state.movieList} />
        ) : (
          ''
        )}
        <VideoDetail
          title={this.state.currentMovie.title}
          description={this.state.currentMovie.overview}
        />
      </div>
    );
  }
}

export default App;
