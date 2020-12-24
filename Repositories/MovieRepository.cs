using SIVU_OLIVIU_ID_IE_PROIECT_MP.Models;
using SIVU_OLIVIU_ID_IE_PROIECT_MP.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SIVU_OLIVIU_ID_IE_PROIECT_MP.Repositories
{
    public class MovieRepository : IMovieRepository
    {
        private readonly MoviesContext moviesContext;

        public MovieRepository()
        {
            this.moviesContext = new MoviesContext();
        }

        public void DeleteMovie(Movie movie)
        {
            this.moviesContext.Movies.Remove(movie);
            this.moviesContext.SaveChanges();
        }

        public Movie GetMovieById(int movieId)
        {
            return this.moviesContext.Movies.First(m => m.Id == movieId);
        }

        public IEnumerable<Movie> GetMovies()
        {
            return this.moviesContext.Movies.ToList();
        }

        public void InsertMovie(Movie movie)
        {
            this.moviesContext.Movies.Add(movie);
            this.moviesContext.SaveChanges();
        }

        public Movie UpdateMovie(int movieId, MovieViewModel movieViewModel)
        {
            Movie movie = moviesContext.Movies.First(m => m.Id == movieId);

            IEnumerable<Genre> genres = moviesContext.Genres.Where(g => movieViewModel.Genres.Contains(g.Id));
            IEnumerable<Actor> actors = moviesContext.Actors.Where(a => movieViewModel.Actors.Contains(a.Id));

            movie.Title = movieViewModel.Title;
            movie.Description = movieViewModel.Description;
            movie.ReleaseDate = new DateTime();
            movie.Genres.Clear();
            movie.Cast.Clear();

            foreach (Genre genre in genres) {
                movie.Genres.Add(genre);
            }

            foreach (Actor actor in actors) {
                movie.Cast.Add(actor);
            }

            moviesContext.SaveChanges();

            return movie;
        }
    }
}
