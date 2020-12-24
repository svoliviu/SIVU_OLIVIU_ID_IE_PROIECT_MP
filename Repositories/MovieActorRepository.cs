using SIVU_OLIVIU_ID_IE_PROIECT_MP.Models;
using SIVU_OLIVIU_ID_IE_PROIECT_MP.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SIVU_OLIVIU_ID_IE_PROIECT_MP.Repositories
{
    public class MovieActorRepository : IMovieActorRepository
    {
        private readonly MoviesContext moviesContext;

        public MovieActorRepository() 
        {
            this.moviesContext = new MoviesContext();
        }

        public void DeleteActor(Actor actor)
        {
            this.moviesContext.Actors.Remove(actor);
            this.moviesContext.SaveChanges();
        }

        public Actor GetActorById(int actorId)
        {
            return this.moviesContext.Actors.First(a => a.Id == actorId);
        }

        public IEnumerable<Actor> GetActors()
        {
            return this.moviesContext.Actors.ToList();
        }

        public IEnumerable<Actor> GetActorsByIds(IEnumerable<int> ids)
        {
            return this.moviesContext.Actors.Where(a => ids.Contains(a.Id));
        }

        public void InsertActor(Actor actor)
        {
            this.moviesContext.Actors.Add(actor);
            this.moviesContext.SaveChanges();
        }

        public Actor UpdateActor(int actorId, ActorViewModel actorViewModel)
        {
            Actor actor = this.moviesContext.Actors.First(a => a.Id == actorId);

            actor.FirstName = actorViewModel.FirstName;
            actor.LastName = actorViewModel.LastName;
            actor.Age = actorViewModel.Age;
            actor.Nationality = actorViewModel.Nationality;

            this.moviesContext.SaveChanges();

            return actor;
        }
    }
}
