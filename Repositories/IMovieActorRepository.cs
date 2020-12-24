using SIVU_OLIVIU_ID_IE_PROIECT_MP.Models;
using SIVU_OLIVIU_ID_IE_PROIECT_MP.ViewModels;
using System.Collections.Generic;

namespace SIVU_OLIVIU_ID_IE_PROIECT_MP.Repositories
{
    public interface IMovieActorRepository
    {
        IEnumerable<Actor> GetActors();
        IEnumerable<Actor> GetActorsByIds(IEnumerable<int> ids);
        Actor GetActorById(int actorId);
        void InsertActor(Actor actor);
        void DeleteActor(Actor actor);
        Actor UpdateActor(int actorId, ActorViewModel actorViewModel);
    }
}
