import axios from "axios";

const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjJiZjJmNzkxZjkwYTc1MzZhYTYyZDViZTc4OWZiZiIsIm5iZiI6MTcyOTI0MTEyMC4xMDIxOTMsInN1YiI6IjY3MTIxY2Y2OThmNmE3NThjZDU0OWVhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JJRqp9v1b3uN28PZR1a4dcwpPfTvm4mWev5QtQwWcXM",
  },
};

export const fetchTrendingMovies = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const response = await axios.get(url, options);

  return response.data.results;
};

export const fetchMoviesDetails = async (moviesId) => {
  const url = `https://api.themoviedb.org/3/movie/${moviesId}`;
  const response = await axios.get(url, options);

  return response.data;
};

export const fetchMoviesCredits = async (moviesId) => {
  const url = `https://api.themoviedb.org/3/movie/${moviesId}/credits`;
  const response = await axios.get(url, options);

  return response.data;
};

export const fetchMoviesReviews = async (moviesId) => {
  const url = `https://api.themoviedb.org/3/movie/${moviesId}/reviews`;
  const response = await axios.get(url, options);

  return response.data;
};

export const fetchSearchMovies = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&page=1`;
  const response = await axios.get(url, options);

  return response.data;
};
