using SIVU_OLIVIU_ID_IE_PROIECT_MP.Models;
using SIVU_OLIVIU_ID_IE_PROIECT_MP.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SIVU_OLIVIU_ID_IE_PROIECT_MP.Repositories
{
    public class MovieDirectorRepository : IMovieDirectorRepository
    {
        private readonly MoviesContext moviesContext;
        public MovieDirectorRepository() {
            this.moviesContext = new MoviesContext();
        }

        public void DeleteDirector(Director director)
        {
            moviesContext.Directors.Remove(director);
            moviesContext.SaveChanges();
        }

        public Director GetDirectorById(int directorId)
        {
            return moviesContext.Directors.First(d => d.Id == directorId);
        }

        public IEnumerable<Director> GetDirectors()
        {
            return moviesContext.Directors.ToList();
        }

        public void InsertDirector(Director director)
        {
            moviesContext.Directors.Add(director);
            moviesContext.SaveChanges();
        }

        public void Save()
        {
            throw new NotImplementedException();
        }

        public Director UpdateDirector(int directorId, DirectorViewModel directorViewModel)
        {
            Director director = moviesContext.Directors.First(d => d.Id == directorId);

            director.FirstName = directorViewModel.FirstName;
            director.LastName = directorViewModel.LastName;
            director.Age = directorViewModel.Age;

            moviesContext.SaveChanges();

            return director;
        }
    }
}
