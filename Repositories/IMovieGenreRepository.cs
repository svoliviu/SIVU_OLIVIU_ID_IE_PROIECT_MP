using SIVU_OLIVIU_ID_IE_PROIECT_MP.Models;
using SIVU_OLIVIU_ID_IE_PROIECT_MP.ViewModels;
using System.Collections.Generic;

namespace SIVU_OLIVIU_ID_IE_PROIECT_MP.Repositories
{
    public interface IMovieGenreRepository
    {
        IEnumerable<Genre> GetGenres();
        IEnumerable<Genre> GetGenresByIds(IEnumerable<int> ids);
        IEnumerable<Genre> GetGenresByIds();
        Genre GetGenreById(int genreId);
        void InsertGenre(Genre genre);
        void DeleteGenre(Genre genre);
        Genre UpdateGenre(int genreId, GenreViewModel genreViewModel);
    }
}
