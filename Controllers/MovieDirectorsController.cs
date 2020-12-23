using Microsoft.AspNetCore.Mvc;
using SIVU_OLIVIU_ID_IE_PROIECT_MP.Models;
using SIVU_OLIVIU_ID_IE_PROIECT_MP.Repositories;
using SIVU_OLIVIU_ID_IE_PROIECT_MP.ViewModels;
using System.Collections.Generic;

namespace SIVU_OLIVIU_ID_IE_PROIECT_MP.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieDirectorsController: ControllerBase
    {
        private readonly IMovieDirectorRepository movieDirectorRepository;
        public MovieDirectorsController(IMovieDirectorRepository movieDirectorRepository) {
            this.movieDirectorRepository = movieDirectorRepository;
        }

        [HttpGet("Index")]
        public IEnumerable<Director> Index()
        {
            return this.movieDirectorRepository.GetDirectors();
        }

        [HttpGet("One/{id}")]
        public Director GetOne(int id) {
            return this.movieDirectorRepository.GetDirectorById(id);
        }

        [HttpPost("Create")]
        public NoContentResult Create([FromBody] DirectorViewModel directorViewModel) {

            Director director = new Director();
            director.FirstName = directorViewModel.FirstName;
            director.LastName = directorViewModel.LastName;
            director.Age = directorViewModel.Age;

            this.movieDirectorRepository.InsertDirector(director);

            return NoContent();
        }

        [HttpPut("One/{id}")]
        public Director Update([FromBody] DirectorViewModel directorViewModel, int id) {

            Director updatedDirector = this.movieDirectorRepository.UpdateDirector(id, directorViewModel);

            return updatedDirector;
        }

        [HttpDelete("One/{id}")]
        public OkResult Delete(int id) {
            Director director = this.movieDirectorRepository.GetDirectorById(id);

            this.movieDirectorRepository.DeleteDirector(director);

            return Ok();
        }
    }
}
