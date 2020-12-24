using System;
using System.Collections.Generic;

namespace SIVU_OLIVIU_ID_IE_PROIECT_MP.Models
{
    public class Movie
    {
        public Movie()
        {
            this.Genres = new List<Genre>();
            this.Cast = new List<Actor>();
        }

        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public DateTime ReleaseDate { get; set; }

        public int Rating { get; set; }

        public virtual ICollection<Genre>  Genres { get; set; }

        public virtual ICollection<Actor> Cast { get; set; }

        public Director Director { get; set; }
    }
}
