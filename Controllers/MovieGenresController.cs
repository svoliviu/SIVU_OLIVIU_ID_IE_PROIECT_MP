using Microsoft.AspNetCore.Mvc;
using SIVU_OLIVIU_ID_IE_PROIECT_MP.Models;
using SIVU_OLIVIU_ID_IE_PROIECT_MP.Repositories;
using SIVU_OLIVIU_ID_IE_PROIECT_MP.ViewModels;
using System.Collections.Generic;

namespace SIVU_OLIVIU_ID_IE_PROIECT_MP.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieGenresController : ControllerBase
    {
        private readonly IMovieGenreRepository movieGenreRepository;

        public MovieGenresController(IMovieGenreRepository movieGenreRepository) {
            this.movieGenreRepository = movieGenreRepository;
        }

        [HttpGet]
        public IEnumerable<Genre> Index()
        {
            return movieGenreRepository.GetGenres();
        }

        [HttpGet("{id}")]
        public Genre Get(int id)
        {
            return movieGenreRepository.GetGenreById(id);
        }

        [HttpPost]
        public NoContentResult Create([FromBody] GenreViewModel genreViewModel)
        {

            Genre genre = new Genre
            {
                Name = genreViewModel.Name
            };

            movieGenreRepository.InsertGenre(genre);

            return NoContent();
        }

        [HttpPut("{id}")]
        public NoContentResult Update([FromBody] GenreViewModel genreViewModel, int id)
        {
            movieGenreRepository.UpdateGenre(id, genreViewModel);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public OkResult Delete(int id)
        {
            Genre genre = movieGenreRepository.GetGenreById(id);

            movieGenreRepository.DeleteGenre(genre);

            return Ok();
        }
    }
}
