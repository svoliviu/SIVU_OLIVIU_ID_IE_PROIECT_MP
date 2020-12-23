using SIVU_OLIVIU_ID_IE_PROIECT_MP.Models;
using SIVU_OLIVIU_ID_IE_PROIECT_MP.ViewModels;
using System.Collections.Generic;

namespace SIVU_OLIVIU_ID_IE_PROIECT_MP.Repositories
{
    public interface IMovieDirectorRepository
    {
        IEnumerable<Director> GetDirectors();
        Director GetDirectorById(int directorId);
        void InsertDirector(Director director);
        void DeleteDirector(Director director);
        Director UpdateDirector(int directorId, DirectorViewModel directorViewModel);
        void Save();
    }
}
