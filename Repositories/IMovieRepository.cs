using SIVU_OLIVIU_ID_IE_PROIECT_MP.Models;
using SIVU_OLIVIU_ID_IE_PROIECT_MP.ViewModels;
using System.Collections.Generic;

namespace SIVU_OLIVIU_ID_IE_PROIECT_MP.Repositories
{
    public interface IMovieRepository
    {
        IEnumerable<Movie> GetMovies();
        Movie GetMovieById(int movieId);
        void InsertMovie(Movie movie);
        void DeleteMovie(Movie movie);
        Movie UpdateMovie(int movieId, MovieViewModel movieViewModel);
    }
}
