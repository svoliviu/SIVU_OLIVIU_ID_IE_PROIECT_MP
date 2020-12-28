using Microsoft.AspNetCore.Mvc;
using SIVU_OLIVIU_ID_IE_PROIECT_MP.Models;
using SIVU_OLIVIU_ID_IE_PROIECT_MP.Repositories;
using SIVU_OLIVIU_ID_IE_PROIECT_MP.ViewModels;
using System.Collections.Generic;

namespace SIVU_OLIVIU_ID_IE_PROIECT_MP.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieActorsController : ControllerBase
    {
        private readonly IMovieActorRepository movieActorRepository;

        public MovieActorsController(IMovieActorRepository movieActorRepository) {
            this.movieActorRepository = movieActorRepository;
        }

        [HttpGet]
        public IEnumerable<Actor> Index() {
            return movieActorRepository.GetActors();
        }

        [HttpGet("{id}")]
        public Actor Get(int id) {
            return movieActorRepository.GetActorById(id);
        }

        [HttpPost]
        public NoContentResult Create([FromBody] ActorViewModel actorViewModel) {

            Actor actor = new Actor
            {
                Name = actorViewModel.Name,
                Age = actorViewModel.Age,
                Nationality = actorViewModel.Nationality
            };

            movieActorRepository.InsertActor(actor);

            return NoContent();
        }

        [HttpPut("{id}")]
        public NoContentResult Update([FromBody] ActorViewModel actorViewModel, int id) {
            movieActorRepository.UpdateActor(id, actorViewModel);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public OkResult Delete(int id) {
            Actor actor = movieActorRepository.GetActorById(id);

            movieActorRepository.DeleteActor(actor);

            return Ok();
        }
    }
}
