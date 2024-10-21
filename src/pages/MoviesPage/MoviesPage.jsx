import css from "./MoviePage.module.css";
import { ErrorMessage, Field, Form, Formik } from "Formik";

import { useState } from "react";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  return (
    <div>
      <div className={css.searchBar}>
        <Formik
        /* initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={SearchMovies} */
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
