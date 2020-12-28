using Microsoft.AspNetCore.Mvc;
using SIVU_OLIVIU_ID_IE_PROIECT_MP.Models;
using SIVU_OLIVIU_ID_IE_PROIECT_MP.Repositories;
using SIVU_OLIVIU_ID_IE_PROIECT_MP.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SIVU_OLIVIU_ID_IE_PROIECT_MP.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MoviesController : ControllerBase
    {
        private readonly MoviesContext moviesContext;

        public MoviesController() {
            this.moviesContext = new MoviesContext();
        }

        [HttpGet]
        public List<MovieResponseViewModel> Index() {
            IEnumerable<Movie> movies = moviesContext.Movies.ToList();

            List<MovieResponseViewModel> response = new List<MovieResponseViewModel>();
            List<string> cast = new List<string>();
            List<string> genres = new List<string>();

            foreach (Movie movie in movies) {
                System.Console.Write(movie);
                MovieResponseViewModel movieResponseViewModel = new MovieResponseViewModel();

                movieResponseViewModel.Id = movie.Id;
                movieResponseViewModel.Title = movie.Title;
                movieResponseViewModel.Description = movie.Description;
                movieResponseViewModel.ReleaseDate = movie.ReleaseDate.ToString();
                movieResponseViewModel.Rating = movie.Rating;
                movieResponseViewModel.Director = movie.Director.Name;

                foreach (Actor actor in movie.Cast) {
                    cast.Add(actor.Name);
                }

                foreach (Genre genre in movie.Genres) {
                    genres.Add(genre.Name);
                }

                movieResponseViewModel.Cast = cast;
                movieResponseViewModel.Genres = genres;

                response.Add(movieResponseViewModel);

                cast = new List<string>();
                genres = new List<string>();
            }

            return response;
        }

        [HttpPost]
        public NoContentResult Create([FromBody] MovieViewModel movieViewModel)
        {
            MoviesContext context = new MoviesContext();

            IEnumerable<Actor> actors = moviesContext.Actors.Where(a => movieViewModel.Actors.Contains(a.Id));
            IEnumerable<Genre> genres = moviesContext.Genres.Where(g => movieViewModel.Genres.Contains(g.Id));

            Director director = context.Directors.First(d => d.Name == movieViewModel.Director);

            Movie movie = new Movie
            {
                Title = movieViewModel.Title,
                Description = movieViewModel.Description,
                ReleaseDate = DateTime.Parse(movieViewModel.ReleaseDate),
                Rating = movieViewModel.Rating,
                Director = director
            };

            foreach (Actor actor in actors) {
                movie.Cast.Add(actor);
                context.Actors.Attach(actor);
            }

            foreach (Genre genre in genres) {
                movie.Genres.Add(genre);
                context.Genres.Attach(genre);
            }

            context.Movies.Add(movie);
            context.SaveChanges();

            return NoContent();
        }
    }
}
