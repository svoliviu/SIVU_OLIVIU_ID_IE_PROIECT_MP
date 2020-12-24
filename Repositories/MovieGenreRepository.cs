using SIVU_OLIVIU_ID_IE_PROIECT_MP.Models;
using SIVU_OLIVIU_ID_IE_PROIECT_MP.ViewModels;
using System.Collections.Generic;
using System.Linq;

namespace SIVU_OLIVIU_ID_IE_PROIECT_MP.Repositories
{
    public class MovieGenreRepository : IMovieGenreRepository
    {
        private readonly MoviesContext moviesContext;

        public MovieGenreRepository() {
            this.moviesContext = new MoviesContext();
        }

        public void DeleteGenre(Genre genre)
        {
            this.moviesContext.Genres.Remove(genre);
            this.moviesContext.SaveChanges();
        }

        public Genre GetGenreById(int genreId)
        {
            return this.moviesContext.Genres.First(g => g.Id == genreId);
        }

        public IEnumerable<Genre> GetGenres()
        {
            return this.moviesContext.Genres.ToList();
        }

        public IEnumerable<Genre> GetGenresByIds(IEnumerable<int> ids)
        {
            return this.moviesContext.Genres.Where(g => ids.Contains(g.Id));
        }

        public IEnumerable<Genre> GetGenresByIds()
        {
            throw new System.NotImplementedException();
        }

        public void InsertGenre(Genre genre)
        {
            this.moviesContext.Genres.Add(genre);
            this.moviesContext.SaveChanges();
        }

        public Genre UpdateGenre(int genreId, GenreViewModel genreViewModel)
        {
            Genre genre = this.moviesContext.Genres.First(g => g.Id == genreId);

            genre.Name = genreViewModel.Name;

            this.moviesContext.SaveChanges();

            return genre;
        }
    }
}
