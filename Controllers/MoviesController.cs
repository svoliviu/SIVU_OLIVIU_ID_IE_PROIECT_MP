using Microsoft.AspNetCore.Mvc;
using SIVU_OLIVIU_ID_IE_PROIECT_MP.Models;
using SIVU_OLIVIU_ID_IE_PROIECT_MP.Repositories;
using SIVU_OLIVIU_ID_IE_PROIECT_MP.ViewModels;
using System;
using System.Collections.Generic;

namespace SIVU_OLIVIU_ID_IE_PROIECT_MP.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MoviesController: ControllerBase
    {
        private readonly IMovieGenreRepository movieGenreRepository;
        private readonly IMovieActorRepository movieActorRepository;
        private readonly IMovieRepository movieRepository;

        public MoviesController(
            IMovieGenreRepository movieGenreRepository,
            IMovieActorRepository movieActorRepository,
            IMovieRepository movieRepository
        ) {
            this.movieGenreRepository = movieGenreRepository;
            this.movieActorRepository = movieActorRepository;
            this.movieRepository = movieRepository;
        }

        [HttpPost]
        public NoContentResult Create([FromBody] MovieViewModel movieViewModel)
        {
            IEnumerable<Actor> actors = movieActorRepository.GetActorsByIds(movieViewModel.Actors);
            IEnumerable<Genre> genres = movieGenreRepository.GetGenresByIds(movieViewModel.Genres);

            Movie movie = new Movie
            {
                Title = movieViewModel.Title,
                Description = movieViewModel.Description,
                ReleaseDate = DateTime.Parse(movieViewModel.ReleaseDate),
                Rating = movieViewModel.Rating,
            };

            foreach (Actor actor in actors) {
                movie.Cast.Add(actor);
            }

            foreach (Genre genre in genres) {
                movie.Genres.Add(genre);
            }

            this.movieRepository.InsertMovie(movie);

            return NoContent();
        }
    }
}
