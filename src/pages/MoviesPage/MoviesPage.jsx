import css from "./MoviePage.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";
// import { lazy } from "react";

import { fetchSearchMovies } from "../Services/Api.jsx";

const SearchMovies = Yup.object().shape({
  searchTerm: Yup.string()
    .min(2, "Too Short! Min 2 symbols.")
    .max(50, "Too Long! Max 50 symbols.")
    .required("Required! Enter any word..."),
});

const initialValues = {
  searchTerm: "",
};

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query");

  useEffect(() => {
    if (query === null) return;
    const searchMoviesBySearchValue = async () => {
      const data = await fetchSearchMovies(query);
      setMovies(data.results);
    };
    searchMoviesBySearchValue();
  }, [query]);

  const handleSubmit = (values, actions) => {
    setSearchParams({ query: values.searchTerm });
    actions.resetForm();
  };

  return (
    <div>
      <div className={css.searchBar}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={SearchMovies}
        >
          <Form>
            <label className={css.formLabel}>
              <Field
                className={css.searchInput}
                type="text"
                name="searchTerm"
                placeholder="Search movies"
              />
            </label>
            <button className={css.searchBtn} type="submit">
              Search
            </button>
            <br />
            <ErrorMessage
              className={css.formErrorMessage}
              name="searchTerm"
              component="span"
            />
          </Form>
        </Formik>
      </div>
      {/* <div>
        <ul className={css.moviesList}>
          <MovieList trendingMovies={movies} />
        </ul>
      </div> */}
    </div>
  );
};

export default MoviesPage;
